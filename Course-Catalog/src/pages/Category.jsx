import { useParams} from "react-router";
import { courses } from "../Data/courses.js";
import CourseCard from "../components/CourseCard.jsx";

function Category() {
    const { category} = useParams();
    const filtered = courses.filter(
        (course) => course.category.toLowerCase() === category.toLowerCase()
    );
    return (
        <div className="page">
            <h1>{category} Courses</h1> 
            <p>{filtered.length} courses matched</p>

            {filtered.length > 0 ? (
                <div className ="course-grid">
                  {filtered.map((course) =>(
                    <CourseCard key={course.id} course={course}/>
                  ))}
                </div>
            ):(
              <p>No courses found in this category.</p>
            )}
        </div>
    );
}
export default Category;