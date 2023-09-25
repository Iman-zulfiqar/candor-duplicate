import Login from "./src/pages/login/Login";

import Components from "./src/pages/components/Components";

import ForgotPassword from "./src/pages/ForgetPassword/ForgotPassword";
import VerifyCode from "./src/pages/VerifyCode/VerifyCode";
import CreateNewPassword from "./src/pages/CreateNewPassword/CreateNewPassword";
import CreateAnAccount from "./src/pages/CreateAnAccount/CreateAnAccount";
import AuthComp from "./src/components/AuthComp/AuthComp";
import CreateAccount2 from "./src/pages/CreateAccount2/CreateAccount2";
import Conversation from "./src/pages/Conversation/Conversation";
import VideoModule from "./src/pages/VideoModule/VideoModule";
import ContactsModule from "./src/pages/ContactsModule/ContactsModule";
import ContactsModule2 from "./src/components/DuplicateFiles/ContactInfo";
import LibraryModule from "./src/pages/LibraryModule/LibraryModule";
import BuildTaxReform from "./src/components/BuildTaxReform/BuildTaxReform";
import ReplyComp from "./src/components/ReplyComp/ReplyComp";
import AddNewStep from "./src/components/AddNewStep/AddNewStep";
import MainEnding from "./src/components/MainEnding/MainEnding";
import Policies from "./src/components/Policies/Policies";
import ConversationReplyPreview from "./src/components/ConversationReplyPreview/ConversationReplyPreview";
import Donations from "./src/components/Donations/Donations";
import ContactInfo from "./src/components/ContactInfo/ContactInfo";
import ConversationReply from "./src/components/ConverstionReply/ConservationReply";
import ReplyTextPreview from "./src/components/ReplyText/ReplyTextPreview";
import ReplyVideoPreviewRecording from "./src/components/ReplyVideo/ReplyVideoPreviewRecording";
import ReplyAudioPreviewPlay from "./src/components/ReplyAudio/ReplyAudioPreviewPlay";
import ApproveReplyVideoPreview from "./src/components/ReplyVideo/ApproveReplyVideoPreview";
import ReplyApproveAudio from "./src/components/ReplyAudio/ReplyApproveAudio";
import ReplyAudioPreview from "./src/components/ReplyAudio/ReplyAudioPreview";
import ReplyVideoPreviewComp from "./src/components/ReplyVideo/ReplyVideoPreviewComp";
import ShareVideo from "./src/components/ShareVideo/ShareVideo";
import Integrations from "./src/components/Integrations/Integrations";
import Metrics from "./src/components/Metrics/Metrics";
import AddVideo from "./src/components/AddVideo/AddVideo";
import RecordVideo from "./src/components/ReplyAddVideo/RecordVideo";
import AddVideoRecording from "./src/components/ReplyAddVideo/AddVideoRecording";
import AddVideoApprove from "./src/components/ReplyAddVideo/AddVideoApprove";
import AddVideoApproveLibrary from "./src/components/DuplicateFiles/AddVideoApprove";

import AddVideoApproveUpload from "./src/components/ReplyAddVideo/AddVideoApproveUpload";

import ShareConversation from "./src/components/shareConversation/ShareConversation";
import ProfileSettings from "./src/pages/ProfileSettings/ProfileSettings";
import AddLibrary from "./src/components/AddLibrary/AddLibrary";
import FormOptions from "./src/components/FormOptions/FormOptions";
import JoinComp from "./src/components/JoinComp/JoinComp";
import GeneralSetting from "./src/components/GeneralSetting/GeneralSetting";
import EmailPreview from "./src/components/EmailPreview/EmailPreview";
import MartinUsSenate from "./src/components/MartineUsSenate/MartinUsSenate";
import TrimVideo from "./src/components/TrimVideo/TrimVideo";
import AddCaption from "./src/components/AddCaption/AddCaption";
import TrimVideoLibrary from "./src/components/DuplicateLibraryComp/TrimVideoLibrary";
import AddCaptionLibrary from "./src/components/DuplicateLibraryComp/AddCaptionLibrary";
import ThanksCalender from "./src/components/ThanksCalender/ThanksCalender";
import PaymentInformation from "./src/components/PaymentInformation/PaymentInformation";
import TranscriptComp from "./src/components/TranscriptComp/TranscriptComp";

