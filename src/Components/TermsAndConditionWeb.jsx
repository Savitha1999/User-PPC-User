// import React from "react";

// const TermsAndConditionWeb = () => {
//   const paragraphStyle = {
//     fontFamily: "Open Sans, sans-serif",
//     fontSize: "14px",
//     color: "#646464",
//     fontWeight: "400",
//     lineHeight: "26px",
//   };

//   const headStyle = {
//     fontFamily: "Inter, sans-serif",
//     fontSize: "14px",
//     color: "#222222",
//     lineHeight: "26px",
//     fontWeight: "600",
//   };

//   const listStyle = {
//     color: "blue",
//     fontSize: "14px",
//   };

//   return (
//     <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
//       <h2 style={headStyle}>Terms & Conditions for Pondy property</h2>

//       <p style={paragraphStyle}>
//         By downloading or using the app, these terms will automatically apply to you – 
//         you should make sure therefore that you read them carefully before using the app. 
//         You’re not allowed to copy, modify, or extract the source code of the app. 
//         The app, trademarks, copyright, database rights, and other intellectual property rights 
//         still belong to Pondy property.
//       </p>

//       <p style={paragraphStyle}>
//         Pondy property reserves the right to make changes to the app or charge for services. 
//         Any charges will be made clear to you before payment.
//       </p>

//       <p style={paragraphStyle}>
//         The Pondy property app processes personal data provided by you. It’s your responsibility 
//         to keep your phone secure. We recommend not jailbreaking or rooting your phone, 
//         as it may expose your device to malware and security risks.
//       </p>

//       <h3 style={headStyle}>Third-Party Services</h3>
//       <p style={paragraphStyle}>The app uses third-party services that have their own Terms and Conditions:</p>
//       <ul>
//         <li style={listStyle}>Google Play Services</li>
//         <li style={listStyle}>AdMob</li>
//         <li style={listStyle}>Google Analytics for Firebase</li>
//         <li style={listStyle}>Firebase Crashlytics</li>
//         <li style={listStyle}>Facebook</li>
//         <li style={listStyle}>Mapbox</li>
//       </ul>

//       <h3 style={headStyle}>Internet and Connectivity</h3>
//       <p style={paragraphStyle}>
//         Some app functions require an active internet connection. Pondy property is not responsible 
//         if the app does not work due to poor connectivity.
//       </p>

//       <p style={paragraphStyle}>
//         If using the app outside your home region, your mobile provider may charge for data. 
//         Pondy property is not responsible for such charges.
//       </p>

//       <h3 style={headStyle}>Device Responsibility</h3>
//       <p style={paragraphStyle}>
//         Ensure your device stays charged. Pondy property is not responsible if you cannot access 
//         services due to a drained battery.
//       </p>

//       <h3 style={headStyle}>Updates and Termination</h3>
//       <p style={paragraphStyle}>
//         Pondy property may update the app and change system requirements. You agree to accept 
//         updates when offered. The service may be discontinued at any time.
//       </p>

//       <h3 style={headStyle}>Changes to Terms</h3>
//       <p style={paragraphStyle}>
//         We may update these Terms & Conditions periodically. Please review them regularly 
//         for changes.
//       </p>

//       <h3 style={headStyle}>Contact Us</h3>
//       <p style={paragraphStyle}>
//         If you have any questions, contact us at <a href="mailto:balarks@gmail.com">balarks@gmail.com</a>.
//       </p>
//     </div>
//   );
// };

// export default TermsAndConditionWeb;











import React, { useState, useEffect } from "react";
// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const TermsAndConditionWeb = () => {
    const [type, setType] = useState("terms&conditions"); // Default type
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
                </button> <h3 className="m-0 ms-3" style={{fontSize:"20px"}}> Terms and Conditions</h3> </div>
                

            <div>
                <p dangerouslySetInnerHTML={{ __html: content }}></p>  
            </div>
        </div>
    );
};

export default TermsAndConditionWeb;





