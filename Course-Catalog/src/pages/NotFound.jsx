import { Link } from "react-router";

function NotFound() {
    return (
        <div className="page">
            <h1>Page not found</h1>
            <Link to="/">Return to catalog</Link>
        </div>
    );
}
export default NotFound;