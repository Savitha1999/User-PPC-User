


// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { Card, Button, Container } from 'react-bootstrap';

// export default function MyPlan() {
//   const location = useLocation();
//   const phoneNumber = location.state?.phoneNumber || localStorage.getItem("phoneNumber");

//   const [plans, setPlans] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (!phoneNumber) {
//       toast.error("Phone number is missing. Please login again.");
//     } else {
//       fetchPlans(phoneNumber);
//     }
//   }, [phoneNumber]);

//   const fetchPlans = async (phoneNumber) => {
//     try {
//       setLoading(true);
//       const response = await axios.get(`${process.env.REACT_APP_API_URL}/get-new-plan`, {
//         params: { phoneNumber }
//       });
//       setPlans(response.data.plans || []);
//     } catch (error) {
//       console.error("Error fetching plans:", error);
//       toast.error("Failed to fetch plans.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Container fluid className="d-flex justify-content-center align-items-center vh-100 ">
//       <ToastContainer />
//       <div style={{ maxWidth: '450px', width: '100%' }}>
//         <h2 className="text-center mb-4">My Plan</h2>
//         {loading && <p className="text-center">Loading...</p>}
//         {phoneNumber ? (
//           plans.length > 0 ? (
//             plans.map((plan) => (
//               <Card key={plan._id} className="shadow-lg text-white text-center mx-auto mb-4" style={{ backgroundColor: "#78c6e0" }}>
//                 <Card.Body>
//                   <Card.Title className="mb-4">{plan.name}</Card.Title>
//                   <Card.Text><strong>Package Type:</strong> {plan.packageType}</Card.Text>
//                   <Card.Text><strong>Price:</strong> ₹{plan.price}</Card.Text>
//                   <Card.Text><strong>Duration:</strong> {plan.durationDays} days</Card.Text>
//                   <Card.Text><strong>Number of Cars:</strong> {plan.numOfCars}</Card.Text>
//                   <Card.Text><strong>Featured Ads:</strong> {plan.featuredAds}</Card.Text>
//                   <Card.Text><strong>Description:</strong> {plan.description}</Card.Text>
//                   <Button variant="primary" size="lg" className="mt-3">Renew Plan</Button>
//                 </Card.Body>
//               </Card>
//             ))
//           ) : (
//             <p className="text-center">No plans found.</p>
//           )
//         ) : (
//           <p className="text-center text-danger">Phone number is missing. Please log in again.</p>
//         )}
//       </div>
//     </Container>
//   );
// }



































import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Card, Button, Container } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';

export default function MyPlan() {
  const location = useLocation();
  const phoneNumber = location.state?.phoneNumber || localStorage.getItem("phoneNumber");

  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);


  const navigate = useNavigate();

  const handlePageNavigation = () => {
    navigate('/mobileviews'); // Redirect to the desired path
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(""), 5000); // Auto-close after 3 seconds
      return () => clearTimeout(timer); // Cleanup timer
    }
  }, [message]);

  useEffect(() => {
    if (!phoneNumber) {
      setMessage({ text: "Phone number is missing. Please login again.", type: "error" });
    } else {
      fetchPlans(phoneNumber);
    }
  }, [phoneNumber]);

  const fetchPlans = async (phoneNumber) => {
    try {
      setLoading(true);
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/get-new-plan`, {
        params: { phoneNumber }
      });
      setPlans(response.data.plans || []);
    } catch (error) {
      console.error("Error fetching plans:", error);
      setMessage({ text: "Failed to fetch plans.", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container fluid className="d-flex justify-content-center align-items-center vh-100">


      <div style={{ maxWidth: '450px', width: '100%' }}>
        <div className="d-flex align-items-center justify-content-start w-100" style={{background:"#EFEFEF" }}>
                      <button className="pe-5" onClick={handlePageNavigation}><FaArrowLeft
                       color="#30747F"/> 
                    </button> <h3 className="m-0 ms-3" style={{fontSize:"20px"}}>MyPlan</h3> </div>
        
                    <h4 style={{ color: "rgb(10, 10, 10)", fontWeight: "bold", marginBottom: "10px" }}> Plan Management</h4>     
                    
                       {loading && <p className="text-center">Loading...</p>}
        {message && <p className={`text-center ${message.type === "error" ? "text-danger" : "text-success"}`}>{message.text}</p>}
        {phoneNumber ? (
          plans.length > 0 ? (
            plans.map((plan) => (
              <Card key={plan._id} className="shadow-lg text-white text-center mx-auto mb-4" style={{ backgroundColor: "#78c6e0" }}>
                <Card.Body>
                  <Card.Title className="mb-4">{plan.name}</Card.Title>
                  <Card.Text><strong>Package Type:</strong> {plan.packageType}</Card.Text>
                  <Card.Text><strong>Price:</strong> ₹{plan.price}</Card.Text>
                  <Card.Text><strong>Duration:</strong> {plan.durationDays} days</Card.Text>
                  <Card.Text><strong>Number of Cars:</strong> {plan.numOfCars}</Card.Text>
                  <Card.Text><strong>Featured Ads:</strong> {plan.featuredAds}</Card.Text>
                  <Card.Text><strong>Description:</strong> {plan.description}</Card.Text>
                  <Button variant="primary" size="lg" className="mt-3">Renew Plan</Button>
                </Card.Body>
              </Card>
            ))
          ) : (
            <p className="text-center">No plans found.</p>
          )
        ) : (
          <p className="text-center text-danger">Phone number is missing. Please log in again.</p>
        )}
      </div>
    </Container>
  );
}
