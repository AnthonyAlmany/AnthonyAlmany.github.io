import orderProject from "./style/projects/order-project.png"
import apiProject from "./style/projects/api-project.png"
import landingPage from "./style/projects/main-background.jpg"

const listProjects = [
    {
        title: "Easy`Order",
        description: "Inventory and orders management WebApp used by hospitality business to place orders easily.",
        image: orderProject ,
        git: "https://github.com/anthonyAnAn/EasyOrder"
    },
    {
        title: "Dash Api",
        description: "Scalable Api Dashboard WebApp using React, Axios and react-router.",
        image: apiProject,
        git: "https://github.com/anthonyAnAn/Api-App"

    },
    {
        title: "Landing Page",
        description: "My landing page using React, react-router, bootstrap, react-scroll and framer-motion",
        image: landingPage,
        git: "https://github.com/anthonyAnAn/LandingPage"
    }
]

export default listProjects;
