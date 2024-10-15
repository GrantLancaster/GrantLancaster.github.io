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
                link: "https://drive.google.com/file/d/1emNJM9987-N3GVF8MTzklfhc_1nLT4yc/view?usp=sharing",
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
            packages: ["Typescript", "Vite", "Javascript"],
            livePage: "https://grantishdesigns.me/TYPOLab/dist/index.html",
            github: "https://github.com/GrantLancaster/GrantLancaster.github.io/tree/main/TYPOLabV.2",
            isBuilt: true,
            details: {
                name: "TYPOLab",
                bannerImage: "./img/TYPOLab/typolabheader.png",
                brief: {
                    title: "In Brief...",
                    copy: ["A rebuild of the website for the research lab, TYPOLab in the ATLAS Institute at the University of Colorado Boulder, from a SquareSpace template, to a Javascript site. Along with this change, updates on the experience, theming, and functionality were also added to give the site a new feel."]
                },
                process: {
                    title: "Process...",
                    copy: ["Two versions of the new site were developed. Version 1.0 was geared more towards being a direct transition from the SquareSpace template into a component based Typescript website. Along with the freedom of unrestricted functionality and styling, typescript also allowed for the creation of components that inform developers of how the functions are working and what kinds of data they can accept/use. As the transition was being made, critique from the client was used to make sure that the styling and functionality were desirable, and if they were not, the goals that the client had for them.", "	Version 2.0 was a hard restyle and layout change for the site. The client had found new inspiration for what they wanted the site to look like, and provided some information on what they wanted. At this point, I too had made some changes that would hopefully allow the client to make changes to the site on their own with a little more ease. I moved off of typescript and onto vanilla javascript, and did the rebuild of the site."],
                    images: ["./img/TYPOLab/JavaScriptLogo.png", "./img/TYPOLab/TypescriptLogo.png", "./img/TYPOLab/ViteLogo.png", ]//THESE ARE THE TECH STACK LOGOS
                },
                goal: {
                    title: "Goal...",
                    copy: ["To recreate the portfolio site for TYPOLab; removing the need to make SquareSpace payments, as well as update styling, theming, and functionality. Secondly, to develop the website in such a way that the code is easy to manipulate so the client can make changes as needed."]
                },
                scope: {
                    title: "Scope...",
                    copy: ["The is a full rebuild project, creating the new site from scratch, with some inspiration resources as well as the current TYPOLab site as a reference. "]
                },
                research: {
                    title: "Research...",
                    copy: [
                        {
                            title: "The Current Site...",
                            copy: ["Research started by going over the current TYPOLab website; looking at color scheme, layout, how media is presented, copy, and the use of space. I have some familiarity with website builders like Squarespace, and from that, it was easy to see why the layout was the way it was. A few things of note were a lot of empty whitespace on some of the project pages. Some of the page animations were slow to render and became obnoxious as they would re-run every time one navigates to the page. Some things that I took away from this was managing whitespace well, and if animations are present, then keep them to run only when the site is visited the first time. These changes should help with some initial experience.", "The home page of the current site had a sort of hero image of the logo. Liking that, I decided to keep that as a part of the new site, and potentially use an animation to turn it into the persistent header among all pages. Another thing that I noticed on the current site is that each time you click on a project, it loads an entire new webpage. With the amount of content on the page, this seems unnecessary, so another design objective is to keep all the website content in one html file, and then use javascript to change the page content depending on what is clicked."],
                            image: "./img/TYPOLab/CurrentSite.PNG"
                        },
                        {
                            title: "New Things for the New Site (v1.0 and v2.0)...",
                            copy: ["It was also requested that a newsletter be compatible with the site, and with this request, there were a few options. The most complex being that of using HTML forms along with an API endpoint (I found mailchimp may be good here) to have people sign up for the newsletter. Another option is have the TYPOLab site navigate to another page where the onboarding would take place, or lastly, use an external blog style site as the newsletter, and have site visitors navigate to that page. The ideal seemed to be the use of an API and HTML forms, so that is the method that I focused on "],
                            image: "./img/TYPOLab/CombinedContact.png"
                        },
                        {
                            title: "TYPOLab v1.0...",
                            copy: [""],
                            image: "./img/TYPOLab/v1HomeScreen.PNG"
                        },
                        {
                            title: "TYPOLab v2.0 Changes...",
                            copy: ["Version 2.0 of the TYPOLab site had some significant changes to theming, layout, and styling. For one, the color scheme was changed from yellow, black, and white, to just black and white. I recommended using a more dark carbon-black as it can be a little nicer on the eyes (also looks more like a copy on paper in a book), which the client liked. For the layout, the client had sent me two resources that they liked the look of: one being a wordpress template, and the other being the website for a design studio.", "The design studio site used a two column layout for their site, as well as keeping all the content of the website in one large panel. The client wanted to use the two columns, and I had also asked if they wanted to use one long page for all the content. Doing so would make navigation buttons need to function a little differently, with instead of loading new content, having them navigate to already rendered content. The client liked this idea too, so that was a functionality that was added to the development list. The wordpress template used its color scheme in such a way that all assets were colored to the scheme. Images and media had filters, and copy followed a high contrast theming. Black and white color scheme is easy to copy, but figuring out how to filter images was added to the list of things to figure out how to do."],
                            image: "./img/TYPOLab/v2HomeScreen.PNG"
                        },
                    ],
                },
                development: {
                    title: "Development...",
                    copy: [
                        {
                            title: "Component Based Structure...",
                            copy: ["From previous React.js experience, a component based development style was chosen to be used for this rebuild. The different sections were built as generic page fragments with some conditional statements to give them a little more customizability. The idea behind this choice was to be able to write the function once, and re-instantiate it like one would with a class, just passing new parameters (in this case the page content) to update and make each section different.", "This structure also supports the single parent data file system, and it lets the actual web page be automatically generated from this parent file, as long as the JSON in the file follows the same formatting. This formatting issue is helped by typescript because of the interface functionality that the language has. On top of this, updates can be made by copying the previous entry, and then changing the content. This ensures that the object will be rendered properly."],
                            image: "./img/TYPOLab/ComponentStructure.png"
                        },
                        {
                            title: "Automation and the DOM...",
                            copy: ["The idea for how the website would function was that it would have a parent data file, in this case a JSON file, that holds all the information that will be displayed on the website. The sections of the website were the different sections of the JSON object. With data being pulled in this fashion, DOM manipulation became the method for creating the HTML that is the website. With for loops and conditionals, the data from the JSON object can be passed as arguments into functions, and then those functions can return newly generated HTML with the content present.", "As far as expanding the website is concerned, all one needs to do is copy an entry of data, paste as the next index of the array, then manipulate the content to what one desires. The scripting will do all the rest of the work associated with rendering the website. With this automation in place, it meant that no html needed to be written. It could all be done in the scripting language."],
                            image: "./img/TYPOLab/DataParent.PNG"
                        },
                        {
                            title: "Documentation and Accessible Code...",
                            copy: ["Going into this rebuild, I knew that the client would eventually make changes on their own, and while they have fluency in basic web languages, reading other people's code can be difficult. With this in mind, I wanted to make my code easier to handle for those who do not see it often. Typescript allows one to do this easier by typing the variables and data that you are using. IDE's can read this and then let developers know what kind of data the function is looking for (think IntelliSense in VSCode). Using descriptive variable names and parameters adds to this when something like IntelliSense is not available. Commenting the code also allowed for me to speak about the intention of the code; clarifying confusing areas."],
                            image: "./img/TYPOLab/AccessibleCode.PNG"
                        }
                    ],

                },
                struggles: {
                    title: "Struggles...",
                    copy: ["A main struggle was determining how to set up the parent data file. I knew that it was going to be JSON, but wasn't entirely sure what kind of data types were going to be present for each key. Nested objects were also an issue, because at the time, each key was unique, so I needed a way to both count the number of keys, as well as, get what each key actually was, so I could target specific projects. The initial solution was to use Object.keys() to return an array for which I could use its length and values to automate going through the data file. Later however, I realized that it would be easier to nest the objects in an array. This way, I didn't need to generate a new array, but use the one that is already present. This also allowed for simple integer incrementing for indexing the object instead of pulling a string from another variable.", "	Typescript also became a problem of sorts, but not because it was giving issues, but because of its accessibility. Typescript has to be compiled before it can be used in a web page. Due to the nature of this project and that the client will be most likely making updates themselves, having extra steps for development, testing, building, and deploying may make it harder for the client to make changes. Typescript is phenomenal if the people that are going to be handling it are familiar with how it runs. However, for those that are only familiar with javascript, it adds extra steps into the process, which only introduces more walls for which someone has to climb over. If I wanted my code to be accessible, I was going to have to document it well, and keep it in a territory that the client knows how to handle.", "Another issue for this project was communication. I prefer to iterate quickly so that the less desirable designs are out of the way early. The majority of communication was through zoom and slack, so it was hard to get a hold of the client for some feedback and/or their opinions on the designs. I'm still not entirely sure how to get around situations like this, but going with my gut seemed to work well. Not spending a lot of time on the prototypes also helps as it prevents wasted time on designs that the client did not like."]
                },
                final: {
                    title: "Final Deliverable...",
                    copy: ["Version 2.0 ended up being the final deliverable for the client, and they seemed quite pleased. The design was clean and handled well on desktop and mobile hardware. The backend and parent data file made sense and updates were easy. Being the v2 was built with javascript let the client make changes as they wanted, and left them feeling like they could do things themselves if/when they wanted to.", "Click the images on the left to view the sites."],
                    link: ["https://grantishdesigns.me/TYPOLab/dist/index.html", "https://grantishdesigns.me/TYPOLabV.2/"],
                    image: ["./img/TYPOLab/v1Link.png", "./img/TYPOLab/v2Link.png"]
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
            packages: ["Three.js", "WebGL", "Javascript", "CSS", "BlockBench", "Vite"],
            livePage: "https://grantishdesigns.me/ImpossibleCube/dist/index.html",
            github: "https://github.com/GrantLancaster/GrantLancaster.github.io/tree/main/ImpossibleCube",
            isBuilt: true,
            details: {
                name: "Impossible Cube",
                bannerImage: "",
                brief: {
                    title: "In Brief...",
                    copy: ["The impossible cube is an exploration into non-euclidean geometry. While there are extreme cases like hyperbolic geometry and spherical geometry, the cube is a mild version of these spaces. It breaks traditional expectations as one cube should have the same thing in each face, but the impossible cube shows something different in each face. The experience is achieved by manipulating the stencil layer inside the graphical pipeline; which allows for almost selective rendering of objects."]
                },
                process: {
                    title: "Process...",
                    copy: ["Research was the big first step for this project. I needed to understand more about non-euclidean geometries, and the almost broken realities of these spaces. I had stumbled across a few resources for learning about this topic, as well as some very interesting video games that play with non-euclidean geometry: Hyperbolica and Prey 2006 are the most notable ones. These games are using more extreme versions of non-euclidean space, especially Hyperbolica, which renders its worlds in hyperbolic and spherical space, along with all the weird rules that apply in those spaces. Research also included determining what software to use to build this project (more on this later).", "Up next came a basic prototype. The goal with this was to make sure that the engine chosen could manipulate objects in the desired way, and make sure that the stencil buffer could be edited for those objects. Once that was established, development shifted over to asset creation. Blockbench was the main software for this, as well as an A.I. image generator later on for making backgrounds. With all the technical work done, the last parts of the project were to make sure that it functioned using touch controls, and coming up with whatever object(s) will be inside of each face of the cube.", "Lastly, once the skeleton was completed, more faces were added to the cube, as well as some miscellaneous functionality to provide some more interactivity to the software. The final form of the project was submitted to ATLAS EXPO and presented in this showcase."],
                    images: ["./img/Impossible_Cube/JavaScriptLogo.png", "./img/Impossible_Cube/blockbenchlogo.png", "./img/Impossible_Cube/ThreejsLogo.png", "./img/Impossible_Cube/ViteLogo.png", "./img/Impossible_Cube/WebGLLogo.png", ]
                },
                goal: {
                    title: "Goal...",
                    copy: ["To create an interesting interactable to be presented at ATLAS EXPO, that showcases a potential way of viewing the world, as well as showcase just how powerful web development frameworks can be."]
                },
                scope: {
                    title: "Scope...",
                    copy: ["Originally, this project would have been the cube, but each face had interactables inside of it that would have translated to the other faces. However, due to the nature of the stencil buffer and time constraints, the scope was shifted to an interactable that is just the cube with its faces, as well as a few more smaller interactions. The other idea was to make each face not interact with each other, but have each face generated new each time the page was loaded. This would require A.I. generation tools, which were deemed too expensive for practical use in this project"]
                },
                research: {
                    title: "Research...",
                    copy: [
                        {
                            title: "Initial Idea...",
                            copy: ["This project is the spawn of something cool that I saw on Youtube, and a desire to be a part of ATLAS EXPO. I had watched a video on non-euclidean geometries in video games, and was truly taken back by the complete abnormality that was these spaces. Exploring more into this phenomenon, I stumbled across some other mind-bending illusions and trickery that games use to make these things. One of these was an impossible cube, and being interested in the topic and having a desire to be in ATLAS EXPO, I decided to make my own version."],
                            image: "./img/Impossible_Cube/InitialIdea.PNG"
                        },
                        {
                            title: "Platform...",
                            copy: ["Deciding on what engine to make the project in was a challenge. Depending on how I wanted this project to exist, it would either need to be supported on the web and able to run in the browser, or have dedicated hardware wherever that was running the software wherever it was set up.", "First option of the engine was Unity. It was free, had great documentation, and was webGL compatible for web hosting, as well as an executable if need be. It would be able to manipulate the stencil buffer with some custom code, and has a decent interface for creating the software. Some more investigation turned up another option: Three.js. Three.js was a javascript based 3D renderer with full web compatibility. A colleague had used it to make a class project at one point and showed me some of its capabilities. All that was needed now was to figure out if it could edit the stencil buffer for objects. After some digging, it was found that Three.js could manipulate the stencil layer, as long as one did some finagling of the rendered objects. With that, Three.js was the engine, and web based platform was where this project was going to live."],
                            image: "./img/Impossible_Cube/UnityVThree.png"
                        },
                        {
                            title: "The Stencil Buffer...",
                            copy: ["This project revolved entirely around the ability to change a part of the graphics pipeline: the stencil layer. What this layer effectively lets you do is assign individual pixels integer values, and then with those values, mask in or out certain pixels. Only pixels with the same stencil value will be shown, and all others will not appear in the scene. For example, you render a window in a wall, and through the window is a render of a tree and a person. Now say that during the rendering process of the tree and person, we assign them stencil values of 1 and 2 respectively. Changing the stencil value to the transparent plane that is the window, to 1, allows you to see the tree, but not the person. If you change the windows stencil value to 2, you would then see the person, but not the tree. This process allows you to render many objects in the same space, and then selectively show them depending on what you are looking through."],
                            image: "./img/Impossible_Cube/GraphicsPipelinecombo.png"
                        }
                    ],
                },
                development: {
                    title: "Development...",
                    copy: [
                        {
                            title: "Rendering Native Mesh Objects…",
                            copy: ["Initial setup of Three.js was to get the engine to render objects, and to generalize this process to allow for a more dynamic code execution. Three.js is able to render a few different primitive meshes in its library (things like sphere, plane, cylinder, pyramid, etc.), as well as materials to attach to the meshes. When using this method, you had to create a mesh and a material separately, attach them together, and then add them to the scene. From there, you can manipulate their data values to move them around, scale them, etc. Generalizing this process was simple enough, as it was just a function that took in parameters of what mesh, type of material, and material color, which then returned to the combined, ready to render, object.", "When one of these objects was logged to the console, there were a few data values that could enable writing to the stencil layer: enabling the stencil buffer, stencil value, and the function that handles how the pixels will be rendered (same value, different value). These settings were found to exist in the materials data object."],
                            image: "./img/Impossible_Cube/BasicModel.png"
                        },
                        {
                            title: "Rendering Customs Objects…",
                            copy: ["Getting custom objects to render was a whole different ball game from the native mesh method. Custom objects already had a material on them, which meant that I didn't need to generate a new one. This sounds like it saves a step, but with how the function that I created, set up the stencil settings, I would need to find a new way to change the stencil settings. Noting that the material object was where the stencil settings existed, Those settings could be changed again by searching through the custom object material settings. Quick note: custom objects were .gltf models, which meant that they held all of the data for materials, parent and child objects (if any) and all the other settings. This process ended up being easy for simple, one mesh custom objects, as there was only one set of settings to change.", "Where this got complicated was when the objects also had child objects. Gltf models keep track of the parent-child tree, so it’s not just one big model, but a list of all the child objects making up the full piece. So while manipulating simple custom objects was easy and only needed one change to get the stencil working, complex objects needed to be delved through, and all stencil information updated for all children. However, a hacky way of doing this was found. By delving to the bottom of the object tree and changing the information at the bottom; the changes also seemed to propagate through the rest of the chain. So as long as the bottom could be updated, then the stencil for the whole object could be changed. "],
                            image: "./img/Impossible_Cube/CustomObject.png"
                        },
                        {
                            title: "Render Order and Object Loading…",
                            copy: ["With how the cube was set up, and each face having objects of different complexity, the render order of the cube got all sorts of skewed. The rendering function for Three.js was a procedural function, that is, it would load when the code hit that line, and would wait until the object was fully rendered before continuing on in the program. If all objects are relatively simple, and the machine that the software is being viewed on is powerful enough, then this is not a problem. Those are two pretty edge case scenarios however, and certainly will not apply to all people. When on a slower device, the objects would pop in randomly, and sometimes out of order, which would mess with the stencil layers.", "The program needed to be able to load some base level sections while also loading the objects. Thankfully, an async version of the loading function existed in the Three.js. This function combined with a promiseAll() statement meant that the objects could all be loaded at once, and the whole scene rendered when all objects were ready. This change enabled tighter control over which objects were loading where, and made sure the stencils always lined up. This vastly changed how rendering objects was handled, and made the code more performant; with the caveat of a longer loading screen when the site is initially opened."],
                            image: "./img/Impossible_Cube/RenderOrder.PNG"
                        },
                        {
                            title: "Creative Development…",
                            copy: ["After all of the model handling was figured out and generalized, the rest of development was purely around what to put in the faces of the cube. Since each face of the cube presented a different thing, than portals to other places seemed like a great way to handle the creative aspect. Each was would have its own skybox environment, along with a weird animation inside. Some of the faces were pretty interesting so a function that would expand the side of the cube was made, to allow the viewer to see more.", "During the development of the object loading and stencil manipulation, the cube frame had accidentally been removed from the scene, which left this very weird looking cube-ish thing. The cube had no actual sides, but was implied by the different content shown on each side. This was a super interesting mess-up, so it was turned into a function and the cube frame can now be toggled on and off as desired. Finally, a second larger cube was added to the scene, so if the viewer zoomed out, they could see a second cube that plays on the first cube in some ways."],
                            image: "./img/Impossible_Cube/CreativeDev.png"
                        },
                    ],

                },
                struggles: {
                    title: "Struggles...",
                    copy: ["Biggest issues here (as mentioned earlier) were certainly figuring out the stencil settings, getting customs models to load, manipulating these objects to change stencil settings, and handling rendering order."]
                },
                final: {
                    title: "Final Deliverable...",
                    copy: ["The final form of this project can take place on both mobile and desktop environments. On load, the viewer can see the first cube, which has different worlds on all of its faces. Each face has an interesting or weird animation happening inside of it, which may or may not connect to the background (that is left up to the viewer to decide). If one zooms out, a second, much larger cube can be seen that plays on some of the faces of the first cube, as well as having some weird visuals to look at.", "The final form of the project was also presented during ATLAS Expo, where I (the developer) would talk people through the process of making the cube, the inspiration, and answering questions, while they got to play with it. It was being run on a large touch screen monitor, so it felt like more of an interaction than just for viewing. The ultimate intention of this project was to create something that someone would say “oh that's weird”, and then want to play with it, where it would just exist without any prior context to its existence."],
                    image: ["./img/Impossible_Cube/Final.png"],
                    link: ["https://grantishdesigns.me/ImpossibleCube/dist/"]
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
            packages: ["React.JS", "Electron.JS", "JSX", "Tailwind CSS", "Rawg.io API", "Fontawesome API", "Vite", "Vercel"],
            livePage: "https://nexus-play.vercel.app/",
            github: "https://github.com/GrantLancaster/Nexus_Play/tree/main/Nexus_Play",
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
                            image: "./img/Nexus_Play/ElectronScreenShot.PNG"
                        }
                    ],
                },
                development: {
                    copy: [
                        {
                            title: "Development Process",
                            copy: ["As a team of three developers, we split the creation of components up among each other, as well as some of the functionality and behind the scenes work. Bigger components like the main page, were worked on as a team, with each person creating individual aspects, while other whole components were developed by each person.", "The functionality that would be needed in the build would also be split up, with focuses on API and game information fetching, state management, and routing (after the using a router was agreed upon method of navigation).", "Sections that I managed included the detailed game page, where I was the main developer of the components, state management for the application, navigation on the home page, and assisting with the featured games section of the main page."],
                            image: "./img/Nexus_Play/ComponentsScreenShot.PNG"
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
                    copy: ["The final form of this project is a fully functioning flow through the process of purchasing a game in the launcher; with game details imported from an API. Some next steps for this project would be adding the rest of the flows to application, and connection to a backend. Since the application is made in react, Next.js would prove to be a useful framework to handle the backend, as well as some optimization when it comes to fetching from APIs. As it stands now, the components fill with content as the API readies the information. This could be optimized by awaiting all fetches to be complete before rendering, as well as add skeleton UI`s to the pages, that let the user know that information is loading, not broken. Next.js would also support database fetching and user login so it would be personalized for each person.", "Click the image on the right to visit the prototype"],
                    image: ["./img/Nexus_Play/FinalImage.PNG"],
                    link: ["https://nexus-play.vercel.app/"]
                }
            }
        }
    ],
    backlogs: [
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