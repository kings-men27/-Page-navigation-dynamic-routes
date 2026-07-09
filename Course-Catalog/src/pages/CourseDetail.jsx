import { useParams, useNavigate, Link } from "react-router";
import { courses } from "../Data/courses.js";

function CourseDetail() {
    const {slug} = useParams();
    const navigate = useNavigate();
    const course = courses.find((c) => c.slug === slug);

    if (!course) {
        return (
            <div className="page">
                <button onClick={() => navigate(-1)}>←Back</button>
                <h1>Course not found</h1>
                <p>We could not find a course matching "{slug}".</p>
                <Link to="/">Return to Catalog</Link>
            </div>
        );
    }
    return (
        <div className="page">
            <button onClick={() => navigate(-1)}>←Back</button>
            {/* <span className={"babge badge-" + course.category.toLowerCase()}>{course.category}</span>
            <h1>{course.category}</h1> */}
            <p className="duration">{course.duration}</p>
            <p>{course.description}</p>

            <h2>Topics covered</h2>
            <ul>
                {course.topics.map((topic) =>(
                    <li key={topic}>{topic}</li>
                ))}
            </ul>
        </div>
    )
}
export default CourseDetail;