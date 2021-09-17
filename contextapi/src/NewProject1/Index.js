import React, { useState } from "react";
import db from "../ProjectUpdated/config";

const Index = () => {
  // ********************SATES*******************************
  const [Book, setBook] = useState({
    title: "Book Title",
    page: "900",
    date: parseInt({}),
  });
  const [Loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  // *******************************FORM SUBMITING TO DATABASE***********************
  const FormHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const docRef = await db.collection("Books2").add({
        title: Book.title,
        datePublish: new Date(Book.date),
        page: parseInt(Book.page),
      });
      console.log(docRef.id);

      setBook({
        title: "",
        page: "",
        date: "",
      });
    } catch (error) {
      console.log(error, "the error occured");
      setError("an error has occured during adding the data");
    }
    setLoading(false);
  };
  const onChange = (e) => {
    setBook({
      ...Book,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <form>
        <input
          name="title"
          type="text"
          value={Book.title}
          onChange={onChange}
        />
        <input
          name="page"
          type="number"
          value={Book.page}
          onChange={onChange}
        />
        <input name="date" type="date" value={Book.date} onChange={onChange} />
        <button disabled={!Book.page} type="submit" onClick={FormHandler}>
          {Loading ? "loading...." : "Save"}
        </button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Index;

// import React, { useState } from "react";

// const Index = () => {
//   const [Book, setBook] = useState({
//     title: "Conquesters",
//     pages: "12",
//     date: "12,2,2008",
//   });
//   const onChange = (e) => {
//     setBook({
//       ...Book,
//       [e.target.name]: e.target.value,
//     });
//   };

//   return (
//     <div>
//       <form>
//         <div>
//           <input
//             name="title"
//             type="text"
//             placeholder="title"
//             value={Book.title}
//             onChange={onChange}
//           />
//           <input
//             name="pages"
//             type="number"
//             placeholder="number"
//             value={Book.pages}
//             onChange={onChange}
//           />
//           <input
//             name="date"
//             type="date"
//             value={Book.date}
//             onChange={onChange}
//           />
//           <button type="submit">Save</button>
//         </div>
//       </form>
//       <div></div>
//     </div>
//   );
// };

// export default Index;
