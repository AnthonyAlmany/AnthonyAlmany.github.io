import htmlLogo from "./style/Logos/HTML.svg"
import cssLogo from "./style/Logos/CSS.svg"
import jsLogo from "./style/Logos/JS.svg"
import reactLogo from "./style/Logos/REACT.svg"
import typescriptLogo from "./style/Logos/Typescript.svg"

import nodeLogo from "./style/Logos/node.png"
import mongoLogo from "./style/Logos/mongodb.svg"

import gitLogo from "./style/Logos/git.svg"
import firebaseLogo from "./style/Logos/firebase.png"
import bootstrapLogo from "./style/Logos/bootstrap.png"
import muiLogo from "./style/Logos/mui.svg"
import sassLogo from "./style/Logos/sass.png"

const frontStack = [
    { logo: htmlLogo, name: "HTML" },
    { logo: cssLogo, name: "CSS" },
    { logo: jsLogo, name: "JS" },
    { logo: reactLogo, name: "React" },
    { logo: typescriptLogo, name: "TypeScript" },
]

const backStack = [
    { logo: nodeLogo, name: "Node.js" },
    { logo: mongoLogo, name: "MongoDb" },
]

const otherStack = [
    { logo: gitLogo, name: "Git" },
    { logo: firebaseLogo, name: "Firebase" },
    { logo: bootstrapLogo, name: "Bootstrap" },
    { logo: muiLogo, name: "MaterialUI" },
    { logo: sassLogo, name: "Sass" },
]

export { frontStack, backStack, otherStack };