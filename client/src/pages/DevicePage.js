import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { fetchOneDevice } from "../http/deviceAPI";
import "./pages.css";

const DevicePage = () => {
    // creating local state
    const [device, setDevice] = useState({ info: [] });
    const { id } = useParams();

    console.log(device.info);

    useEffect(() => {
        fetchOneDevice(id).then((data) => setDevice(data));
    }, []);

    return (
        <div className="pdp-container">
            <div className="pdp-section">
                <img
                    className="pdp-image"
                    src={process.env.REACT_APP_API_URL + device.img}
                    alt="main"
                />
            </div>

            <div className="pdp-section">
                <h2>{device.name}</h2>
                <h3> ${device.price}.00 </h3>
                <div className="color-swatch-container">
                    <div className="swatch blue" />
                    <div className="swatch black" />
                    <div className="swatch beige" />
                    <div className="swatch violet" />
                    <div className="swatch light-blue"></div>
                </div>
                <Button className="button" variant="outline-dark">
                    Add to cart
                </Button>
            </div>
            <div className="pdp-section full-width">
                <h2> {device.info[0]?.description} </h2>
                <span>{device.info[1]?.description}</span>
            </div>
        </div>
    );
};

export default DevicePage;
