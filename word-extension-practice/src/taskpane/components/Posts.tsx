import * as React from "react";

const styles = {
    button: {
        margin: "0 0.5rem",
        padding: "0.5rem 1rem",
        backgroundColor: "#007BFF",
        color: "#FFF",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
    },
    container: {
        display: "table",
        width: "100%",
        height: "100vh",
    },
    heading: {
        marginBottom: "1rem",
    },
    paragraph: {
        marginTop: "1rem",
    },
  };

const Posts: React.FC = () => {
    const [post, setPost] = React.useState("");
    const [error, setError] = React.useState(""); // State to store error messages

    const generatePost = async (): Promise<void> => {
        try {
            setError("");

            // Fetch a random post from the API
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            const randomPost = data[Math.floor(Math.random() * data.length)];
            const postContent = `${randomPost.title}: ${randomPost.body}`;
            setPost(postContent);
        } catch (error) {
            console.error("Error fetching post:", error);
            setError("An error occurred while fetching the post. Please try again.");
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Posts</h2>
            <button style={styles.button} onClick={generatePost}>Generate Post</button>
            <p style={styles.paragraph}>{post}</p>
            {error && <p style={{ color: "red" }}>{error}</p>} {/* Display error message if there's an error */}
        </div>
    );
};

export default Posts;
