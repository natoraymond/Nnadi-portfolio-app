import MAGICSTORE from "./Assets/Projects/shopping.jpg";
import DEVEL from "./Assets/Projects/devel.jpg";
import DOLIST from "./Assets/Projects/do list.jpg";




export const PORTFOLIO = [ 
  {
    image: MAGICSTORE,
    name: "magicstore",
    technologyUsed: "ReactJs, JavaScript, Bootstrap, Firebase",
    description: "E-commerce shop, just like Amazon, I used FireStore to Manage collections and FirebaseAuth for user authentication",
    url: "https://nnamdi-cv.vercel.app/",
  },
  {
    image: DEVEL,
    name: "My Portfolio Website",
    technologyUsed: "ReactJs, JavaScript, Bootstrap",
    description: "Personal Portfolio Website, develeoped with React, Bootstrap and Html.",
    url: "https://netlify-natoraymond.vercel.app/",
  },
  {
    image: DOLIST,
    name: "do List App",
    technologyUsed: "ReactJs, Javascript, Firebase",
    description: "This project described DOLIST  in firebase using react javascrip library.",
    url: "https://react-firebase-crud-lofuu0dg1-natoraymond.vercel.app/",
  } 
  
];

export const SKILLS = [
  { name: "ReactJs", initialRating: 4 },  
  { name: "JavaScript", initialRating: 4 },  
  { name: "Html", initialRating: 4 },
  { name: "CSS", initialRating: 4 },
  { name: "Unit-Testing(Jest)", initialRating: 3 },  
  { name: "GitHub", initialRating: 4 },
];

export const TOOLS = ["Visual Studio Code", "GitHub", "Chrome DevTools", "Npm (Node Package Manager)", "Sublime-Text", "Ubuntu Linux", "Firebase"]