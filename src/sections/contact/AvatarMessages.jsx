import styles from './avatar.module.css';
import Typewriter from 'typewriter-effect';
import { useState, useEffect, useRef } from 'react';

export default function AvatarMessage() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    // Check if the IntersectionObserver API is available
    if (typeof IntersectionObserver !== 'undefined') {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Stop observing once the component is visible
            observer.unobserve(containerRef.current);
          }
        },
        {
          root: null, // Use the viewport as the root
          threshold: 0.1, // Trigger when 10% of the element is visible
        }
      );

      // Start observing the container element
      if (containerRef.current) {
        observer.observe(containerRef.current);
      }

      // Cleanup function to disconnect the observer
      return () => {
        if (containerRef.current) {
          observer.disconnect();
        }
      };
    }
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div ref={containerRef} className={styles.avatarContainer}>
      <div className={styles.message}>
        <div className={styles.avatarBannerContainer}>
          <div className={styles.actualMessageText}>
            {isVisible && (
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString('Hey there! Glad you stopped by. Hope you\'re having a wonderful day.')
                    .callFunction(() => {})
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString('Let\'s create something awesome together. Get in contact with me!')
                    .callFunction(() => {})
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString('Come on! Don\'t hesitate to get in contact')
                    .callFunction(() => {})
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString('Oh boy is it tough having a one-sided conversation through my avatar')
                    .callFunction(() => {})
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString("Anyways! it was a pleasure meeting you. Hope to see you again soon…Hopefully it will be in-person")
                    .callFunction(() => {})
                    .start();
                }}
              />
            )}
          </div>
        </div>

        <div className={styles.bannerHandle}>
          <div>|</div>
          <div>|</div>
          <div>|</div>
          <div>|</div>
          <div>|</div>
          <div>|</div>
        </div>
      </div>
      <div classname={`${styles.thatsMeAndAvatar}`} id={'thatsMeAndAvatar'} >
        <span className={styles.thatsMe}>That's Me {'--------⟩'}</span>
        <span className={styles.avatarGuy}>🧑‍💻</span>
      </div>
    </div>
  );
}