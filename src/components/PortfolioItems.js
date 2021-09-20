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
        image: Show,
        name: "Show My Show",
        description: "Final Project for UofO full stack web development certification. This application allows users to search and save music performances in their area using the ticketmaster api. To enhance the ux it also allows users to view conversations on twitter by scraping for the #showmyshow hashtag and has some chat functionality",
        myrole: "Database design, management, and organization; front-end implementation; git-flow, deployment",
        github: "https://github.com/PuppyRoadTrip/showmyshow",
        link: "https://showmyshow.herokuapp.com/",
    },
    {
        id: 2,
        image: Castaway,
        name: "Castaway",
        description: "A CYOA game using express, sequelize, express handlebars, and css/js.",
        myrole: "UX & UI, Front-end/Back-end integration, general styling",
        github: "https://github.com/Shawnmflanigan/CYOA",
        link: "https://castaway-flight-of-the-pheonix.herokuapp.com/",
    },
    {
        id: 3,
        image: Mad,
        name: "Mad Libz",
        description: "A whimisical web application which allows a user to play the classic mad libs game with random stories. Built using JS, HTML, Bulma CSS and an open source API.",
        myrole: "UX/UI design and implementation, scrum master, git management",
        github: "https://github.com/Shawnmflanigan/MadLibz-1",
        link: "https://teammadlibz.github.io/MadLibz/",
    },
    {
        id: 4,
        image: Employee,
        name: "Employee Directory Search",
        description: "This application allows the user to sort and search all       employees in a company by multiple criteria; it was built using React and React-Bootstrap. Additional dependancies are listed in the dependancy section.",
        myrole: "Top to bottom design and development.",
        github: "https://github.com/Shawnmflanigan/employee-directory",
        link: "https://your-employees.herokuapp.com/",
    },
    {
        id: 5,
        image: Exercise,
        name: "Exercise App",
        description: "This application uses mongodb, javascript, and RESTfull design to allow the user to add, track, and view exercises.",
        github: "https://github.com/Shawnmflanigan/exerciseapp",
        myrole: "Back end design and implemenation.",
        link: "https://stormy-sea-50426.herokuapp.com/?id=605e3aff8295c90015ecefc0",
    },
    {
        id: 6,
        image: Expense,
        name: "Expense Tracker",
        description: "This application uses service worker, express, mongoDB, and JQuery to allow the user to track their budget over time both online and offline.",
        myrole: "Back end design and implemenation.",
        github: "https://github.com/Shawnmflanigan/expenseTracker",
        link: "https://stark-island-01770.herokuapp.com/",
    },


];

export default PortfolioItems;