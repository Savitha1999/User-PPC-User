
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaArrowLeft, FaBed, FaCalendarAlt, FaCamera, FaEye, FaRulerCombined, FaRupeeSign, FaUserAlt } from "react-icons/fa";
import myImage from '../Assets/Rectangle 146.png'; // Correct path
import myImage1 from '../Assets/Rectangle 145.png'; // Correct path
import pic from '../Assets/Default image_PP-01.png'; // Correct path
import { MdCall } from "react-icons/md";
const MyCalledList = () => {
  const location = useLocation();
  const storedPhoneNumber =
    location.state?.phoneNumber || localStorage.getItem("phoneNumber") || "";
    const navigate = useNavigate();

    const handlePageNavigation = () => {
      navigate('/mobileviews'); // Redirect to the desired path
    };
  const [phoneNumber, setPhoneNumber] = useState(
    storedPhoneNumber.replace("+", "")
  );
  const [calls, setCalls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("all"); // all or removed
  const [removedItems, setRemovedItems] = useState(
    JSON.parse(localStorage.getItem("removedProperties")) || []
  );

  useEffect(() => {
    if (phoneNumber) {
      fetchCalledUserProperties();
    }
  }, [phoneNumber]);

  const fetchCalledUserProperties = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/user-call/property-owner/${phoneNumber}`
      );
      setCalls(response.data);
    } catch (err) {
      console.error("Error fetching called user list:", err);
      setError("Failed to fetch data.");
    } finally {
      setLoading(false);
    }
  };

  const handleRemove = async (ppcId, phoneNumber) => {
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/delete-detail-property`, {
        ppcId,
        phoneNumber,
      });

      const updatedRemoved = [...removedItems, ppcId];
      setRemovedItems(updatedRemoved);
      localStorage.setItem("removedProperties", JSON.stringify(updatedRemoved));
    } catch (error) {
      console.error("Failed to remove:", error);
    }
  };

  const handleUndo = async (ppcId, phoneNumber) => {
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/undo-delete-detail`, {
        ppcId,
        phoneNumber,
      });

      const updatedRemoved = removedItems.filter((id) => id !== ppcId);
      setRemovedItems(updatedRemoved);
      localStorage.setItem("removedProperties", JSON.stringify(updatedRemoved));
    } catch (error) {
      console.error("Failed to undo:", error);
    }
  };

  const filteredCalls =
    activeTab === "all"
      ? calls.filter((item) => !removedItems.includes(item.ppcId))
      : calls.filter((item) => removedItems.includes(item.ppcId));

  return (
    <div className="container d-flex align-items-center justify-content-center p-0" style={{fontFamily:"Inter, sans-serif",}}>
     
     <div className="d-flex flex-column align-items-center justify-content-center m-0" style={{ maxWidth: '500px', margin: 'auto', width: '100%' , background:"#F7F7F7"}}>
<div className="d-flex align-items-center justify-content-start w-100" style={{background:"#EFEFEF" }}>
  <button className="pe-5" onClick={handlePageNavigation}><FaArrowLeft color="#30747F"/> 
</button> <h3 className="m-0 ms-3" style={{fontSize:"20px"}}>MY CALLED LIST </h3> </div>

      {/* Tabs */}
      <div className="row g-2 w-100">
      <div className="col-6 p-0">
        <button style={{ backgroundColor: '#30747F', color: 'white' , width:"100%" }}
          onClick={() => setActiveTab("all")}
        >
          All
        </button>
        </div>

        <div className="col-6 p-0">

        <button style={{ backgroundColor: '#FFFFFF', color: 'grey' , width:"100%" }}
          onClick={() => setActiveTab("removed")}
        >
          Removed
        </button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="text-danger">{error}</p>}
      {!loading && filteredCalls.length === 0 && (
        <p>{activeTab === "all" ? "No properties found." : "No removed properties."}</p>
      )}

        {filteredCalls.map((property) => (
          <div key={property.ppcId} className="col-12 mb-1">
    
                <div className="row g-0 rounded-4 mb-2 w-100" style={{ border: '1px solid #ddd', overflow: "hidden", background:"#EFEFEF"}}>
                  <div className="col-md-4 col-4 d-flex flex-column justify-content-between align-items-center">
                  <div className="text-white py-1 px-2 text-center" style={{ width: '100%', background: "#2F747F" }}>
 PUC- {property.ppcId}
 </div>


 <div style={{ position: "relative", width: "100%", height:'180px'}}>
            <img
                                        src={property.photos?.length ? `http://localhost:5000/${property.photos[0]}` : pic}
                                        alt="Property"
                                        className="img-fluid"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                      />
          
          <div >
          <div className="d-flex justify-content-between w-100" style={{ position: "absolute",
          bottom: "0px"}}>
          <span className="d-flex justify-content-center align-items-center" style={{ color:'#fff', background:`url(${myImage}) no-repeat center center`, backgroundSize:"cover" ,fontSize:'12px', width:'50px' }}>
          <FaCamera className="me-1"/> 1
          </span>
          <span className="d-flex justify-content-center align-items-center" style={{ color:'#fff', background:`url(${myImage1}) no-repeat center center`, backgroundSize:"cover" ,fontSize:'12px', width:'50px' }}>
          <FaEye className="me-1" />1
          </span>
          </div>
          </div>
          </div>
                 </div>
                 <div className="col-md-8 col-8" style={{paddingLeft:"10px", background:"#F5F5F5"}}>
                 <div className="d-flex justify-content-between"><p className="mb-1 fw-bold" style={{ color:'#5E5E5E' }}>{property.propertyMode || 'N/A'}</p>

             {activeTab === "all" ? (
              
               <p className="m-0 ps-3 pe-3" style={{background:"#FF0000", color:"white", cursor:"pointer", borderRadius: '0px 0px 0px 15px'}} onClick={() => handleRemove(property.ppcId, property.phoneNumber)}>Remove</p>

              ) : (
          
                <p className="m-0 ps-3 pe-3" style={{background:"green", color:"white", cursor:"pointer", borderRadius: '0px 0px 0px 15px'}} onClick={() => handleUndo(property.ppcId, property.phoneNumber)}>Undo</p>

              )}
                  </div>
                   <p className="fw-bold m-0" style={{ color:'#000000' }}>{property.propertyType || 'N/A'}</p>
                   <p className=" fw-bold m-0" style={{ color:'#5E5E5E'}}>{property.city || 'N/A'}</p>
                   <div className="card-body ps-2 m-0 pt-0 pe-2 d-flex flex-column justify-content-center">
                     <div className="row">
          <div className="col-6 d-flex align-items-center p-1">
                         <FaRulerCombined className="me-2" color="#2F747F" /> <span style={{ fontSize:'13px', color:'#5E5E5E' }}>{property.totalArea || 'N/A'}</span>
                       </div>
          <div className="col-6 d-flex align-items-center p-1">
                         <FaBed className="me-2" color="#2F747F"/> <span style={{ fontSize:'13px', color:'#5E5E5E' }}>{property.bedrooms || 'N/A'}</span>
                       </div>
          <div className="col-6 d-flex align-items-center p-1">
                         <FaUserAlt className="me-2" color="#2F747F"/> <span style={{ fontSize:'13px', color:'#5E5E5E' }}>{property.ownership || 'N/A'}</span>
                       </div>
          <div className="col-6 d-flex align-items-center p-1">
                         <FaCalendarAlt className="me-2" color="#2F747F"/> <span style={{ fontSize:'13px', color:'#5E5E5E' }}>{property.date
                  ? new Date(property.date).toLocaleString()
                  : "N/A"}</span>
                       </div>
                       <div className="col-12 d-flex flex-col align-items-center p-1">
                       <h6 className="m-0">
                                   <span style={{ fontSize:'17px', color:'#2F747F', fontWeight:'bold', letterSpacing:"1px" }}> <FaRupeeSign className="me-2" color="#2F747F"/>{property.price ? property.price.toLocaleString('en-IN') : 'N/A'}
                                   </span> 
                                   <span style={{ color:'#2F747F', fontSize:'13px', marginLeft:"5px",fontSize:'11px',}}> 
                                   Negotiable                </span> 
                                     </h6>
                                  </div>
                                  <p className="p-1" style={{ color: "#2E7480", margin: "0px" }}>
                                  <a
                                                        href={`tel:${property.interestedUser}`}
                                                        style={{
                                                          textDecoration: "none",
                                                          color: "#2E7480",
                                                        }}
                                                      >
                                                        <MdCall className="me-2" color="#2F747F" />{" "}
                                                        {property.phoneNumber || 'N/A'}
                                                      </a>
                                                    </p>
                      </div>
                    </div>
                  </div>
               </div>
          </div>
        ))}
    </div>
    </div>
    </div>

  );
};

export default MyCalledList;
