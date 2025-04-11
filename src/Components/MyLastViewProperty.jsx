// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useLocation, useNavigate } from "react-router-dom";
// import { FaArrowLeft, FaCalendarAlt, FaCamera, FaEye, FaRupeeSign, FaUserAlt } from "react-icons/fa";
// import pic from '../Assets/Mask Group 3@2x.png'; // Correct path
// import myImage1 from '../Assets/Rectangle 145.png'; // Correct path
// import myImage from '../Assets/Rectangle 146.png'; // Correct path

// const LastViewedProperty = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const storedPhoneNumber =
//     location.state?.phoneNumber || localStorage.getItem("phoneNumber") || "";
//   const [phoneNumber] = useState(storedPhoneNumber);
//   const [properties, setProperties] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchLastViewed = async () => {
//       try {
//         const response = await axios.get(
//           `${process.env.REACT_APP_API_URL}/user-last-5-views/${phoneNumber}`
//         );
//         setProperties(response.data.properties || []);
//       } catch (err) {
//         setError(err.response?.data?.message || "Something went wrong");
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (phoneNumber) fetchLastViewed();
//   }, [phoneNumber]);

//   const handlePageNavigation = () => {
//     navigate("/mobileviews");
//   };

//   if (loading) return <p>Loading last viewed properties...</p>;
//   if (error) return <p className="text-danger">{error}</p>;
//   if (!properties.length) return <p>No last viewed properties found.</p>;

//   return (
//     <div className="container d-flex align-items-center justify-content-center p-0">
//       <div
//         className="d-flex flex-column align-items-center justify-content-center m-0"
//         style={{ maxWidth: "500px", margin: "auto", width: "100%" }}
//       >
//         <div
//           className="d-flex align-items-center justify-content-start w-100"
//           style={{ background: "#EFEFEF" }}
//         >
//           <button className="pe-5" onClick={handlePageNavigation}>
//             <FaArrowLeft color="#30747F" />
//           </button>
//           <h3 className="m-0 ms-3" style={{ fontSize: "20px" }}>
//             SOLD OUT BUYER
//           </h3>
//         </div>

//         <div className="row g-2 w-100">
//           {properties.map((item, index) => {
//             const propDetails = item.property;
//             const viewedAt = item.viewedAt;

//             return (
//               <div
//                 key={index}
//                 className="card mb-1 mt-2 shadow rounded-4"
//                 style={{
//                   width: "100%",
//                   height: "auto",
//                   background: "#F9F9F9",
//                   overflow: "hidden",
//                 }}
//               >
//                 <div className="row g-0">
//                   {/* Image */}
//                   <div className="col-md-4 col-4 d-flex flex-column align-items-center">
//                     <div
//                       style={{
//                         position: "relative",
//                         width: "100%",
//                         height:
//                           window.innerWidth <= 640 ? "180px" : "170px",
//                       }}
//                     >
//                       <img
//                         src={propDetails?.photos?.[0] || pic}
//                         alt="property"
//                         style={{
//                           objectFit: "cover",
//                           objectPosition: "center",
//                           width: "100%",
//                           height: "100%",
//                         }}
//                         className="rounded-start"
//                       />

