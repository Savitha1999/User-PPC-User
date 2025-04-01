








// import React, { useRef } from "react";
// import profil from '../Assets/xd_profile.png'
// import {  MdOutlineCall , MdFamilyRestroom , MdOutlineMapsHomeWork , MdCalendarMonth , MdOutlineBed , MdOutlineTimer  } from "react-icons/md";
// import { LuIndianRupee , LuBriefcaseBusiness  } from "react-icons/lu";
// import { GiSittingDog } from "react-icons/gi";
// import { IoFastFoodOutline } from "react-icons/io5";
// import { GoHome } from "react-icons/go";
// import { RiStairsLine } from "react-icons/ri";
// import { TfiLocationPin } from "react-icons/tfi";

// const BuyerLists = () => {
//   const scrollContainerRef = useRef(null);
//   const iconContainerRef = useRef(null);

//   const handleWheelScroll = (e) => {
//     if (scrollContainerRef.current) {
//       e.preventDefault();
//       scrollContainerRef.current.scrollTop += e.deltaY;
//     }
//   };

//   const handleIconScroll = (e) => {
//     if (iconContainerRef.current) {
//       e.preventDefault();
//       const scrollAmount = e.deltaX || e.deltaY;
//       iconContainerRef.current.scrollLeft += scrollAmount;
//     }
//   };


//   return (
//     <div
//       className="d-flex flex-column justify-content-center align-items-center"
//       style={{
//         height: "auto",
//         padding: "10px",
//         gap: "15px",
//         borderRadius: "10px",
//         overflowY: "auto", 
//       }}
//       onWheel={handleWheelScroll}
//       ref={scrollContainerRef}
//     >
//       {cards.map((card) => (


// <div
// key={card.id}
// className="card p-1"
// style={{
//   width: "450px", 
//   border: "1px solid #ddd",
//   borderRadius: "10px",
//   overflow: "hidden",
//   marginBottom: "15px",
//   fontFamily: "Inter, sans-serif",
// }}
// >
// <div className="row d-flex align-items-center">
// <div className="col-3 d-flex align-items-center justify-content-center mb-1">
// <img
// src={profil}
// alt="Placeholder"
// className="rounded-circle mt-2"
// style={{ width: "80px", height: "80px", objectFit: "cover" }}
// />
// </div>

// <div className="col-9 p-0">
// <div className="d-flex justify-content-between ">
// <p className="m-0" style={{ color: "#5E5E5E", fontWeight: "normal" }}>
// BA ID: 1215
// </p>

//         <p className="mb-0  ps-3 pe-3 text-center pt-1 pb-1 position-absolute top-0 end-0" style={{background:"#FF0000", color:"white", cursor:"pointer" , borderRadius: '0px 0px 0px 15px', fontSize:"12px"}} >UNDO</p>

// </div>

// <h5 className="mb-1">
// {card.name} |{" "}
// <span className="text-muted" style={{ fontSize: "12px" }}>
// buyer
// </span>
// </h5>
// <div className="d-flex justify-content-between align-items-center col-8"><p className="mb-1 d-flex align-items-center">
// <LuIndianRupee color="#019988" className="me-2" />
// {card.price}
// </p>
// <p className="mb-1 d-flex align-items-center">
// <LuIndianRupee color="#019988" className="me-2" />
// {card.price}
// </p>
// </div>

// </div>
// </div>


