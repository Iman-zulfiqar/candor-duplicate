import { Logos } from "../../assets";//all item images
import React, { useEffect, useState } from "react";
import { Button } from 'primereact/button';//button from prime react
import { Dialog } from 'primereact/dialog';//dialog from prime react
import "./ContactModule.css"; //custom css for this module
import { Dropdown } from 'primereact/dropdown';//dropdown from prime react
import { contactsDownloadInCsv } from "../../hooks/useContact" //api call in hooks file
import { CSVLink } from "react-csv"; // library to convert json to csv


const ContactsModule = () => {
    //states
    const [visible, setVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    //dropdown menu items
    const options = [
        { name: 'All Contacts' },
        { name: 'Donations' }
    ];

    const jsonToCsv = () => {
        if (contactsDownloadInCsv !== null) {
            const data = contactsDownloadInCsv();
            return (
                <CSVLink data={data} filename={'data.csv'} separator={';'}>
                    Download CSV
                </CSVLink>
            )
        }
    }

    return (
        <>
            <div className="card flex justify-end ">
                {/* button to show popup */}
                <Button style={{ display: 'block' }} onClick={() => setVisible(true)} ><img src={Logos.Button} /></Button>
                {/* Popup screen */}
                <Dialog header="Export Data" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
                    {/* popup type */}
                    <div className="popup-container">
                        <span>Export Type </span><img src={Logos.Info} />
                    </div>
                    {/* Dropdown menu tag */}
                    <div className="card flex justify-content-center my-5">
                        <Dropdown value={selectedOption} onChange={(e) => setSelectedOption(e.value)} options={options} optionLabel="name"
                            placeholder="All Contacts" className="w-full md:w-14rem" />
                    </div>
                    {/* cancel and export buttons */}
                    <div className="dialog-btn">
                        <Button className="cncl-btn" style={{ display: 'block' }} onClick={() => setVisible(false)} >Cancel</Button>
                        <button className="exp-btn" onClick={jsonToCsv}>Export</button>
                    </div>

                </Dialog>
            </div>
        </>
    );
};

export default ContactsModule;
