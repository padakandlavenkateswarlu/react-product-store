// import { useEffect, useState } from "react";
// import { Loader } from "../../components/Loader/Loader";

// export default function producst1() {
//   let [productsD, setProducts] = useState([]);
//   let [page, setPage] = useState(1);

//   let cardsperPage = 10;

//   useEffect(() => {
//     async function renderApi() {
//       let productsdata = await fetch(
//         "https://dummyjson.com/products?limit=100"
//       );

//       let { products } = await productsdata.json();

//       setProducts(products);
//     }

//     renderApi();
//   }, []);

//   return (
//     <>
//       <div className="container mt-4">

//         <div className="row">

//           {productsD.length === 0 ? (
//             <center>
//               <Loader />
//             </center>
//           ) : (
//             productsD
//               .slice(
//                 (page - 1) * cardsperPage,
//                 page * cardsperPage
//               )
//               .map((pro) => {
//                 return (
//                   <div className="col-md-4 mb-4" key={pro.id}>
//                     <div className="card h-100">

//                       <img
//                         src={pro.thumbnail}
//                         className="card-img-top"
//                         alt={pro.title}
//                       />

//                       <div className="card-body">
//                         <h5 className="card-title">
//                           {pro.title}
//                         </h5>

//                         <p className="card-text">
//                           {pro.description}
//                         </p>
//                       </div>

//                     </div>
//                   </div>
//                 );
//               })
//           )}

//         </div>
//         <div className="text-center mt-4 mb-3">
//             {[1,2,3,4,5,6,7,8,9,10].map((btn) =>{
//                 <button
//                 key={btn}
//                 className="btn btn-primary-mx1"
//                 onClick={() => setPage(btn)}
//                 >
                    
//                     {btn}      
//                 </button>
//             } )
//             }
//         </div>


//       </div>
//     </>
//   );
// }