// <div className="p-1">
// <div
//   className="d-flex align-items-center overflow-auto mb-0 p-1 rounded-1"
//   style={{
//     whiteSpace: "nowrap",
//     minWidth: "100%",
//     overflowX: "auto",
//     scrollbarWidth: "none", 
//     msOverflowStyle: "none",
//     border:"1px solid #019988"
//   }}
//   onWheel={handleIconScroll}
//   ref={iconContainerRef}
// >
//   <div className="d-flex align-items-center me-3">
//     <GoHome  size={20} className="me-2" color="#019988"/>
//     <p className="mb-0 small">{card.propertymode}</p>
//   </div>
//   <div className="d-flex align-items-center me-3">
//     <MdOutlineMapsHomeWork  size={20} className="me-2" color="#019988"/>
//     <p className="mb-0 small">{card.housetype}</p>
//   </div>
//   <div className="d-flex align-items-center me-3">
//     <MdCalendarMonth  size={20} className="me-2" color="#019988"/>
//     <p className="mb-0 small">{card.payment}</p>
//   </div>
//   <div className="d-flex align-items-center me-3">
//     <MdOutlineBed  size={20} className="me-2" color="#019988"/>
//     <p className="mb-0 small">{card.bed}</p>
//   </div>
//   <div className="d-flex align-items-center me-3">
//     <RiStairsLine size={20} className="me-2" color="#019988"/>
//     <p className="mb-0 small">{card.floor}</p>
//   </div>
//   <div className="d-flex align-items-center me-3">
//     <MdOutlineTimer size={20} className="me-2" color="#019988"/>
//     <p className="mb-0 small">{card.time}</p>
//   </div>
// </div>



// <div className="mb-0">
//   <p className="mb-0">
//     <TfiLocationPin   size={16} className="me-2" color="#019988"/>
//     {card.location}
//   </p>
// </div>

// <div className="d-flex justify-content-between align-items-center">
// <div className="d-flex align-items-center">
// <MdOutlineCall color="#019988" style={{ fontSize: "20px", marginRight: "8px" }} />
// <div>
// <h6 className="m-0 text-muted" style={{ fontSize: "11px" }}>Interest Owner Phone</h6>
// <span className="card-text" style={{ color: "grey" }}>
// {card.mobileNumber.slice(0, -5)}*****
// </span>
// </div>
// </div>
// <div>
// <button className="btn btn-sm me-2" style={{ background: "#019988", color: "#fff" }}>
// SEND INTEREST
// </button>
// <button className="btn btn-primary btn-sm">MORE</button>
// </div>
// </div>

// </div>
// </div>
//       ))}
//     </div>
//   );
// };

// export default BuyerLists;














































// import React, { useEffect, useState, useRef } from "react";
// import axios from "axios";
// import { LuIndianRupee } from "react-icons/lu";
// import { GoHome } from "react-icons/go";
// import { MdOutlineMapsHomeWork, MdCalendarMonth, MdOutlineBed, MdOutlineTimer, MdOutlineCall } from "react-icons/md";
// import { RiStairsLine } from "react-icons/ri";
// import { TfiLocationPin } from "react-icons/tfi";

// const BuyerLists = ({ phoneNumber }) => {
//   const [buyers, setBuyers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const scrollContainerRef = useRef(null);
//   const iconContainerRef = useRef(null);

//   useEffect(() => {
//     if (!phoneNumber) return;
    
//     const fetchBuyerRequests = async () => {
//       try {
//         const response = await axios.get(
//           `${process.env.REACT_APP_API_URL}/fetch-buyerAssistance-user?phoneNumber=${phoneNumber}`
//         );
//         setBuyers(response.data.data);
//       } catch (err) {
//         setError(err.response?.data?.message || "Error fetching data");
//       } finally {
//         setLoading(false);
//       }
//     };
    
//     fetchBuyerRequests();
//   }, [phoneNumber]);

//   const handleWheelScroll = (e) => {
//     if (scrollContainerRef.current) {
//       e.preventDefault();
//       scrollContainerRef.current.scrollTop += e.deltaY;
//     }
//   };

