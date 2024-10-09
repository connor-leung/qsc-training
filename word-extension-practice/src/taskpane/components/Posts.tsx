import * as React from "react";

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
        <div>
            <h2>Posts</h2>
            <button onClick={generatePost}>Generate Post</button>
            <p>{post}</p>
            {error && <p style={{ color: "red" }}>{error}</p>} {/* Display error message if there's an error */}
        </div>
    );
};

export default Posts;
