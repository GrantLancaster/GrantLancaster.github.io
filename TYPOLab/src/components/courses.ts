import { TYPOLab } from "./info.ts";

function buildCourses() {
    const coursesParent: HTMLDivElement = document.createElement("div");
    coursesParent.id = "coursesParent";

    const courseHeading: HTMLDivElement = document.createElement("div");
    courseHeading.id = "courseHeading";

    const title: HTMLHeadingElement = document.createElement("h1");
    title.className = "title";
    title.textContent = `Courses`;
    courseHeading.appendChild(title);

    const description: HTMLHeadingElement = document.createElement("h2");
    description.textContent = `${TYPOLab.Sections.Courses.Summary}`
    courseHeading.appendChild(description);
    coursesParent.appendChild(courseHeading);

    const courses: HTMLDivElement = document.createElement("div");
    courses.id = "courses";

    const currentCourseParent: HTMLDivElement = document.createElement("div");
    currentCourseParent.id = "currentCourses";

    const currentCourseTitle : HTMLHeadingElement = document.createElement("h2");
    currentCourseTitle.className = "courseTitles";
    currentCourseTitle.innerText = "Upcomming Courses";
    currentCourseParent.appendChild(currentCourseTitle);

    for (let i=0; i < Object.keys(TYPOLab.Sections.Courses.Upcomming).length; i++) {
        const current: HTMLDivElement = document.createElement("div");
        current.className = "individualCourse";

        const course: HTMLHeadingElement = document.createElement("p");
        course.innerText = `${TYPOLab.Sections.Courses.Upcomming[i+1].CourseName} // ${TYPOLab.Sections.Courses.Upcomming[i+1].Dates}`;

        const instructor: HTMLHeadingElement = document.createElement("p");
        instructor.innerText = `${TYPOLab.Sections.Courses.Upcomming[i+1].Instructor[0]}`;
        
        current.appendChild(course), current.appendChild(instructor);
        currentCourseParent.appendChild(current);
    }
    courses.appendChild(currentCourseParent);
    const pastCourseParent: HTMLDivElement = document.createElement("div");
    pastCourseParent.id = "pastCourses";

    const pastCourseTitle : HTMLHeadingElement = document.createElement("h2");
    pastCourseTitle.className = "courseTitles";
    pastCourseTitle.innerText = "Past Courses";
    pastCourseParent.appendChild(pastCourseTitle);

    for (let i=1; i < Object.keys(TYPOLab.Sections.Courses.PastCourses).length; i++) {
        const past: HTMLDivElement = document.createElement("div");
        past.className = "individualCourse";

        const course: HTMLHeadingElement = document.createElement("p");
        course.innerText = `${TYPOLab.Sections.Courses.PastCourses[i].CourseName} // ${TYPOLab.Sections.Courses.PastCourses[i].Dates}`;

        const instructor: HTMLHeadingElement = document.createElement("p");
        instructor.innerText = `${TYPOLab.Sections.Courses.PastCourses[i].Instructor[i-i]}`;

        past.appendChild(course), past.appendChild(instructor);
        pastCourseParent.appendChild(past);
    }
    courses.appendChild(pastCourseParent);
    coursesParent.appendChild(courses);


return coursesParent
}

const coursesPage = buildCourses();

export { coursesPage }