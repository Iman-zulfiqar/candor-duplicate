import React, {useEffect, useRef, useState} from "react";
import {Logos} from "../../assets";
// import {useNavigate} from "react-router";
// import {fetchContactDetails} from "../../hooks/useContactDetails";
// import {useFetchContactsDetails} from "../../hooks/useConversation";
// import {useStore} from "../../store/auth";
// import ShowMessagesContact from "../../pages/Conversation/ShowMessagesContact";
// import {useGlobalInfo} from "../../contexts/GlobalContext";
// import GlobalLoaderCopy from "../GloabalLoaderCopy/GloabalLoaderCopy";
// import {useForm} from "react-hook-form";
// import {yupResolver} from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import {deleteContact, updateContact} from "./../../hooks/useContact";
// import {useMutation} from "react-query";
// import {Toast} from "primereact/toast";

const ContactsModule = () => {
//     const {loading, setLoading} = useGlobalInfo();
//     const [show, setShow] = useState("video");
//     const [active, setActive] = useState("Messages");
//     const navigate = useNavigate();
//     const {mutate} = useMutation(updateContact);
//     const {mutate: reciverDetails} = useMutation(useFetchContactsDetails);
//     const {mutate: contactDelete} = useMutation(deleteContact);
//     const handleClick = (c) => {
//         setActive(c);
//     };
//     const [isOpen, setIsOpen] = useState(false);
//     const togglePopup = () => {
//         setIsOpen(!isOpen);
//     };
//     const [isOpen3, setIsOpen3] = useState(false);
//     const togglePopup3 = () => {
//         setIsOpen3(!isOpen3);
//     };

//     function ConversationHandler() {
//         navigate("/conversation");
//     }

//     function ReplyHandler() {
//         navigate("/reply");
//     }

//     function transcriptHandler() {
//         navigate("/transcript");
//     }

//     const chatSelectedId = useStore((store) => store.chatSelectedId);
//     const {data: getContactData, refetch: contactFetch} =
//         useFetchContactsDetails(chatSelectedId);
//     let contactDetails = getContactData?.data?.data;
//     // console.log("123456", contactDetails);
//     // async function fetchData() {
//     //   try {
//     //     const { data } = await fetchContactDetails();
//     //     console.log("dataaa >>>", data);
//     //     // Use the data in further processing
//     //   } catch (error) {
//     //     console.error("Error fetching contact details:", error);
//     //   }
//     // }

//     // fetchData();
//     const [contactList, setContactList] = useState([]);

//     useEffect(() => {
//         setLoading(true);
//         fetchData();
//     }, []);

//     async function fetchData() {
//         setLoading(true);
//         try {
//             const data = await fetchContactDetails();
//             setContactList(data);
//             setLoading(false);
//         } catch (error) {
//             setLoading(false);
//             console.error("Error fetching contact details:", error);
//         }
//     }

//     // usama code starts from here
//     const [isOpen1, setIsOpen1] = useState(false);
//     const toast = useRef(null);

//     const [recieverDetails, setRecieverDetails] = useState({
//         firstName: "",
//         lastName: "",
//         id: null,
//     });
//     useEffect(() => {
//         getReciverDetails();
//     }, []);

//     const getReciverDetails = () => {
//         const recieverData = JSON.parse(localStorage.getItem("receiverId"));
//         setRecieverDetails({
//             ...recieverDetails,
//             firstName: recieverData.userId?.firstName,
//             lastName: recieverData.userId?.lastName,
//             id: recieverData._id,
//         });
//     };

//     // const getDetails = (chatSelectedId) => {
//     //   reciverDetails(chatSelectedId, {
//     //     onSuccess: (data) => {},
//     //     onError: (error) => {
//     //       // showEror();
//     //       alert(error);
//     //     },
//     //   });
//     // };
//     const schema = yup
//         .object({
//             firstName: yup.string().required("Field Required"),
//             lastName: yup.string().required("Field Required"),
//         })
//         .required();
//     const {
//         register,
//         handleSubmit,
//         watch,
//         control,
//         formState: {errors},
//     } = useForm({
//         resolver: yupResolver(schema),
//     });

//     const togglePopup1 = () => {
//         setIsOpen1(!isOpen1);
//     };

//     const showSuccess = () => {
//         toast.current.show({
//             severity: "success",
//             summary: "Success",
//             detail: "Contact Detail Updated.",
//             life: 2000,
//         });
//     };
//     const showEror = () => {
//         toast.current.show({
//             severity: "error",
//             summary: "Fail",
//             detail: "Fail to update Contact Detail.",
//             life: 2000,
//         });
//     };

//     const onSubmit = (data) => {
//         const payload = {
//             id: recieverDetails.id,
//             ...data,
//         };

//         mutate(payload, {
//             onSuccess: (data) => {
//                 setIsOpen1(!isOpen1);
//                 showSuccess();
//                 contactFetch();
//             },
//             onError: (error) => {
//                 showEror();
//             },
//         });
//     };

//     const deleteReciver = () => {
//         setIsOpen3(!isOpen3);
//         const data = JSON.parse(localStorage.getItem("receiverId"));
//         const id = data._id;

//         contactDelete(id, {
//             onSuccess: (data) => {

//                 ConversationHandler();
//             },
//             onError: (error) => {
//             },
//         });
//     };
//     // usama code ends here

    return (
//         <>
//             <Toast ref={toast} color="primary" position="top-right"/>

//             {/* <ul>
//         {contactList.map((contact) => (
//           <li key={contact.id}>
//             <p>Name: {contact.name}</p>
//             <p>Email: {contact.email}</p>
//           </li>
//         ))}
//       </ul> */}
//             {loading ? (
//                 <GlobalLoaderCopy/>
//             ) : (
//                 <div className=" " style={{width: "100%"}}>
//                     <div className="flex justify-between items-center">
//                         <div className="flex items-center gap-4">
//                             <img
//                                 src={Logos.BreadcrumbBack}
//                                 alt="icon"
//                                 className="cursor-pointer ml-2 w-[8px] xxxl:w-[10px]"
//                                 onClick={() => {
//                                     ConversationHandler();
//                                 }}
//                             />
//                             <h1 className=" text-[16px] xxxl:text-[22px] font-[500] leading-[30px] text-[#262626]">
//                                 Contact Details
//                             </h1>
//                         </div>
//                     </div>
//                     <div
//                         className="mt-3  shadow-md flex lg:flex-nowrap xxxs:flex-wrap rounded-lg"
//                         style={{minHeight: "calc(100vh - 130px)", width: "100%"}}
//                     >
//                         <div
//                             className=" xxxs:w-[350px] bg-white lg:min-h-[200px] border-[1px] border-[#EBEBEB] border-solid shadow-md   overflow-y-scroll overflow-x-hidden  rounded-lg  "
//                             style={{height: "calc(100vh - 90px)", width: "25%"}}
//                         >
//                             <div
//                                 className="  border-b-[1px] border-[#EBEBEB] border-solid px-3 py-2 flex justify-between gap-1 sticky top-0 bg-white">
//                                 <img
//                                     src={
//                                         contactDetails?.organization
//                                             ? contactDetails?.picture
//                                             : Logos.Dp
//                                     }
//                                     alt="DP"
//                                     style={{width: "60px"}}
//                                 />
//                                 <div className="flex flex-col gap-3 items-end">
//                                     <h1 className="text-[15px] xxxl:text-[18px] font-[500] leading-[28px] text-[#262626] max-xxs:text-[14px] ">
//                                         {contactDetails?.firstName
//                                             ? `${contactDetails?.firstName}  ${contactDetails?.lastName}`
//                                             : "Anderew"}
//                                     </h1>
//                                     <div className="flex gap-3 justify-end w-[30px]">
//                                         <img
//                                             src={Logos.Vector}
//                                             alt=""
//                                             className="cursor-pointer w-[25px] xxxl:w-[35px]"
//                                             onClick={() => {
//                                                 ReplyHandler();
//                                             }}
//                                         />
//                                         <img
//                                             src={Logos.Trash}
//                                             onClick={togglePopup3}
//                                             alt=""
//                                             className="w-[25px] xxxl:w-[35px] cursor-pointer"
//                                         />
//                                         <img
//                                             src={Logos.Pen}
//                                             alt=""
//                                             onClick={() => togglePopup1()}
//                                             className="w-[25px] xxxl:w-[35px]"
//                                         />
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="flex flex-col p-3 gap-[2px] ">
//                                 <div className="flex items-start justify-between">
//                                     <h1 className="text-[12px] xxxl:text-[16px] font-[400] leading-[28px] text-[#A0A0A0]">
//                                         Organization :
//                                     </h1>
//                                     <p className="text-[12px] xxxl:text-[16px] font-[500] leading-[28px] text-[#262626]">
//                                         {contactDetails?.organization
//                                             ? `${contactDetails?.organization}`
//                                             : "---"}
//                                     </p>
//                                 </div>
//                                 <div className="flex items-start justify-between">
//                                     <h1 className="text-[12px] xxxl:text-[16px] font-[400] leading-[28px] text-[#A0A0A0]">
//                                         Email :
//                                     </h1>
//                                     <p className="text-[12px] xxxl:text-[16px] font-[500] leading-[28px] text-[#262626]">
//                                         {contactDetails?.email ? `${contactDetails?.email}` : "---"}
//                                     </p>
//                                 </div>
//                                 <div className="flex items-start justify-between">
//                                     <h1 className="text-[12px] xxxl:text-[16px] font-[400] leading-[28px] text-[#A0A0A0]">
//                                         Phone :
//                                     </h1>
//                                     <p className="text-[12px] xxxl:text-[16px] font-[500] leading-[28px] text-[#262626]">
//                                         {contactDetails?.phone ? `${contactDetails?.phone}` : "---"}
//                                     </p>
//                                 </div>
//                                 <div className="flex items-start justify-between">
//                                     <h1 className="text-[12px] xxxl:text-[16px] font-[400] leading-[28px] text-[#A0A0A0]">
//                                         Address :
//                                     </h1>
//                                     <p className="text-[12px] font-[500] max-xxs:text-[12px] leading-[28px] text-[#262626]">
//                                         {contactDetails?.address ? contactDetails?.address : "---"}
//                                     </p>
//                                 </div>
//                                 <div className="flex items-start justify-between">
//                                     <h1 className="text-[12px] xxxl:text-[16px] font-[400] leading-[28px] text-[#A0A0A0]">
//                                         Occupation :
//                                     </h1>
//                                     <p className="text-[12px] xxxl:text-[16px]  font-[400] leading-[28px] text-[#262626]">
//                                         {contactDetails?.occupation
//                                             ? `${contactDetails?.occupation}`
//                                             : "---"}
//                                     </p>
//                                 </div>
//                                 <div className="flex items-start justify-between">
//                                     <h1 className="text-[12px] xxxl:text-[16px] font-[400] leading-[28px] text-[#A0A0A0]">
//                                         Employer:
//                                     </h1>
//                                     <p className="text-[12px] xxxl:text-[16px] font-[400] leading-[28px] text-[#262626]">
//                                         {contactDetails?.employer
//                                             ? `${contactDetails?.employer}`
//                                             : "---"}
//                                     </p>
//                                 </div>
//                                 <hr className="border-b-[1px] border-[#E7EEF9] border-solid "/>
//                             </div>
//                         </div>

//                         <ShowMessagesContact/>
//                         {/* <div
//             className="xxxl:min-w-[55vw] lg:min-w-[45vw] border-[1px] flex flex-col  flex-auto border-[#EBEBEB] border-solid  "
//             style={{ height: "calc(100vh - 130px)", overflow: "hidden" }}
//           >
//             <div className=" border-[1px] w-full p border-[#EBEBEB] border-solid px-3 py-[11px] xxxl:py-5 flex justify-between items-center relative">
//               <div className="parent">
//                 <h1 className="xxxs:text-[13px] lg:text-[15px] xxxl:text-[20px] font-[500]  text-[#262626]  flex items-center gap-1 ">
//                   Conversation with Ryan Jones
//                   <img
//                     className="child"
//                     src={Logos.Arrowdown}
//                     alt=""
//                     style={{ width: "20px" }}
//                   />
//                 </h1>
//                 <div className="hidden child2 flex-col p-3 gap-3 absolute bg-white top-[100%] w-[26vw] left-0 border-[1px]  border-[#EBEBEB] border-solid rounded-lg ">
//                   <div className="flex items-start justify-between">
//                     <h1 className="text-[12px] xxxl:text-[16px] font-[400]  text-[#262626]">
//                       Organization :
//                     </h1>
//                     <p className="text-[12px] xxxl:text-[16px] font-[400]  text-[#A0A0A0]">
//                       Pine View
//                     </p>
//                   </div>
//                   <div className="flex items-start justify-between">
//                     <h1 className="text-[12px] xxxl:text-[16px] font-[400]  text-[#262626]">
//                       Email :
//                     </h1>
//                     <p className="text-[12px] xxxl:text-[16px] font-[400]  text-[#A0A0A0]">
//                       ryanjones@example.com
//                     </p>
//                   </div>
//                   <div className="flex items-start justify-between">
//                     <h1 className="text-[12px] xxxl:text-[16px] font-[400]  text-[#262626]">
//                       Phone :
//                     </h1>
//                     <p className="text-[12px] xxxl:text-[16px] font-[400]  text-[#A0A0A0]">
//                       555-555-555
//                     </p>
//                   </div>
//                   <div className="flex items-start justify-between">
//                     <h1 className="text-[12px] xxxl:text-[16px] font-[400]  text-[#262626]">
//                       Address :
//                     </h1>
//                     <p className="text-[12px] font-[400] max-xxs:text-[12px] text-right  text-[#A0A0A0]">
//                       100 South Street Suite 102 Charlotte,
//                       <br />
//                       NC 28202 United States
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex items-center gap-2 flex-wrap justify-end">
//                 <img
//                   src={Logos.Unlock}
//                   className="w-[25px] xxxl:w-[35px]"
//                   alt=""
//                 />
//                 <img
//                   src={Logos.Share}
//                   className="w-[25px] xxxl:w-[35px]"
//                   alt=""
//                 />
//                 <img
//                   src={Logos.Message}
//                   className="w-[25px] xxxl:w-[35px]"
//                   alt=""
//                 />
//                 <img
//                   src={Logos.Trash}
//                   className="w-[25px] xxxl:w-[35px] cursor-pointer"
//                   alt=""
//                   onClick={togglePopup3}
//                 />
//                 <img
//                   src={Logos.Download}
//                   onClick={togglePopup}
//                   className="w-[25px] xxxl:w-[35px] cursor-pointer"
//                   alt=""
//                 />
//                 <img
//                   src={Logos.Block}
//                   className="w-[25px] xxxl:w-[35px] cursor-pointer"
//                   onClick={() => {
//                     setShow("empty");
//                   }}
//                   alt=""
//                 />
//               </div>
//             </div>
//             {show == "video" && (
//               <div className="w-full p-3 h-[90%] rounded-md  ">
//                 <img
//                   src={Logos.Video2}
//                   alt=""
//                   className="w-full  h-full object-cover rounded-md"
//                 />
//                 <div className="flex -mt-[10vh] max-md:-mt-[18vh] items-center justify-center gap-3">
//                   <img
//                     src={Logos.Download}
//                     onClick={togglePopup}
//                     className="w-[30px] xxxl:w-[35px] rounded-lg cursor-pointer"
//                     alt=""
//                   />
//                   <Link to="/transcript">
//                     <img
//                       src={Logos.Transcript}
//                       className="w-[30px] xxxl:w-[35px] rounded-lg cursor-pointer"
//                       alt=""
//                       onClick={() => {
//                         transcriptHandler();
//                       }}
//                     />
//                   </Link>
//                   <img
//                     src={Logos.Share}
//                     className="w-[30px] xxxl:w-[35px]"
//                     alt=""
//                   />
//                   <img
//                     src={Logos.Trash}
//                     onClick={togglePopup3}
//                     className="w-[30px] xxxl:w-[35px] cursor-pointer"
//                     alt=""
//                   />
//                 </div>
//               </div>
//             )}
//             {show == "audio" && (
//               <div className="w-full h-[90%] border-[1px] rounded-md">
//                 <img
//                   src={Logos.Audio2}
//                   alt=""
//                   className="h-full w-full object-cover"
//                 />
//                 <div className="flex xxxl:-mt-[5vh] -mt-[15vh] items-center justify-center gap-3">
//                   <img
//                     src={Logos.Download}
//                     onClick={togglePopup}
//                     className="w-[30px] xxxl:w-[35px] rounded-lg cursor-pointer"
//                     alt=""
//                   />
//                   <Link to="/transcript">
//                     <img
//                       src={Logos.Transcript}
//                       className="w-[30px] xxxl:w-[35px] rounded-lg cursor-pointer"
//                       alt=""
//                       onClick={() => {
//                         transcriptHandler();
//                       }}
//                     />
//                   </Link>
//                   <img
//                     src={Logos.Share}
//                     className="w-[30px] xxxl:w-[35px] cursor-pointer"
//                     alt=""
//                   />
//                   <img
//                     src={Logos.Trash}
//                     className="w-[30px] xxxl:w-[35px] cursor-pointer "
//                     onClick={togglePopup3}
//                     alt=""
//                   />
//                 </div>
//               </div>
//             )}
//             {show == "text" && (
//               <div className="w-full h-full  flex items-center justify-center">
//                 <div
//                   className="flex flex-col items-center justify-between border-[1px]  w-[90%] rounded-md  pt-16 max-md:pt-5 px-10 max-md:px-5  pb-4"
//                   style={{ gap: "5px", minHeight: "80%" }}
//                 >
//                   <img
//                     src={Logos.Qoute}
//                     alt=""
//                     className="mx-auto "
//                     style={{ width: "20px" }}
//                   />
//                   <p className="text-[14px] max-xxs:text-[12px] max-md:text-[12px] font-[300] max-md:leading-[18px] leading-[28px] text-[#262626] max-xl:text-[12px] xxxxl:text-[18px] ">
//                     "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//                     sed do eiusmod tempor incididunt ut labore et dolore magna
//                     aliqua. Ut enim ad minim veniam, quis nostrud exercitation
//                     ullamco laboris nisi ut aliquip ex ea commodo consequat.
//                     Duis aute irure dolor in reprehenderit in voluptate velit
//                     esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
//                     occaecat cupidatat non proident, sunt in culpa qui officia
//                     deserunt mollit anim id est laborum."
//                   </p>

//                   <div className="flex items-center  justify-center gap-3 mb-1 ">
//                     <img
//                       src={Logos.Download}
//                       onClick={togglePopup}
//                       className="w-[30px] xxxl:w-[35px] rounded-lg cursor-pointer"
//                       alt=""
//                     />
//                     <Link to="/transcript">
//                       <img
//                         src={Logos.Transcript}
//                         className="w-[30px] xxxl:w-[35px] rounded-lg cursor-pointer"
//                         alt=""
//                         onClick={() => {
//                           transcriptHandler();
//                         }}
//                       />
//                     </Link>
//                     <img
//                       src={Logos.Share}
//                       className="w-[30px] xxxl:w-[35px] cursor-pointer"
//                       alt=""
//                     />
//                     <img
//                       src={Logos.Trash}
//                       onClick={togglePopup3}
//                       className="w-[30px] xxxl:w-[35px] cursor-pointer"
//                       alt=""
//                     />
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div> */}

//                         {/* <div
//             className="xxxl:min-w-[18vw] lg:min-w-[22vw]  xl:max-w-[18vw] border-[1px] border-[#EBEBEB] border-solid  flex-auto flex flex-col items-center overflow-y-scroll overflow-x-hidden"
//             style={{ height: "calc(100vh - 130px)" }}
//           >
//             <div className=" border-[1px] w-full border-[#EBEBEB] border-solid px-3 py-2 xxxl:py-5 flex justify-between items-center sticky top-0 bg-white">
//               <h1 className="xxxs:text-[13px] lg:text-[15px] xxxl:text-[20px] font-[500] leading-[22px] text-[#262626] ">
//                 History
//               </h1>

//               <ButtonComp
//                 onClick={() => ReplyHandler()}
//                 className="rounded-[10px] z-0 bg-gradient-to-b from-[#AEBFF2] to-[#94A2F2] text-white pl-5 py-1.5 max-xxs:pl-2 w-[100px] xxxl:w-[120px] text-[13px] xxxl:text-[16px]"
//                 name="Reply"
//                 logo={Logos.ReplyButton}
//                 size="w-[20px] max-xxs:w-[15px] top-2.5 left-2.5 absolute"
//               />
//             </div>

//             <div className="flex items-center w-full justify-start">
//               <div
//                 className="px-[35px] w-[50%] text-center font-medium text-[12px] xxxl:text-[17px] py-1 cursor-pointer"
//                 onClick={() => {
//                   handleClick("Transcript");
//                 }}
//                 style={{
//                   color: active === "Transcript" ? "#3A37A6" : "#A0A0A0",
//                   borderBottom:
//                     active === "Transcript"
//                       ? "2px solid #3A37A6"
//                       : "2px solid #CEDEF2",
//                 }}
//               >
//                 Transcript
//               </div>
//               <div
//                 className="px-[35px] w-[50%] text-center font-medium text-[12px] xxxl:text-[17px] py-1  cursor-pointer"
//                 onClick={() => {
//                   handleClick("Messages");
//                 }}
//                 style={{
//                   color: active === "Messages" ? "#3A37A6" : "#A0A0A0",
//                   borderBottom:
//                     active === "Messages"
//                       ? "2px solid #3A37A6"
//                       : "2px solid #CEDEF2",
//                 }}
//               >
//                 Messages
//               </div>
//             </div>
//             {active == "Messages" && (
//               <>
//                 <div className="w-full p-1 flex flex-col items-center ">
//                   <div
//                     className="flex flex-col items-center self-start w-full  rounded-lg  cursor-pointer"
//                     style={{ backgroundColor: show == "text" ? "#E7EEF9" : "" }}
//                     onClick={() => {
//                       setShow("text");
//                     }}
//                   >
//                     <div className="flex items-end gap-2 p-3 w-full self-start">
//                       <img src={Logos.Dpp} alt="" className="w-[30px]" />
//                       <div className="flex flex-col">
//                         <h1 className="text-[10px] xxxl:text-[15px] font-[400] leading-[28px] text-[#262626]">
//                           Ryan Jones
//                         </h1>
//                         <div className="text-[12px] xxxl:text-[16px] font-[400] leading-[28px] text-[#262626] bg-[#F5F5F5] p-1 rounded-md">
//                           Hey! I am available &#x1F607;
//                         </div>
//                       </div>
//                     </div>
//                     <p className=" text-[10px] xxxl:text-[15px] font-[300] leading-[28px] text-[#A0A0A0] -mt-3">
//                       Yesterday 1:06 AM
//                     </p>
//                   </div>

//                   <div className="flex items-end  self-end p-3 gap-2">
//                     <div className="flex flex-col items-end ">
//                       <h1 className="text-[10px] xxxl:text-[15px] font-[400] leading-[28px] text-[#262626]">
//                         Jacob Billings
//                       </h1>
//                       <img src={Logos.Frame} alt="" className="w-[150px]" />
//                     </div>
//                     <img src={Logos.Person1} alt="" className="w-[30px]" />
//                   </div>
//                   <p className=" text-[10px] xxxl:text-[15px] font-[300] leading-[28px] text-[#A0A0A0] -mt-3">
//                     Yesterday 11:36 AM
//                   </p>
//                   <div
//                     className="flex flex-col items-center w-full self-start  rounded-lg"
//                     style={{
//                       backgroundColor: show == "audio" ? "#E7EEF9" : "",
//                     }}
//                   >
//                     <div className="flex  items-end self-start gap-2 p-3 w-full">
//                       <img src={Logos.Dpp} alt="" className="w-[30px]" />
//                       <div className="flex flex-col">
//                         <h1 className="text-[10px] xxxl:text-[15px] font-[400] leading-[28px] text-[#262626]">
//                           Ryan Jones
//                         </h1>
//                         <img
//                           src={Logos.Voice}
//                           onClick={() => {
//                             setShow("audio");
//                           }}
//                           className="w-[180px] cursor-pointer rounded-lg"
//                           alt=""
//                         />
//                       </div>
//                     </div>
//                     <p className=" text-[10px] xxxl:text-[15px] font-[300] leading-[28px] text-[#A0A0A0] -mt-3">
//                       Yesterday 1:06 AM
//                     </p>
//                   </div>
//                   <div
//                     className="flex flex-col items-center w-full self-end rounded-lg"
//                     style={{
//                       backgroundColor: show == "video" ? "#E7EEF9" : "",
//                     }}
//                   >
//                     <div className="flex items-end self-end p-3 gap-2">
//                       <div className="flex flex-col items-end  ">
//                         <h1 className="text-[10px] xxxl:text-[15px] font-[400] leading-[28px] text-[#262626]">
//                           Jacob Billings
//                         </h1>
//                         <img
//                           src={Logos.Frame2}
//                           alt=""
//                           onClick={() => {
//                             setShow("video");
//                           }}
//                           className="w-[150px] cursor-pointer"
//                         />
//                       </div>
//                       <img src={Logos.Person1} alt="" className="w-[30px]" />
//                     </div>
//                     <p className=" text-[10px] xxxl:text-[15px] font-[300] leading-[28px] text-[#A0A0A0] -mt-3">
//                       Yesterday 1:06 AM
//                     </p>
//                   </div>
//                   <div
//                     className="flex flex-col w-full items-center self-start rounded-lg mt-2 cursor-pointer"
//                     style={{ backgroundColor: show == "text" ? "#E7EEF9" : "" }}
//                     onClick={() => {
//                       setShow("text");
//                     }}
//                   >
//                     <div className="flex items-end gap-2 p-3 w-full">
//                       <img src={Logos.Dpp} alt="" className="w-[30px]" />
//                       <div className="flex flex-col">
//                         <h1 className="text-[10px] xxxl:text-[15px] font-[400] leading-[28px] text-[#262626]">
//                           Ryan Jones
//                         </h1>
//                         <div className="text-[12px] xxxl:text-[16px] font-[400] leading-[28px] text-[#262626] bg-[#F5F5F5] p-1 rounded-md">
//                           Hey! I am available &#x1F607;
//                         </div>
//                       </div>
//                     </div>
//                     <p className=" text-[12px] xxxl:text-[16px] font-[300] leading-[28px] text-[#A0A0A0] -mt-3">
//                       Yesterday 1:06 AM
//                     </p>
//                   </div>

//                   <div
//                     className="flex flex-col self-end items-center  w-full rounded-lg"
//                     style={{
//                       backgroundColor: show == "video" ? "#E7EEF9" : "",
//                     }}
//                   >
//                     <div className="flex items-end self-end p-3 gap-2">
//                       <div className="flex flex-col items-end ">
//                         <h1 className="text-[10px] xxxl:text-[15px] font-[400] leading-[28px] text-[#262626]">
//                           Jacob Billings
//                         </h1>
//                         <img
//                           src={Logos.Frame2}
//                           alt=""
//                           onClick={() => {
//                             setShow("video");
//                           }}
//                           className="w-[150px] cursor-pointer"
//                         />
//                       </div>
//                       <img src={Logos.Person1} alt="" className="w-[30px]" />
//                     </div>
//                   </div>
//                   <hr className="border-b-[1px] w-full mt-4 border-[#94A2F2] border-solid " />
//                   <div className="flex w-full justify-around items-start mt-5">
//                     <div className="flex items-end self-start p-3 gap-2 ">
//                       <img src={Logos.Person1} alt="" className="w-[30px]" />
//                       <div className="flex flex-col items-start ">
//                         <h1 className="text-[10px] xxxl:text-[15px] font-[400] leading-[28px] text-[#262626]">
//                           Jacob Billings
//                         </h1>
//                         <img src={Logos.Frame} alt="" className="w-[150px]" />
//                       </div>
//                     </div>
//                     <img src={Logos.Banner} alt="" />
//                   </div>

//                   <p className=" text-[10px] xxxl:text-[15px] font-[300] leading-[28px] text-[#A0A0A0] -mt-3">
//                     Yesterday 1:06 AM
//                   </p>
//                   <div className="flex w-full justify-around items-start mt-5">
//                     <div className="flex items-end self-start p-3 gap-2 ">
//                       <img src={Logos.Person1} alt="" className="w-[30px]" />
//                       <div className="flex flex-col items-start ">
//                         <h1 className="text-[10px] xxxl:text-[15px] font-[400] leading-[28px] text-[#262626]">
//                           Jacob Billings
//                         </h1>
//                         <img src={Logos.Frame} alt="" className="w-[150px]" />
//                       </div>
//                     </div>
//                     <img src={Logos.Banner} alt="" />
//                   </div>
//                 </div>

//                 <p className=" text-[10px] xxxl:text-[15px] font-[300] leading-[28px] text-[#A0A0A0] -mt-3">
//                   Yesterday 1:06 AM
//                 </p>
//               </>
//             )}
//             {active == "Transcript" && (
//               <>
//                 <div className="w-full px-2 pt-5 overflow-auto">
//                   <div className="cursor-pointer flex flex-col gap-2 ">
//                     <div className="flex items-center justify-start gap-4 ">
//                       <div className="flex items-end h-[35px]">
//                         <img
//                           src={Logos.videoWithbg}
//                           alt="Pic Profile"
//                           className="w-[26px]"
//                         />
//                       </div>
//                       <div className="flex flex-col">
//                         <p className=" text-[10px] xxxl:text-[15px]">
//                           Rayan Janes
//                         </p>
//                         <p className="text-[#A0A0A0] text-[10px] xxxl:text-[15px] max-xxs:text-[8px] mt-1 font-[300]  w-full flex justify-start items-center">
//                           Yesterday 1:06 AM
//                         </p>
//                       </div>
//                     </div>
//                     <div className="flex items-start gap-2 ">
//                       <div
//                         className="p-2 rounded-md bg-[#F5F5F5] flex items-center justify-start  "
//                         style={{ width: "80%" }}
//                       >
//                         <h1 className="text-[12px] xxxl:text-[16px] max-xxs:text-[9px]">
//                           Lorem ipsum dolor sit amet, consectetur adipiscing
//                           elit. Volutpat vestibulum sem feugiat pharetra.
//                         </h1>
//                       </div>
//                     </div>
//                   </div>
//                   <br />
//                   <div className="cursor-pointer flex flex-col gap-2 items-end">
//                     <div className="flex items-center justify-end gap-4  ">
//                       <div className="flex flex-col items-end">
//                         <p className=" text-[10px] xxxl:text-[15px]">
//                           Jacob Billings
//                         </p>
//                         <p className="text-[#A0A0A0] text-[10px] xxxl:text-[15px] max-xxs:text-[8px] mt-1 font-[300]  w-full flex justify-start items-center">
//                           Yesterday 11:36 AM
//                         </p>
//                       </div>
//                       <div className="flex items-end h-[35px] ">
//                         <img
//                           src={Logos.videoWithbg}
//                           alt="Pic Profile"
//                           className="w-[26px]"
//                         />
//                       </div>
//                     </div>
//                     <div className="flex justify-end  gap-2 w-full">
//                       <div
//                         className="p-2 rounded-md bg-[#F5F5F5] flex items-center justify-start "
//                         style={{ width: "80%" }}
//                       >
//                         <h1 className="text-[12px] xxxl:text-[16px] max-xxs:text-[9px]">
//                           Lorem ipsum dolor sit amet, consectetur adipiscing
//                           elit. Volutpat vestibulum sem feugiat pharetra.
//                         </h1>
//                       </div>
//                     </div>
//                   </div>
//                   <br />
//                   <div className="cursor-pointer flex flex-col gap-2">
//                     <div className="flex items-center justify-start gap-4 ">
//                       <div className="flex items-end h-[35px]">
//                         <img
//                           src={Logos.audioWithbg}
//                           alt="Pic Profile"
//                           className="w-[26px]"
//                         />
//                       </div>
//                       <div className="flex flex-col">
//                         <p className=" text-[10px] xxxl:text-[15px]">
//                           Rayan Janes
//                         </p>
//                         <p className="text-[#A0A0A0] text-[10px] xxxl:text-[15px] max-xxs:text-[8px] mt-1 font-[300]  w-full flex justify-start items-center">
//                           Yesterday 1:06 AM
//                         </p>
//                       </div>
//                     </div>
//                     <div className="flex items-start gap-2">
//                       <div
//                         className="p-2 rounded-md bg-[#F5F5F5] flex items-center justify-start "
//                         style={{ width: "80%" }}
//                       >
//                         <h1 className="text-[12px] xxxl:text-[16px] max-xxs:text-[9px]">
//                           Lorem ipsum dolor sit amet, consectetur adipiscing
//                           elit. Volutpat vestibulum sem feugiat pharetra.
//                         </h1>
//                       </div>
//                     </div>
//                   </div>
//                   <br />
//                   <div className="cursor-pointer flex flex-col gap-2 items-end">
//                     <div className="flex items-center justify-end gap-4  ">
//                       <div className="flex flex-col items-end">
//                         <p className=" text-[10px] xxxl:text-[15px]">
//                           Jacob Billings
//                         </p>
//                         <p className="text-[#A0A0A0] text-[10px] xxxl:text-[15px] max-xxs:text-[8px] mt-1 font-[300]  w-full flex justify-start items-center">
//                           Yesterday 11:36 AM
//                         </p>
//                       </div>
//                       <div className="flex items-end h-[35px] ">
//                         <img
//                           src={Logos.audioWithbg}
//                           alt="Pic Profile"
//                           className="w-[26px]"
//                         />
//                       </div>
//                     </div>
//                     <div className="flex justify-end  gap-2 w-full">
//                       <div
//                         className="p-2 rounded-md bg-[#F5F5F5] flex items-center justify-start "
//                         style={{ width: "80%" }}
//                       >
//                         <h1 className="text-[12px] xxxl:text-[16px] max-xxs:text-[9px]">
//                           Lorem ipsum dolor sit amet, consectetur adipiscing
//                           elit. Volutpat vestibulum sem feugiat pharetra.
//                         </h1>
//                       </div>
//                     </div>
//                   </div>
//                   <br />
//                 </div>
//               </>
//             )}
//           </div> */}
//                     </div>
//                     {isOpen3 && (
//                         <div
//                             className="popup-box fixed backdrop-opacity-20 z-10 bg-black/30 left-0 top-0 w-full min-h-[100vh] flex justify-center items-center "
//                             onClick={togglePopup3}
//                         >
//                             <div
//                                 onClick={(e) => {
//                                     e.stopPropagation();
//                                 }}
//                                 className="box  relative rounded-md lg:w-[500px] xxxs:w-[350px] bg-white lg:min-h-[200px]   mx-auto flex flex-col  "
//                             >
//                                 <div className="flex justify-between px-6 lg:pt-6 xxxs:pt-5">
//                                     <div className="lg:text-[20px] xxxs:text-[16px] xxxl:text-[22px] text-black">
//                                         Delete Entire Conversations
//                                     </div>
//                                     <button className="btn-close " onClick={togglePopup3}>
//                                         <img
//                                             src={Logos.ClosePopup}
//                                             alt="Close Button"
//                                             className="lg:w-[20px] xxxs:w-[15px]"
//                                         />
//                                     </button>
//                                 </div>
//                                 <hr className=" border-1 border-[#CEDEF2] mt-5"/>

//                                 <div
//                                     style={{
//                                         marginTop: "10px",
//                                     }}
//                                 >
//                                     <div
//                                         className=" lg:text-[14px] xxxs:text-[11px] xxxl:text-[16px] px-4 gap-4  "
//                                         style={{marginTop: "8px"}}
//                                     >
//                                         <p className="font-[300] leading-[22px] text-[#A0A0A0] ">
//                       <span className="mr-1  font-[500] leading-[22px] text-[#262626]">
//                         This cannot be undone.
//                       </span>
//                                             All answers and replies in this converstaion will be lost.
//                                             we cannot recover thers once delete.
//                                         </p>
//                                         <br/>
//                                         <p className="  font-[300] leading-[22px] text-[#A0A0A0] ">
//                                             Are you sure you want to delte this conversation?
//                                         </p>
//                                     </div>
//                                 </div>
//                                 <div className="flex justify-center my-3 gap-3">
//                                     <button
//                                         className="text-[14px] xxxl:text-[20px] leading-[30px] font-[400] text-[#A0A0A0] border-[1px] border-solid border-[#A0A0A0] p-1 rounded-[5px] my-3 w-[120px] self-center "
//                                         onClick={togglePopup3}
//                                     >
//                                         Cancel
//                                     </button>
//                                     <button
//                                         className="text-[14px] xxxl:text-[20px] leading-[30px] font-[400] text-[#ffffff] border-[1px]  border-solid  p-1 rounded-[5px] my-3 w-[120px] self-center "
//                                         style={{backgroundColor: "#F24B59"}}
//                                         // onClick={togglePopup3}
//                                         onClick={deleteReciver}
//                                     >
//                                         Delete
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     )}
//                     {isOpen && (
//                         <div
//                             className="popup-box fixed backdrop-opacity-20 z-50 bg-black/30 left-0 top-0 w-full min-h-[100vh] flex justify-center items-center "
//                             onClick={togglePopup}
//                         >
//                             <div
//                                 className="box  relative rounded-md  lg:w-[400px] xxxs:w-[350px] bg-white    mx-auto flex flex-col  "
//                                 onClick={(e) => {
//                                     e.stopPropagation();
//                                 }}
//                             >
//                                 <div className="flex justify-between p-5 xxxl:py-7 pt-6 h-[20px] items-center">
//                                     <div className="lg:text-[18px] xxxs:text-[15px] xxxl:text-[22px]">
//                                         Download Conversations
//                                     </div>
//                                     <button className="btn-close " onClick={togglePopup}>
//                                         <img
//                                             src={Logos.ClosePopup}
//                                             alt="Close Button"
//                                             className="lg:w-[20px] xxxs:w-[15px]"
//                                         />
//                                     </button>
//                                 </div>
//                                 <hr className=" border-1 border-[#CEDEF2] "/>

