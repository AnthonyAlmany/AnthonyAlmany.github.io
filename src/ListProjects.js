import orderProject from "./style/projects/order-project.png"
import apiProject from "./style/projects/api-project.png"
import landingPage from "./style/projects/main-background.jpg"
import taskmanager from "./style/projects/task-project.png"

const listProjects = [
    {
        title: "Easy`Order",
        description: "Inventory and orders management WebApp used by hospitality business to place orders easily.",
        image: orderProject ,
        git: "https://github.com/anthonyAnAn/EasyOrder",
        view: "https://gifted-morse-f81260.netlify.app/",
    },
    {
        title: "Task Manager",
        description: "Task management App using data stored on Firebase. States updated depending of each tasks properties.",
        image: taskmanager,
        git: "https://github.com/AnthonyAlmany/Task-Manager",
        view: "https://marvelous-lily-c60d9b.netlify.app",
    },
    {
        title: "Dash Api",
        description: "Scalable Api Dashboard WebApp using React, Axios and react-router.",
        image: apiProject,
        git: "https://github.com/anthonyAnAn/Api-App",
        view: "https://boring-ardinghelli-a81f27.netlify.app/",

    },
    {
        title: "Landing Page",
        description: "My landing page using React, react-router, bootstrap, react-scroll and framer-motion",
        image: landingPage,
        git: "https://github.com/anthonyAnAn/LandingPage",
        view: "https://anthonyalmany.netlify.app/",
    },

]

export default listProjects;
