import PresenceIMG from "../Images/Projects/ss-1.png";
import BankingSystem from "../Images/Projects/ss-2.png";
import BoxOffice from "../Images/Projects/ss-3.png";
import TicTacToe from "../Images/Projects/ss-4.png";
import Raunakh from "../Images/Projects/ss-5.png";

const ProjectData = [
  {
    Title: "Presence",
    Image: PresenceIMG,
    Caption: "Attendance Recorder Application",
    Description: [
      "It is well equipped to handle attendance related task and it has great features which make strenuous tasks hassle-free, like calculating attendance of every student. ",
      "Tool for teachers to record and download attendance of students. Perform CRUD operations for Users, Students and Batches.",
      "TechStack used: Node.js, Express.js, MongoDB, EJS, CSS, JavaScript.",
    ],
    Link: "https://code-her-things-presence.herokuapp.com/",
  },
  {
    Title: "Raunakh",
    Image: Raunakh,
    Caption: "Donation Portal",
    Description: [
      "Raunakh is a special fundraising event, held annually close to this festival of Diwali, to brighten up a few faces for this prosperous occasion.",
      "Important features include Razorpay integration for donations and general event information. Also, an admin area with login and session store to display donations from DB.",
      "TechStack used : MongoDB, React.js, Express.js, Node.js.",
    ],
    Link: "https://www.raunak.ml/",
  },
  {
    Title: "Sehgal Banks Ltd",
    Image: BankingSystem,
    Caption: "Banking System Application",
    Description: [
      "It is a simple and user-friendly application. Operations like Depositing, Transfering and Withdrawing money from customer's account is possible. ",
      "Feature of adding/deleting customer is also present.",
      " TechStack used: Node.js, Express.js, MongoDB, HTML, CSS, JavaScript.",
    ],
    Link: "https://sehgalbanks.herokuapp.com/",
  },
  {
    Title: "Box Office",
    Image: BoxOffice,
    Caption: "Movie/Actor Search Application",
    Description: [
      "App to display data about different TV Actors, Movies & Shows. Tvmaze API is integrated to fetch data. On visiting a specific show, details of show is there eg, episodes, cast, crew, reviews, etc.",
      "On top of that, we can add items to favorite section to review them in the future.",
      " TechStack used: Node.js, React.js, HTML, CSS, JavaScript.",
    ],
    Link: "https://bhavya-sehgal.github.io/box-office/#/",
  },
  {
    Title: "Tic Tac Toe",
    Image: TicTacToe,
    Caption: "Zero Kata Game",
    Description: [
      "Tic-tac-toe is a game for two players who take turns marking the spaces in a three-by-three grid with X or O. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner. It is a solved game, with a forced draw assuming best play from both players.",

      "TechStack used: Node.js, React.js, HTML, CSS, JavaScript.",
    ],
    Link: "http://melted-letter.surge.sh/",
  },
];

export default ProjectData;
