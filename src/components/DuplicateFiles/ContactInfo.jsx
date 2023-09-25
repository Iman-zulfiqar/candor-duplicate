import React, {useEffect, useState} from "react";
import {Logos} from "../../assets";
// // import ButtonComp from "../../components/ButtonComp/ButtonComp";
import {useNavigate} from "react-router";
// // import { Link } from "react-router-dom";
// // import ShowMessagesContact from "../../pages/Conversation/ShowMessagesContact"
// import ContactDetailComp from "../../pages/ContactsModule/ContactDetailComp";
// import {useGlobalInfo} from "../../contexts/GlobalContext";
// import GlobalLoaderCopy from "../GloabalLoaderCopy/GloabalLoaderCopy";
// import {useMutation} from "react-query";
// import {contactDetails} from "../../hooks/useContact";

const ContactsModule = () => {
//     const {loading, setLoading} = useGlobalInfo();
//     const detailcontact = useMutation(contactDetails);
//     const [details, setDetails] = useState(null);
//     const data = JSON.parse(localStorage.getItem('receiverId'))
//     useEffect(() => {
//         const details = detailcontact.mutate(data.contactId, {
//             onSuccess: (data) => {
//                 setDetails(data.data);

//                 setLoading(false);

//                 // console.log('i am contact details --->',data);
//             }
//         });
//     }, [])
//     // const [active, setActive] = useState("Messages");
//     const navigate = useNavigate();
//     const id = JSON.parse(localStorage.getItem('receiverId'))
//     // const handleClick = (c) => {
//     //   setActive(c);
//     // };
//     const [isOpen, setIsOpen] = useState(false);
//     const togglePopup = () => {
//         setIsOpen(!isOpen);
//     };
//     const [isOpen3, setIsOpen3] = useState(false);
//     const togglePopup3 = () => {
//         setIsOpen3(!isOpen3);
//     };

//     function ConversationHandler() {
//         navigate("/contact");
//     }

//     function ReplyHandler() {
//         localStorage.setItem('conversationId', null);
//         navigate("/reply");
//     }

//     function transcriptHandler() {
//         navigate("/transcript");
//     }

//     // const chatSelectedId = useStore((store) => store.chatSelectedId);
//     // const { data: getContactData, refetch: contactFetch } =
//     //   useFetchContactsDetails(chatSelectedId);
//     // const contactDetails = getContactData?.data?.data;
//     // console.log("123456", contactDetails);

//     // const [contactList, setContactList] = useState([]);

//     // useEffect(() => {
//     //   setLoading(true)
//     //   fetchData();
//     // }, []);

//     // async function fetchData() {
//     //   setLoading(true)
//     //   try {
//     //     const data = await fetchContactDetails();
//     //     setContactList(data);
//     //     setLoading(false)
//     //   } catch (error) {
//     //     setLoading(false)
//     //     console.error("Error fetching contact details:", error);
//     //   }
//     // }

    return (
//         <>

//             {loading ? <GlobalLoaderCopy/> : <div className=" " style={{width: "100%"}}>
//                 <div className="flex justify-between items-center">
//                     <div className="flex items-center gap-4">
//                         <img
//                             src={Logos.BreadcrumbBack}
//                             alt="icon"
//                             className="cursor-pointer ml-2 w-[8px] xxxl:w-[10px]"
//                             onClick={() => {
//                                 ConversationHandler();
//                             }}
//                         />
//                         <h1 className=" text-[16px] xxxl:text-[22px] font-[500] leading-[30px] text-[#262626]">
//                             Contact Details
//                         </h1>
//                     </div>
//                 </div>
//                 <div
//                     className="mt-3  shadow-md flex lg:flex-nowrap xxxs:flex-wrap rounded-lg "
//                     style={{minHeight: "calc(100vh - 140px)", width: "100%",}}
//                 >
//                     <div
//                         className=" xxxs:w-[350px] bg-white lg:min-h-[200px] border-[1px] border-[#EBEBEB] border-solid shadow-md min-w-[400px] flex-auto   overflow-y-scroll overflow-x-hidden  rounded-lg  "
//                         style={{height: "calc(100vh - 130px)", width: "25%"}}
//                     >
//                         <div
//                             className="  border-b-[1px] border-[#EBEBEB] border-solid px-3 py-2 flex justify-between gap-1 sticky top-0 bg-white">
//                             <img
//                                 src={
//                                     contactDetails?.organization
//                                         ? contactDetails?.picture
//                                         : Logos.Dp
//                                 }
//                                 alt="DP"
//                                 style={{width: "60px"}}
//                             />
//                             <div className="flex flex-col gap-3 items-end">
//                                 <h1 className="text-[15px] xxxl:text-[18px] font-[500] leading-[28px] text-[#262626] max-xxs:text-[14px] ">
//                                     {id.firstName} {id.lastName}
//                                 </h1>
//                                 <div className="flex gap-3 justify-end w-[30px]">
//                                     <img
//                                         src={Logos.Vector}
//                                         alt=""
//                                         className="cursor-pointer w-[25px] xxxl:w-[35px]"
//                                         onClick={() => {
//                                             ReplyHandler();
//                                         }}
//                                     />
//                                     <img
//                                         src={Logos.Trash}
//                                         onClick={togglePopup3}
//                                         alt=""
//                                         className="w-[25px] xxxl:w-[35px] cursor-pointer"
//                                     />
//                                     <img
//                                         src={Logos.Pen}
//                                         alt=""
//                                         className="w-[25px] xxxl:w-[35px]"
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="flex flex-col p-3 gap-[2px] ">
//                             <div className="flex items-start justify-between">
//                                 <h1 className="text-[12px] xxxl:text-[16px] font-[400] leading-[28px] text-[#A0A0A0]">
//                                     Organization :
//                                 </h1>
//                                 <p className="text-[12px] xxxl:text-[16px] font-[500] leading-[28px] text-[#262626]">
//                                     {id?.userId?.organization
//                                         ? `${id?.userId?.organization}`
//                                         : "---"}
//                                 </p>
//                             </div>
//                             <div className="flex items-start justify-between">
//                                 <h1 className="text-[12px] xxxl:text-[16px] font-[400] leading-[28px] text-[#A0A0A0]">
//                                     Email :
//                                 </h1>
//                                 <p className="text-[12px] xxxl:text-[16px] font-[500] leading-[28px] text-[#262626]">
//                                     {id?.email ? `${id?.email}` : "---"}
//                                 </p>
//                             </div>
//                             <div className="flex items-start justify-between">
//                                 <h1 className="text-[12px] xxxl:text-[16px] font-[400] leading-[28px] text-[#A0A0A0]">
//                                     Phone :
//                                 </h1>
//                                 <p className="text-[12px] xxxl:text-[16px] font-[500] leading-[28px] text-[#262626]">
//                                     {id?.userId?.phone ? `${id?.userId?.phone}` : "---"}
//                                 </p>
//                             </div>
//                             <div className="flex items-start justify-between">
//                                 <h1 className="text-[12px] xxxl:text-[16px] font-[400] leading-[28px] text-[#A0A0A0]">
//                                     Address :
//                                 </h1>
//                                 <p className="text-[12px] font-[500] max-xxs:text-[12px] leading-[28px] text-[#262626]">
//                                     {id?.userId?.address ? id?.userId?.address : "---"}
//                                 </p>
//                             </div>
//                             <div className="flex items-start justify-between">
//                                 <h1 className="text-[12px] xxxl:text-[16px] font-[400] leading-[28px] text-[#A0A0A0]">
//                                     Occupation :
//                                 </h1>
//                                 <p className="text-[12px] xxxl:text-[16px]  font-[400] leading-[28px] text-[#262626]">
//                                     {id?.userId?.occupation
//                                         ? `${id?.userId?.occupation}`
//                                         : "---"}
//                                 </p>
//                             </div>
//                             <div className="flex items-start justify-between">
//                                 <h1 className="text-[12px] xxxl:text-[16px] font-[400] leading-[28px] text-[#A0A0A0]">
//                                     Employer:
//                                 </h1>
//                                 <p className="text-[12px] xxxl:text-[16px] font-[400] leading-[28px] text-[#262626]">
//                                     {id?.userId?.employer
//                                         ? `${id?.userId?.employer}`
//                                         : "---"}
//                                 </p>
//                             </div>
//                             <hr className="border-b-[1px] border-[#E7EEF9] border-solid "/>
//                         </div>
//                     </div>

//                     <ContactDetailComp msg={data?.contactId}/>

//                 </div>
//                 {isOpen3 && (
//                     <div
//                         className="popup-box fixed backdrop-opacity-20 z-10 bg-black/30 left-0 top-0 w-full min-h-[100vh] flex justify-center items-center "
//                         onClick={togglePopup3}
//                     >
//                         <div
//                             onClick={(e) => {
//                                 e.stopPropagation();
//                             }}
//                             className="box  relative rounded-md lg:w-[500px] xxxs:w-[350px] bg-white lg:min-h-[200px]   mx-auto flex flex-col  "
//                         >
//                             <div className="flex justify-between px-6 lg:pt-6 xxxs:pt-5">
//                                 <div className="lg:text-[20px] xxxs:text-[16px] xxxl:text-[22px] text-black">
//                                     Delete Entire Conversations
//                                 </div>
//                                 <button className="btn-close " onClick={togglePopup3}>
//                                     <img
//                                         src={Logos.ClosePopup}
//                                         alt="Close Button"
//                                         className="lg:w-[20px] xxxs:w-[15px]"
//                                     />
//                                 </button>
//                             </div>
//                             <hr className=" border-1 border-[#CEDEF2] mt-5"/>

//                             <div
//                                 style={{
//                                     marginTop: "10px",
//                                 }}
//                             >
//                                 <div
//                                     className=" lg:text-[14px] xxxs:text-[11px] xxxl:text-[16px] px-4 gap-4  "
//                                     style={{marginTop: "8px"}}
//                                 >
//                                     <p className="font-[300] leading-[22px] text-[#A0A0A0] ">
//                     <span className="mr-1  font-[500] leading-[22px] text-[#262626]">
//                       This cannot be undone.
//                     </span>
//                                         All answers and replies in this converstaion will be lost.
//                                         we cannot recover thers once delete.
//                                     </p>
//                                     <br/>
//                                     <p className="  font-[300] leading-[22px] text-[#A0A0A0] ">
//                                         Are you sure you want to delte this conversation?
//                                     </p>
//                                 </div>
//                             </div>
//                             <div className="flex justify-center my-3 gap-3">
//                                 <button
//                                     className="text-[14px] xxxl:text-[20px] leading-[30px] font-[400] text-[#A0A0A0] border-[1px] border-solid border-[#A0A0A0] p-1 rounded-[5px] my-3 w-[120px] self-center "
//                                     onClick={togglePopup3}
//                                 >
//                                     Cancel
//                                 </button>
//                                 <button
//                                     className="text-[14px] xxxl:text-[20px] leading-[30px] font-[400] text-[#ffffff] border-[1px]  border-solid  p-1 rounded-[5px] my-3 w-[120px] self-center "
//                                     style={{backgroundColor: "#F24B59"}}
//                                     onClick={togglePopup3}
//                                 >
//                                     Delete
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//                 {isOpen && (
//                     <div
//                         className="popup-box fixed backdrop-opacity-20 z-50 bg-black/30 left-0 top-0 w-full min-h-[100vh] flex justify-center items-center "
//                         onClick={togglePopup}
//                     >
//                         <div
//                             className="box  relative rounded-md  lg:w-[400px] xxxs:w-[350px] bg-white    mx-auto flex flex-col  "
//                             onClick={(e) => {
//                                 e.stopPropagation();
//                             }}
//                         >
//                             <div className="flex justify-between p-5 xxxl:py-7 pt-6 h-[20px] items-center">
//                                 <div className="lg:text-[18px] xxxs:text-[15px] xxxl:text-[22px]">
//                                     Download Conversations
//                                 </div>
//                                 <button className="btn-close " onClick={togglePopup}>
//                                     <img
//                                         src={Logos.ClosePopup}
//                                         alt="Close Button"
//                                         className="lg:w-[20px] xxxs:w-[15px]"
//                                     />
//                                 </button>
//                             </div>
//                             <hr className=" border-1 border-[#CEDEF2] "/>

//                             <div
//                                 style={{
//                                     marginTop: "10px",
//                                 }}
//                             >
//                                 <div className="flex  flex-col lg:px-6 px-4  xxxs:px-4  justify-center gap-2 ">
//                                     <p className="lg:text-[16px] xxxs:text-[13px] leading-[30px] xxxl:text-[18px] font-[400] text-[#262626]">
//                                         Include:
//                                     </p>

//                                     <div className="flex items-center gap-5">
//                                         <input
//                                             type="checkbox"
//                                             name="download"
//                                             id="text"
//                                             className="accent-[#3A37A6] h-4 w-4"
//                                         />
//                                         <label
//                                             htmlFor="text"
//                                             className="lg:text-[16px] xxxs:text-[13px] xxxl:text-[18px] leading-[30px] font-[400] text-[#262626] "
//                                         >
//                                             Text
//                                         </label>
//                                         <input
//                                             type="checkbox"
//                                             name="download"
//                                             id="text"
//                                             className="accent-[#3A37A6] h-4 w-4"
//                                         />
//                                         <label
//                                             htmlFor="video"
//                                             className="lg:text-[16px] xxxs:text-[13px] xxxl:text-[18px] leading-[30px] font-[400] text-[#262626] "
//                                         >
//                                             Video
//                                         </label>
//                                         <input
//                                             type="checkbox"
//                                             name="download"
//                                             id="text"
//                                             className="accent-[#3A37A6] h-4 w-4"
//                                         />
//                                         <label
//                                             htmlFor="audio"
//                                             className=" lg:text-[16px] xxs:text-[13px] xxxl:text-[18px] leading-[30px] font-[400] text-[#262626] "
//                                         >
//                                             Audio
//                                         </label>
//                                     </div>
//                                 </div>
//                             </div>
//                             <button
//                                 className="text-[14px] my-5 leading-[30px] xxxl:text-[20px] font-[400] text-[#ffffff] border-[1px] border-solid bg-[#94A2F2] p-1 rounded-[5px]  w-[110px]  xxxl:w-[140px] self-center "
//                                 onClick={togglePopup}
//                             >
//                                 Download
//                             </button>
//                         </div>
//                     </div>
//                 )}
//             </div>}

        // </>
        <></>
    );
};

export default ContactsModule;
