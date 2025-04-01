// // import React from 'react'

// // export default function ShippingAndDelivery() {
// //   const headingStyle = {
// //     fontFamily: "Open Sans, sans-serif",
// //     fontSize: "14px",
// //     color: "#646464",
// //     fontWeight: "bold",
// //     lineHeight: "26px",
// // };

// // const textStyle = {
// //     fontFamily: "Inter, sans-serif",
// //     fontSize: "14px",
// //     color: "#222222",
// //     lineHeight: "26px",
// // };
// //   return (
// //     <div className="container mt-5 ">
// //     <div className="card p-4 border-0">
// //         <h2 className="text-center mb-4" style={headingStyle}>Shipping & Delivery Policy for Pondy Property  </h2>
// //         <h4 style={headingStyle}>1. Overview</h4>
// //         <p style={textStyle}>
// //             <strong>Pondy Property</strong> is a digital platform designed to connect buyers, sellers, renters, and agents for real estate transactions.
// //             Unlike e-commerce platforms, <strong>no physical goods are sold or shipped through our app. </strong> This policy clarifies our stance on shipping
// //             and delivery-related matters.
// //         </p>
        
// //         <h4 style={headingStyle}>2. No Shipping or Delivery Services</h4>
// //         <p style={textStyle}>
// //             Our app facilitates property listings (e.g., homes, land, commercial spaces) and does <strong>not</strong> involve the sale, shipment, or delivery of physical products. As such:
// //         </p>
// //         <ul style={textStyle}>
// //             <li><strong>No shipping fees, timelines, or tracking</strong> apply to property listings.</li>
// //             <li><strong>Transactions</strong> (e.g., purchases, leases) are negotiated and finalized directly between users.</li>
// //         </ul>
        
// //         <h4 style={headingStyle}>3. User Responsibilities</h4>
// //         <ul style={textStyle}>
// //             <li><strong>Documentation/Keys:</strong> Any exchange of physical items (e.g., contracts, keys) is the sole responsibility of users.</li>
// //             <li><strong>Third-Party Services:</strong> If users engage third parties (e.g., couriers for documents), such arrangements are independent of our platform. We are not liable for their services.</li>
// //         </ul>
        
// //         <h4 style={headingStyle}>4. Contact Us</h4>
// //         <p style={textStyle}><strong>For questions about this policy or the app:</strong></p>
// //         <ul style={textStyle}>
// //             <li><strong>Email:</strong> balarks@gmail.com</li>
// //             <li><strong>Address:</strong> No.101, Chetty Street, Pondicherry-605001.</li>
// //         </ul>
        
// //         <h4 style={headingStyle}>5. Policy Updates</h4>
// //         <p style={textStyle}>
// //             We may update this policy periodically. <strong>Changes will be posted on this page</strong> with a revised effective date.
// //         </p>
        
// //         <p className="text-muted" style={textStyle}>
// //             <strong>By using Pondy Property, users acknowledge</strong> that shipping/delivery services are irrelevant to our platform and agree to this policy.
// //         </p>
// //     </div>
// // </div>


// //   )
// // }



// import React from 'react'
// import { FaArrowLeft } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';

// export default function ShippingAndDeliveryApp() {
//     const navigate = useNavigate();

//     const headingStyle = {
//         fontFamily: "Open Sans, sans-serif",
//         fontSize: "14px",
//         color: "#646464",
//         fontWeight: "bold",
//         lineHeight: "26px",
//     };
    
//     const textStyle = {
//         fontFamily: "Inter, sans-serif",
//         fontSize: "14px",
//         color: "#222222",
//         lineHeight: "26px",
//     };
//   return (
//     <div       className="d-flex flex-column mx-auto custom-scrollbar p-2"
//     style={{
//       maxWidth: '450px',
//       height: '100vh',
//       overflow: 'auto',
//       scrollbarWidth: 'none',
//       msOverflowStyle: 'none',
//       fontFamily: 'Inter, sans-serif',
//     }}>
//          <div className="d-flex align-items-center justify-content-start w-100 pt-2 pb-2" style={{background:"#EFEFEF" }}>
//                               <button className="pe-5" onClick={() => navigate('/mobileviews')}><FaArrowLeft color="#30747F"/> 
//                             </button> <h3 className="m-0 ms-3" style={{fontSize:"15px", fontWeight:"bold"}}>Shipping & Delivery</h3> </div>
        
