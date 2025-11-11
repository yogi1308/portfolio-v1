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

export let projectsContent = [
    {
        name: "CLI Art",
        projectLink: "https://github.com/yogi1308/cli-art",
        time: "November 2025",
        type: "Personal Project",
        thumbnail: cliArtThumbnail,
        projectDetails: [
            "Developed a Python command-line tool to convert images from local files or web URLs into full-color ASCII art, with argparse to provide users with full control over output width, color modes, brightness/contrast, and inversion.",
            "Used Pillows library for Image Processing, Colorama to implement multiple color modes, shutil for terminal window data, requests for fetching image from url and argparse to process arguments passed by user using flags.",
            "Packaged the final script into standalone executables for both Windows (.exe), WSL and similar Ubuntu-based Linux systems using PyInstaller and published them on GitHub Releases."

        ]
    },
    {
        name: "Sneaker Shopping Cart",
        projectLink: "https://lustrous-arithmetic-5d279a.netlify.app",
        time: "July 2025",
        type: "Personal Project",
        thumbnail: shoppingCartThumbnail,
        projectDetails: [
            "Designed and implemented a responsive shopping cart experience with instant cart updates, item quantity adjustment, and delete functionality, leveraging React state management and modular components.",
            "Utilized persistent cart storage via localStorage, ensuring user selections are retained across sessions.",
            "Integrated a custom theming solution, supporting both light and dark modes with smooth transitions across the app.",
            "Developed a user-centric interface including animated cart side-panel, overlay effects, and real-time total calculation, enhancing usability on both desktop and mobile devices.",
        ]
    },
    {
        name: "Library Inventory Application",
        projectLink: "https://inventory-application-2-o8ru.onrender.com",
        time: "October 2025",
        type: "Personal Project",
        thumbnail: libraryInventoryApp,
        projectDetails: [
            "Developed a full-stack library inventory application using Node.js, Express, and PostgreSQL.",
            "Designed a relational database schema with many-to-many relationships to ensure data integrity.",
            "Authored and optimized complex SQL queries  to build RESTful API endpoints for complete CRUD functionality, enabling filtering by author and genre and to manage book data.",
        ]
    },
    {
        name: "Resume/CV Builder",
        projectLink: "https://sunny-fudge-81c254.netlify.app",
        time: "June 2025",
        type: "Personal Project",
        thumbnail: cvAppThumbnail,
        projectDetails: [
            "Engineered a responsive CV/Resume application with React.js, supporting real-time data validation and seamless user input for various resume sections.",            
            "Designed and implemented reusable React components for modular resume creation, improving maintainability and scalability of the codebase.",
            "Leveraged modern React features (hooks, context API) to manage application state efficiently and ensure a cohesive user experience.",
            "Integrated print and PDF export capabilities, enabling users to download polished resumes directly from the browser.",
            "Ensured accessibility and cross-browser compatibility through semantic HTML and extensive CSS styling.",
        ]
    },
    {
        name: "Memory Card Game",
        projectLink: "https://chipper-fox-9c608c.netlify.app",
        time: "June 2025",
        type: "Personal Project",
        thumbnail: memoryCardGameThumbanil,
        projectDetails: [
            "Designed and developed an interactive Pokémon-themed memory card game using React and Vite, providing an engaging and visually dynamic user experience.",
            "Implemented stateful game logic to track user selections, scores, and best scores, preventing repeated card selections and ensuring fair gameplay.",
            "Applied advanced CSS animations and responsive layouts to create a visually appealing, mobile-friendly interface.",
            "Integrated modular React components for game screens, help overlays, and scoreboards, promoting code reusability and maintainability.",
            "Utilized asynchronous JavaScript to efficiently preload game assets (Pokémon images) for smooth gameplay transitions.",
        ]
    },
    {
        name: "Weather App",
        projectLink: "https://yogi1308.github.io/weather-app",
        time: "March 2025",
        type: "Personal Project",
        thumbnail: weatherAppThmbnail,
        projectDetails: [
            "Developed a full-featured weather application using JavaScript that provides real-time weather data and air quality index(AQI) for user-selected or geolocated locations.",
            "Integrated third-party weather APIs (Visual Crossing) to fetch detailed forecasts, including current, hourly (up to 24 hours), and daily (up to 14 days) weather data.",
            "Implemented user experience enhancements such as dynamic background and weather images based on current conditions and time of day.",
            "Added support for both metric and imperial units, with persistent user preferences using localStorage."
        ]
    }, 
    {
        name: "Battleship",
        projectLink: "https://yogi1308.github.io/battleship/",
        time: "May 2025",
        type: "Personal Project",
        thumbnail: battleshipThumbnail,
        projectDetails: [
            "Designed and implemented a classic Battleship game with both single-player (vs. Computer Algorithm) and two-player modes using JavaScript, HTML, and CSS",
            "Engineered a modular game architecture featuring ship placement, turn-based attack logic, and win/loss detection.",
            "Developed intuitive drag-and-drop ship placement and orientation controls, enhancing user experience and game strategy.",
            "Built a custom computer algorithm opponent leveraging pattern-based attack logic and memory for realistic gameplay against the computer.",
            "Applied advanced DOM manipulation for real-time UI updates, including rematch functionality and seamless transition between game states.",
            "Implemented responsive interface with dynamic feedback for hits, misses, and sunk ships, ensuring clear in-game communication.",
        ]
    },
    {
        name: "To-do List",
        projectLink: "https://yogi1308.github.io/to-do-list/",
        time: "March 2025",
        type: "Personal Project",
        thumbnail: toDoThumbnail,
        projectDetails: [
            "Designed and implemented a JavaScript-based to-do list application, focusing on intuitive task management and seamless user experience.",
            "Applied best practices in front-end development to enable real-time task addition, editing, and deletion.",
            "Leveraged local storage to persist user tasks across sessions, ensuring data reliability and user convenience.",
            "Developed responsive layouts to provide a consistent interface across desktop and mobile devices.",
        ]
    },
    {
        name: "Restaurant page",
        projectLink: "https://yogi1308.github.io/restaurant-page/",
        time: "Jan 2025",
        type: "Personal Project",
        thumbnail: restaurantPageThumbnail,
        projectDetails: [
            "Developed a multi-page restaurant website using modular vanilla JavaScript, enabling dynamic content switching between homepage, menu, and contact sections without page reloads.",
            "Designed and implemented a visually appealing UI with custom CSS, including responsive layouts, custom fonts, and SVG graphics to enhance user experience.",
            "Structured the codebase with separation of concerns, utilizing distinct modules for menu data, homepage, contact information, and navigation.",
            "Leveraged Webpack for efficient module bundling and asset management, streamlining the development workflow.",
            "Integrated a custom menu system with dynamic population from data modules, allowing easy updates and scalability of menu items.",
        ]
    },
    {
        name: "Library",
        projectLink: "https://yogi1308.github.io/library/",
        time: "Dec 2024",
        type: "Personal Project",
        thumbnail: libraryThumbnail,
        projectDetails: [
            "Engineered a web-based library management system using JavaScript, HTML, and CSS, supporting efficient cataloging and user interactions.",
            "Implemented dynamic UI components and interactive features to enhance the user experience in managing book records.",
            "Applied core web development principles to develop a responsive and accessible multi-page application.",
            "Optimized code structure for maintainability and scalability in a collaborative public repository.",
        ]
    },
]