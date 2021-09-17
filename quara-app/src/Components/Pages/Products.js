import React, { useEffect, useState } from "react";
import { Data } from "./Data";
import img from "../../Images/showes.jpg";
import "aos/dist/aos.css";
import Aos from "aos";
import Carasol from "./Carasol";
const Products = () => {
  const [index, setindex] = useState(0);
  let { image, desc } = Data[index];
  const carasolHandler = () => {
    let ind = index + 1;
    let final = Data.length; //5 index
    let first = final - final;
    if (ind == final) {
      setindex(first);
    } else {
      setindex(ind);
    }
  };
  setTimeout(() => {
    carasolHandler();
  }, 2000);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="container-fluid">
      {/* <p>{desc}</p>
      <img src={image} style={{ height: 300, width: 200 }} /> */}
      <Carasol image={image} desc={desc} />

      <div className="row">
        {Data.map((item) => {
          return (
            <div className="card" style={{ width: 315, margin: 10 }}>
              <img
                data-aos="flip-right"
                src={item.image}
                style={{ height: 300 }}
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          );
        })}
        <div className="card " style={{ width: "58rem", margin: 10 }}>
          <img data-aos="zoom-in" src={img} style={{ height: 500 }} />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-center" style={{ width: "50rem", margin: 10 }}>
        <img
          data-aos="zoom-in"
          className=" flex flex-center"
          src={img}
          style={{ height: 500 }}
        />
        <div className="text-center ">
          <h5 className="text">Card title</h5>
          <p className="">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Products;

// *********************FIREBASE FULLSTACK STUFF*******************
// import React, { useEffect, useState } from "react";
// import { useGlobalContext } from "../../GlobalData/ContaxtProvider";
// import "./styles/products.css";
// import Gallary from "../Gallary/Gallary";
// import { db } from "../../Firebase/Confiq";

// const Products = () => {
//   const [{ Products }, dispatch] = useGlobalContext();
//   const [Id, setId] = useState("");
//   const [Name, setName] = useState("");
//   const [Desc, setDesc] = useState("");
//   const [Image, setImage] = useState("");
//   const [Data, setData] = useState([Products]);
//   const FormHandler = (e) => {
//     e.preventDefault();
//     dispatch({
//       type: "ADD_PRODUCT",
//       items: {
//         Id,
//         Name,
//         Desc,
//         Image,
//       },
//     });
//     setImage("");
//     setId("");
//     setName("");
//     setDesc("");
//   };
//   // useEffect(() => {
//   //   db.collection("products").onSnapshot((snap) => {
//   //     setForm(snap.docs.map((doc) => doc.data()));
//   //   });
//   // }, []);
//   useEffect(() => {
//     db.collection("products").onSnapshot((snap) => {
//       setData(snap.docs.map((doc) => doc.data()));
//     });
//     // FormHandler();
//   }, []);
//   return (
//     <div>
//       <form>
//         <input
//           type="number"
//           value={Id}
//           onChange={(e) => setId(e.target.value)}
//           placeholder="id"
//         />
//         <input
//           type="text"
//           value={Name}
//           onChange={(e) => setName(e.target.value)}
//           placeholder="Name"
//         />
//         <input
//           type="text"
//           value={Desc}
//           onChange={(e) => setDesc(e.target.value)}
//           placeholder="Description"
//         />
//         <input
//           type="file"
//           className="image-file"
//           onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
//         />
//         <button onClick={FormHandler}>Save</button>
//       </form>
//       <div className="gallary">
//         {Data.map((item) => {
//           return (
//             <div key={item.id}>
//               {/* <Gallary image={item.Image} name={item.Name} desc={item.Desc} /> */}
//               <img src={item.Image} style={{ height: 300, width: 300 }} />
//               {/* {console.log(Data)} */}

//               {/* <p>{item.Name}</p>
//               <p>{item.Desc}</p>
//               <img src={item.Image} alt="it is image" /> */}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Products;
// ************************FETCHING WITH OTHER WAY***************

// const useOccasion = () => {
//   const firebase = useContext(FirebaseContext)

//   const [occasions, setOccasions] = useState([])
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const unsubscribe = firebase.db.collection('occasions')
//     .onSnapshot(snapshot => {
//       if (snapshot.size) {
//         let occasionList = []
//         snapshot.forEach(doc =>
//           occasionList.push({ ...doc.data(), uid: doc.id }),
//         )

//         setOccasions(occasionList)
//         setLoading(false)
//       } else {
//         setOccasions([])
//         setLoading(false)
//       }
//     })

//     return () => {
//       unsubscribe()
//     }
//   }, [])

//   return { occasions, loading }
// }
// Finally, in your component where you require the data you can access this hook:

// const { occasions, loading } = useOccasion()
