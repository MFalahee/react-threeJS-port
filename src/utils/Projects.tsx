class Project {
  id: number;
  title: string | null;
  shortDescription: string | null;
  longDescription: string | null;
  imageURL?: string;
  githubURL?: string;
  hostedURL?: string;
  constructor(
    id: number,
    title: string | null,
    shortDescription: string | null,
    longDescription: string | null,
    imageURL?: string,
    githubURL?: string,
    hostedURL?: string
  ) {
    this.id = id;
    this.title = title;
    this.shortDescription = shortDescription;
    this.longDescription = longDescription;
    this.imageURL = imageURL;
    this.githubURL = githubURL;
    this.hostedURL = hostedURL;
  }
}

let projects = {
  1: new Project(
    1,
    "Elephante's Concert Chronicles",
    "A space where fans can connect, share, and relive their favorite concert memories with Elephante- the electronic music producer and DJ.",
    "A project built for a musician based in Los Angeles. I utilized React, Node.js, and MongoDB to build a full-stack application that allows users to come back together to a private museum of sorts for their favorite concert memories. The application is built with a mobile-first approach, and is fully responsive.",
    "losangeles.webp",
    undefined,
    "https://www.iamtheelephante.com/"
  ),
  2: new Project(
    2,
    "EarthOpposites",
    "From Daydream to Reality: Creating EarthOpposites with Google Maps API and ThreeJS.",
    "My first foray into the google maps API, as well as my first project built using ThreeJS. EarthOpposites was inspired by an idea I had as a kid, while daydreaming in class. I really wanted to see what was on the other side of the earth, so I've made a simple tool that allows you to do just that. Please excuse the overly dramatic text- I got weird during covid.",
    "oppglobe.webp",
    undefined,
    "https://main--sweet-macaron-fd7a61.netlify.app/"
  ),
  3: new Project(
    3,
    "Brav",
    "Secure mediation platform with integrated mobile app and payment system.",
    "My role involved managing project progress using Trello boards and identifying client goals through open communication. With my team's help, I created a customized technology stack that met their unique needs and collaborated closely with the mobile development team to develop a complementary app for our web platform. The platform also seamlessly integrated various APIs, including a payment platform through Stripe and an email notification system using Sendgrid. To ensure the security of sensitive client information, we implemented a Firebase database to store our auth. I also collaborated with the design team to create a visually appealing user interface for both the app and web platform.",
    "brav-logo.webp",
    undefined,
    undefined
  ),
  4: new Project(
    4,
    "Conjugatorio",
    "Spanish-language practice application.",
    "My role involved establishing realistic goals for a week-long sprint project and designing page layouts in collaboration with team's recommendations. Interesting point about this one was that I also ended up helping our front-end architect implement in React, despite never having learned React prior. I was able to do this because I had a clear understanding of the goals we wanted to achieve, and I was able to search for the appropriate documentation to help me implement my ideas.",
    "conjugatorio.webp",
    undefined,
    "https://musing-agnesi-773577.netlify.app/"
  ),
  5: new Project(
    5,
    "TESS",
    "Visualizing Exoplanet Data, thanks to NASA",
    "First off, free data from NASA to play with is awesome for upcoming developers and students! For this week-long sprint project, I served as the backend architect. I leveraged my knowledge of Node.js/Express to design and implement a clear backend schema that could efficiently and accurately process large amounts of data. I communicated closely with the data scientists on our team to integrate NASA data into our backend databases and created endpoints using RESTful API for the front-end developers to utilize. In addition, I was tasked with creating the tests for our project, so I implemented unit-testing using Jest to ensure the quality and reliability of the system. By providing a seamless link between the data scientists and front-end developers.",
    "tesssatellite.webp",
    undefined,
    undefined
  ),
};

export default projects;
