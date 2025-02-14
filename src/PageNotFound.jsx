import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/home");
        }, 5000);
    }, [navigate]);

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <img 
                src="https://internetdevels.com/sites/default/files/public/blog_preview/404_page_cover.jpg"
                alt="Page Not Found" 
                style={{ width: "100%", maxWidth: "500px" }}
            />
            <h1> This Page Not Found</h1>
            <p>Redirecting to Home in 5 seconds...</p>
        </div>
    );
}

export default PageNotFound;