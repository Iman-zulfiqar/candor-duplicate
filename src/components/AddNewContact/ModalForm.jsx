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
    // hello world
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
  };
  const inputHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
    event.target.value = "";
  };
  return (
    <div className=" h-[100vh]  relative bg-black/50 ">
      <div className=" h-max top-1/4 fixed rounded-md bg-white lg:w-1/4 lg:ml-[30vw] mid:w-1/3 mid:ml-[25vw] sm:w-3/5 sm:ml-[15vw] xxxs: w-3/5 xxxs:ml-[20vw] xxxxs:ml-[25vw] ">
        <div className="flex justify-between mt-5 mb-5">
          <div className="pl-5 font-medium">
            <h4>Add new contact</h4>
          </div>
          <div
            className="cursor-pointer pr-5"
            onClick={props.modalCloseHandler}
          >
            <img src="src\assets\Svg\CloseIcon.svg" alt="close option" />
          </div>
        </div>
        <hr />

        <form onSubmit={onFormSubmit} className="mt-5 mb-5">
          <div className="flex justify-between">
            <div className="pl-5 mr-5">
              <label htmlFor="fname" className="text-xs">
                First Name
              </label>
              <br />
              <input
                type="text"
                id="fname"
                name="firstName"
                value={data["firstName"]}
                required
                className="w-full pl-3 h-8 mt-2 rounded-md bg-gray-100 placeholder:pl-5 text-xs"
                placeholder={` Enter your Name`}
                onChange={inputHandler}
              />
            </div>
            <div className="pr-5">
              <label htmlFor="lname" className="text-xs">
                Last Name
              </label>
              <br />
              <input
                type="text"
                id="lname"
                name="lastName"
                value={data["lastName"]}
                required
                className="w-full pl-3 h-8 mt-2 rounded-md bg-gray-100 placeholder:pl-5 text-xs"
                placeholder="Enter your Name"
                onChange={inputHandler}
              />
            </div>
          </div>
          <div className="pl-5 pr-5 mt-2">
            <label htmlFor="email" className="text-xs">
              Email*
            </label>
            <br />
            <input
              type="Email"
              id="email"
              name="email"
              value={data["email"]}
              required
              className="w-full pl-3 h-8 mt-2 mb-5 rounded-md bg-gray-100 placeholder:pl-5 text-xs"
              placeholder="Enter your email address"
              onChange={inputHandler}
            />
          </div>
          <div className="flex justify-around ml-5 mr-5">
            <div>
              <button
                type="button"
                className="border-solid border border-sky-300 sm:w-28 h-10 rounded-md text-sky-300 xs:text-xs xxxs:w-14 xxxs:text-[8px]"
                onClick={props.modalCloseHandler}
              >
                Cancel
              </button>
            </div>
            <div>
              <button
                type="submit"
                className="sm:w-28 h-10 bg-sky-300 rounded-md text-white xs:text-xs xxxs:w-14 xxxs:text-[8px]"
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
