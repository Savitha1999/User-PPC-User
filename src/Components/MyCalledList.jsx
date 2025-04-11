




import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaArrowLeft, FaBed, FaCalendarAlt, FaCamera, FaEye, FaRulerCombined, FaRupeeSign, FaUserAlt } from "react-icons/fa";
import { MdCall } from "react-icons/md";

import myImage from '../Assets/Rectangle 146.png';
import myImage1 from '../Assets/Rectangle 145.png';
import pic from '../Assets/Default image_PP-01.png';
import ConfirmationModal from './ConfirmationModal'; // Make sure this path is correct



const MyCalledList = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const storedPhoneNumber = location.state?.phoneNumber || localStorage.getItem("phoneNumber") || "";
  const [phoneNumber] = useState(storedPhoneNumber.replace("+", ""));
  const [calls, setCalls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [removedItems, setRemovedItems] = useState(
    JSON.parse(localStorage.getItem("removedProperties")) || []
  );

  // Modal state
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [onConfirmAction, setOnConfirmAction] = useState(() => () => {});
  const [message, setMessage] = useState(null);


  useEffect(() => {
    if (phoneNumber) {
      fetchCalledUserProperties();
    }
  }, [phoneNumber]);

  // const fetchCalledUserProperties = async () => {
  //   try {
  //     const response = await axios.get(
  //       `${process.env.REACT_APP_API_URL}/user-call/property-owner/${phoneNumber}`
  //     );
      
  //     setCalls(response.data);
  //   } catch (err) {
  //     setError("Failed to fetch data.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const fetchCalledUserProperties = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/user-call/property-owner/${phoneNumber}`
      );
  
      // 🔃 Sort from newest to oldest based on createdAt timestamp
      const sortedCalls = response.data.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
  
      setCalls(sortedCalls);
    } catch (err) {
      setError("Failed to fetch data.");
    } finally {
      setLoading(false);
    }
  };
  

