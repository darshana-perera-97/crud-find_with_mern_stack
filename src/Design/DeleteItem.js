import React from "react";
import axios from "axios";

export default function DeleteItem(prop) {
  return (
    <div>
      <button
        onClick={() => {
          //   console.log(prop.val);
          axios.delete("/delete/" + prop.val);
          alert("item deleted");
        }}
      >
        Delete
      </button>
    </div>
  );
}