//     <div className="card p-4 border-0">
//         <h2 className="text-center mb-4" style={headingStyle}>Shipping & Delivery Policy for Pondy Property  </h2>
//         <h4 style={headingStyle}>1. Overview</h4>
//         <p style={textStyle}>
//             <strong>Pondy Property</strong> is a digital platform designed to connect buyers, sellers, renters, and agents for real estate transactions.
//             Unlike e-commerce platforms, <strong>no physical goods are sold or shipped through our app. </strong> This policy clarifies our stance on shipping
//             and delivery-related matters.
//         </p>
        
//         <h4 style={headingStyle}>2. No Shipping or Delivery Services</h4>
//         <p style={textStyle}>
//             Our app facilitates property listings (e.g., homes, land, commercial spaces) and does <strong>not</strong> involve the sale, shipment, or delivery of physical products. As such:
//         </p>
//         <ul style={textStyle}>
//             <li><strong>No shipping fees, timelines, or tracking</strong> apply to property listings.</li>
//             <li><strong>Transactions</strong> (e.g., purchases, leases) are negotiated and finalized directly between users.</li>
//         </ul>
        
//         <h4 style={headingStyle}>3. User Responsibilities</h4>
//         <ul style={textStyle}>
//             <li><strong>Documentation/Keys:</strong> Any exchange of physical items (e.g., contracts, keys) is the sole responsibility of users.</li>
//             <li><strong>Third-Party Services:</strong> If users engage third parties (e.g., couriers for documents), such arrangements are independent of our platform. We are not liable for their services.</li>
//         </ul>
        
//         <h4 style={headingStyle}>4. Contact Us</h4>
//         <p style={textStyle}><strong>For questions about this policy or the app:</strong></p>
//         <ul style={textStyle}>
//             <li><strong>Email:</strong> balarks@gmail.com</li>
//             <li><strong>Address:</strong> No.101, Chetty Street, Pondicherry-605001.</li>
//         </ul>
        
//         <h4 style={headingStyle}>5. Policy Updates</h4>
//         <p style={textStyle}>
//             We may update this policy periodically. <strong>Changes will be posted on this page</strong> with a revised effective date.
//         </p>
        
//         <p className="text-muted" style={textStyle}>
//             <strong>By using Pondy Property, users acknowledge</strong> that shipping/delivery services are irrelevant to our platform and agree to this policy.
//         </p>
//     </div>
// </div>  )
// }













import React, { useState, useEffect } from "react";
// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const ShippingAndDelivery = () => {
    const [type, setType] = useState("shiping&Delivery"); // Default type
    const [content, setContent] = useState("");

          
const navigate = useNavigate();

const handlePageNavigation = () => {
  navigate('/mobileviews'); // Redirect to the desired path
};

    // Fetch existing content when component loads
    useEffect(() => {
        const fetchContent = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/get-text/${type}`);
                setContent(response.data?.content || ""); // Set empty string if undefined
            } catch (error) {
                console.error("Error fetching content:", error);
                setContent(""); // Ensure it doesn't break
            }
        };

        fetchContent();
    }, [type]); // Runs when `type` changes

    return (
           <div className="container">
                {/* <h5 style={{color:'#646464', fontWeight:'500'}}>About Us</h5> */}
                <div className="d-flex align-items-center justify-content-start w-100" style={{background:"#EFEFEF" }}>
                  <button className="pe-5" onClick={handlePageNavigation}><FaArrowLeft color="#30747F"/> 
                </button> <h3 className="m-0 ms-3" style={{fontSize:"20px"}}>Shiping And Delivery</h3> </div>
                

            <div>
                <p dangerouslySetInnerHTML={{ __html: content }}></p>  
            </div>
        </div>
    );
};

export default ShippingAndDelivery;





