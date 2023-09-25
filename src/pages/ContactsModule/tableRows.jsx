import React, {useState} from "react";
import {Logos} from "../../assets";

const tableRows = ({item}) => {


    const [dots, setdots] = useState(false);
    const dotsHandler = () => {
        setdots(!dots);
    };
    return (

        <tr className="bg-white border-b text-[#262626] cursor-pointer"
            onClick={() => {
                //   clickHandler();
            }}
        >
            <th
                scope="row"
                className="px-6 py-4 inner-size font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
                <div className="flex items-center gap-2 pl-3">
                    <img src={item.userId.picture} alt=""/>
                    <h1 className="text-black">{item.firstName} {item.lastName}</h1>
                </div>
            </th>
            <td className="px-6 py-4 inner-size whitespace-nowrap ">
                {item.email}
            </td>
            <td className="px-6 py-4 inner-size whitespace-nowrap">
                {item.userId.phone != null ? item.userId.phone : <p className="flex justify-center">---</p>}
            </td>
            <td className="px-6 py-4 inner-size whitespace-nowrap">
                {item.userId?.address != null ? item.userId?.address : <p className="flex justify-center">---</p>}
            </td>
            <td className="px-6 py-4 inner-size whitespace-nowrap">
                {item.userId?.city != null ? item.userId?.city : <p className="flex justify-center">---</p>}
            </td>
            <td className="px-6 py-4 inner-size whitespace-nowrap">
                {item.userId?.state} {item.userId?.state != null ? item.userId?.state :
                <p className="flex justify-center">---</p>}
            </td>
            <td className="px-6 py-4 inner-size whitespace-nowrap">
                {item.userId?.code != null ? item.userId?.code : <p className="flex justify-center">---</p>}
            </td>
            <td className="px-6 py-4 inner-size whitespace-nowrap text-center">

                {item.userId?.organization != null ? item.userId?.organization :
                    <p className="flex justify-center">---</p>}
            </td>
            <td className="px-6 py-4 inner-size whitespace-nowrap text-center">
                {item.userId?.occupation != null ? item.userId?.occupation : <p className="flex justify-center">---</p>}
            </td>
            <td className="px-6 py-4 inner-size whitespace-nowrap text-center">
                {item.userId?.employer != null && item.userId?.employer == true ? item.userId?.employer :
                    <p className="flex justify-center">---</p>}
            </td>
            <td className="px-6 py-4 inner-size whitespace-nowrap">
                {item.userId?.intractions != null ? item.userId?.intractions :
                    <p className="flex justify-center">---</p>}
            </td>
            <td className="px-6 py-4 inner-size whitespace-nowrap">
                <div className=" flex">
                    <img
                        src={Logos.REc}
                        alt=""
                        className="cursor-pointer w-[30px]"
                        onClick={(e) => {
                            e.stopPropagation();
                            // replyHandler();
                        }}
                    />
                    <img
                        src={Logos.Dots}
                        alt="elipsis"
                        className="cursor-pointer px-3"
                        onClick={(e) => {
                            e.stopPropagation();
                            dotsHandler();
                        }}
                    />
                    <div className="z-10">
                        {/* <MenuDropdown
                                class="w-[190px] xxxl:w-[240px] top-[28px] right-[18px]"
                                menuarray={menuarray}
                                isOpen={dots}
                                setIsOpen={setdots}
                              /> */}
                    </div>
                </div>
            </td>
        </tr>

    )
};

export default tableRows;