//   const handleIconScroll = (e) => {
//     if (iconContainerRef.current) {
//       e.preventDefault();
//       iconContainerRef.current.scrollLeft += e.deltaX || e.deltaY;
//     }
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
    // <div
    //   className="d-flex flex-column justify-content-center align-items-center"
    //   style={{ height: "auto", padding: "10px", gap: "15px", borderRadius: "10px", overflowY: "auto" }}
    //   onWheel={handleWheelScroll}
    //   ref={scrollContainerRef}
    // >
    //   {buyers.map((buyer) => (
    //     <div key={buyer._id} className="card p-1" style={{ width: "450px", border: "1px solid #ddd", borderRadius: "10px", overflow: "hidden", marginBottom: "15px" }}>
    //       <div className="row d-flex align-items-center">
    //         <div className="col-3 d-flex align-items-center justify-content-center mb-1">
    //           <img src="/profile-placeholder.jpg" alt="Placeholder" className="rounded-circle mt-2" style={{ width: "80px", height: "80px", objectFit: "cover" }} />
    //         </div>
    //         <div className="col-9 p-0">
    //           <h5>BA_ID: {buyer.ba_id} </h5>
    //           <h5 className="mb-1">{buyer.name} | <span className="text-muted" style={{ fontSize: "12px" }}>buyer</span></h5>
    //           <div className="d-flex justify-content-between align-items-center col-8">
    //             <p className="mb-1 d-flex align-items-center"><LuIndianRupee color="#019988" className="me-2" />{buyer.price}</p>
    //           </div>
    //           <span>
    //           <p>Minimum Price :{buyer.minPrice} </p> <p> Maximum Price :{buyer.maxPrice}   </p>
    //           </span>
    //         </div>
    //       </div>

    //       <div className="p-1">
    //         <div className="d-flex align-items-center overflow-auto mb-0 p-1 rounded-1" style={{ whiteSpace: "nowrap", minWidth: "100%", overflowX: "auto", border: "1px solid #019988" }} onWheel={handleIconScroll} ref={iconContainerRef}>
    //           <div className="d-flex align-items-center me-3"><GoHome size={20} className="me-2" color="#019988"/><p className="mb-0 small">{buyer.propertymode}</p></div>
    //           <div className="d-flex align-items-center me-3"><MdOutlineMapsHomeWork size={20} className="me-2" color="#019988"/><p className="mb-0 small">{buyer.housetype}</p></div>
    //           <div className="d-flex align-items-center me-3"><MdCalendarMonth size={20} className="me-2" color="#019988"/><p className="mb-0 small">{buyer.payment}</p></div>
    //           <div className="d-flex align-items-center me-3"><MdOutlineBed size={20} className="me-2" color="#019988"/><p className="mb-0 small">{buyer.bed}</p></div>
    //           <div className="d-flex align-items-center me-3"><RiStairsLine size={20} className="me-2" color="#019988"/><p className="mb-0 small">{buyer.floor}</p></div>
    //           <div className="d-flex align-items-center me-3"><MdOutlineTimer size={20} className="me-2" color="#019988"/><p className="mb-0 small">{buyer.time}</p></div>

    //         </div>

    //         <p className="mb-0"><TfiLocationPin size={16} className="me-2" color="#019988"/>{buyer.location}</p>

    //         <div className="d-flex justify-content-between align-items-center">
    //           <div className="d-flex align-items-center">
    //             <MdOutlineCall color="#019988" style={{ fontSize: "20px", marginRight: "8px" }} />
    //             <div>
    //               <h6 className="m-0 text-muted" style={{ fontSize: "11px" }}>Interest Owner Phone</h6>
    //               <span className="card-text" style={{ color: "grey" }}>{buyer.phoneNumber.slice(0, -5)}*****</span>
    //             </div>
    //           </div>
    //           <div>
    //             <button className="btn btn-sm me-2" style={{ background: "#019988", color: "#fff" }}>SEND INTEREST</button>
    //             <button className="btn btn-primary btn-sm">MORE</button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   ))}
    // </div>
//   );
// };

// export default BuyerLists;




// import React, { useEffect, useState, useRef } from "react";
// import axios from "axios";
// import { LuIndianRupee } from "react-icons/lu";
// import { GoHome } from "react-icons/go";
// import { MdOutlineMapsHomeWork, MdCalendarMonth, MdOutlineBed, MdOutlineCall, MdOutlineTimer } from "react-icons/md";
// import { RiStairsLine } from "react-icons/ri";
// import { TfiLocationPin } from "react-icons/tfi";

