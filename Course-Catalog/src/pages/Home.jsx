import { courses } from "../Data/courses.js";
import CourseCard from "../components/CourseCard.jsx";

function Home() {
    return (
        <div className="page">
            <h2>TECHYJAUNT COHORT 8</h2>
            <h1>Learn with a Good Documentation</h1>
            <p>Everything from HTML basics to advanced React patterns — structured, practical, and beginner-friendly</p>

            <div className="course-grid">
                {courses.map((course) =>(
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>
        </div>
    );
}
export default Home;