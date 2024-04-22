import { useState } from "react";

function CommentsList() {
    const [comments, setComments] = useState([
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" }]);

    function Input({ comment, handleDelete, handleChange }) {
        return (
            <div>
                <label htmlFor="kitty-name">{comment.text}</label>
                <br />
                <button onClick={handleDelete} type="button">
                    Delate this comments
                </button>
            </div>
        );
    }

    return (
        <div className="App">
            <form>
                {comments.map((comment) => (
                    <Input
                        key={comment.id}
                        comment={comment}
                        handleChange={(event) => {
                            const newComments = comments.map((x) =>
                                x.id === comment.id ? { ...x } : x
                            );
                            setComments([...newComments]);
                        }}
                        handleDelete={() => {
                            const newComments = comments.filter((x) => x.id !== comment.id);
                            setComments([...newComments]);
                        }}
                    />
                ))}
            </form>
        </div>
    );
}

export default CommentsList;