// export default function BuyerAssistanceInterests() {
//   const [assistanceData, setAssistanceData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const scrollContainerRef = useRef(null);
//   const iconContainerRef = useRef(null);

//   useEffect(() => {
//     const fetchAssistanceData = async () => {
//       try {
//         const response = await axios.get(`${process.env.REACT_APP_API_URL}/buyer-assistance-interests`);
//         setAssistanceData(response.data.data);
//       } catch (err) {
//         setError("Error fetching data");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAssistanceData();
//   }, []);

//   const handleWheelScroll = (event) => {
//     if (scrollContainerRef.current) {
//       scrollContainerRef.current.scrollTop += event.deltaY;
//     }
//   };

//   const handleIconScroll = (event) => {
//     if (iconContainerRef.current) {
//       iconContainerRef.current.scrollLeft += event.deltaY;
//     }
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div className="container">
//       <h2>Buyer Assistance Interests</h2>
//       <div
//         className="d-flex flex-column justify-content-center align-items-center"
//         style={{ height: "auto", padding: "10px", gap: "15px", borderRadius: "10px", overflowY: "auto" }}
//         onWheel={handleWheelScroll}
//         ref={scrollContainerRef}
//       >
//         {assistanceData.length > 0 ? (
//           assistanceData.map((buyer) => (
//             <div key={buyer._id} className="card p-1" style={{ width: "450px", border: "1px solid #ddd", borderRadius: "10px", overflow: "hidden", marginBottom: "15px" }}>
//               <div className="row d-flex align-items-center">
//                 <div className="col-3 d-flex align-items-center justify-content-center mb-1">
//                   <img src="/profile-placeholder.jpg" alt="Placeholder" className="rounded-circle mt-2" style={{ width: "80px", height: "80px", objectFit: "cover" }} />
//                 </div>
//                 <div className="col-9 p-0">
//                   <h5>BA_ID: {buyer.ba_id} </h5>
//                   <h5 className="mb-1">{buyer.name || "Unknown Buyer"} | <span className="text-muted" style={{ fontSize: "12px" }}>Buyer</span></h5>
//                   <div className="d-flex justify-content-between align-items-center col-8">
//                     <p className="mb-1 d-flex align-items-center">
//                       <LuIndianRupee color="#019988" className="me-2" />
//                       {buyer.price}
//                     </p>
//                   </div>
//                   <p>Minimum Price: {buyer.minPrice}</p>
//                   <p>Maximum Price: {buyer.maxPrice}</p>
//                 </div>
//               </div>

//               <div className="p-1">
//                 <div className="d-flex align-items-center overflow-auto mb-0 p-1 rounded-1" style={{ whiteSpace: "nowrap", minWidth: "100%", overflowX: "auto", border: "1px solid #019988" }} onWheel={handleIconScroll} ref={iconContainerRef}>
//                   <div className="d-flex align-items-center me-3"><GoHome size={20} className="me-2" color="#019988" /><p className="mb-0 small">{buyer.propertyMode}</p></div>
//                   <div className="d-flex align-items-center me-3"><MdOutlineMapsHomeWork size={20} className="me-2" color="#019988" /><p className="mb-0 small">{buyer.propertyType}</p></div>
//                   <div className="d-flex align-items-center me-3"><MdCalendarMonth size={20} className="me-2" color="#019988" /><p className="mb-0 small">{buyer.paymentType}</p></div>
//                   <div className="d-flex align-items-center me-3"><MdOutlineBed size={20} className="me-2" color="#019988" /><p className="mb-0 small">{buyer.noOfBHK} BHK</p></div>
//                   <div className="d-flex align-items-center me-3"><RiStairsLine size={20} className="me-2" color="#019988" /><p className="mb-0 small">{buyer.propertyAge}</p></div>
//                   <div className="d-flex align-items-center me-3"><MdOutlineTimer size={20} className="me-2" color="#019988" /><p className="mb-0 small">{buyer.updatedAt.slice(0, 10)}</p></div>
//                 </div>

