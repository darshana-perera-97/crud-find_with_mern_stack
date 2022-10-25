import React from "react";

export default function Filter() {
  const [val, setVal] = React.useState("0");
  const [items, setItems] = React.useState([
    {
      title: "",
      description: "",
      _id: "",
    },
  ]);
  React.useEffect(() => {
    fetch("/item/" + val)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setItems(jsonRes))
      .catch((err) => console.log(err));
  }, [val]);
  return (
    <div>
      <p>List</p>
      <input
        onChange={(e) => {
          setVal(e.target.value);
        }}
      />
      <button>Search</button>
      {items.map((val, key) => {
        return (
          <div key={key} style={{ display: "flex" }}>
            <p>{val.title}</p>
            <p>------------</p>
            <p>{val.description}</p>
          </div>
        );
      })}
    </div>
  );
}
