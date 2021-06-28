// card images
import Castaway from "../images/castaway.gif";
import Employee from "../images/employeeDirectory.gif";
import Exercise from "../images/exercise.gif";
import Expense from "../images/expenseTracker.gif";
import Mad from "../images/madLibs.gif";
import Show from "../images/showmyshow.gif"

// Item array

const PortfolioItems = [
    {
        id: 1,
        image: Castaway,
        name: "Castaway",
        description: "A CYOA game using express, sequelize, express handlebars, and css/js.",
        github: "https://github.com/Shawnmflanigan/CYOA",
        link: "",
    },
    {
        id: 2,
        image: Employee,
        name: "Employee Directory Search",
        description: "This application allows the user to sort and search all       employees in a company by multiple criteria; it was built using React and React-Bootstrap. Additional dependancies are listed in the dependancy section.",
        github: "https://github.com/Shawnmflanigan/employee-directory",
        link: "https://your-employees.herokuapp.com/",
    },
    {
        id: 3,
        image: Exercise,
        name: "Exercise App",
        description: "This application uses mongodb, javascript, and RESTfull design to allow the user to add, track, and view exercises.",
        github: "https://github.com/Shawnmflanigan/exerciseapp",
        link: "https://stormy-sea-50426.herokuapp.com/?id=605e3aff8295c90015ecefc0",
    },
    {
        id: 4,
        image: Expense,
        name: "Expense Tracker",
        description: "This application uses service worker, express, mongoDB, and JQuery to allow the user to track their budget over time both online and offline.",
        github: "https://github.com/Shawnmflanigan/expenseTracker",
        link: "https://stark-island-01770.herokuapp.com/",
    },
    {
        id: 5,
        image: Mad,
        name: "Mad Libz",
        description: "A whimisical web application which allows a user to play the classic mad libs game with random stories. Built using JS, HTML, Bulma CSS and an open source API.",
        github: "https://github.com/Shawnmflanigan/MadLibz-1",
        link: "https://teammadlibz.github.io/MadLibz/",
    },
    {
        id: 6,
        image: Show,
        name: "Show My Show",
        description: "There's a lot to say here",
        github: "",
        link: "",
    },
];

export default PortfolioItems;