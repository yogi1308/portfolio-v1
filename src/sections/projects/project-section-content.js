import weatherAppThmbnail from '../../assets/images/weather-app-thumbnail.png'
import shoppingCartThumbnail from '../../assets/images/sneaker-shopping-cart.png'
import cvAppThumbnail from '../../assets/images/cv-app-thumbnail.png'
import memoryCardGameThumbanil from '../../assets/images/memory-card-game-thumbnail.png'
import battleshipThumbnail from '../../assets/images/battleship-thumbnail.png'
import toDoThumbnail from '../../assets/images/to-do-thumbnail.png'
import libraryThumbnail from '../../assets/images/library-thumbnail.png'
import restaurantPageThumbnail from '../../assets/images/restaurant-page-thumbnail.png'
import libraryInventoryApp from '../../assets/images/library-inventory-app.png'
import cliArtThumbnail from '../../assets/images/cli-art-thumbnail.png'
import basicDriveThumbnail from '../../assets/images/basic-drive-thumbnail.png'
import shellScriptThumbnail from '../../assets/images/git-gemini-shell-script.png'
import portfolioTUIThumbnail from '../../assets/images/portfolio-tui-thumbnail.png'
import nbaNetworkThumbnail from '../../assets/images/nba-network-thunmbnail.png'
import teejThumbnail from '../../assets/images/teej-thumbnail.png'

