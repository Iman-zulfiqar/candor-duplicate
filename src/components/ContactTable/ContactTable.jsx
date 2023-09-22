import React, { useState, useEffect } from "react";
import "./ContactTable.css";
import { Logos } from "../../assets";
import { useContactDetail } from "../../hooks/useContactDetail";
// Define the ContactTable component
function ContactTable() {
  // Fetch initial contacts data using the useContactDetail hook
  const { data: initialContacts, isLoading, isError } = useContactDetail();

  // Create a state variable to store the data
  const [data, setData] = useState(initialContacts);

  // Use useEffect to update the data state when dependencies change
  useEffect(() => {
    setData(initialContacts);
  }, [isLoading, isError, initialContacts]);

  // If there is an error, display an error message
  if (isError) {
    return <div>Error</div>;
  }

  // If data is still loading, display a loading message
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Render the table with contact data
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse block md:table">
        <thead className="bg-800 ">
          <tr>
            <th className="text-center whitespace-nowrap py-3 px-4 text-sm">
              Name
            </th>
            <th className="text-center whitespace-nowrap py-3 px-4 text-sm">
              Email
            </th>
            <th className="text-center whitespace-nowrap py-3 px-4 text-sm ">
              Number
            </th>
            <th className="text-center whitespace-nowrap py-3 px-4 text-sm">
              Street Address
            </th>
            <th className="text-center whitespace-nowrap py-3 px-4 text-sm">
              City
            </th>
            <th className="text-center whitespace-nowrap py-3 px-4 text-sm">
              State
            </th>
            <th className="text-center whitespace-nowrap py-3 px-4 text-sm ">
              Zip Code
            </th>
            <th className="text-center whitespace-nowrap py-3 px-4 text-sm">
              Organization
            </th>
            <th className="text-center whitespace-nowrap py-3 px-4 text-sm">
              Occupation
            </th>
            <th className="text-center whitespace-nowrap py-3 px-4 text-sm">
              Employer
            </th>
            <th className="text-center whitespace-nowrap py-3 px-4 text-sm">
              Interaction
            </th>
            <th className="text-center whitespace-nowrap py-3 px-4 text-sm">
              <div className="flex justify-center items-center">
                <img
                  src={Logos.Grid}
                  alt="Grid"
                  className="text-center whitespace-nowrap"
                />
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 md:table-row-group">
          {data?.data?.map((item) => (
            <tr key={item._id} className="md:table-row">
              <td className="whitespace-nowrap py-2 px-4 md:table-cell">
                <div className="flex items-center">
                  <img
                    src={item.userId.picture}
                    alt={item.firstName}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <span className="">
                    {item.firstName} {item.lastName}
                  </span>
                </div>
              </td>
              <td className="whitespace-nowrap py-2 px-4  md:table-cell">
                {item.email || <p className="flex justify-center">---</p>}
              </td>
              <td className=" whitespace-nowrap py-2 px-4  md:table-cell">
                {item.userId.phone || (
                  <p className="flex justify-center">---</p>
                )}
              </td>
              <td className="whitespace-nowrap py-2 px-4  md:table-cell">
                {item.userId.address || (
                  <p className="flex justify-center">---</p>
                )}
              </td>
              <td className=" whitespace-nowrap py-2 px-4 md:table-cell">
                {item.userId?.city || (
                  <p className="flex justify-center">---</p>
                )}
              </td>
              <td className=" whitespace-nowrap py-2 px-4  md:table-cell">
                {item.userId?.state || (
                  <p className="flex justify-center">---</p>
                )}
              </td>
              <td className=" whitespace-nowrap py-2 px-4 md:table-cell">
                {item.userId?.zipCode || (
                  <p className="flex justify-center">---</p>
                )}
              </td>
              <td className=" whitespace-nowrap py-2 px-4 md:table-cell">
                {item.userId.organization || (
                  <p className="flex justify-center">---</p>
                )}
              </td>
              <td className=" whitespace-nowrap py-2 px-4 md:table-cell">
                {item.userId.occupation || (
                  <p className="flex justify-center">---</p>
                )}
              </td>
              <td className=" whitespace-nowrap py-2 px-4 md:table-cell">
                {item.userId.employer || (
                  <p className="flex justify-center">---</p>
                )}
              </td>
              <td className=" whitespace-nowrap py-2 px-4 md:table-cell">
                {item.userId?.interaction || (
                  <p className="flex justify-center">---</p>
                )}
              </td>
              <td className=" whitespace-nowrap py-2 px-4 md:table-cell">
                <div className="flex justify-center space-x-2 ">
                  <img
                    src={Logos.REc}
                    alt="Vectors"
                    className="cursor-pointer hover:underline mx-2"
                    onClick={() => console.log("vector")}
                  />

                  <img
                    src={Logos.Dots}
                    alt="Dots"
                    className="cursor-pointer hover:underline mx-2"
                    onClick={() => console.log("dots")}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContactTable;
