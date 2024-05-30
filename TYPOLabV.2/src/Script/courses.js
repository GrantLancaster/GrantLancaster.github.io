import { TYPOLab } from "../../info.js";
import { buildLayoutParent, buildHorizontalRule, buildLayout } from "./section.js";

function buildCourses() {
    const directory = TYPOLab.Sections.Courses
    const layoutParent = buildLayoutParent();
    const horizontalRule = buildHorizontalRule();
    horizontalRule.id = "Courses";
    layoutParent.appendChild(horizontalRule);
    for (let row = 0; row < 2; row++) {
        if (row === 0) {
            const layout = buildLayout(false, false, false, false);

            const sectionTitle = document.createElement("h1");
            sectionTitle.textContent = "Courses";
            layout.childNodes[0].appendChild(sectionTitle);

            const sectionSummary = document.createElement("h2");
            sectionSummary.textContent = directory.Summary;
            layout.childNodes[1].appendChild(sectionSummary);

            layoutParent.appendChild(layout);
        } else {
            const layout = buildLayout(true, false, true, false);

            const rightTitle = document.createElement("h3");
            rightTitle.textContent = "Upcomming";
            layout.childNodes[0].childNodes[0].appendChild(rightTitle);

            for (let classes=0; classes<directory.Upcomming.length; classes++) {
                const course = document.createElement("div");
                course.className = "course";

                const courseName = document.createElement("p");
                courseName.textContent = directory.Upcomming[classes].CourseName;
                course.appendChild(courseName);

                const courseInstructor = document.createElement("p");
                courseInstructor.textContent = directory.Upcomming[classes].Instructor;
                course.appendChild(courseInstructor);

                layout.childNodes[0].childNodes[1].appendChild(course);
            }

            const leftTitle = document.createElement("h3");
            leftTitle.textContent = "Past";
            layout.childNodes[1].childNodes[0].appendChild(leftTitle);

            for (let past=0; past<directory.PastCourses.length; past++) {
                const course = document.createElement("div");
                course.className = "course";

                const courseName = document.createElement("p");
                courseName.textContent = directory.PastCourses[past].CourseName;
                course.appendChild(courseName);

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

const courses = buildCourses();

export { courses }