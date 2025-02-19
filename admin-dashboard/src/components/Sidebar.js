import React, { useRef, useEffect, useState } from "react";
import { TiHome } from "react-icons/ti";
import { FaCalendarDays } from "react-icons/fa6";
import { AiFillMessage } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserDoctor } from "react-icons/fa6";
import { BsPeopleFill } from "react-icons/bs";
import { BiSolidDonateBlood } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import "../styles/sidebar.css";

const Sidebar = () => {
    const [show, setShow] = useState(false);
    const sidebarRef = useRef(null);
    const navigateTo = useNavigate();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setShow(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const navigate = (path) => {
        navigateTo(path);
        setShow(false);
    };

    return (
        <>
            <div className="wrapper">
                <GiHamburgerMenu className="hamburger" onClick={() => setShow(!show)} />
            </div>

            <nav ref={sidebarRef} className={`sidebar ${show ? "show" : ""}`}>

                <div className="links">
                    <div onClick={() => navigate("/")} className="link">
                        <TiHome />
                        <span>Home</span>
                    </div>
                    <div onClick={() => navigate("/doctors")} className="link">
                        <FaUserDoctor />
                        <span>Doctors</span>
                    </div>
                    <div onClick={() => navigate("/patients")} className="link">
                        <BsPeopleFill />
                        <span>Patients</span>
                    </div>
                    <div onClick={() => navigate("/appointment")} className="link">
                        <FaCalendarDays />
                        <span>Appointment</span>
                    </div>
                    <div onClick={() => navigate("/bloodbank")} className="link">
                        <BiSolidDonateBlood />
                        <span>Blood Bank</span>
                    </div>
                    <div onClick={() => navigate("/messages")} className="link">
                        <AiFillMessage />
                        <span>Messages</span>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Sidebar;
