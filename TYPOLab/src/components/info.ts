
interface info {
    [keys: string | number]: string | Array<string> | Object | number;
}


export const TYPOLab: info = {
    "Sections": {
        "About": {
            "Copy": {
                "TLDR": "TL;DR: TYPO Lab is a design lab doing weird things with text-based technologies.",
                "Details": ["Located on the third floor of the ATLAS/Roser Building, the TYPO Lab offers the space, technical resources, and faculty support to promote creative work and practice-based research into text-based technologies. The lab funds undergraduate and graduate research positions, provide hands-on access to historical and contemporary text-based technologies, and run thematic and technical workshops and demonstrations for the CU Boulder community.",

                "TYPO Lab explores the materiality of language: the way that the structures, forms, and physical inscription technologies of language play an active role in the construction of meaning. The lab offer access to a wide range of technologies related to text. From a movable type letterpress to state-of-the-art computer workstations equipped for machine learning projects, it facilitates the exploration of text-based technologies from historically broad and interdisciplinary perspectives.", 

                "“Typo” is an abbreviation for typography, but it also signifies a typographic error or mistake. Our lab logo, based on the form of an insertion edit mark used in proofreading, is a visual reminder of the generative potential of errors and mistakes. The TYPO Lab frames the errors, glitches, and mistakes of text-based technology—and technology in general—as a locus of creative inquiry and research. We rarely notice technology when it operates as intended and the lab welcomes unconventional and unorthodox use cases that can illuminate its limitations and affordances. Further TYPO Lab seeks to destabilize these technologies to uncover the cultural biases and norms frequently embedded within their construction. TYPO Lab seeks to be a diverse and inclusive home for creative, critical, and speculative design work that transcends disciplinary perspectives and boundaries."]
            }
        },
        "Projects": {
            1: {
                "Name": "Experimental Typography Zine",
                "Dates": "Fall 2023",
                "People": ["Nita Byati", "Sam Chen", "Jason Fontillas", "Charlotte Garrett", "Marla Kassanoff", "Reed Little", "Ashley Paulson", "Robby Strong", "Q Tran", "Atlas Zaina"],
                "ZinePDFLink" : "../pdf/ExperimentaTypographyFA2023Zine.pdf",
                "Description": "N/A",
                "Images": []
            },
            2: {
                "Name": "Clews Typface",
                "Dates": "Fall 2023",
                "People": ["Nita Byati", "Sam Chen", "Jason Fontillas", "Charlotte Garrett", "Marla Kassanoff", "Reed Little", "Ashley Paulson", "Robby Strong", "Q Tran", "Atlas Zaina"],
                "ZinePDFLink" : "N/A",
                "Description": "Inspired by hand-carved lettering found during a Château de la Napoule residency, this collaborative typeface was designed by the Fall 2023 Experimental Typography course. Each student was assigned a subset of the standard glyph set for Latin fonts. Once completed, we designed and printed a types pecimen at the Book Arts League. The typeface was printed using a custom polymer plate and the student's names were hand set in 14 pt. Futura Bold.",
                "Images": []
            },
            3: {
                "Name": "Word Vector Sculptures",
                "Dates": "Spring 2021",
                "People": ["Brad Gallagher", "Anonymous Student"],
                "ZinePDFLink" : "N/A",
                "Descrption": `These meanings can be mapped to representational vectors in a many-dimensional space that highlight relationships between those words within a body of text.
                We used t-distributed stochastic neighbor embedding (TSNE) to reduce the 300-dimensional word vectors to 3 dimensions.
                We used a word vector model called “fasttext-wiki-subwords-300” which was trained on 1 million unique words from the Wikipedia 2017, UMBC webbase corpus and statmt.org news dataset (16B tokens).
                We then used MeshLab to make a closed surface of these 3d points.`,
                "Images": []
            },
            4: {
                "Name": "3D Alphabits™ Typeface",
                "Dates": "",
                "People": ["Marla Kassanoff", "Joel Swanson"],
                "ZinePDFLink" : "N/A",
                "Descrption": `Inspired by the discontinuation of Alphabits™ cereal in May of 2021, this archival project seeks to document the breakfast cereal by 3D scanning and averaging the industrially produced letterforms for one of the few remaining boxes of the cereal. This dimensional typeface will then be used in an augmented reality installation that places viewers within a virtual bowl of cereal.`,
                "Images": []
            },
            5: {
                "Name": "Experimental Typography Zine",
                "Dates": "Spring 2021",
                "People": ["Gray Assi", "Olivia Blankenship", "Bella Borenstein", "Willie Green", "Julia Hancock", "Siyang Liu", "Anna Lowrimore", "Sidd Nair", "Lily Pelton", "Ayesha Rawal", "Teddy Robinson", "Paola Solorzano", "Elodie Thelliez","John Whiteman"],
                "ZinePDFLink" : "N/A", // I NEED THIS FROM JOEL. WRONG THING IS LINKED ON CURRENT SITE
                "Descrption": "N/A",
                "Images": []
            },
            6: {
                "Name": "Experimental Typography Zine",
                "Dates": "Fall 2020",
                "People": ["Lillie Bahrami", "Joshua Diesenhaus", "Alana Faller", "Emily Gould", "Jack LeGrone", "Emily Lee", "Nicole Leon-Molina", "Anna Lynton", "Sarah Olick", "Jack Plantz", "Victoria Rios", "Haley Thompson", "Reese Turney", "Mandi Wilner", "Ellie Wright", "Mary Yoder"],
                "ZinePDFLink" : "../pdf/ExperimentalTypographyFall2020Zine.pdf",
                "Descrption": "N/A",
                "Images": []
            },
            7: {
                "Name": "Experimental Typography Zine",
                "Dates": "Fall 2019",
                "People": ["Logan Aker", "Gunnar Autterson", "Liz Brusco", "Bella Colosimo", "Alex Connor", "Graham Fee", "Maizie Grace", "Ruth Hunsinger", "Michael Morris", "Sofi Ozambela", "Calvin Ritger", "Dan Strangfeld", "Benjamin Vernon", "Aj Yang"],
                "ZinePDFLink" : "../pdf/ExperimentalTypographyFA2019Zine.pdf",
                "Descrption": "N/A",
                "Images": []
            }
        },
        "People": {
            0: {
                "Name": "Joel Swanson",
                "Role": "Lab Director",
                "PersonalSite": "joelswanson.art",
                "Email": "joel.swanson@colorado.edu",
                "Image": ""
            },
            1: {
                "Name": "Anna Lowrimore",
                "Role": "Lab Assistant",
                "PersonalSite": "",
                "Email": "",
                "Image": ""
            },
            2: {
                "Name": "Ian Hatcher",
                "Role": "PhD Student",
                "PersonalSite": "",
                "Email": "",
                "Image": ""
            },
            3: {
                "Name": "Elodie Thelliez",
                "Role": "Lab Assistant",
                "PersonalSite": "",
                "Email": "",
                "Image": ""
            },
            4: {
                "Name": "Jason Fontillas",
                "Role": "Lab Assistant",
                "PersonalSite": "",
                "Email": "",
                "Image": ""
            },
            5: {
                "Name": "Brad Gallagher",
                "Role": "PhD Student",
                "PersonalSite": "",
                "Email": "",
                "Image": ""
            },

        },
        "Courses": {
            "Summary": "Various courses use the TYPO Lab as a resource for the production of student work.",
            "Upcomming": {
                1: {
                    "CourseName": "Computational Typography",
                    "Instructor": ["Joel Swanson"],
                    "Dates": "Spring 2024"
                },
                2: {
                    "CourseName": "Text",
                    "Instructor": ["Joel Swanson"],
                    "Dates": "Spring 2024"
                }
            },
            "PastCourses": {
                1: {
                    "CourseName": "Experimental Typography",
                    "Instructor": ["Joel Swanson"],
                    "Dates": "Fall 2023",
                    "ZineLink": ""
                },
                2: {
                    "CourseName": "Experimental Typography",
                    "Instructor": ["Joel Swanson"],
                    "Dates": "Spring 2021",
                    "ZineLink": ""
                },
                3: {
                    "CourseName": "Computational Writing",
                    "Instructor": ["Joel Swanson", "Brad Gallagher"],
                    "Dates": "Fall 2021",
                    "ZineLink": ""
                },
                4: {
                    "CourseName": "Typography",
                    "Instructor": ["Joel Swanson"],
                    "Dates": "Fall 2020",
                    "ZineLink": ""
                },
                5: {
                    "CourseName": "Typography",
                    "Instructor": ["Joel Swanson"],
                    "Dates": "Fall 2019",
                    "ZineLink": ""
                },
                6: {
                    "CourseName": "Typography",
                    "Instructor": ["Joel Swanson"],
                    "Dates": "Fall 2018",
                    "ZineLink": "N/A"
                }
            }
        },
        "Contact": {} //Left Empty for now....
    },
    "Summary": "A speculative design lab critically exploring the intersection of text and technology.",
    "InstagramLink": "https://www.instagram.com/typ.o.lab/",
    "Address": ["ATLAS Institute", "University of Colorado Boulder", "Roser ATLAS Center", "1125 18th St. 320 UCB", "Boulder, CO 80309-0320"],
    "LabLogo": "/src/Images/typolabheadershrunk.png",
    "ATLASLogo": "src/Images/cuatlas.png",
    "CULogo": ""
}