import LoginVerification from './src/components/DuplicateFiles/LoginVerification'
import OTPInput from "./src/components/DuplicateFiles/text";
import DemonVideo from "./src/components/ReplyVideo/DemonVideo";
import AudioRecorder from "./src/components/ReplyAudio/AudioRecorder/AudioRecorder";
import ReactVideoRecorder from "./src/components/ReplyVideo/VideoRecorder/ReactVideoRecorder"
import RecordView from "./src/components/ReplyVideo/record-video"
import VideoSteps from "./src/components/VideoSteps/VideoSteps";


export const PublicRoutes = [
    {
        path: "/login",
        name: "Login",
        element: <Login/>,
    },
    {
        path: "/forgot-password",
        name: "Forgot Password",
        element: <ForgotPassword/>,
    },
    {
        path: "/auth",
        name: "auth",
        element: <AuthComp/>,
    },

    {
        path: "/verify-code",
        name: "Verify Code",
        element: <VerifyCode/>,
    },

    {
        path: "/create-new-password",
        name: "Create New Password",
        element: <CreateNewPassword/>,
    },

    {
        path: "/sign-up",
        name: "Create New Account",
        element: <CreateAnAccount/>,
    },

    {
        path: "/sign-up-2",
        name: "Create New Account",
        element: <CreateAccount2/>,
    },
    {
        path: "/Login-Verification",
        name: "Login Verification",
        element: <LoginVerification/>,
    },
    {
        path: "/OTP-Input",
        name: "OTP Input",
        element: <OTPInput/>,
    },
];