//                       <div
//                         style={{
//                           position: "absolute",
//                           bottom: "0px",
//                           width: "100%",
//                           display: "flex",
//                           justifyContent: "space-between",
//                           padding: "0 5px",
//                         }}
//                       >
//                         <span
//                           className="d-flex justify-content-center align-items-center"
//                           style={{
//                             color: "#fff",
//                             backgroundImage: `url(${myImage})`,
//                             width: "45px",
//                             height: "20px",
//                             fontSize: "11px",
//                             borderRadius: "3px",
//                           }}
//                         >
//                           <FaCamera className="me-1" size={13} />
//                           {propDetails?.photos?.length || 0}
//                         </span>
//                         <span
//                           className="d-flex justify-content-center align-items-center"
//                           style={{
//                             color: "#fff",
//                             backgroundImage: `url(${myImage1})`,
//                             width: "45px",
//                             height: "20px",
//                             fontSize: "11px",
//                             borderRadius: "3px",
//                           }}
//                         >
//                           <FaEye className="me-1" size={15} />
//                           {propDetails?.views || 0}
//                         </span>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Property Info */}
//                   <div className="col-md-8 col-8 ps-2">
//                     <div className="d-flex justify-content-start">
//                       <p
//                         className="mb-1"
//                         style={{
//                           color: "#5E5E5E",
//                           fontWeight: 500,
//                         }}
//                       >
//                         {propDetails?.propertyMode || "N/A"}
//                       </p>
//                     </div>
//                     <p className="fw-bold m-0" style={{ color: "#000000" }}>
//                       {propDetails?.propertyType || "N/A"}
//                     </p>
//                     <p
//                       className="m-0"
//                       style={{ color: "#5E5E5E", fontWeight: 500 }}
//                     >
//                       {propDetails?.city || "Not specified"}
//                     </p>

//                     <div className="card-body ps-2 m-0 pt-0 pe-2 pb-0 d-flex flex-column justify-content-center">
//                       <div className="row">
//                         <div className="col-6 d-flex align-items-center mt-1 mb-1">
//                           <FaUserAlt className="me-2" color="#2F747F" />
//                           <span
//                             style={{
//                               fontSize: "13px",
//                               color: "#5E5E5E",
//                               fontWeight: 500,
//                             }}
//                           >
//                             PPC ID: {propDetails?.ppcId || "N/A"}
//                           </span>
//                         </div>
//                         <div className="col-6 d-flex align-items-center mt-1 mb-1">
//                           <FaCalendarAlt className="me-2" color="#2F747F" />
//                           <span
//                             style={{
//                               fontSize: "13px",
//                               color: "#5E5E5E",
//                               fontWeight: 500,
//                             }}
//                           >
//                             {viewedAt
//                               ? new Date(viewedAt).toLocaleString()
//                               : "Not available"}
//                           </span>
//                         </div>

//                         <div className="col-12 d-flex flex-col align-items-center mt-1 mb-1">
//                           <h6 className="m-0">
//                             <span
//                               style={{
//                                 fontSize: "17px",
//                                 color: "#2F747F",
//                                 fontWeight: "bold",
//                                 letterSpacing: "1px",
//                               }}
//                             >
//                               <FaRupeeSign
//                                 className="me-2"
//                                 color="#2F747F"
//                               />
//                               {propDetails?.price
//                                 ? propDetails.price.toLocaleString("en-IN")
//                                 : "N/A"}
//                             </span>
//                             <span
//                               style={{
//                                 color: "#2F747F",
//                                 marginLeft: "5px",
//                                 fontSize: "11px",
//                               }}
//                             >
//                               Negotiable
//                             </span>
//                           </h6>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LastViewedProperty;




// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useLocation, useNavigate } from "react-router-dom";
// import { FaArrowLeft, FaCalendarAlt, FaCamera, FaEye, FaRupeeSign, FaUserAlt } from "react-icons/fa";
// import pic from '../Assets/Mask Group 3@2x.png'; // Correct path
// import myImage1 from '../Assets/Rectangle 145.png'; // Correct path
// import myImage from '../Assets/Rectangle 146.png'; // Correct path

// const LastViewedProperty = () => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const storedPhoneNumber =
//     location.state?.phoneNumber || localStorage.getItem("phoneNumber") || "";
//   const [phoneNumber, setPhoneNumber] = useState(storedPhoneNumber);

//   // const [property, setProperty] = useState(null);
//   const [properties, setProperties] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchLastViewed = async () => {
//       try {
//         const response = await axios.get(
//           `${process.env.REACT_APP_API_URL}/user-last-5-views/${phoneNumber}`
//         );
//         setProperties(response.data.properties || []);
//       } catch (err) {
//         setError(err.response?.data?.message || "Something went wrong");
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (phoneNumber) fetchLastViewed();
//   }, [phoneNumber]);


