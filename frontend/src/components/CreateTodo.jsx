import { useState } from "react";

function CreateTodo(props) {
    // react-query
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return <div>
        <input id="title" style={{
            padding: 5,
            margin: 5
        }} type="text" placeholder="Enter title" onChange={function (e) {
            const value = e.target.value;
            setTitle(e.target.value);
        }}></input> <br />

        <input id="desc" style={{
            padding: 5,
            margin: 5
        }} type="text" placeholder="Enter description" onChange={function (e) {
            const value = e.target.value;
            setDescription(e.target.value);
        }}></input> <br />

        <button style={{
            padding: 5,
            margin: 5
        }} onClick={() => {
            // axios
            fetch("http://localhost:3000/todo", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    "Content-type": "application/json"
                }
            })
                .then(async function (res) {
                    const json = await res.json();
                    alert("Todo added");
                })
        }}>Add a todo</button>
    </div>
}
export default CreateTodo