import weatherAppThmbnail from '../../assets/images/weather-app-thumbnail.png'
import shoppingCartThumbnail from '../../assets/images/sneaker-shopping-cart.png'
import cvAppThumbnail from '../../assets/images/cv-app-thumbnail.png'

export let projectsContent = [
    {
        name: "Sneaker Shopping Cart",
        projectLink: "https://lustrous-arithmetic-5d279a.netlify.app",
        time: "July 2025",
        type: "Personal Project",
        thumbnail: shoppingCartThumbnail,
        projectDetails: [
            "Developed a full-featured sneaker shopping cart web application using React, and an open-source Restful API, enabling users to browse products, add items to their cart",
            "Used React technologies like React Router DOM, React testing, React hooks, etc. to complete its implementation",
        ]
    },
    {
        name: "CV Builder",
        projectLink: "https://sunny-fudge-81c254.netlify.app",
        time: "June 2025",
        type: "Personal Project",
        thumbnail: cvAppThumbnail,
        projectDetails: [
            "Developed a dynamic Resume/CV Builder application using React.js, enabling users to create, edit, and preview professional resumes interactively.",            
            "Implemented modular components for personal information, education, skills, experience, projects, and activities sections, providing a customizable and user-friendly interface.",
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
]