//   if (loading) return <p>Loading last viewed property...</p>;
//   if (error) return <p className="text-danger">{error}</p>;
//   if (!properties) return <p>No last viewed property found.</p>;

//   const { property: propDetails, viewedAt } = properties;

  // const handlePageNavigation = () => {
  //   navigate('/mobileviews'); // Redirect to the desired path
  // };
//   return (
   
//         <div className="container d-flex align-items-center justify-content-center p-0">
//         <div className="d-flex flex-column align-items-center justify-content-center m-0" style={{ maxWidth: '500px', margin: 'auto', width: '100%' }}>
        
//         <div className="d-flex align-items-center justify-content-start w-100" style={{background:"#EFEFEF" }}>
//               <button className="pe-5" onClick={handlePageNavigation}><FaArrowLeft color="#30747F"/> 
//             </button> <h3 className="m-0 ms-3" style={{fontSize:"20px"}}>My Last Viewed Property  </h3> </div>
//     <div className="row g-2 w-100">
    
//     <div 
//   className="card mb-1 mt-2 shadow rounded-4"
//   style={{ width: '100%', height: 'auto', background: '#F9F9F9', overflow: 'hidden' }}
// >
//   <div className="row g-0">
    
//     {/* Left: Image and Icons */}
//     <div className="col-md-4 col-4 d-flex flex-column align-items-center">
//       <div style={{ position: "relative", width: "100%", height: window.innerWidth <= 640 ? "180px" : "170px" }}>
//       <img
//                   src={properties.photos?.[0] || pic}
                 
//           alt="property"
//           style={{
//             objectFit: "cover",
//             objectPosition: "center",
//             width: "100%",
//             height: "100%",
//           }}
//           className="rounded-start"
//         />

//         {/* Bottom icons on image */}
//         <div
//           style={{
//             position: "absolute",
//             bottom: "0px",
//             width: "100%",
//             display: "flex",
//             justifyContent: "space-between",
//             padding: "0 5px",
//           }}
//         >
//           <span
//             className="d-flex justify-content-center align-items-center"
//             style={{
//               color: "#fff",
//               backgroundImage: `url(${myImage})`,
//               width: "45px",
//               height: "20px",
//               fontSize: "11px",
//               borderRadius: "3px",
//             }}
//           >
//             <FaCamera className="me-1" size={13} />
//             {propDetails.photos?.length || 0}
//           </span>
//           <span
//             className="d-flex justify-content-center align-items-center"
//             style={{
//               color: "#fff",
//               backgroundImage: `url(${myImage1})`,
//               width: "45px",
//               height: "20px",
//               fontSize: "11px",
//               borderRadius: "3px",
//             }}
//           >
//             <FaEye className="me-1" size={15} />
//             {propDetails.views || 0}
//           </span>
//         </div>
//       </div>
//     </div>

//     {/* Right: Property Details */}
//     <div className="col-md-8 col-8 ps-2">
//       <div className="d-flex justify-content-start">
//         <p className="mb-1" style={{ color: '#5E5E5E', fontWeight: 500 }}>
//           {propDetails.propertyMode || 'N/A'}
//         </p>
//       </div>

//       <p className="fw-bold m-0" style={{ color: '#000000' }}>
//         {propDetails.propertyType || 'N/A'}
//       </p>
//       <p className="m-0" style={{ color: '#5E5E5E', fontWeight: 500 }}>
//         {propDetails.location || 'Not specified'}
//       </p>

//       <div className="card-body ps-2 m-0 pt-0 pe-2 pb-0 d-flex flex-column justify-content-center">
//         <div className="row">
//           <div className="col-6 d-flex align-items-center mt-1 mb-1">
//             <FaUserAlt className="me-2" color="#2F747F" />
//             <span style={{ fontSize: '13px', color: '#5E5E5E', fontWeight: 500 }}>
//               PPC ID: {propDetails.ppcId || "N/A"}
//             </span>
//           </div>

