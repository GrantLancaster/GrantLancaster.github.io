const grantL = {
    aboutme:[`Starting off as a chemist, I couldn't find what I was looking for in my work. It lacked creativity, satisfaction, and the ability to say "I built that". I decided to try my hand at the ATLAS Institute at University of Colorado Boulder, and everything changed`,
    `Now I'm a front-end developer making applications for fun, for people, and for exploration; trying out new techniques, designs, and functions. I love front-end, but my main passion is helping people, so I want to use my skills to create projects that enhance people and how they live.
    `],
    resume:{
        desiredjob: ["Front End Web Developer", "UX Designer", "Back-End Web Developer", "Full-Stack Developer", "Analytical Chemist"],
        skills:{
            "hard": [],
            "soft": []
        },
        awards: {},
        experience: {
            serviceindustry: {},
            chemistry: {},
            learningassistant: {},
            programming: {},
            webdev: {},
            communityservice: {}
        },
        education: {
            highschool: {
                name: "Peak to Peak Charter School",
                program: {
                    major: "N/A",
                    minor: "N/A"
                },
                location: "Lafayette, Colorado",
                graduationDate: "May 2027"
            },
            texastech: {
                name: "Texas Tech University",
                program: {
                    major: "Chemical Engineering",
                    minor: "N/A"
                },
                location: "Lubbock, Texas",
                attendedDates: "August 2017 - December 2017",
                graduationDate: "N/A"
            },
            frontrangecommunitycollege: {
                name: "Front Range Community College",
                program: {
                    major: "Chemistry",
                    minor: "N/A"
                },
                location: "Westminster, Colorado",
                attendedDates: "January 2018 - May 2018",
                graduationDate: "N/A"
            },
            cuboulder: {
                name: "Univesity of Colorado Boulder",
                program: {
                    major: "Chemistry",
                    minor: "Creative Technology and Design"
                },
                location: "Boulder, Colorado",
                attendedDates: "August 2018 -  current",
                graduationDate: "N/A"
            }
        },
        links: [
            {
                name: "github",
                link: "https://github.com/GrantLancaster",
                image: "./img/github-mark-white.png"
            },
            {
                name: "LinkedIn",
                link: "https://www.linkedin.com/in/grant1shdesigns/",
                image: "./img/LI-In-Bug.png"
            },
            {
                name: "Resume",
                link: "https://drive.google.com/file/d/1IMLxiAVApaXvmVyvBmXxrL_xdzfx-ryd/view?usp=sharing",
                image: "./img/view-details-64.png"
            }
        ],
        references: {}
    },
    projects: [
        {
            name: "TYPOLab",
            description:`A rebuild of the website for the research lab TYPOLab. Rebuilt from a standard SquareSpace template, this new build runs off of the Javascript DOM, 
            strict typing from typescript, and parent JSON object that all the information in the page is built from.`,
            dates: "Spring 2024",
            institution: "University of Colorado Boulder - ATLAS Institute",
            collaborators: "N/A",
            hostingprofessor: "N/A",
            packages: ["Typescript", "Vite "],
            livePage: "https://grantishdesigns.me/TYPOLab/dist/index.html",
            isBuilt: true,
            details: {
                name: "TYPOLab",
                bannerImage: "",
                brief: {
                    title: "In Brief...",
                    copy: [""]
                },
                process: {
                    title: "process...",
                    copy: [""],
                    images: []
                },
                goal: {
                    title: "Goal...",
                    copy: [""]
                },
                scope: {
                    title: "Scope...",
                    copy: [""]
                },
                research: {
                    title: "Research...",
                    copy: [
                        {
                            title: "Research",
                            copy: [""]
                        },
                        {
                            title: "Functionality and Game Information",
                            copy: [""]
                        },
                        {
                            title: "Framework Plugins",
                            copy: [""]
                        },
                        {
                            title: "Electron.js",
                            copy: [""]
                        }
                    ],
                    images: []
                },
                development: {
                    copy: [
                        {
                            title: "Development Process",
                            copy: [""]
                        },
                        {
                            title: "Github and Version Management",
                            copy: [""]
                        }
                    ],
                    images: []
                },
                struggles: {
                    title: "Struggles...",
                    copy: [""]
                },
                final: {
                    title: "Final Deliverable...",
                    copy: [""],
                    link: ""
                }
            }
        },
        {
            name: "Impossible Cube",
            description: `An exploration of non-euclidean geometries by creating impossible
            situation in form that we are familiar with. Built with Three.js and vite, the project
            gives users a place to explore part of a mind-bending reality that is unknown to us.`,
            dates: "Fall 2023",
            institution: "University of Colorado Boulder",
            collaborators: "N/A",
            hostingprofessor: "Anthony Pinter",
            packages: ["Three.js", "WebGL", "Javascript", "CSS", "BlockBench", "vite"],
            livePage: "https://grantishdesigns.me/ImpossibleCube/dist/index.html",
            isBuilt: true,
            details: {
                name: "TYPOLab",
                bannerImage: "",
                brief: {
                    title: "In Brief...",
                    copy: [""]
                },
                process: {
                    title: "process...",
                    copy: [""],
                    images: []
                },
                goal: {
                    title: "Goal...",
                    copy: [""]
                },
                scope: {
                    title: "Scope...",
                    copy: [""]
                },
                research: {
                    title: "Research...",
                    copy: [
                        {
                            title: "Research",
                            copy: [""]
                        },
                        {
                            title: "Functionality and Game Information",
                            copy: [""]
                        },
                        {
                            title: "Framework Plugins",
                            copy: [""]
                        },
                        {
                            title: "Electron.js",
                            copy: [""]
                        }
                    ],
                    images: []
                },
                development: {
                    copy: [
                        {
                            title: "Development Process",
                            copy: [""]
                        },
                        {
                            title: "Github and Version Management",
                            copy: [""]
                        }
                    ],
                    images: []
                },
                struggles: {
                    title: "Struggles...",
                    copy: [""]
                },
                final: {
                    title: "Final Deliverable...",
                    copy: [""],
                    link: ""
                }
            }

        },
        {
            name: "Nexus Play",
            description:`A group development project working on building out a game launcher. The goal 
            of the launcher is collect all games into one place, so gamers to not have to have a Steam 
            launcher, Epic Games, Battle.net, and all the other launchers. Some games only ship on one launcher 
            so Nexus Play would collect them all in one place. People can also cross-check pricing across all launchers 
            and choose to buy the game where they want to.`,
            dates: "Fall 2023",
            institution: "University of Colorado Boulder",
            collaborators: "Jyotish Vardhan, Chin-Hsuan (Andrea) Wang",
            hostingprofessor: "N/A",
            packages: ["react", "electron", "JSX", "Tailwind CSS", "rawg.io API", "fontawesome API", "Vite", "Vercel"],
            livePage: "https://nexus-play.vercel.app/",
            isBuilt: true,
            details: {
                name: "Nexus Play",
                bannerImage: "./img/Nexus_Play/TitleImage.PNG",
                brief: {
                    title: "In Brief...",
                    copy: ["Nexus Play is a one-stop shop game launcher that pulls information from multiple other launchers (steam, Epic, Battle.net, etc.) and hosts it all in one place. The idea is to have a location where gamers can purchase games for the best deal, and prevent needing multiple installed platforms on their machines."]
                },
                process: {
                    title: "Process...",
                    copy: ["An initial prototype and styling was built in figma; providing the basics of the layout, UI styling, as well as the flows that we ended up making. Majority of this project is front-end related so the main framework that we will be working with is React.js. Electron.JS will also be used to create an executable, as well as make a web hosted version of the app. General styling will be done with tailwind css, as it allows for clean application of styles and organized file systems.", "Because of the large amount of game information that will be needed to accurately fill out the application, the group used an API from rawg.io to populate with game titles, descriptions, tags, and other information. Due note that getting accurate pricing information was not possible, so the prices are randomized for each platform. However, accurate pricing is not necessarily needed as the main idea is to see the price across multiple platforms to find the best price. Thus the functionality that is needed is just so each price is different, not accurate."],
                    images: ["./img/Nexus_Play/ReactLogo.png", "./img/Nexus_Play/TailwindLogo.png", "./img/Nexus_Play/ElectronLogo.png", "./img/Nexus_Play/ViteLogo.png", "./img/Nexus_Play/VercelLogo.png", ]
                },
                goal: {
                    title: "Goal...",
                    copy: ["To develop a functioning hi-fidelity prototype using a front-end framework of the Nexus Play platform."]
                },
                scope: {
                    title: "Scope...",
                    copy: ["With the time allotted for this project, the team is limiting development to one full flow through the application; specifically focusing on the process of purchasing a game."]
                },
                research: {
                    title: "Research...",
                    copy: [
                        {
                            title: "Research...",
                            copy: ["With a Figma build already created, research was geared away from interactions, style, and layout, and moved more towards functionality, resources for collecting game information, framework plugins, and learning how to use Electron.js for the platform."],
                            image: "./img/Nexus_Play/ResearchOverview.PNG"
                        },
                        {
                            title: "Functionality and Game Information...",
                            copy: ["With React as the framework, our first priority was to determine how to handle state, and how we needed to pass state throughout our workflow. Almost every frame uses state to generate the game information needed, so we were going to need it at the top level of the component tree. We also had to consider whether we wanted to pass state as a prop through each component, or use some global state.", "	We initially tried using both global state and passing state as a prop, but were running into some confusion on how to pull the correct values that we were looking for. Because of this, we transition to passing state through the component tree, even though it can be messier and less performant (due to the size of the flow we were making, we ruled out performance as a factor).", "With our method for handling state chosen, we shifted to where to acquire the game information, as well as some of the icons that would be used in some of the buttons. A group member discovered rawg.io, which is a database that holds copious amounts of video game information, and we used their API endpoint to populate images, game information, tags, developer, and other statistics about each particular game. One thing that this API did not have however, was game pricing. With some thought, we determined that the desired functionality of Nexus Play is to host the pricing from other game launchers, so the person using the platform can choose the best deal for the game they want to buy. With this in mind, we used randomly generated prices, as what we needed was for the prices to be different, for the other platforms to showcase the comparison that can be made between them."],
                            image: "./img/Nexus_Play/HomeScreen.PNG"
                        },
                        {
                            title: "Framework Plugins...",
                            copy: ["Being an app with multiple pages, we needed a way to update which page the person using the platform was on. Our first idea was to pass each page as a state, and when a button was clicked, the page content would be loaded with the new page held in state. This worked for some simple transitions initially, however it started to fall apart later on when we had more pages that needed to be loaded. The colleague of a group member mentioned a react router, Wouter, as an easy method for changing pages, and after some perusing of documentation, we chose the router as the desired method for changing pages."],
                            image: "./img/Nexus_Play/WouterCombined.png"
                        },
                        {
                            title: "Electron.js...",
                            copy: ["Being that if the application were fully developed and released, it made most sense to develop the application as an executable, instead of just a web application. Electron.js allows you to use web based scripting languages in this kind of development, so we would be able to build with React and still build downloadable software."],
                            image: ""
                        }
                    ],
                },
                development: {
                    copy: [
                        {
                            title: "Development Process",
                            copy: ["As a team of three developers, we split the creation of components up among each other, as well as some of the functionality and behind the scenes work. Bigger components like the main page, were worked on as a team, with each person creating individual aspects, while other whole components were developed by each person.", "The functionality that would be needed in the build would also be split up, with focuses on API and game information fetching, state management, and routing (after the using a router was agreed upon method of navigation).", "Sections that I managed included the detailed game page, where I was the main developer of the components, state management for the application, navigation on the home page, and assisting with the featured games section of the main page."],
                            image: ""
                        },
                        {
                            title: "Github and Version Management",
                            copy: ["Github is how the team collectively kept tabs on each other's work, as well as updating the main application. Each developer created a branch off of the main tree where they did their individual development processes, and then would commit those branches back into main when they were finished. Github is also how we managed issues and conflicting code, to keep everything organized, and everyone on the same page."],
                            image: "./img/Nexus_Play/GithubCommits.png"
                        }
                    ]
                },
                struggles: {
                    title: "Struggles...",
                    copy: ["Being a team of three developers, and with English not being the native language of the majority, communication was the biggest struggle of the group. Whatsapp was our main method of getting in touch with each other outside of time in class, which worked alright. However, it did lead to some misinterpretations of code explanations, and a messy repository for resources.", "As a team, we were also not very good about annotating our code, so it led to some improper uses of team created components, and some conflicting components in general. The upside to this is that we all learned the importance of documentation and code annotation. Having in code comments wildly reduces time spent on trying to figure out what something is doing. It also led to some interesting debugging situations, which bolstered that skill on all of us."]
                },
                final: {
                    title: "Final Deliverable...",
                    copy: ["The final form of this project is a fully functioning flow through the process of purchasing a game in the launcher; with game details imported from an API. Some next steps for this project would be adding the rest of the flows to application, and connection to a backend. Since the application is made in react, Next.js would prove to be a useful framework to handle the backend, as well as some optimization when it comes to fetching from APIs. As it stands now, the components fill with content as the API readies the information. This could be optimized by awaiting all fetches to be complete before rendering, as well as add skeleton UI`s to the pages, that let the user know that information is loading, not broken. Next.js would also support database fetching and user login so it would be personalized for each person.", "Click the image on the left to visit the prototype"],
                    image: "",
                    link: "https://nexus-play.vercel.app/"
                }
            }
        },
        {
            name: "TEXTPlinko",
            description:`A exploration into turning images of text into a collidable environment where an object can interact 
            with the text and trigger events`,
            dates: "Spring 2024",
            institution: "University of Colorado Boulder - ATLAS Institute ",
            collaborators: "N/A",
            hostingprofessor: "N/A",
            packages: ["Javascript","p5.JS", "p5.sound"],
            livePage: "https://grantishdesigns.me/TextPlinko/",
            isBuilt: true,
            details: {
                name: "TYPOLab",
                bannerImage: "",
                brief: {
                    title: "In Brief...",
                    copy: [""]
                },
                process: {
                    title: "process...",
                    copy: [""],
                    images: []
                },
                goal: {
                    title: "Goal...",
                    copy: [""]
                },
                scope: {
                    title: "Scope...",
                    copy: [""]
                },
                research: {
                    title: "Research...",
                    copy: [
                        {
                            title: "Research",
                            copy: [""]
                        },
                        {
                            title: "Functionality and Game Information",
                            copy: [""]
                        },
                        {
                            title: "Framework Plugins",
                            copy: [""]
                        },
                        {
                            title: "Electron.js",
                            copy: [""]
                        }
                    ],
                    images: []
                },
                development: {
                    copy: [
                        {
                            title: "Development Process",
                            copy: [""]
                        },
                        {
                            title: "Github and Version Management",
                            copy: [""]
                        }
                    ],
                    images: []
                },
                struggles: {
                    title: "Struggles...",
                    copy: [""]
                },
                final: {
                    title: "Final Deliverable...",
                    copy: [""],
                    link: ""
                }
            }
        },
        {
            name: "Really Bad Galaga",
            description: `My final project when I was just learning web development. Uses the canvas library and OOP to 
            create and admittedly buggy Galaga clone. I created the sprites for the ship and aliens. 
            The game definitely has some functionality quirks (i.e. don't hold the space bar), but it was a great experience in 
            game development as well as some mild crunch culture.`,
            dates: "Fall 2021",
            institution: "University of Colorado Boulder",
            collaborators: "N/A",
            hostingprofessor: "N/A",
            packages: ["Javascript", "CSS", "Canvas", "Pixilart.com"],
            livePage: "https://grantishdesigns.me/FinalProject/finalGame.html",
            isBuilt: true,
            details: {
                name: "TYPOLab",
                bannerImage: "",
                brief: {
                    title: "In Brief...",
                    copy: [""]
                },
                process: {
                    title: "process...",
                    copy: [""],
                    images: []
                },
                goal: {
                    title: "Goal...",
                    copy: [""]
                },
                scope: {
                    title: "Scope...",
                    copy: [""]
                },
                research: {
                    title: "Research...",
                    copy: [
                        {
                            title: "Research",
                            copy: [""]
                        },
                        {
                            title: "Functionality and Game Information",
                            copy: [""]
                        },
                        {
                            title: "Framework Plugins",
                            copy: [""]
                        },
                        {
                            title: "Electron.js",
                            copy: [""]
                        }
                    ],
                    images: []
                },
                development: {
                    copy: [
                        {
                            title: "Development Process",
                            copy: [""]
                        },
                        {
                            title: "Github and Version Management",
                            copy: [""]
                        }
                    ],
                    images: []
                },
                struggles: {
                    title: "Struggles...",
                    copy: [""]
                },
                final: {
                    title: "Final Deliverable...",
                    copy: [""],
                    link: ""
                }
            }
        },
        {
            name: "Audio Turtle",
            description: `My first bout into deeper programming that was done in a group. Uses Python and the turtle library 
            to create an audio visualizer. A python module collects information from a song that is playing 
            (amplitude and frquency) and animates the turtle objects based on these values`,
            dates: "Fall 2020",
            institution: "University of Colorado Boulder",
            collaborators: ["Peyton O'Brien", "Grant Young"],
            hostingprofessor: "N/A",
            packages: ["Python", "Turtle"],
            livePage: "https://github.com/GrantLancaster/Key-Projects/blob/main/Audio_Visualizer.py",
            isBuilt: true,
            details: {
                name: "TYPOLab",
                bannerImage: "",
                brief: {
                    title: "In Brief...",
                    copy: [""]
                },
                process: {
                    title: "process...",
                    copy: [""],
                    images: []
                },
                goal: {
                    title: "Goal...",
                    copy: [""]
                },
                scope: {
                    title: "Scope...",
                    copy: [""]
                },
                research: {
                    title: "Research...",
                    copy: [
                        {
                            title: "Research",
                            copy: [""]
                        },
                        {
                            title: "Functionality and Game Information",
                            copy: [""]
                        },
                        {
                            title: "Framework Plugins",
                            copy: [""]
                        },
                        {
                            title: "Electron.js",
                            copy: [""]
                        }
                    ],
                    images: []
                },
                development: {
                    copy: [
                        {
                            title: "Development Process",
                            copy: [""]
                        },
                        {
                            title: "Github and Version Management",
                            copy: [""]
                        }
                    ],
                    images: []
                },
                struggles: {
                    title: "Struggles...",
                    copy: [""]
                },
                final: {
                    title: "Final Deliverable...",
                    copy: [""],
                    link: ""
                }
            }
        },
        {
            name: "Personal Site",
            description: `Adaptive website built to house my personal projects, and present
            them in a concise manner. The site is built to show my personal interest and style, as 
            well as be fully adaptable to desktop and mobile.`,
            dates: "Ongoing Project",
            institution: "University of Colorado Boulder",
            collaborators: "N/A",
            hostingprofessor: "N/A",
            packages: ["JSON", "Javascript", "CSS", "particle.js"],
            livePage: "https://github.com/GrantLancaster/GrantLancaster.github.io/tree/main/Script",
            isBuilt: true,
            details: {
                name: "Personal Site",
                bannerImage: "",
                brief: {
                    title: "In Brief...",
                    copy: [""]
                },
                process: {
                    title: "process...",
                    copy: [""],
                    images: []
                },
                goal: {
                    title: "Goal...",
                    copy: [""]
                },
                scope: {
                    title: "Scope...",
                    copy: [""]
                },
                research: {
                    title: "Research...",
                    copy: [
                        {
                            title: "Research",
                            copy: [""]
                        },
                        {
                            title: "Functionality and Game Information",
                            copy: [""]
                        },
                        {
                            title: "Framework Plugins",
                            copy: [""]
                        },
                        {
                            title: "Electron.js",
                            copy: [""]
                        }
                    ],
                    images: []
                },
                development: {
                    copy: [
                        {
                            title: "Development Process",
                            copy: [""]
                        },
                        {
                            title: "Github and Version Management",
                            copy: [""]
                        }
                    ],
                    images: []
                },
                struggles: {
                    title: "Struggles...",
                    copy: [""]
                },
                final: {
                    title: "Final Deliverable...",
                    copy: [""],
                    link: ""
                }
            }
        }
    ],
    contact: "grant.lancaster3@gmail.com"
}
export default grantL;