useEffect(() => {
  if (message) {
    const timer = setTimeout(() => setMessage(""), 3000); // Auto-close after 3 seconds
    return () => clearTimeout(timer); // Cleanup timer
  }
}, [message]);

  const handleRemove = async (id) => {
    try {
      await axios.patch(`${process.env.REACT_APP_API_URL}/user-call/soft-delete/${id}`);
      const updated = [...removedItems, id];
      setRemovedItems(updated);
      localStorage.setItem("removedProperties", JSON.stringify(updated));
      fetchCalledUserProperties();
      setMessage({ text: "Interest deleted successfully!", type: "success" });
    } catch (err) {
      setMessage({ text: "Failed to delete interest.", type: "error" });
    }
  };

  const handleUndo = async (id) => {
    try {
      await axios.patch(`${process.env.REACT_APP_API_URL}/user-call/undo-delete/${id}`);
      const updated = removedItems.filter((itemId) => itemId !== id);
      setRemovedItems(updated);
      localStorage.setItem("removedProperties", JSON.stringify(updated));
      fetchCalledUserProperties();
      setMessage({ text: "Interest restored successfully!", type: "success" });
    } catch (err) {
      setMessage({ text: "Failed to restore interest.", type: "error" });
    }
  };
  
  

  const confirmRemove = (id) => {
    setModalMessage("Are you sure you want to remove this property?");
    setOnConfirmAction(() => () => handleRemove(id));
    setShowModal(true);
  };

  const confirmUndo = (id) => {
    setModalMessage("Are you sure you want to undo the removal?");
    setOnConfirmAction(() => () => handleUndo(id));
    setShowModal(true);
  };

  const filteredCalls =
    activeTab === "all"
      ? calls.filter((item) => !removedItems.includes(item._id))
      : calls.filter((item) => removedItems.includes(item._id));

  const handlePageNavigation = () => {
    navigate('/mobileviews');
  };

  return (
    <div className="container d-flex align-items-center justify-content-center p-0" style={{ fontFamily: "Inter, sans-serif" }}>
      <div className="d-flex flex-column align-items-center justify-content-center m-0" style={{ maxWidth: '500px', margin: 'auto', width: '100%' }}>

        {/* Header */}
        <div className="d-flex align-items-center justify-content-start w-100" style={{ background: "#EFEFEF" }}>
          <button className="pe-5" onClick={handlePageNavigation}>
            <FaArrowLeft color="#30747F" />
          </button>
          <h3 className="m-0 ms-3" style={{ fontSize: "20px" }}>MY CALLED LIST</h3>
        </div>

    
           {/* Tabs */}
      <div className="row g-2 w-100">
      <div className="col-6 p-0">
        <button style={{ backgroundColor: '#4F4B7E', color: 'white' , width:"100%" }}
          onClick={() => setActiveTab("all")}
        >
          All
        </button>
        </div>

        <div className="col-6 p-0">

        <button style={{ backgroundColor: '#FF0000', color: 'white' , width:"100%" }}
          onClick={() => setActiveTab("removed")}
        >
          Removed
        </button>
      </div>
      </div>

        {message && (
  <div className={`alert ${message.type === "success" ? "alert-success" : "alert-danger"} mt-2`}>
    {message.text}
  </div>
)}


        {/* Loader / Error / Empty */}
        {loading && <p>Loading...</p>}
        {error && <p className="text-danger">{error}</p>}
        {!loading && filteredCalls.length === 0 && (
          <p>{activeTab === "all" ? "No properties found." : "No removed properties."}</p>
        )}

        {/* Property Cards */}
        {filteredCalls.map((property) => (
          <div key={property._id} className="col-12 mb-2 mt-2">
            <div className="row g-0 rounded-4 w-100" style={{ border: '1px solid #ddd', background: "#EFEFEF", overflow: "hidden" }}>
              {/* Image */}
              <div className="col-4 d-flex flex-column">
                <div className="text-white py-1 px-2 text-center" style={{ width: '100%', background: "#2F747F" }}>
                  PUC- {property.ppcId}
                </div>
                <div style={{ position: "relative", width: "100%", height: '175px' }}>
                  <img
                    src={property.photos?.length ? `http://localhost:5006/${property.photos[0]}` : pic}
                    alt="Property"
                    className="img-fluid"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div className="d-flex justify-content-between w-100" style={{ position: "absolute", bottom: "0px" }}>
                    <span className="d-flex justify-content-center align-items-center"
                      style={{
                        color: '#fff',
                        background: `url(${myImage}) no-repeat center center`,
                        backgroundSize: "cover",
                        fontSize: '12px', width: '50px'
                      }}>
                      <FaCamera className="me-1" />1
                    </span>
                    <span className="d-flex justify-content-center align-items-center"
                      style={{
                        color: '#fff',
                        background: `url(${myImage1}) no-repeat center center`,
                        backgroundSize: "cover",
                        fontSize: '12px', width: '50px'
                      }}>
                      <FaEye className="me-1" />1
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="col-8 ps-2">
                <div className="d-flex justify-content-between">
                  <p className="mb-1 fw-bold" style={{ color: '#5E5E5E' }}>{property.propertyMode || 'N/A'}</p>
                  {activeTab === "all" ? (
                    <p className="m-0 ps-3 pe-3" style={{ background: "#FF0000", color: "white", cursor: "pointer", borderRadius: '0px 0px 0px 15px' }} onClick={() => confirmRemove(property._id)}>Remove</p>
                  ) : (
                    <p className="m-0 ps-3 pe-3" style={{ background: "green", color: "white", cursor: "pointer", borderRadius: '0px 0px 0px 15px' }} onClick={() => confirmUndo(property._id)}>Undo</p>
                  )}
                </div>
                <p className="fw-bold m-0">{property.propertyType}</p>
                <p className="fw-bold m-0" style={{ color: '#5E5E5E' }}>{property.city}</p>
                <div className="card-body ps-2 m-0 pt-0 pe-2">
                  <div className="row">
                    <div className="col-6 d-flex align-items-center mt-1 mb-1">
                      <FaRulerCombined className="me-2" color="#2F747F" /> {property.totalArea}
                    </div>
                    <div className="col-6 d-flex align-items-center mt-1 mb-1">
                      <FaBed className="me-2" color="#2F747F" /> {property.bedrooms}
                    </div>
                    <div className="col-6 d-flex align-items-center mt-1 mb-1">
                      <FaUserAlt className="me-2" color="#2F747F" /> {property.ownership}
                    </div>
                    <div className="col-6 d-flex align-items-center mt-1 mb-1">
                      <FaCalendarAlt className="me-2" color="#2F747F" /> {property.date ? new Date(property.date).toLocaleString() : "N/A"}
                    </div>
                    <div className="col-12 d-flex align-items-center mt-1 mb-1">
                      <h6 className="m-0">
                        <span style={{ color: '#2F747F', fontSize: '17px', fontWeight: 'bold' }}>
                          <FaRupeeSign className="me-2" />{property.price?.toLocaleString('en-IN') || 'N/A'}
                        </span>
                        <span style={{ fontSize: '11px', marginLeft: '5px', color: '#2F747F' }}>Negotiable</span>
                      </h6>
                    </div>
                    <p style={{ color: "#2E7480", margin: "0px" }}>
                      <a href={`tel:${property.interestedUser}`} style={{ textDecoration: "none", color: "#2E7480" }}>
                        <MdCall className="me-2" /> {property.phoneNumber || 'N/A'}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Confirmation Modal */}
        <ConfirmationModal
          show={showModal}
          message={modalMessage}
          onConfirm={() => {
            onConfirmAction();
            setShowModal(false);
          }}
          onCancel={() => setShowModal(false)}
        />
      </div>
    </div>
  );
};

export default MyCalledList;


// const MyCalledList = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const storedPhoneNumber = location.state?.phoneNumber || localStorage.getItem("phoneNumber") || "";
//   const [phoneNumber] = useState(storedPhoneNumber.replace("+", ""));
//   const [calls, setCalls] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [activeTab, setActiveTab] = useState("all");
//   const [removedItems, setRemovedItems] = useState(
//     JSON.parse(localStorage.getItem("removedProperties")) || []
//   );

//   useEffect(() => {
//     if (phoneNumber) {
//       fetchCalledUserProperties();
//     }
//   }, [phoneNumber]);

//   const fetchCalledUserProperties = async () => {
//     try {
//       const response = await axios.get(
//         `${process.env.REACT_APP_API_URL}/user-call/property-owner/${phoneNumber}`
//       );
//       setCalls(response.data);
//     } catch (err) {
//       console.error("Error fetching called user list:", err);
//       setError("Failed to fetch data.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleRemove = async (id) => {
//     try {
//       await axios.patch(`${process.env.REACT_APP_API_URL}/user-call/soft-delete/${id}`);
//       const updated = [...removedItems, id];
//       setRemovedItems(updated);
//       localStorage.setItem("removedProperties", JSON.stringify(updated));
//       fetchCalledUserProperties();
//     } catch (err) {
//       console.error("Soft delete failed:", err);
//     }
//   };

//   const handleUndo = async (id) => {
//     try {
//       await axios.patch(`${process.env.REACT_APP_API_URL}/user-call/undo-delete/${id}`);
//       const updated = removedItems.filter((itemId) => itemId !== id);
//       setRemovedItems(updated);
//       localStorage.setItem("removedProperties", JSON.stringify(updated));
//       fetchCalledUserProperties();
//     } catch (err) {
//       console.error("Undo delete failed:", err);
//     }
//   };

//   const filteredCalls =
//     activeTab === "all"
//       ? calls.filter((item) => !removedItems.includes(item._id))
//       : calls.filter((item) => removedItems.includes(item._id));

//   const handlePageNavigation = () => {
//     navigate('/mobileviews');
//   };

//   return (
//     <div className="container d-flex align-items-center justify-content-center p-0" style={{ fontFamily: "Inter, sans-serif" }}>
//       <div className="d-flex flex-column align-items-center justify-content-center m-0" style={{ maxWidth: '500px', margin: 'auto', width: '100%' }}>
        
//         {/* Header */}
//         <div className="d-flex align-items-center justify-content-start w-100" style={{ background: "#EFEFEF" }}>
//           <button className="pe-5" onClick={handlePageNavigation}>
//             <FaArrowLeft color="#30747F" />
//           </button>
//           <h3 className="m-0 ms-3" style={{ fontSize: "20px" }}>MY CALLED LIST</h3>
//         </div>

//         {/* Tabs */}
//         <div className="row g-2 w-100 m-0">
//           <div className="col-6 p-0">
//             <button
//               style={{ backgroundColor: activeTab === 'all' ? '#4F4B7E' : '#ccc', color: 'white', width: "100%" }}
//               onClick={() => setActiveTab("all")}
//             >
//               All
//             </button>
//           </div>
//           <div className="col-6 p-0">
//             <button
//               style={{ backgroundColor: activeTab === 'removed' ? '#FF0000' : '#ccc', color: 'white', width: "100%" }}
//               onClick={() => setActiveTab("removed")}
//             >
//               Removed
//             </button>
//           </div>
//         </div>

//         {/* Loader / Error / Empty */}
//         {loading && <p>Loading...</p>}
//         {error && <p className="text-danger">{error}</p>}
//         {!loading && filteredCalls.length === 0 && (
//           <p>{activeTab === "all" ? "No properties found." : "No removed properties."}</p>
//         )}

//         {/* Property Cards */}
//         {filteredCalls.map((property) => (
//           <div key={property._id} className="col-12 mb-2">
//             <div className="row g-0 rounded-4 w-100" style={{ border: '1px solid #ddd', background: "#EFEFEF", overflow: "hidden" }}>
              
//               {/* Image */}
//               <div className="col-4 d-flex flex-column">
//                 <div className="text-white py-1 px-2 text-center" style={{ width: '100%', background: "#2F747F" }}>
//                   PUC- {property.ppcId}
//                 </div>
//                 <div style={{ position: "relative", width: "100%", height: '175px' }}>
//                   <img
//                     src={property.photos?.length ? `http://localhost:5000/${property.photos[0]}` : pic}
//                     alt="Property"
//                     className="img-fluid"
//                     style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//                   />
//                   <div className="d-flex justify-content-between w-100" style={{ position: "absolute", bottom: "0px" }}>
//                     <span className="d-flex justify-content-center align-items-center"
//                       style={{
//                         color: '#fff',
//                         background: `url(${myImage}) no-repeat center center`,
//                         backgroundSize: "cover",
//                         fontSize: '12px', width: '50px'
//                       }}>
//                       <FaCamera className="me-1" />1
//                     </span>
//                     <span className="d-flex justify-content-center align-items-center"
//                       style={{
//                         color: '#fff',
//                         background: `url(${myImage1}) no-repeat center center`,
//                         backgroundSize: "cover",
//                         fontSize: '12px', width: '50px'
//                       }}>
//                       <FaEye className="me-1" />1
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="col-8 ps-2">
//                 <div className="d-flex justify-content-between">
//                   <p className="mb-1 fw-bold" style={{ color: '#5E5E5E' }}>{property.propertyMode || 'N/A'}</p>
//                   {activeTab === "all" ? (
//                     <p className="m-0 ps-3 pe-3" style={{ background: "#FF0000", color: "white", cursor: "pointer", borderRadius: '0px 0px 0px 15px' }} onClick={() => handleRemove(property._id)}>Remove</p>
//                   ) : (
//                     <p className="m-0 ps-3 pe-3" style={{ background: "green", color: "white", cursor: "pointer", borderRadius: '0px 0px 0px 15px' }} onClick={() => handleUndo(property._id)}>Undo</p>
//                   )}
//                 </div>
//                 <p className="fw-bold m-0">{property.propertyType}</p>
//                 <p className="fw-bold m-0" style={{ color: '#5E5E5E' }}>{property.city}</p>
//                 <div className="card-body ps-2 m-0 pt-0 pe-2">
//                   <div className="row">
//                     <div className="col-6 d-flex align-items-center mt-1 mb-1">
//                       <FaRulerCombined className="me-2" color="#2F747F" /> {property.totalArea}
//                     </div>
//                     <div className="col-6 d-flex align-items-center mt-1 mb-1">
//                       <FaBed className="me-2" color="#2F747F" /> {property.bedrooms}
//                     </div>
//                     <div className="col-6 d-flex align-items-center mt-1 mb-1">
//                       <FaUserAlt className="me-2" color="#2F747F" /> {property.ownership}
//                     </div>
//                     <div className="col-6 d-flex align-items-center mt-1 mb-1">
//                       <FaCalendarAlt className="me-2" color="#2F747F" /> {property.date ? new Date(property.date).toLocaleString() : "N/A"}
//                     </div>
//                     <div className="col-12 d-flex align-items-center mt-1 mb-1">
//                       <h6 className="m-0">
//                         <span style={{ color: '#2F747F', fontSize: '17px', fontWeight: 'bold' }}>
//                           <FaRupeeSign className="me-2" />{property.price?.toLocaleString('en-IN') || 'N/A'}
//                         </span>
//                         <span style={{ fontSize: '11px', marginLeft: '5px', color: '#2F747F' }}>Negotiable</span>
//                       </h6>
//                     </div>
//                     <p style={{ color: "#2E7480", margin: "0px" }}>
//                       <a href={`tel:${property.interestedUser}`} style={{ textDecoration: "none", color: "#2E7480" }}>
//                         <MdCall className="me-2" /> {property.phoneNumber || 'N/A'}
//                       </a>
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MyCalledList;