//           <div className="col-6 d-flex align-items-center mt-1 mb-1">
//             <FaCalendarAlt className="me-2" color="#2F747F" />
//             <span style={{ fontSize: '13px', color: '#5E5E5E', fontWeight: 500 }}>
//               {viewedAt ? new Date(viewedAt).toLocaleString() : "Not available"}
//             </span>
//           </div>

//           <div className="col-12 d-flex flex-col align-items-center mt-1 mb-1">
//             <h6 className="m-0">
//               <span
//                 style={{
//                   fontSize: '17px',
//                   color: '#2F747F',
//                   fontWeight: 'bold',
//                   letterSpacing: "1px",
//                 }}
//               >
//                 <FaRupeeSign className="me-2" color="#2F747F" />
//                 {propDetails.price ? propDetails.price.toLocaleString('en-IN') : 'N/A'}
//               </span>
//               <span
//                 style={{
//                   color: '#2F747F',
//                   marginLeft: "5px",
//                   fontSize: '11px',
//                 }}
//               >
//                 Negotiable
//               </span>
//             </h6>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// </div>
// </div>
// </div>

//   );
// };

// export default LastViewedProperty;































import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaCamera } from "react-icons/fa";
// import pic from "../Assets/Mask Group 3@2x.png";
import pic from '../Assets/Default image_PP-01.png'; // Correct path


