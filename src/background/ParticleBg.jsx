import React, { useEffect, useRef, useState, useCallback } from "react";

export default function FloatingParticlesBackground({
  particleDensity = 0.00012, // particles per pixel² (adjustable)
  minParticles = 20, // minimum number of particles
  maxParticles = 200, // maximum number of particles
  particleSize = 2,
  particleOpacity = 0.6,
  glowIntensity = 10,
  movementSpeed = 0.2,
  mouseInfluence = 120,
  backgroundColor = "#000000",
  particleColor = "#FFFFFF",
  mouseGravity = "attract", // "none", "attract", "repel"
  gravityStrength = 80,
  maxReactiveParticles = 8,
  glowAnimation = "ease", // "instant", "ease", "spring"
  particleInteraction = false,
  interactionType = "bounce", // "bounce", "merge"
  className = "",
  style = {}
  , pointerTargetRef = null
}) {
  const canvasRef = useRef(null);
  const animationRef = useRef();
  const mouseRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef([]);
  const [canvasSize, setCanvasSize] = useState({ width: 800, height: 600 });
  const containerRef = useRef(null);

  // Calculate particle count based on area
  const calculateParticleCount = useCallback((width, height) => {
    const area = width * height;
    const idealCount = Math.round(area * particleDensity);
    const finalCount = Math.max(minParticles, Math.min(maxParticles, idealCount));
    return finalCount;
  }, [particleDensity, minParticles, maxParticles]);

  const initializeParticles = useCallback((width, height) => {
    const count = calculateParticleCount(width, height);
  // (calculated particle count tracked internally; no state update needed)
    
    return Array.from({ length: count }, (_, index) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * movementSpeed,
      vy: (Math.random() - 0.5) * movementSpeed,
      size: Math.random() * particleSize + 1,
      opacity: particleOpacity,
      baseOpacity: particleOpacity,
      mass: Math.random() * 0.5 + 0.5,
      id: index,
      glowMultiplier: 1,
      glowVelocity: 0
    }));
  }, [calculateParticleCount, particleSize, particleOpacity, movementSpeed]);

  const redistributeParticles = useCallback((width, height) => {
    const newCount = calculateParticleCount(width, height);
    
    // If we need more particles, add them
    if (newCount > particlesRef.current.length) {
      const additionalParticles = newCount - particlesRef.current.length;
      for (let i = 0; i < additionalParticles; i++) {
        particlesRef.current.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * movementSpeed,
          vy: (Math.random() - 0.5) * movementSpeed,
          size: Math.random() * particleSize + 1,
          opacity: particleOpacity,
          baseOpacity: particleOpacity,
          mass: Math.random() * 0.5 + 0.5,
          id: particlesRef.current.length + i,
          glowMultiplier: 1,
          glowVelocity: 0
        });
      }
    } 
    // If we have too many particles, remove some
    else if (newCount < particlesRef.current.length) {
      particlesRef.current = particlesRef.current.slice(0, newCount);
    }
    
    // Redistribute existing particles across the new dimensions
    particlesRef.current.forEach(particle => {
      particle.x = Math.random() * width;
      particle.y = Math.random() * height;
    });
    
  // (no state update needed for particle count)
  }, [calculateParticleCount, movementSpeed, particleSize, particleOpacity]);

  const updateParticles = useCallback(canvas => {
    const rect = canvas.getBoundingClientRect();
    const mouse = mouseRef.current;

    // Calculate distances to mouse for all particles and find closest ones
    const particleDistances = particlesRef.current.map((particle, index) => {
      const dx = mouse.x - particle.x;
      const dy = mouse.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      return { index, distance, particle };
    });

    // Sort by distance and get only the closest particles within influence range
    const closestParticles = particleDistances
      .filter(item => item.distance < mouseInfluence)
      .sort((a, b) => a.distance - b.distance)
      .slice(0, maxReactiveParticles);

    const reactiveParticleIndices = new Set(closestParticles.map(item => item.index));

    particlesRef.current.forEach((particle, index) => {
      const dx = mouse.x - particle.x;
      const dy = mouse.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Only apply mouse effects to closest particles
      if (reactiveParticleIndices.has(index) && distance > 0) {
        const force = (mouseInfluence - distance) / mouseInfluence;
        const normalizedDx = dx / distance;
        const normalizedDy = dy / distance;
        const gravityForce = force * (gravityStrength * 0.003); // Reduced from 0.008 to 0.003

        // Apply gravity effect based on mouseGravity setting
        if (mouseGravity === "attract") {
          particle.vx += normalizedDx * gravityForce;
          particle.vy += normalizedDy * gravityForce;
        } else if (mouseGravity === "repel") {
          particle.vx -= normalizedDx * gravityForce;
          particle.vy -= normalizedDy * gravityForce;
        }

        particle.opacity = Math.min(1, particle.baseOpacity + force * 0.4); // Reduced from 0.8 to 0.4

        // Apply glow animation based on type
        const targetGlow = 1 + force * 2.5; // Reduced from 5 to 2.5
        const currentGlow = particle.glowMultiplier || 1;

        if (glowAnimation === "instant") {
          particle.glowMultiplier = targetGlow;
        } else if (glowAnimation === "ease") {
          const easeSpeed = 0.25; // Slightly reduced from 0.35 to 0.25
          particle.glowMultiplier = currentGlow + (targetGlow - currentGlow) * easeSpeed;
        } else if (glowAnimation === "spring") {
          const springForce = (targetGlow - currentGlow) * 0.3; // Reduced from 0.5 to 0.3
          const damping = 0.8; // Increased from 0.75 to 0.8 for less bounce
          particle.glowVelocity = (particle.glowVelocity || 0) * damping + springForce;
          particle.glowMultiplier = currentGlow + particle.glowVelocity;
        }
      } else {
        particle.opacity = Math.max(particle.baseOpacity * 0.3, particle.opacity - 0.03); // Slightly slower fade

        // Return glow to normal based on animation type
        const targetGlow = 1;
        const currentGlow = particle.glowMultiplier || 1;

        if (glowAnimation === "instant") {
          particle.glowMultiplier = targetGlow;
        } else if (glowAnimation === "ease") {
          const easeSpeed = 0.15; // Reduced from 0.2 to 0.15
          particle.glowMultiplier = Math.max(1, currentGlow + (targetGlow - currentGlow) * easeSpeed);
        } else if (glowAnimation === "spring") {
          const springForce = (targetGlow - currentGlow) * 0.2; // Reduced from 0.3 to 0.2
          const damping = 0.9; // Increased from 0.85 to 0.9
          particle.glowVelocity = (particle.glowVelocity || 0) * damping + springForce;
          particle.glowMultiplier = Math.max(1, currentGlow + particle.glowVelocity);
        }
      }

      // Particle interaction
      if (particleInteraction) {
        for (let j = index + 1; j < particlesRef.current.length; j++) {
          const other = particlesRef.current[j];
          const dx = other.x - particle.x;
          const dy = other.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const minDistance = particle.size + other.size + 5;

          if (distance < minDistance && distance > 0) {
            if (interactionType === "bounce") {
              // Elastic collision
              const normalX = dx / distance;
              const normalY = dy / distance;
              
              const relativeVx = particle.vx - other.vx;
              const relativeVy = particle.vy - other.vy;
              
              const speed = relativeVx * normalX + relativeVy * normalY;
              
              if (speed < 0) return;
              
              const impulse = 2 * speed / (particle.mass + other.mass);
              
              particle.vx -= impulse * other.mass * normalX;
              particle.vy -= impulse * other.mass * normalY;
              other.vx += impulse * particle.mass * normalX;
              other.vy += impulse * particle.mass * normalY;
              
              const overlap = minDistance - distance;
              const separationX = normalX * overlap * 0.5;
              const separationY = normalY * overlap * 0.5;
              
              particle.x -= separationX;
              particle.y -= separationY;
              other.x += separationX;
              other.y += separationY;
            } else if (interactionType === "merge") {
              const mergeForce = (minDistance - distance) / minDistance;
              particle.glowMultiplier = (particle.glowMultiplier || 1) + mergeForce * 0.5;
              other.glowMultiplier = (other.glowMultiplier || 1) + mergeForce * 0.5;
              
              const attractForce = mergeForce * 0.01;
              particle.vx += dx * attractForce;
              particle.vy += dy * attractForce;
              other.vx -= dx * attractForce;
              other.vy -= dy * attractForce;
            }
          }
        }
      }

      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Add subtle random movement
      particle.vx += (Math.random() - 0.5) * 0.0005; // Reduced for slower floating
      particle.vy += (Math.random() - 0.5) * 0.0005;

      // Damping - increased for slower movement
      particle.vx *= 0.998; // Increased from 0.995 to 0.998
      particle.vy *= 0.998;

      // Boundary wrapping
      if (particle.x < 0) particle.x = rect.width;
      if (particle.x > rect.width) particle.x = 0;
      if (particle.y < 0) particle.y = rect.height;
      if (particle.y > rect.height) particle.y = 0;
    });
  }, [mouseInfluence, mouseGravity, gravityStrength, glowAnimation, particleInteraction, interactionType, maxReactiveParticles]);

  const drawParticles = useCallback(ctx => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    particlesRef.current.forEach(particle => {
      ctx.save();

      // Create glow effect with enhanced blur based on interaction
      const currentGlowMultiplier = particle.glowMultiplier || 1;
      ctx.shadowColor = particleColor;
      ctx.shadowBlur = glowIntensity * currentGlowMultiplier * 2;
      ctx.globalAlpha = particle.opacity;
      ctx.fillStyle = particleColor;

      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    });
  }, [particleColor, glowIntensity]);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    updateParticles(canvas);
    drawParticles(ctx);

    animationRef.current = requestAnimationFrame(animate);
  }, [updateParticles, drawParticles]);

  const handleMouseMove = useCallback(e => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  }, []);

  const handleTouchMove = useCallback(e => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    e.preventDefault();
    const rect = canvas.getBoundingClientRect();
    const touch = e.touches[0];
    if (touch) {
      mouseRef.current = {
        x: touch.clientX - rect.left,
        y: touch.clientY - rect.top
      };
    }
  }, []);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const rect = container.getBoundingClientRect();
    const newWidth = rect.width;
    const newHeight = rect.height;

    canvas.width = newWidth;
    canvas.height = newHeight;

    setCanvasSize({ width: newWidth, height: newHeight });

    if (particlesRef.current.length > 0) {
      redistributeParticles(newWidth, newHeight);
    }
  }, [redistributeParticles]);

  // Effect to reinitialize particles when density or constraints change
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    particlesRef.current = initializeParticles(
      canvas.width || canvasSize.width,
      canvas.height || canvasSize.height
    );
  }, [particleDensity, minParticles, maxParticles, initializeParticles, canvasSize]);

  // Effect to update particle properties when they change
  useEffect(() => {
    particlesRef.current.forEach(particle => {
      particle.baseOpacity = particleOpacity;
      particle.opacity = particleOpacity;

      // Update velocity based on new movement speed
      const currentSpeed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
      if (currentSpeed > 0) {
        const ratio = movementSpeed / currentSpeed;
        particle.vx *= ratio;
        particle.vy *= ratio;
      }
    });
  }, [particleOpacity, movementSpeed]);

  useEffect(() => {
    resizeCanvas();


    // choose a target to listen for pointer events: provided parent ref (e.g., section) or window fallback
    const pointerTarget = (pointerTargetRef && pointerTargetRef.current) || window;

    if (pointerTarget) {
      pointerTarget.addEventListener("mousemove", handleMouseMove);
      pointerTarget.addEventListener("touchmove", handleTouchMove, { passive: false });
    }

    window.addEventListener("resize", resizeCanvas);

    // Set up ResizeObserver for container
    let resizeObserver;
    if (containerRef.current && typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(() => {
        resizeCanvas();
      });
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      if (pointerTarget) {
        pointerTarget.removeEventListener("mousemove", handleMouseMove);
        pointerTarget.removeEventListener("touchmove", handleTouchMove);
      }
      window.removeEventListener("resize", resizeCanvas);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [handleMouseMove, handleTouchMove, resizeCanvas, pointerTargetRef]);

  useEffect(() => {
    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        width: "100%",
        height: "100%",
        backgroundColor,
        overflow: "hidden",
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
        pointerEvents: 'none',
        ...style
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          display: "block"
        }}
      />
    </div>
  );
}