export let projectsContent = [
    {
        name: "NBA Network",
        projectLink: "https://nba-network.vercel.app/",
        time: "August 2026",
        type: "Personal Project",
        thumbnail: nbaNetworkThumbnail,
        stack: "React, Python, Tailwind, Zustand, Graphology, SigmaJS, Network Theory, NetworkX, ForceAtlas2",
        src: "https://github.com/yogi1308/nba-network",
        preview: "https://nba-network.vercel.app/",
        projectDetails: [
            "Built an interactive network visualization of NBA history using Graphology and SigmaJS, modeling NBA players as nodes and shared-team relationships as undirected weighted edges based on the number of seasons played together.",
            "Developed a Python data pipeline using nba_api to collect career and team-history data for NBA players, query team rosters by season, and generate player–teammate relationships while tracking completed and failed requests for recoverable data collection.",
            "Engineered a NetworkX graph-processing pipeline to construct the teammate network, calculate edge weights from shared seasons, and generate reproducible ForceAtlas2 layouts before exporting the graph to JSON for the web application.",
            "Implemented graph traversal and path-finding algorithms to identify shortest paths between players, paths of specific distances between two players, and paths of distances within a range",
            "Developed interactive exploration tools with React, Zustand, and Tailwind, supporting player search, team/decade filtering, network-depth exploration, and graph-based metrics such as connectivity",
        ]
    },
    {
        name: "Artist Portfolio Platform",
        projectLink: "https://teej01.vercel.app/",
        time: "July 2026",
        type: "Freelance",
        thumbnail: teejThumbnail,
        stack: "React, TypeScript, Vite, Tailwind CSS, React Router, Motion, Formspree, Stripe, Vercel, PostgreSQL, ExpressJS, Prisma ORM",
        src: "https://github.com/yogi1308/teej",
        preview: "https://teej01.vercel.app/",
        projectDetails: [
            "Built and deployed a full-stack personal platform for an independent artist, unifying music, merchandise, blog, and donation features into a single site using React, TypeScript, Vite, and Tailwind CSS, hosted on Vercel",
            "Implemented secure admin authentication with JWT to let the client manage all content (music, merch, blog posts) independently without exposing the site to unauthorized edits",
            "Owned the project end-to-end, from architecture, frontend, backend API, and deployment. Took it from concept to a live production site for an external, non-technical client",
            "Built a custom rich-text blog editor with Tiptap supporting images, video, code blocks, and tables, and integrated Cloudinary for automatic upload/organization of audio tracks, product photos, and cover art",
            "Integrated third-party services like Formspree and stripe to handle contact and donation flows, cutting backend complexity while keeping a fully custom front-end experience",
        ]
    }, 
    {
        name: "Portfolio TUI",
        projectLink: "https://github.com/yogi1308/terminal-dot-portfolio-TUI",
        time: "January 2026",
        type: "Personal Project",
        thumbnail: portfolioTUIThumbnail,
        stack: "C++, CMake, Microsoft Azure, Github Actions",
        src: "https://github.com/yogi1308/terminal-dot-portfolio-TUI",
        preview: "ssh portfolio@shreetejhadge.dev",
        projectDetails: [
            "Developed an interactive Terminal User Interface (TUI) portfolio using C++ and the FTXUI library, featuring keyboard-driven navigation and a responsive layout.",
            "Made the TUI accessible globally by serving it via ssh and hosting it on a custom configured Microsoft Azure Virtual Machine",
            "Integrated a functional contact form with input validation and asynchronous message dispatching using cURL.",
            "Configured GitHub Actions to automatically build the C++/CMake binary and deploy updates to the Azure VM on push, ensuring the live SSH-accessible portfolio stays up to date."
        ]
    },
    {
        name: "Basic Google Drive",
        projectLink: "https://file-uploader-orpin.vercel.app",
        time: "December 2025",
        type: "Personal Project",
        thumbnail: basicDriveThumbnail,
        stack: "NodeJS, ExpressJS, PostgreSQL, Prisma ORM, EJS, Cloudinary",
        src: "https://github.com/yogi1308/basic-google-drive",
        preview: "https://file-uploader-orpin.vercel.app",
        projectDetails: [
            "Developed a full-stack file storage application using Node.js, Express, and PostgreSQL (via Prisma ORM) to efficiently manage user data and complex file hierarchies.",
            "Integrated Cloudinary API for scalable cloud storage, enabling real-time uploads, folder management, and automatic categorization of assets into photos, videos, and documents.",
            "Implemented secure user authentication with Passport.js and deployed the application on a serverless architecture using Vercel and Neon for high availability and performance."

        ]
    },
    // {
    //     name: "Git Gemini Automation Shell Script",
    //     projectLink: "https://github.com/yogi1308/shell-scripts",
    //     time: "November 2025",
    //     type: "Personal Project",
    //     thumbnail: shellScriptThumbnail,
    //     stack: "Bash Script, Gemini API, Git",
    //     src: "https://github.com/yogi1308/shell-scripts",
    //     preview: "na",
    //     projectDetails: [
    //         "Wrote a shell script that automates git stage commit and push workflow by sending diffs to the Gemini CLI tool to generate context-aware commit messages to the staged files and pushing them.",
    //         "Integrated 60-second API timeouts and diff size validation to handle large changesets gracefully with manual fallback options.",
    //         "Implemented comprehensive error handling for API timeouts, authentication failures, and network issues with user-friendly troubleshooting messages."
    //     ]
    // },
    // {
    //     name: "CLI Art",
    //     projectLink: "https://github.com/yogi1308/cli-art",
    //     time: "November 2025",
    //     type: "Personal Project",
    //     thumbnail: cliArtThumbnail,
    //     stack: "Python, Pillow, OpenCV (cv2), argparse",
    //     src: "https://github.com/yogi1308/cli-art",
    //     preview: "na",
    //     projectDetails: [
    //         "Developed a Python command-line tool to convert images from local files or web URLs into full-color ASCII art, with argparse to provide users with full control over output width, color modes, brightness/contrast, and inversion.",
    //         "Used Pillows library for Image Processing, Colorama to implement multiple color modes, shutil for terminal window data, requests for fetching image from url and argparse to process arguments passed by user using flags.",
    //         "Packaged the final script into standalone executables for both Windows (.exe), WSL and similar Ubuntu-based Linux systems using PyInstaller and published them on GitHub Releases."
    //
    //     ]
    // },   
    // {
    //     name: "Library Inventory Application",
    //     projectLink: "https://inventory-application-ivory.vercel.app",
    //     time: "October 2025",
    //     type: "Personal Project",
    //     thumbnail: libraryInventoryApp,
    // stack: ,
    //     projectDetails: [
    //         "Developed a full-stack library inventory application using Node.js, Express, and PostgreSQL.",
    //         "Designed a relational database schema with many-to-many relationships to ensure data integrity.",
    //         "Authored and optimized complex SQL queries  to build RESTful API endpoints for complete CRUD functionality, enabling filtering by author and genre and to manage book data.",
    //     ]
    // },
    // {
    //     name: "Sneaker Shopping Cart",
    //     projectLink: "https://lustrous-arithmetic-5d279a.netlify.app",
    //     time: "July 2025",
    //     type: "Personal Project",
    //     thumbnail: shoppingCartThumbnail,
    //     stack: "React, react-router-dom, Vite, CSS Modules, Netlify, RapidAPI",
    //     src: "https://github.com/yogi1308/shopping-cart",
    //     preview: "https://lustrous-arithmetic-5d279a.netlify.app",
    //     projectDetails: [
    //         "Designed and implemented a responsive shopping cart experience with instant cart updates, item quantity adjustment, and delete functionality, leveraging React state management and modular components.",
    //         "Utilized persistent cart storage via localStorage, ensuring user selections are retained across sessions.",
    //         "Integrated a custom theming solution, supporting both light and dark modes with smooth transitions across the app.",
    //         "Developed a user-centric interface including animated cart side-panel, overlay effects, and real-time total calculation, enhancing usability on both desktop and mobile devices.",
    //     ]
    // },
    // {
    //     name: "Resume/CV Builder",
    //     projectLink: "https://sunny-fudge-81c254.netlify.app",
    //     time: "June 2025",
    //     type: "Personal Project",
    //     thumbnail: cvAppThumbnail,
    //     stack: "React, Vite, HTML, CSS, Node.js (npm)",
    //     src: "https://github.com/yogi1308/cv-application",
    //     preview: "https://sunny-fudge-81c254.netlify.app",
    //     projectDetails: [
    //         "Engineered a responsive CV/Resume application with React.js, supporting real-time data validation and seamless user input for various resume sections.",            
    //         "Designed and implemented reusable React components for modular resume creation, improving maintainability and scalability of the codebase.",
    //         "Leveraged modern React features (hooks, context API) to manage application state efficiently and ensure a cohesive user experience.",
    //         "Integrated print and PDF export capabilities, enabling users to download polished resumes directly from the browser.",
    //         "Ensured accessibility and cross-browser compatibility through semantic HTML and extensive CSS styling.",
    //     ]
    // },
    // {
    //     name: "Memory Card Game",
    //     projectLink: "https://chipper-fox-9c608c.netlify.app",
    //     time: "June 2025",
    //     type: "Personal Project",
    //     thumbnail: memoryCardGameThumbanil,
    // stack: ,
    //     projectDetails: [
    //         "Designed and developed an interactive Pokémon-themed memory card game using React and Vite, providing an engaging and visually dynamic user experience.",
    //         "Implemented stateful game logic to track user selections, scores, and best scores, preventing repeated card selections and ensuring fair gameplay.",
    //         "Applied advanced CSS animations and responsive layouts to create a visually appealing, mobile-friendly interface.",
    //         "Integrated modular React components for game screens, help overlays, and scoreboards, promoting code reusability and maintainability.",
    //         "Utilized asynchronous JavaScript to efficiently preload game assets (Pokémon images) for smooth gameplay transitions.",
    //     ]
    // },
    // {
    //     name: "Weather App",
    //     projectLink: "https://yogi1308.github.io/weather-app",
    //     time: "March 2025",
    //     type: "Personal Project",
    //     thumbnail: weatherAppThmbnail,
    // stack: ,
    //     projectDetails: [
    //         "Developed a full-featured weather application using JavaScript that provides real-time weather data and air quality index(AQI) for user-selected or geolocated locations.",
    //         "Integrated third-party weather APIs (Visual Crossing) to fetch detailed forecasts, including current, hourly (up to 24 hours), and daily (up to 14 days) weather data.",
    //         "Implemented user experience enhancements such as dynamic background and weather images based on current conditions and time of day.",
    //         "Added support for both metric and imperial units, with persistent user preferences using localStorage."
    //     ]
    // }, 
    {
        name: "Battleship",
        projectLink: "https://yogi1308.github.io/battleship/",
        time: "May 2025",
        type: "Personal Project",
        thumbnail: battleshipThumbnail,
        stack: "JavaScript, HTML, CSS, Webpack, Jest, TDD, Babel",
        src: "https://github.com/yogi1308/battleship",
        preview: "https://yogi1308.github.io/battleship/",
        projectDetails: [
            "Designed and implemented a classic Battleship game with both single-player (vs. Computer Algorithm) and two-player modes using JavaScript, HTML, and CSS",
            "Engineered a modular game architecture featuring ship placement, turn-based attack logic, and win/loss detection.",
            "Developed intuitive drag-and-drop ship placement and orientation controls, enhancing user experience and game strategy.",
            "Built a custom computer algorithm opponent leveraging pattern-based attack logic and memory for realistic gameplay against the computer.",
            "Applied advanced DOM manipulation for real-time UI updates, including rematch functionality and seamless transition between game states.",
            "Implemented responsive interface with dynamic feedback for hits, misses, and sunk ships, ensuring clear in-game communication.",
        ]
    },
    // {
    //     name: "To-do List",
    //     projectLink: "https://yogi1308.github.io/to-do-list/",
    //     time: "March 2025",
    //     type: "Personal Project",
    //     thumbnail: toDoThumbnail,
    // stack: ,
    //     projectDetails: [
    //         "Designed and implemented a JavaScript-based to-do list application, focusing on intuitive task management and seamless user experience.",
    //         "Applied best practices in front-end development to enable real-time task addition, editing, and deletion.",
    //         "Leveraged local storage to persist user tasks across sessions, ensuring data reliability and user convenience.",
    //         "Developed responsive layouts to provide a consistent interface across desktop and mobile devices.",
    //     ]
    // },
    // {
    //     name: "Restaurant page",
    //     projectLink: "https://yogi1308.github.io/restaurant-page/",
    //     time: "Jan 2025",
    //     type: "Personal Project",
    //     thumbnail: restaurantPageThumbnail,
    // stack: ,
    //     projectDetails: [
    //         "Developed a multi-page restaurant website using modular vanilla JavaScript, enabling dynamic content switching between homepage, menu, and contact sections without page reloads.",
    //         "Designed and implemented a visually appealing UI with custom CSS, including responsive layouts, custom fonts, and SVG graphics to enhance user experience.",
    //         "Structured the codebase with separation of concerns, utilizing distinct modules for menu data, homepage, contact information, and navigation.",
    //         "Leveraged Webpack for efficient module bundling and asset management, streamlining the development workflow.",
    //         "Integrated a custom menu system with dynamic population from data modules, allowing easy updates and scalability of menu items.",
    //     ]
    // },
    // {
    //     name: "Library",
    //     projectLink: "https://yogi1308.github.io/library/",
    //     time: "Dec 2024",
    //     type: "Personal Project",
    //     thumbnail: libraryThumbnail,
    // stack: ,
    //     projectDetails: [
    //         "Engineered a web-based library management system using JavaScript, HTML, and CSS, supporting efficient cataloging and user interactions.",
    //         "Implemented dynamic UI components and interactive features to enhance the user experience in managing book records.",
    //         "Applied core web development principles to develop a responsive and accessible multi-page application.",
    //         "Optimized code structure for maintainability and scalability in a collaborative public repository.",
    //     ]
    // },
]