//                                 <div
//                                     style={{
//                                         marginTop: "10px",
//                                     }}
//                                 >
//                                     <div className="flex  flex-col lg:px-6 px-4  xxxs:px-4  justify-center gap-2 ">
//                                         <p className="lg:text-[16px] xxxs:text-[13px] leading-[30px] xxxl:text-[18px] font-[400] text-[#262626]">
//                                             Include:
//                                         </p>

//                                         <div className="flex items-center gap-5">
//                                             <input
//                                                 type="checkbox"
//                                                 name="download"
//                                                 id="text"
//                                                 className="accent-[#3A37A6] h-4 w-4"
//                                             />
//                                             <label
//                                                 htmlFor="text"
//                                                 className="lg:text-[16px] xxxs:text-[13px] xxxl:text-[18px] leading-[30px] font-[400] text-[#262626] "
//                                             >
//                                                 Text
//                                             </label>
//                                             <input
//                                                 type="checkbox"
//                                                 name="download"
//                                                 id="text"
//                                                 className="accent-[#3A37A6] h-4 w-4"
//                                             />
//                                             <label
//                                                 htmlFor="video"
//                                                 className="lg:text-[16px] xxxs:text-[13px] xxxl:text-[18px] leading-[30px] font-[400] text-[#262626] "
//                                             >
//                                                 Video
//                                             </label>
//                                             <input
//                                                 type="checkbox"
//                                                 name="download"
//                                                 id="text"
//                                                 className="accent-[#3A37A6] h-4 w-4"
//                                             />
//                                             <label
//                                                 htmlFor="audio"
//                                                 className=" lg:text-[16px] xxs:text-[13px] xxxl:text-[18px] leading-[30px] font-[400] text-[#262626] "
//                                             >
//                                                 Audio
//                                             </label>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <button
//                                     className="text-[14px] my-5 leading-[30px] xxxl:text-[20px] font-[400] text-[#ffffff] border-[1px] border-solid bg-[#94A2F2] p-1 rounded-[5px]  w-[110px]  xxxl:w-[140px] self-center "
//                                     onClick={togglePopup}
//                                 >
//                                     Download
//                                 </button>
//                             </div>
//                         </div>
//                     )}
//                     {isOpen1 && (
//                         <div
//                             className="popup-box z-10 fixed backdrop-opacity-20  bg-black/30 left-0 top-0 w-full h-[100vh] flex justify-center items-center ">
//                             <div
//                                 className="box  relative rounded-md  lg:w-[450px] xxxs:w-[350px] bg-white lg:min-h-[260px]   mx-auto flex flex-col  ">
//                                 <div className="flex justify-between px-5 lg:pt-8 p-3  xxxs:pt-5 h-[20px] items-center">
//                                     <div className="title-size">Update contact</div>
//                                     <button className="btn-close " onClick={togglePopup1}>
//                                         <img
//                                             src={Logos.ClosePopup}
//                                             alt="Close Button"
//                                             className="lg:w-[20px] xxxs:w-[15px]"
//                                         />
//                                     </button>
//                                 </div>
//                                 <hr className=" border-1 border-[#CEDEF2] mt-5"/>
//                                 <form
//                                     onSubmit={handleSubmit(onSubmit)}
//                                     className="flex flex-col justify-between h-[100%]"
//                                 >
//                                     <div
//                                         style={{
//                                             marginTop: "10px",
//                                         }}
//                                     >
//                                         <div
//                                             className="flex px-4 gap-4  "
//                                             style={{marginTop: "8px"}}
//                                         >
//                                             <div>
//                                                 <div className="flex gap-2 flex-col">
//                                                     <label className="text-[#262626] inner-size font-[500]">
//                                                         First Name
//                                                     </label>
//                                                     <div className="w-full flex justify-between items-center ">
//                                                         <input
//                                                             type="text"
//                                                             placeholder="Enter your Name"
//                                                             {...register("firstName")}
//                                                             className="placeholder-input-modal relative lg:text-[16px] outline-none bg-[#F5F5F5] placeholder:text-[#A0A0A0] placeholder:text-[12px] placeholder:font-[200]   rounded-md border-2 border-[#EBEBEB] lg:h-[40px] h-[35px] xxxs:h-[35px] w-full"
//                                                             style={{
//                                                                 paddingLeft: "28px",
//                                                             }}
//                                                             defaultValue={contactDetails?.firstName}
//                                                         />
//                                                         <img
//                                                             src={Logos.Person}
//                                                             className="absolute lg:w-[20px] xxxs:w-[15px]  ml-2"
//                                                         />
//                                                     </div>
//                                                 </div>
//                                                 {errors.firstName?.message && (
//                                                     <p className="text-red-600  mt-[5px] text-[12px]">
//                                                         {errors.firstName?.message}
//                                                     </p>
//                                                 )}
//                                             </div>
//                                             <div>
//                                                 <div className="flex gap-2 flex-col">
//                                                     <label className="text-[#262626] inner-size font-[500]">
//                                                         Last Name
//                                                     </label>
//                                                     <div className="w-full flex justify-between items-center ">
//                                                         <input
//                                                             type="text"
//                                                             placeholder="Enter your Name"
//                                                             {...register("lastName")}
//                                                             className="placeholder-input-modal relative lg:text-[16px] outline-none   rounded-md border-2 bg-[#F5F5F5] border-[#EBEBEB] lg:h-[40px] h-[35px] xxxs:h-[35px] w-full placeholder:text-[12px]"
//                                                             style={{
//                                                                 paddingLeft: "28px",
//                                                             }}
//                                                             defaultValue={contactDetails?.lastName}
//                                                         />
//                                                         <img
//                                                             src={Logos.Person}
//                                                             className="absolute lg:w-[20px] xxxs:w-[15px]  ml-2"
//                                                         />
//                                                     </div>
//                                                 </div>
//                                                 {errors.lastName?.message && (
//                                                     <p className="text-red-600  mt-[5px]  text-[12px]">
//                                                         {errors.lastName?.message}
//                                                     </p>
//                                                 )}
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="flex justify-center my-4 gap-3">
//                                         <button
//                                             className="text-[16px] leading-[30px] font-[400] text-[#94A2F2] border-[1px] border-solid border-[#94A2F2] p-1 rounded-[5px] my-3 w-[120px] self-center "
//                                             onClick={togglePopup1}
//                                         >
//                                             Cancel
//                                         </button>
//                                         <button
//                                             type="submit"
//                                             className="text-[16px] leading-[30px] font-[400] text-[#ffffff] border-[1px] border-solid bg-[#94A2F2] p-1 rounded-[5px] my-3 w-[120px] self-center "
//                                             // onClick={togglePopup1}
//                                         >
//                                             Update
//                                         </button>
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             )}
//         </>
<></>
    );
};

export default ContactsModule;
