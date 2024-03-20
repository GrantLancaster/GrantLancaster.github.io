import { TYPOLab } from "./info.ts";

function buildCourses() {
    const coursesParent: HTMLDivElement = document.createElement("div");
    coursesParent.id = "coursesParent";

    const title: HTMLHeadingElement = document.createElement("h1");
    title.className = "title";
    title.textContent = `Courses`;
    coursesParent.appendChild(title);

    const description: HTMLParagraphElement = document.createElement("p");
    description.textContent = `${TYPOLab.Sections.Courses.Summary}`
    coursesParent.appendChild(description);

    const courses: HTMLDivElement = document.createElement("div");
    courses.id = "courses"

    const currentCourseParent: HTMLDivElement = document.createElement("div");
    for (let i=1; i < Object.keys(TYPOLab.Sections.Courses.Upcomming).length; i++) {
        const current: HTMLDivElement = document.createElement("div");

        const course: HTMLHeadingElement = document.createElement("h2");
        course.innerText = `${TYPOLab.Sections.Courses.Upcomming[i].CourseName} / ${TYPOLab.Sections.Courses.Upcomming[i].Dates}`;

        const instructor: HTMLHeadingElement = document.createElement("h2");
        instructor.innerText = `${TYPOLab.Sections.Courses.Upcomming[i].Instructor[i-i]}`;
        
        current.appendChild(course), current.appendChild(instructor);
        currentCourseParent.appendChild(current);
    }
    coursesParent.appendChild(currentCourseParent);
    const pastCourseParent: HTMLDivElement = document.createElement("div");
    for (let i=1; i < Object.keys(TYPOLab.Sections.Courses.PastCourses).length; i++) {
        const past: HTMLDivElement = document.createElement("div");

        const course: HTMLHeadingElement = document.createElement("h2");
        course.innerText = `${TYPOLab.Sections.Courses.PastCourses[i].CourseName} / ${TYPOLab.Sections.Courses.PastCourses[i].Dates}`;

        const instructor: HTMLHeadingElement = document.createElement("h2");
        instructor.innerText = `${TYPOLab.Sections.Courses.PastCourses[i].Instructor[i-i]}`;

        past.appendChild(course), past.appendChild(instructor);
        currentCourseParent.appendChild(past);
    }
    coursesParent.appendChild(pastCourseParent);


return coursesParent
}

const coursesPage = buildCourses();

export { coursesPage }