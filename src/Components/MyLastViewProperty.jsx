












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

  useEffect(() => {
    const fetchLastViewed = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/user-last-10-days-views/${phoneNumber}`
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