const LastViewedProperty = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const phoneNumber =
    location.state?.phoneNumber || localStorage.getItem("phoneNumber") || "";

  const [properties, setProperties] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchLastViewed = async () => {
  //     try {
  //       const response = await axios.get(
  //         `${process.env.REACT_APP_API_URL}/user-last-5-views/${phoneNumber}`
  //       );
  //       setProperties(response.data.properties || []);
  //     } catch (err) {
  //       setError(err.response?.data?.message || "Something went wrong");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   if (phoneNumber) fetchLastViewed();
  // }, [phoneNumber]);

  useEffect(() => {
    const fetchLastViewed = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/user-last-5-views/${phoneNumber}`
        );
  
        const allProperties = response.data.properties || [];
  
        // Filter by unique ppcId
        const uniqueProperties = [];
        const seenPpcIds = new Set();
  
        for (let property of allProperties) {
          const id = property.ppcId || property._id;
          if (!seenPpcIds.has(id)) {
            seenPpcIds.add(id);
            uniqueProperties.push(property);
          }
        }
  
        setProperties(uniqueProperties);
      } catch (err) {
        setError(err.response?.data?.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };
  
    if (phoneNumber) fetchLastViewed();
  }, [phoneNumber]);
  

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  const handlePageNavigation = () => {
    navigate('/mobileviews'); // Redirect to the desired path
  };

  return (
    <div className="container d-flex align-items-center justify-content-center p-0">
    <div className="d-flex flex-column align-items-center justify-content-center m-0" style={{ maxWidth: '500px', margin: 'auto', width: '100%' }}>
    
    <div className="d-flex align-items-center justify-content-start w-100" style={{background:"#EFEFEF" }}>
          <button className="pe-5" onClick={handlePageNavigation}><FaArrowLeft color="#30747F"/> 
        </button> <h3 className="m-0 ms-3" style={{fontSize:"20px"}}>My Last Viewed Property  </h3> </div>
<div className="row g-2 w-100">





      {properties.length === 0 ? (
        <p>No recently viewed properties.</p>
      ) : (
        properties.map((property, index) => (
          <div
            key={index}
            className="card mb-3 shadow rounded-4"
            style={{ background: "#F9F9F9" }}
          >
            <div className="row g-0">
              {/* Left Image Section */}
              <div className="col-4">
                {/* <img
                  src={property.photos?.[0] || pic}
                  alt="property"
                  className="img-fluid rounded-start"
                  style={{ height: "100%", objectFit: "cover" }}
                /> */}
                <img
  src={pic}
  alt="property"
  className="img-fluid rounded-start"
  style={{ height: "100%", objectFit: "cover" }}
/>

              </div>

              {/* Right Content Section */}
              <div className="col-8 p-2">
                <h6 className="mb-1 text-truncate">
                  {property.propertyType || "Property"}
                </h6>
                <p className="m-0">
                  Area: {property.totalArea} {property.areaUnit}
                </p>
                <p className="m-0">₹ {property.price?.toLocaleString()}</p>
                <p className="m-0">
                  City: {property.city}, {property.state}
                </p>
                <p className="m-0">
                  ppcId: {property.ppcId}
                </p>
                <p className="m-0 text-muted" style={{ fontSize: "12px" }}>
                  Viewed: {new Date(property.viewedAt).toLocaleString()}
                </p>
                <div className="d-flex justify-content-end">
                  {/* <span className="badge bg-secondary d-flex align-items-center">
                    <FaCamera className="me-1" />
                    {property.photos?.length || 0}
                  </span> */}
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
    </div>
    </div>
  );
};

export default LastViewedProperty;












// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useLocation } from "react-router-dom";

// const LastViewedProperty = () => {
//   const location = useLocation();
//   const storedPhoneNumber =
//     location.state?.phoneNumber || localStorage.getItem("phoneNumber") || "";
//   const [phoneNumber, setPhoneNumber] = useState(storedPhoneNumber);

//   const [property, setProperty] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchLastViewed = async () => {
//       if (!phoneNumber) {
//         setError("Phone number is required");
//         setLoading(false);
//         return;
//       }

//       try {
//         const response = await axios.get(
//           `${process.env.REACT_APP_API_URL}/user-get-last-view/${phoneNumber}`
//         );
//         setProperty(response.data);
//       } catch (err) {
//         setError(
//           err.response?.data?.message || "Error fetching last viewed property"
//         );
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchLastViewed();
//   }, [phoneNumber]);

//   if (loading) return <p>Loading last viewed property...</p>;
//   if (error) return <p className="text-danger">{error}</p>;
//   if (!property) return <p>No last viewed property found.</p>;

//   const { property: propDetails, viewedAt } = property;

//   return (
//     <div className="card shadow-sm mb-4">
//       <div className="card-body">
//         <h5 className="card-title text-primary">
//           {propDetails.propertyTitle || "No Title Available"}
//         </h5>
//         <p className="card-text mb-1">
//           <strong>Location:</strong> {propDetails.location || "Not specified"}
//         </p>
//         <p className="card-text mb-1">
//           <strong>Price:</strong>{" "}
//           {propDetails.price
//             ? `₹${propDetails.price.toLocaleString()}`
//             : "N/A"}
//         </p>
//         <p className="card-text mb-1">
//           <strong>Property Type:</strong> {propDetails.propertyType || "N/A"}
//         </p>
//         <p className="card-text mb-1">
//           <strong>Property Mode:</strong> {propDetails.propertyMode || "N/A"}
//         </p>
//         <p className="card-text mb-1">
//           <strong>PPC ID:</strong> {propDetails.ppcId || "N/A"}
//         </p>
//         <p className="card-text mb-1">
//           <strong>Viewed At:</strong>{" "}
//           {viewedAt
//             ? new Date(viewedAt).toLocaleString()
//             : "Not available"}
//         </p>
//         {propDetails.photos?.length > 0 ? (
//           <img
//             src={propDetails.photos[0]}
//             alt="property"
//             style={{
//               width: "100%",
//               maxHeight: "250px",
//               objectFit: "cover",
//               marginTop: "10px",
//             }}
//             className="rounded"
//           />
//         ) : (
//           <p className="text-muted mt-2">No photo available.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LastViewedProperty;
