const grantL = {
    aboutme:`Starting off as a chemist, I couldn't find what I was looking for in my work. It lacked creativity, satisfaction, 
    and the ability to say "I built that". I decided to try my hand at the ATLAS Institute at University of Colorado Boulder, 
    and everything changed. 
    <br><br>
    Now I'm a front-end developer making applications for fun, for people, and for exploration; trying out new techniques, designs, 
    and functions. I love front-end, but my main passion is helping people, so I want to use my skills to create projects that 
    enhance people and how they live.
    `,
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
        links: {
            github: "https://github.com/GrantLancaster",
            linkedin: "https://www.linkedin.com/in/grant1shdesigns/",
            portfoliosite: "https://grantishdsigns.me",
            resume: "https://drive.google.com/file/d/1IMLxiAVApaXvmVyvBmXxrL_xdzfx-ryd/view?usp=sharing",
            twitchtv: ""
        },
        references: {}
    },
    projects: {
        TYPOLab: {
            name: "TYPOLab",
            description:`A rebuild of the website for the research lab TYPOLab. Rebuilt from a standard SquareSpace template, this new build runs off of the Javascript DOM, 
            strict typing from typescript, and parent JSON object that all the information in the page is built from.`,
            dates: "Spring 2024",
            institution: "University of Colorado Boulder - ATLAS Institute",
            collaborators: "N/A",
            hostingprofessor: "N/A",
            packages: ["Typescript", "Vite "],
            livePage: "https://grantishdesigns.me/TYPOLab/dist/index.html",
            isBuilt: true
        },
        impossibleCube: {
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
            isBuilt: true
        },
        nexusPlay: {
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
            isBuilt: true
        },
        textPlinko: {
            name: "TEXTPlinko",
            description:`A exploration into turning images of text into a collidable environment where an object can interact 
            with the text and trigger events`,
            dates: "Spring 2024",
            institution: "University of Colorado Boulder - ATLAS Institute ",
            collaborators: "N/A",
            hostingprofessor: "N/A",
            packages: ["Javascript","p5.JS", "p5.sound"],
            livePage: "https://grantishdesigns.me/TextPlinko/",
            isBuilt: true
        },
        galaga: {
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
            isBuilt: true
        },
        audioTurtle: {
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
            isBuilt: true
        },
        portfolio: {
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
            isBuilt: true
        }
    },
    contact: "grant.lancaster3@gmail.com"
}
export default grantL;