export const PrivateRoutes = [
    {
        path: "/",
        name: "Conversation",
        element: <Conversation/>,
    },
    {
        path: "/transcript",
        name: "Transcript",
        element: <TranscriptComp/>,
    },
    {
        path: "/profile-settings",
        name: "Profile Settings",
        element: <ProfileSettings/>,
    },

    {
        path: "/reply",
        name: "Reply",
        element: <ReplyComp/>,
    },
    {
        path: "/transcript",
        name: "TranscriptComp",
        element: <TranscriptComp/>,
    },
    {
        path: "/play",
        name: "Play",
        element: <ReplyVideoPreviewRecording/>,
    },
    {
        path: "/audio-play",
        name: "Audio Play",
        element: <ReplyAudioPreviewPlay/>,
    },
    {
        path: "/approve/:type",
        name: "Approve",
        element: <ApproveReplyVideoPreview/>,
    },
    // {
    //   path: "/demaon",
    //   name: "Approve",
    //   element: <DemonVideo />,
    // },
    {
        path: "/demaon/:type",
        name: "Approve",
        element: <DemonVideo/>,
    },
    {
        path: "/react-video-recorder",
        name: "Approve",
        element: <ReactVideoRecorder/>,
    },
    {
        path: "/audio-recorder",
        name: "Approve",
        element: <AudioRecorder/>,
    },
    {
        path: "/conversation-reply-preview",
        name: "ConversationReplyPreview ",
        element: <ConversationReplyPreview/>,
    },
    {
        path: "/audio-approve",
        name: "Approve Audio",
        element: <ReplyApproveAudio/>,
    },

    // {
    //   path: "/reply-video-preview",
    //   name: "Reply Video Preview",
    //   element: <ReplyVideoPreviewComp />,
    // },
    {
        path: "/reply-video-preview/:type",
        name: "Reply Video Preview",
        element: <ReplyVideoPreviewComp/>,
    },
    {
        path: "/reply-audio-preview",
        name: "Reply audio Preview",
        element: <ReplyAudioPreview/>,
    },
    {
        path: "/reply-text-preview",
        name: "Reply text Preview",
        element: <ReplyTextPreview/>,
    },

    {
        path: "/conversation",
        name: "Conversation",
        element: <Conversation/>,
    },

    {
        path: "/video",
        name: "Video",
        element: <VideoModule/>,
    },
    {
        path: "/components",
        name: "Components",
        element: <Components/>,
    },
    {
        path: "/contact",
        name: "Contact",
        element: <ContactsModule/>,
    },
    {
        path: "/contact2",
        name: "Contact2",
        element: <ContactsModule2/>,
    },
    {
        path: "/library",
        name: "Library",
        element: <LibraryModule/>,
    },
    {
        path: "/build-tax-reform",
        name: "BuildTaxReform",
        element: <BuildTaxReform/>,
    },
    {
        path: "/donation",
        name: "Donation",
        element: <Donations/>,
    },
    {
        path: "/contact-Info",
        name: "ContactInfo ",
        element: <ContactInfo/>,
    },
    {
        path: "/conversation-reply",
        name: "ConversationReply ",
        element: <ConversationReply/>,
    },
    {
        path: "/conversation-reply-preview",
        name: "ConversationReply ",
        element: <ConversationReplyPreview/>,
    },
    {
        path: "/share-video/:id",
        name: "ShareVideo",
        element: <ShareVideo/>,
    },
    {
        path: "/integrations",
        name: "Integrations",
        element: <Integrations/>,
    },
    {
        path: "/share-conversation",
        name: "Share Conversation",
        element: <ShareConversation/>,
    },
    {
        path: "/video-steps",
        name: "Introduction",
        element: <VideoSteps/>,
    },
    {
        path: "/Policies",
        name: "Policies",
        element: <Policies/>,
    },
    {
        path: "/MainEnding",
        name: "MainEnding",
        element: <MainEnding/>,
    },
    {
        path: "/AddNewStep/:id",
        name: "AddNewStep",
        element: <AddNewStep/>,
    },
    {
        path: "/AddNewStep",
        name: "AddNewStep",
        element: <AddNewStep/>,
    },
    {
        path: "/AddVideo",
        name: "AddVideo",
        element: <AddVideo/>,
    },
    {
        path: "/RecordVideo",
        name: "RecordVideo",
        element: <RecordVideo/>,
    },
    {
        path: "/AddVideoRecording",
        name: "AddVideoRecording",
        element: <AddVideoRecording/>,
    },
    {
        path: "/AddVideoApprove",
        name: "AddVideoApprove",
        element: <AddVideoApprove/>,
    },
    {
        path: "/AddVideoApproveLibrary",
        name: "AddVideoApproveLibrary",
        element: <AddVideoApproveLibrary/>,
    },
    {
        path: "/AddVideoApprove2",
        name: "AddVideoApprove",
        element: <AddVideoApprove value="upload"/>,
    },
    {
        path: "/AddVideoApproveUpload",
        name: "AddVideoApproveUpload",
        element: <AddVideoApproveUpload/>,
    },
    {
        path: "/AddLibrary",
        name: "AddLibrary",
        element: <AddLibrary/>,
    },
    {
        path: "/form-options",
        name: "FormOptions",
        element: <FormOptions/>,
    },
    {
        path: "/Join",
        name: "JoinComp",
        element: <JoinComp/>,
    },
    {
        path: "/general-setting",
        name: "GeneralSetting",
        element: <GeneralSetting/>,
    },
    {
        path: "/email-preview",
        name: "EmailPreview",
        element: <EmailPreview/>,
    },
    {
        path: "/martin-us-senate",
        name: "MartinUsSenate",
        element: <MartinUsSenate/>,
    },

    {
        path: "/Metrics",
        name: "Metrics",
        element: <Metrics/>,
    },
    {
        path: "/trim-video",
        name: "TrimVideo",
        element: <TrimVideo/>,
    },
    {
        path: "/add-caption",
        name: "AddCaption",
        element: <AddCaption/>,
    },
    {
        path: "/trim-video-library",
        name: "TrimVideoLibrary",
        element: <TrimVideoLibrary/>,
    },
    {
        path: "/add-caption-library",
        name: "AddCaptionLibrary",
        element: <AddCaptionLibrary/>,
    },
    {
        path: "/thanks-calender",
        name: "ThanksCalender",
        element: <ThanksCalender/>,
    },
    {
        path: "/payment-information",
        name: "PaymentInformation",
        element: <PaymentInformation/>,
    },
    {
        path: "/record-video",
        name: "PaymentInformation",
        element: <RecordView/>,
    },
];
