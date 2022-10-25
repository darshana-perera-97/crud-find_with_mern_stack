import React from "react";
import axios from "axios";

export default function Input() {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  return (
    <div>
      <input
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <button
        onClick={() => {
          const newItem = {
            title: title,
            description: description,
          };
          axios.post("/newitem", newItem);
          // console.log(newItem);
          // alert("item added");
        }}
      >
        Add
      </button>
    </div>
  );
}
