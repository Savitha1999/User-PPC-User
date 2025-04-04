


import React, { useState, useEffect } from "react";
// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const TextEditor = () => {
    const [type, setType] = useState("privacyPolicy"); // Default type
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
                </button> <h3 className="m-0 ms-3" style={{fontSize:"20px"}}> Privacy policy</h3> </div>
                

            <div>
                <p dangerouslySetInnerHTML={{ __html: content }}></p>  
            </div>
        </div>
    );
};

export default TextEditor;










// import React from 'react'
// import { FaArrowLeft } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';

// export default function PrivacyPolicyApp() {
//     const navigate = useNavigate();

//     const paragraphStyle = {
//         fontFamily: "Open Sans, sans-serif",
//         fontSize: "14px",
//         color: "#646464",
//         fontWeight: "400",
//         lineHeight: "26px",
//       };
      
//       const headStyle = {
//         fontFamily: "Inter, sans-serif",
//         fontSize: "14px",
//         color: "#222222",
//         lineHeight: "26px",
//       };
//   return (
//     <div   className="d-flex flex-column mx-auto custom-scrollbar p-2"
//     style={{
//       maxWidth: '450px',
//       height: '100vh',
//       overflow: 'auto',
//       scrollbarWidth: 'none',
//       msOverflowStyle: 'none',
//       fontFamily: 'Inter, sans-serif',}}>
//             <div className="d-flex align-items-center justify-content-start w-100 pt-2 pb-2" style={{background:"#EFEFEF" }}>
//                       <button className="pe-5" onClick={() => navigate('/mobileviews')}><FaArrowLeft color="#30747F"/> 
//                     </button> <h3 className="m-0 ms-3" style={{fontSize:"15px", fontWeight:"bold"}}>Privacy Policy</h3> </div>
//     <div className="w-100">
//       <p style={paragraphStyle} className="text-start mb-4">Home / <span style={{fontWeight:"bolder"}}>Privacy Policy</span></p>
//       <p style={paragraphStyle}>
//         This Privacy policy is subject to the terms of the Site Policy (User agreement) of Pondy Property Consultancy. This policy is effective from the date and time a user registers with Pondy Property Consultancy by filling up the Registration form and accepting the terms and conditions laid out in the Site Policy.
//       </p>

//       <p style={paragraphStyle}>
//         In order to provide a personalized browsing experience, Pondy Property Consultancy may collect personal information from you. Additionally, some of our websites may require you to complete a registration form or seek some information from you. When you let us have your preferences, we will be able to deliver or allow you to access the most relevant information that meets your end.
//       </p>

//       <p style={paragraphStyle}>
//         To extend this personalized experience Pondy Property Consultancy may track the IP address of a user's computer and save certain information on your system in the form of cookies. A user has the option of accepting or declining the cookies of this website by changing the settings of your browser.
//       </p>

//       <p style={paragraphStyle}>
//       The personal information provided by the users to Pondy Property Consultancy will not be provided to third parties without previous consent of the user concerned. Information of a general nature may however be revealed to external parties Every effort will be made to keep the information provided by users in a safe manner, the information will be displayed on the website will be done so only after obtaining consent from the users. Any user browsing the site generally is not required to disclose his identity or provide any information about him/ her; it is only at the time of registration you will be required to furnish the details in the registration form.        </p>

//       <p style={paragraphStyle}>
//       A full user always has the option of not providing the information which is not mandatory. You are solely responsible for maintaining confidentiality of the User password and user identification and all activities and transmission performed by the User through his user identification and shall be solely responsible for carrying out any online or off-line transaction involving credit cards / debit cards or such other forms of instruments or documents for making such transactions and IEIL assumes no responsibility or liability for their improper use of information relating to such usage of credit cards / debit cards used by the subscriber online / off-line.        </p>

//       <p style={paragraphStyle}>
//       You agree that IEIL may use personal information about you to improve its marketing and promotional efforts, to analyze site usage, improve the Site's content and product offerings, and customize the Site's content, layout, and services. These uses improve the Site and better tailor it to meet your needs, so as to provide you with a smooth, efficient, safe and customized experience while using the Site. </p>
//       <p style={paragraphStyle}>
//       You agree that IEIL may use your personal information to contact you and deliver information to you that, in some cases, are targeted to your interests, such as targeted banner advertisements, administrative notices, product offerings, and communications relevant to your use of the Site. By accepting the User Agreement and Privacy Policy, you expressly agree to receive this information. If you do not wish to receive these communications, we encourage you to opt out of the receipt of certain communications in your profile. You may make changes to your profile at any time. It is the belief of IEIL that privacy of a person can be best guaranteed by working in conjunction with the Law enforcement authorities.        </p>

//       <p style={paragraphStyle}>
//       All IEIL websites including Pondy Property Consultancy fully comply with all Indian Laws applicable. IEIL has always cooperated with all law enforcement inquires. IEIL may disclose all or part of your personal details in response to a request from the law enforcement authorities or in a case of bonafide requirement to prevent an imminent breach of the law        </p>


//       <h4 style={headStyle} className="mt-4"><b>THIRD-PARTY ADVERTISERS, LINKS TO OTHER SITES</b></h4>

//       <p style={paragraphStyle}>
//       The App Owner allows other companies, called third-party ad servers or ad networks, to display advertisements within the Said App. These third-party ad servers or ad networks use technology to send advertisements and links that appear on the Said App directly to the User’s browser. They automatically receive the User’s IP address when this happens. They may also use other technology (such as cookies, JavaScript, or Web Beacons) to measure the effectiveness of their advertisements and to personalize the advertising content the User sees.        </p>

//       <p style={paragraphStyle}>
//       The App Owner does not provide any personally identifiable information to these third-party ad servers or ad networks without the User’s consent or except as part of a specific program or feature for which the User will have the ability to opt-in or opt-out. However, please note that if an advertiser asks the App Owner to show an advertisement to a certain audience and the User responds to that advertisement, the advertiser or ad-server may conclude that the User fits the description of the audience they are trying to reach. The advertiser may also use information regarding the User’s use of the Said App, such as the number of times the User viewed an ad (but not any personally identifiable information), to determine which ads to deliver to the User.        </p>

//       <p style={paragraphStyle}>
//       The User should consult the respective privacy policies of these third-party ad servers or ad networks for more information on their practices and for instructions on how to opt-out of certain practices. The Said App's privacy policy does not apply to, and the App Owner cannot control the activities of, such other advertisers or web sites. Any data obtained by third-party ad servers subsequently shared with the App Owner is maintained and dealt with by the App Owner in accordance with this privacy policy.          </p>
           
//     </div>
//   </div>  )
// }

