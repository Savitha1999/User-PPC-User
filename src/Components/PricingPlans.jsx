


import React, { useState, useEffect } from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaArrowLeft, FaRegCheckCircle } from 'react-icons/fa';
import axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';

export default function PricingPlans({ phoneNumber }) {
  const location = useLocation();
  const [hoverIndex, setHoverIndex] = useState(null);
  const [loadingIndex, setLoadingIndex] = useState(null);
  const [cardData, setCardData] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const navigate = useNavigate();
  const [message, setMessage] = useState(null);



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
    fetchActivePlans();
  }, []);

  const fetchActivePlans = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/active-plans`);
      setCardData(response.data);
    } catch (error) {
    }
  };

  const confirmPlanSelection = (card, index) => {
    setSelectedPlan({ card, index });
    setShowPopup(true);
  };

  const handleConfirmPlan = async () => {
    if (!selectedPlan) return;
    const { card, index } = selectedPlan;

    if (!phoneNumber) {
      setMessage({ text: 'Phone number is missing.', type: 'error' });
      return;
    }

    const planData = {
      name: card.name,
      packageType: card.packageType,
      unlimitedAds: card.unlimitedAds,
      price: card.price,
      durationDays: card.durationDays,
      numOfCars: card.numOfCars,
      featuredAds: card.featuredAds,
      description: card.description,
      phoneNumber
    };

    setLoadingIndex(index);
    setShowPopup(false);

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/register-plan`, planData);
      if (response.status === 201) {
        setMessage({ text: 'Plan added successfully!', type: 'success' });
        setTimeout(() => navigate('/my-property'), 5000);

      }
    } catch (error) {
      setMessage({ text: 'Error adding plan. Please try again.', type: 'error' });
    } finally {
      setLoadingIndex(null);
    }
  };


  return (
    <div className="container my-5" style={{ maxWidth: '500px', margin: '0 auto', fontFamily: 'Inter, sans-serif' }}>

      <div className="d-flex align-items-center justify-content-start w-100" style={{background:"#EFEFEF" }}>
        <button className="pe-5" onClick={handlePageNavigation}><FaArrowLeft color="#30747F"/> 
      </button> <h3 className="m-0 ms-3" style={{fontSize:"20px"}}>Upgrade Memership</h3> </div>
      
       {message && (
        <p className='text-bold' style={{ color: message.type === 'success' ? 'green' : 'red', textAlign: 'center' }}>
          {message.text}
        </p>
      )}
      
      <div className="text-center mb-5">
      <h4 style={{ color: "rgb(10, 10, 10)", fontWeight: "bold", marginBottom: "10px" }}> Property Management</h4>        <p className="lead">It's very simple to choose a pricing plan</p>
      </div>

      <div className="row justify-content-center">
        {cardData.map((card, index) => (
          <div key={index} className="col-12 d-flex justify-content-center mb-4">
            <div 
              className="card shadow-lg" 
              style={{
                width: '100%',
                backgroundColor: hoverIndex === index ? '#D4EEFF' : 'white',
                transition: 'background-color 0.3s ease'
              }}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <h4 className="card-title text-start"><strong>{card.name}</strong></h4>
                  <FaRegCheckCircle style={{ color: 'green', fontSize: '40px' }} />
                </div>
                <h5 className="card-subtitle mb-3 text-muted text-start">{card.packageType}</h5>
                <h5 className="card-subtitle mb-3 text-muted text-start">UNLIMITED car ads</h5>
                <h3 className="display-4 mb-4 text-start" style={{ fontSize: '3rem' }}>₹ {card.price}</h3>
                <p className="text-muted text-start" style={{ fontSize: '1.25rem' }}>{card.durationDays} Days / {card.numOfCars} Car{card.numOfCars > 1 ? 's' : ''}</p>
                <h3 className="display-4 mb-4 text-start">{card.featuredAds} FEATURED ADS</h3>
                <p className="card-subtitle mb-3 text-muted text-start">{card.description}</p>
                <div className="d-flex justify-content-center">
                  <button 
                    className="btn p-3" 
                    style={{ background: '#4F4B7E', color: '#fff', borderRadius: '58px' }}
                    onClick={() => confirmPlanSelection(card, index)}
                    disabled={loadingIndex === index}
                  >
                    {loadingIndex === index ? 'Posting...' : 'Post Ad'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Confirmation Popup */}
      <Modal show={showPopup} onHide={() => setShowPopup(false)}>
        <Modal.Body>
          <p>Are you sure you want to post this ad?</p>
          <Button variant="success" onClick={handleConfirmPlan}>Yes</Button>
          <Button variant="danger" onClick={() => setShowPopup(false)}>No</Button>
        </Modal.Body>
      </Modal>
    </div>
  );
}
