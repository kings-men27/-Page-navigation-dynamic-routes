import { Link } from "react-router";

function CourseCard({course}) {
    return (
        <Link to={"/courses/" + course.slug} className="course-card">
            <span className={"badge badge-" + course.category.toLowerCase()}>
                {course.category}
            </span>
            <h3>{course.title}</h3>
            <p className="duration">{course.duration}</p>
            <span className="view-course">View course →</span>
        </Link>
    );
    // console.log(Course);
}
export default CourseCard;