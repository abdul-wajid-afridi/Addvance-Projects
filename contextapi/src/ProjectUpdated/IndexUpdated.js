import React, { useEffect, useReducer, useState } from "react";
import db from "./config";

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      // ***************************Addig the data to the database************************
      return db.collection("Books").add({
        ...state,
        Book: action.payload.Forum,
      });
      break;
    default:
      break;
  }
};
const IndexUpdated = () => {
  const [state, dispatch] = useReducer(reducer, []);
  const [Title, settitle] = useState("");
  const [Pages, setpages] = useState("");
  const [Date, setDate] = useState("");
  const FormHandler = (e) => {
    e.preventDefault();
    const Forum = {
      Title,
      Pages,
      Date,
    };
    dispatch({ type: "add", payload: { Forum } });
    // Title:{Title},Pages:{Pages},Date:{Date}
    setDate("");
    setpages("");
    settitle("");
  };
  //   useEffect(() => {
  //       db.onSnapshotsInSync((snap)=>{
  //           return snap.map
  //       })
  //   }, [])
  return (
    <div>
      <form>
        <input
          type="text"
          value={Title}
          placeholder="Title"
          onChange={(e) => settitle(e.target.value)}
        />
        <input
          type="number"
          value={Pages}
          placeholder="pages"
          onChange={(e) => setpages(e.target.value)}
        />
        <input
          type="date"
          value={Date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button type="submit" onClick={FormHandler}>
          Save
        </button>
      </form>
      <div>
        {/* {state.map((it) => {
          return (
            <div>
              <p>{it.Title}</p>
              <p>{it.Pages}</p>
              <p>{it.Date}</p>
            </div>
          );
        })} */}
        {/* {console.log(state)} */}
      </div>
    </div>
  );
};

export default IndexUpdated;
