import { TYPOLab } from "../../info.js";
import { buildLayoutParent, buildHorizontalRule, buildLayout } from "./section.js";

function buildCourses() {
    const directory = TYPOLab.Sections.Courses
    const layoutParent = buildLayoutParent();// The parent div holding the two collumn layout
    const horizontalRule = buildHorizontalRule();// The horizontal rule that seperates the chunks
    horizontalRule.id = "Courses";
    layoutParent.appendChild(horizontalRule);
    for (let row = 0; row < 2; row++) {
        if (row === 0) {//Two different layout setups needed for this one
            //This chunk keeps the two column, left and right, layout
            const layout = buildLayout(false, false, false, false);// The div inside the parent that is the two collumn layout
            // Layout has two children Divs: left = childNodes[0] and right = childNodes[1]

            //The heading for this courses section
            const sectionTitle = document.createElement("h1");
            sectionTitle.textContent = "Courses";
            layout.childNodes[0].appendChild(sectionTitle);

            // The summary blurb for the courses section
            const sectionSummary = document.createElement("h2");
            sectionSummary.textContent = directory.Summary;
            layout.childNodes[1].appendChild(sectionSummary);

            layoutParent.appendChild(layout);
        } else {
            const layout = buildLayout(true, false, true, false);// The div inside the parent that is the two collumn layout
            // Layout has two children Divs: left = childNodes[0] and right = childNodes[1]
            // This layout has split the left and right sides in half also, so the content can stack a little differently

            //Upcomming courses section
            const rightTitle = document.createElement("h3");
            rightTitle.textContent = "Upcomming";
            layout.childNodes[0].childNodes[0].appendChild(rightTitle);

            for (let classes=0; classes<directory.Upcomming.length; classes++) {
                const course = document.createElement("div");
                course.className = "course";

                const courseName = document.createElement("p");
                courseName.textContent = directory.Upcomming[classes].CourseName;
                course.appendChild(courseName);

                const courseDate = document.createElement("P");
                courseDate.textContent = directory.Upcomming[classes].Dates
                course.appendChild(courseDate);

                const courseInstructor = document.createElement("p");
                courseInstructor.textContent = directory.Upcomming[classes].Instructor;
                course.appendChild(courseInstructor);

                layout.childNodes[0].childNodes[1].appendChild(course);
            }

            //Past Courses sections
            const leftTitle = document.createElement("h3");
            leftTitle.textContent = "Past";
            layout.childNodes[1].childNodes[0].appendChild(leftTitle);

            for (let past=0; past<directory.PastCourses.length; past++) {
                const course = document.createElement("div");
                course.className = "course";

                const courseName = document.createElement("p");
                courseName.textContent = directory.PastCourses[past].CourseName;
                course.appendChild(courseName);

                const courseDate = document.createElement("P");
                courseDate.textContent = directory.PastCourses[past].Dates
                course.appendChild(courseDate);

                const courseInstructor = document.createElement("p");
                courseInstructor.textContent = directory.PastCourses[past].Instructor;
                course.appendChild(courseInstructor);

                layout.childNodes[1].childNodes[1].appendChild(course);
            }
            layoutParent.appendChild(layout);
        }
    }

    return layoutParent;
}

//Create a variable that is the whole contact div and contents
//  Then export the variable to be used other places.
const courses = buildCourses();

export { courses }