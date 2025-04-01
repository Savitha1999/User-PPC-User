
// import React from 'react'
// import { FaArrowLeft } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';

// export default function AboutMobile() {
//     const headingabout = {
//         fontFamily: "Inter, sans-serif",
//         fontSize: "16px",
//         color: "#222222",
//         lineHeight: " 1.5",
//       };
//       const paragraphStyle = {
//         fontFamily: "Open Sans, sans-serif",
//         fontSize: "14px",
//         color: "#646464",
//         fontWeight: "400",
//         lineHeight: "26px",
//       };
    
// const navigate = useNavigate();

// const handlePageNavigation = () => {
//   navigate('/mobileviews'); // Redirect to the desired path
// };
                    

//   return (
//     <div className="d-flex flex-column mx-auto custom-scrollbar"
//     style={{
//       maxWidth: '450px',
//       height: '100vh',
//       overflow: 'auto',
//       scrollbarWidth: 'none', /* For Firefox */
//       msOverflowStyle: 'none', /* For Internet Explorer */
//       fontFamily: 'Inter, sans-serif'
//     }}>
//         <div className="d-flex align-items-center justify-content-start w-100" style={{background:"#EFEFEF" }}>
//                         <button className="pe-5" onClick={handlePageNavigation}><FaArrowLeft color="#30747F"/> 
//                       </button> <h3 className="m-0 ms-3" style={{fontSize:"20px"}}> About</h3> </div>

//                 <h5 style={{color:'#646464', fontWeight:'500'}}>About Us</h5>
//                 <p style={paragraphStyle}>Home/About Us</p>

//     <div className="row">
   
//       {/* Col 9 - Main content */}
//       <div className="col-12 col-md-9">
//         {/* <h1>About Us</h1> */}
//         <div className="content">
//           {/* <p style={paragraphStyle}><strong>Home/About Us</strong></p> */}
//           <p style={paragraphStyle}>
//           Pondicherry Property Consultancy
//                     </p>
//           <p style={paragraphStyle}>
//           Easy to BUY or SELL your Dream Property in Pondicherry.
//                     </p>
//           <p style={paragraphStyle}>
//           PPC PONDY website and mobile Android App is a dedicated app to serve people of Puducherry to buy or sell property without BROKERAGE
//                     </p>
          
//           {/* <h4 style={headingabout}>Post your Ads</h4> */}
//           <p style={paragraphStyle}>
//           We are the first and Proud Service provider in Real estate Business with state of art website and Mobile Application to give you exclusive details of all properties available to sell in and around Pondy.
//                     </p>

//           {/* <h4 style={headingabout}>The Other Mobile Apps Available for Pondicherry Residents</h4> */}
        
//          <p style={paragraphStyle}>
//          Buying Property is always a BIG DREAM:  we make your Dream comes true with our website and mobile  app, sell or buy your home, apartments, land, plots.          </p>
//       {/* <h4 style={headingabout}>PM Pondy</h4> */}
//       <p style={paragraphStyle}>
//       Post your Ads: By simple clicking the ADD PROPERTY Button you just give information about your property, we sell it for you. 
// </p>
// <p style={paragraphStyle}>
// A simple and easy Real estate website and mobile app for Puduvai.
//   </p>
//     {/* <h4 style={headingabout}>Rent Pondy</h4> */}
//        <p style={paragraphStyle}>
//        The other website and Mobile App Available for Pondicherry residence are:        </p>
       
//        {/* <h4 style={headingabout}>Pondy Job</h4> */}
// <ul>
//   <li><p style={paragraphStyle} className='ml-5'>
//        Rent Pondy- No more brokers, Rent Pondy website and mobile app list you all the properties (House, Commercial space, Godown, Apartments, and Shops) available for rent in Puducherry.        </p>
//      </li>
//   <li> <p style={paragraphStyle}>
//        Pondy Job-We keep you In your Home Town: Pondy. Our website and mobile app will provide complete information about all kind of jobs available in and around Pondicherry. It will help you to locate your career.        </p>
//  </li>
//   <li>
//   <p style={paragraphStyle}>
//        Pondy Used Cars- Pondy Used Cars is an exclusive website and mobile App and we are targeting Pondicherry Registered cars this makes us Single Big Platform to sell or buy PY REG cars.        </p>

//   </li>
// </ul>
//         </div>
//       </div>
//     </div>
//   </div>
//     )
// }



import React, { useState, useEffect } from "react";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function AboutMobile() {
    const [type, setType] = useState("aboutUs"); // Default type
       const [content, setContent] = useState();
   
        
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
   
      const navigate = useNavigate();


      const handlePageNavigation = () => {
        navigate('/mobileviews'); // Redirect to the desired path
      };


  return (
    <div  className="d-flex flex-column mx-auto custom-scrollbar"
    style={{
      maxWidth: '450px',
      height: '100vh',
      overflow: 'auto',
      scrollbarWidth: 'none', /* For Firefox */
      msOverflowStyle: 'none', /* For Internet Explorer */
      fontFamily: 'Inter, sans-serif'
    }}>


      <div className="d-flex align-items-center justify-content-start w-100" style={{background:"#EFEFEF" }}>
        <button className="pe-5" onClick={handlePageNavigation}><FaArrowLeft color="#30747F"/> 
      </button> <h3 className="m-0 ms-3" style={{fontSize:"20px"}}>AboutUs </h3> </div>

    <div>
                <p dangerouslySetInnerHTML={{ __html: content }}></p>  
            </div>

</div> 
 )
}
