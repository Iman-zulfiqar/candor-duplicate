import React, { useState } from "react";
import axios from "axios";
// import { getToken } from "../../utils/constants";
import { addContact } from "../../hooks/useContact";
import { useMutation } from "react-query";

function ModalForm(props) {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const useAddContact = useMutation(addContact);
  const onFormSubmit = (event) => {
    event.preventDefault();
    useAddContact.mutate(data, {
      onSuccess: (data) => {
        alert(data.message);
      },
      onError: (error) => {
        alert(error.message);
      },
    });
    // axios
    //   .post("http://192.168.1.2:8000/candor/contacts/create", data, {
    //     headers: {
    //       Authorization: `Bearer ${getToken()}`,
    //     },
    //   })
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    console.log(data);
    setData({
      firstName: "",
      lastName: "",
      email: "",
    });
    props.modalCloseHandler();
  };
  const inputHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
    event.target.value = "";
  };
  return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
        <div onClick={props.modalCloseHandler} className="fixed inset-0 bg-black opacity-50"></div>
        <div className="relative rounded-md bg-white max-w-xs w-full ml-5 mr-5">
        <div className="flex justify-between mt-5">
          <div className="pl-5 font-medium">
            <h4>Add new contact</h4>
          </div>
          <div
            className="cursor-pointer pr-5"
            onClick={props.modalCloseHandler}
          >
            <img src="src\assets\Svg\CloseIcon.svg" alt="close option" className="w-4 h-4" />
          </div>
        </div>
        <hr className="mt-3" />

        <form onSubmit={onFormSubmit} className="mt-5 mb-5">
          <div className="flex justify-between">
            <div className="pl-5 mr-1">
              <label htmlFor="fname" className="text-xs">
                First Name
              </label>
              <br />
              <div className="flex bg-[#F5F5F5] h-8 mt-2 rounded-md ">
              <img src="src\assets\Svg\profile.svg" alt=" user icon " className="w-4 h-4 mt-2 ml-2" />
              <input
                type="text"
                id="fname"
                name="firstName"
                value={data["firstName"]}
                required
                className="w-full rounded-md bg-[#F5F5F5] placeholder:pl-1 text-xs"
                placeholder={` Enter your Name`}
                onChange={inputHandler}
              />
              </div>
            </div>
            <div className="pr-5 ml-1">
              <label htmlFor="lname" className="text-xs">
                Last Name
              </label>
              <br />
              <div className="flex bg-[#F5F5F5] h-8 mt-2 rounded-md ">
              <img src="src\assets\Svg\profile.svg" alt=" user icon " className="w-4 h-4 mt-2 ml-2" />
              <input
                type="text"
                id="lname"
                name="lastName"
                value={data["lastName"]}
                required
                className="w-full rounded-md bg-[#F5F5F5] placeholder:pl-1 text-xs"
                placeholder="Enter your Name"
                onChange={inputHandler}
              />
              </div>
            </div>
          </div>
          <div className="pl-5 pr-5 mt-2">
            <label htmlFor="email" className="text-xs">
              Email*
            </label>
            <br />
            <div className="flex bg-[#F5F5F5] mb-5 h-8 mt-2 rounded-md ">
            <img src="src\assets\Svg\sms1.svg" alt="" className="w-4 h-4 mt-2 ml-2" />
            <input
              type="Email"
              id="email"
              name="email"
              value={data["email"]}
              required
              className="w-full pl-1 rounded-md bg-[#F5F5F5] placeholder:pl-1 text-xs"
              placeholder="Enter your email address"
              onChange={inputHandler}
            />
            </div>
          </div>
          <div className="flex justify-around ml-5 mr-5">
            <div>
              <button
                type="button"
                className="border-solid border border-[#AEBFF2] w-28  h-10 rounded-md text-[#94A2F2] text-xs "
                onClick={props.modalCloseHandler}
              >
                Cancel
              </button>
            </div>
            <div>
              <button
                type="submit"
                className=" w-28 h-10 bg-[#AEBFF2] rounded-md text-white text-xs"
              >
                Add Contact
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalForm;
