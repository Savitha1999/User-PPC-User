

import React, { useState, useEffect } from "react";
import { FaRulerCombined, FaBed, FaUser, FaCalendarAlt, FaEye, FaCamera } from "react-icons/fa";
import "./PropertyCard.css";
import { GoSearch } from "react-icons/go";
import { Helmet } from "react-helmet";
import { Container, Row, Col, Button } from "react-bootstrap";
import axios from "axios"; // Import axios for API calls

const PropertyCard = () => {
  // State to store fetched properties
  const [properties, setProperties] = useState([]);

  // Fetch properties data from the API
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/fetch-all-data`); // API call
        setProperties(response.data.users); // Set fetched properties into state
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };
    
    fetchProperties();
  }, []); // Empty dependency array to run only once when the component mounts

  return (
    <Container fluid className="p-3">
      <Helmet>
        <title>Pondy Property | Properties</title>
      </Helmet>
      <Row className="g-3">
        <Col lg={12} className="d-flex align-items-center justify-content-center">
          <div className="d-flex mt-3 justify-content-center align-items-center">
            <div className="search-icon">
              <GoSearch />
            </div>
            <div
              style={{
                width: "100%",
                maxWidth: "500px",
                minWidth: "300px",
                padding: "2rem",
                borderRadius: "8px",
                margin: "0 20px",
                backgroundRepeat: "no-repeat",
                color: "white",
              }}
            >
              {properties.length > 0 ? (
                properties.map((property) => (
                  <div className="property-card" key={property._id}>
                    <div className="property-images">
                    <img className=""
                        src={
                          property.photos && property.photos.length > 0
                            ? `http://localhost:5006/${property.photos[0]}`
                            : "https://d17r9yv50dox9q.cloudfront.net/car_gallery/default.jpg"
                        }
                      />
                  
                      <span>
                        <div className="property-badge" style={{ position: "absolute" }}>
                          <span><FaCamera className="badge-icon" /> 1 </span>
                        </div>
                        <div className="property-badges" style={{ position: "absolute" }}>
                          <FaEye className="badge-icons" /> 9
                        </div>
                      </span>
                    </div>
                    <div className="property-details">
                      <div className="details-header mt-1">
                        <p className="  fw-bold"
                        style={{color:"rgb(47,116,127)"}}
                        >
                         PPC_ID : {property.ppcId} 
                        </p>
                        <p className="mt-1">{property.propertyMode}</p>
                        <p className="category">{property.propertyType}</p>
                        <p className="loc">{property.city}</p>
                      </div>

                      <div className="info-row mt-1">
                        <p>
                          <FaRulerCombined className="icon" /> {property.totalArea}{property.areaUnit}
                          <br />
                          <FaUser className="icon" /> {property.ownership}
                        </p>
                        <p>
                          <FaBed className="icon " /> {property.bedrooms}
                          <br />
                          <FaCalendarAlt className="icon" /> {property.bestTimeToCall}
                        </p>
                      </div>

                      <div className="price-row mb-1">
                        <p className="price">{property.price}</p>
                        <p className="negotiable fw-bold"> Negotiation : <span className="text-dark"> {property.negotiation}</span></p>
                      </div>
                      </div>
                  </div>
                ))
              ) : (
                <p>Loading properties...</p> // Show a loading message until data is fetched
              )}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PropertyCard;
