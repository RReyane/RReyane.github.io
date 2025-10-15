/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Reyane Redjem",
  title: "I'm Reyane",
  subTitle: emoji(
    "A dedicated Game Developer specializing in Unity, sometimes Godot, with hands-on experience in Unreal Engine. Proficient in C# and C++, focusing on gameplay programming, optimization, and interactive system design."
  ),
  resumeLink:
    "https://drive.google.com/uc?export=download&id=1kTxQ2OB7BnzfNgZJ2bX65PDgxiMzLVCI", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/RReyane",
  linkedin: "https://www.linkedin.com/in/reyane-redjem/",
  gmail: "Reyane.redjem@outlook.com",
  //gitlab: "https://gitlab.com/saadpasta",
  //facebook: "https://www.facebook.com/saad.pasta7",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "PASSIONATE GAME DEVELOPER WHO LOVES BUILDING IMMERSIVE EXPERIENCES",
  skills: [
    emoji("⚡ Design and develop engaging gameplay systems and mechanics"),
    emoji(
      "⚡ Create optimized, responsive, and immersive player experiences across platforms"
    ),
    emoji("⚡ Experiment with engines and cutting-edge game technologies")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Unity",
      fontAwesomeClassname: "mdi mdi-unity"
    },
    {
      skillName: "Unreal",
      fontAwesomeClassname: "mdi mdi-unreal"
    },
    {
      skillName: "Godot",
      fontAwesomeClassname: "mdi mdi-engine"
    },
    {
      skillName: "C",
      fontAwesomeClassname: "mdi mdi-language-c"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "mdi mdi-language-cpp"
    },
    {
      skillName: "C#",
      fontAwesomeClassname: "mdi mdi-language-csharp"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "mdi mdi-language-python"
    },
    {
      skillName: "OpenGL",
      fontAwesomeClassname: "mdi mdi-expansion-card"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "mdi mdi-git"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Université Lumière Lyon 2",
      logo: require("./assets/images/lyon2.jpg"),
      subHeader: "Master’s Degree – Video Game Engineering (Gamagora)",
      duration: "September 2023 - August 2026",
      desc: "Took courses about Gameplay Programming, Graphics Rendering, Physics Simulation, Pathfinding and AI Algorithms, Virtual Reality, Procedural Generation, and many other things",
      descBullets: []
    },
    {
      schoolName: "Lycée Georges Brassens",
      logo: require("./assets/images/GeorgesBrassens.jpg"),
      subHeader: "BTS – Digital Systems: Computer Science and Networks",
      duration: "September 2020 - August 2022",
      desc: "Studied the core foundations of Computer Science, from low-level programming in C and C++, to system architecture, networking principles, and operating system fundamentals — gaining a broad understanding of how software and hardware interact.",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Gameplay Programming",
      progressPercentage: "85%"
    },
    {
      Stack: "Game Engines (Unity / Godot / Unreal)",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "65%"
    },
    {
      Stack: "Debugging",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Developer intern",
      company: "Université Lumière Lyon 2",
      companylogo: require("./assets/images/lyon2.jpg"),
      date: "May 2024 – August 2024",
      desc: "Developed a serious game using Godot, playable in a web browser, aimed at training staff and students on ecological transition. Implemented game/Moodle communication for data transfer."
    },
    {
      role: "C#/WPF Developer intern",
      company: "Actemium - Vinci Energies",
      companylogo: require("./assets/images/Actemium.jpg"),
      date: "Jun 2021 – Aug 2021",
      desc: "Developed a software version tracking tool using WPF to monitor and manage internal script versions used across the company’s factories."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME GAMES/PROJECT I DEVELOPPED/CONTRIBUTED TO",
  projects: [
    {
      image: require("./assets/images/mekaiju.png"),
      projectName: "Mekaiju",
      projectDesc:
        "Gameplay Developer and Project Lead on Mekaiju: worked on Mecha locomotion, camera and lock-on systems, input handling, and UI features such as a radial healing menu, while assisting other developers across all aspects of the project and overseeing overall technical and design consistency.",
      footerLink: [
        {
          name: "Itchio",
          url: "https://gamagora.itch.io/mekaiju"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/PFAS.png"),
      projectName: "FluoroBreaker",
      projectDesc:
        "Lead Developer on PFAS: responsible for gameplay systems, camera behavior, and UI integration, as well as overall project coordination and debugging, ensuring steady progress across a small four-person team.",
      footerLink: [
        {
          name: "Itchio",
          url: "https://annannq.itch.io/fluoro-breaker"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "",
  email_address: "Reyane.redjem@outlook.com",
  display: true
};

// Twitter Section

const twitterDetails = {
  userName: "RReyane", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
