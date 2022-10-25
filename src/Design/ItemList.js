import React from "react";
import DeleteItem from "./DeleteItem";

export default function ItemList() {

  const [items, setItems] = React.useState([
    {
      title: "",
      description: "",
      _id: "",
    },
  ]);
  React.useEffect(() => {
    fetch("/items")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setItems(jsonRes))
      .catch((err) => console.log(err));
  }, [items]);
  return (
    <div>
      {items.map((item) => {
        return (
          <div
            key={item._id}
            style={{ background: "pink", width: "40%", margin: "auto auto" }}
          >
            <p>{item.title}</p>
            
            <p>{item.description}</p>
            <DeleteItem val={item._id} />
            {/* <button onClick={() => deleteItem(item._id)}>DELETE</button>
            <button onClick={() => openUpdate(item._id)}>UPDATE</button> */}
          </div>
        );
      })}
    </div>
  );
}