//                 <p className="mb-0"><TfiLocationPin size={16} className="me-2" color="#019988" />{buyer.area}, {buyer.city}</p>

//                 <div className="d-flex justify-content-between align-items-center">
//                   <div className="d-flex align-items-center">
//                     <MdOutlineCall color="#019988" style={{ fontSize: "20px", marginRight: "8px" }} />
//                     <div>
//                       <h6 className="m-0 text-muted" style={{ fontSize: "11px" }}>Interested Owner Phone</h6>
//                       <span className="card-text" style={{ color: "grey" }}>
//                       {buyer.interestedUserPhone ? `${buyer.interestedUserPhone.slice(0, -5)}*****` : "N/A"}
//                       </span>
//                     </div>
//                   </div>
//                   <div>
//                     <button className="btn btn-sm me-2" style={{ background: "#019988", color: "#fff" }}>SEND INTEREST</button>
//                     <button className="btn btn-primary btn-sm">MORE</button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No buyer assistance interests found.</p>
//         )}
//       </div>
//     </div>
//   );
// }






import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import profil from '../Assets/xd_profile.png';
import { MdOutlineCall, MdOutlineMapsHomeWork, MdCalendarMonth, MdOutlineBed, MdOutlineTimer } from "react-icons/md";
import { RiStairsLine } from "react-icons/ri"; // Corrected import
import { LuIndianRupee } from "react-icons/lu";
import { GoHome } from "react-icons/go";
import { TfiLocationPin } from "react-icons/tfi";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const BuyerLists = () => {
  const [assistanceData, setAssistanceData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const scrollContainerRef = useRef(null);
  const iconContainerRef = useRef(null);

  // Fetch data on component mount
  useEffect(() => {
    const fetchAssistanceData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/buyer-assistance-interests`);
        setAssistanceData(response.data.data);
      } catch (err) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchAssistanceData();
  }, []);

  // Handle scroll events for container and icons
  const handleWheelScroll = (e) => {
    if (scrollContainerRef.current) {
      e.preventDefault();
      scrollContainerRef.current.scrollTop += e.deltaY;
    }
  };

  const handleIconScroll = (e) => {
    if (iconContainerRef.current) {
      e.preventDefault();
      const scrollAmount = e.deltaX || e.deltaY;
      iconContainerRef.current.scrollLeft += scrollAmount;
    }
  };

  // Handle loading and error states
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{
        height: "auto",
        padding: "10px",
        gap: "15px",
        borderRadius: "10px",
        overflowY: "auto", 
      }}
      onWheel={handleWheelScroll}
      ref={scrollContainerRef}
    >
      <h5>Buyer List Datas</h5>
      {assistanceData.length > 0 ? (
        assistanceData.map((card) => (
          <div
            key={card._id}
            className="card p-1"
            style={{
              width: "450px", 
              border: "1px solid #ddd",
              borderRadius: "10px",
              overflow: "hidden",
              marginBottom: "15px",
              fontFamily: "Inter, sans-serif",
            }}
          >
            <div className="row d-flex align-items-center">
              <div className="col-3 d-flex align-items-center justify-content-center mb-1">
                <img
                  src={profil}
                  alt="Placeholder"
                  className="rounded-circle mt-2"
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                />
              </div>
              <div className="col-9 p-0">
                <div className="d-flex justify-content-between">
                  <p className="m-0" style={{ color: "#5E5E5E", fontWeight: "normal" }}>
                    BA ID: {card.ba_id}
                  </p>
                  {/* <p
                    className="mb-0 ps-3 pe-3 text-center pt-1 pb-1 position-absolute top-0 end-0"
                    style={{
                      background: "#FF0000", 
                      color: "white", 
                      cursor: "pointer", 
                      borderRadius: '0px 0px 0px 15px', 
                      fontSize: "12px"
                    }}
                  >
                    UNDO
                  </p> */}
                </div>
                <h5 className="mb-1">
                  {card.phoneNumber || "Unknown Buyer"} |{" "}
                  <span className="text-muted" style={{ fontSize: "12px" }}>
                    Buyer
                  </span>
                </h5>
                <div className="d-flex justify-content-between align-items-center col-8">
                <div className="d-flex justify-content-between align-items-center col-8">
 
  <div className="d-flex">
    <p className="mb-0 d-flex align-items-center me-3">
      <span className="text-muted"><FaArrowDown /> Price: </span>
      <LuIndianRupee color="#019988" className="me-2" />
      {card.minPrice}
    </p>
    <p className="mb-0 d-flex align-items-center">
      <span className="text-muted"><FaArrowUp /> Price: </span>
      <LuIndianRupee color="#019988" className="me-2" />
      {card.maxPrice}
    </p>
  </div>
</div>

</div>

              </div>
            </div>

            <div className="p-1">
              <div
                className="d-flex align-items-center overflow-auto mb-0 p-1 rounded-1"
                style={{
                  whiteSpace: "nowrap",
                  minWidth: "100%",
                  overflowX: "auto",
                  scrollbarWidth: "none", 
                  msOverflowStyle: "none",
                  border: "1px solid #019988",
                }}
                onWheel={handleIconScroll}
                ref={iconContainerRef}
              >
                <div className="d-flex align-items-center me-3">
                  <GoHome size={20} className="me-2" color="#019988" />
                  <p className="mb-0 small">{card.propertyMode}</p>
                </div>
                <div className="d-flex align-items-center me-3">
                  <MdOutlineMapsHomeWork size={20} className="me-2" color="#019988" />
                  <p className="mb-0 small">{card.propertyType}</p>
                </div>
                <div className="d-flex align-items-center me-3">
                  <MdCalendarMonth size={20} className="me-2" color="#019988" />
                  <p className="mb-0 small">{card.paymentType}</p>
                </div>
                <div className="d-flex align-items-center me-3">
                  <MdOutlineBed size={20} className="me-2" color="#019988" />
                  <p className="mb-0 small">{card.noOfBHK} BHK</p>
                </div>
                <div className="d-flex align-items-center me-3">
                  <RiStairsLine size={20} className="me-2" color="#019988" />
                  <p className="mb-0 small">{card.propertyAge}</p>
                </div>
                <div className="d-flex align-items-center me-3">
                  <MdOutlineTimer size={20} className="me-2" color="#019988" />
                  <p className="mb-0 small">{card.updatedAt.slice(0, 10)}</p>
                </div>
              </div>

              <div className="mb-0">
                <p className="mb-0">
                  <TfiLocationPin size={16} className="me-2" color="#019988" />
                  {card.area}, {card.city}
                </p>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <MdOutlineCall color="#019988" style={{ fontSize: "20px", marginRight: "8px" }} />
                  <div>
                    <h6 className="m-0 text-muted" style={{ fontSize: "11px" }}>Interested Owner Phone</h6>
                    <span className="card-text" style={{ color: "grey" }}>
                      {card.interestedUserPhone ? `${card.interestedUserPhone.slice(0, -5)}*****` : "N/A"}
                    </span>
                  
                  </div>
                </div>
                <div>
                  {/* <button className="btn btn-sm me-2" style={{ background: "#019988", color: "#fff" }}>
                    SEND INTEREST
                  </button>
                  <button className="btn btn-primary btn-sm">MORE</button>
                   */}
                  <button
              className="btn text-white px-3 py-1 flex-grow-1 mx-1"
              style={{ background:  "#2F747F", width: "80px", fontSize: "13px" }}
              onClick={() => (window.location.href = `tel:${ card.interestedUserPhone}`)}

           >
              Call
            </button>   
                  
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No buyer assistance interests found.</p>
      )}
    </div>
  );
};

export default BuyerLists;
