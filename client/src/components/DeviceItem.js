import React from "react";
import { Card, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "../utils/consts";

const DeviceItem = ({ device }) => {
    const navigate = useNavigate();
    const priceStyle = {
        color: "black",
        fontSize: "15px",
        fontFamily: "Sans-Serif",
    };

    return (
        <Col
            md={3}
            className={"mt-3"}
            onClick={() => navigate(DEVICE_ROUTE + "/" + device.id)}
        >
            <Card style={{ width: 150, cursor: "pointer" }} border={"light"}>
                <Image
                    width={150}
                    height={150}
                    src={process.env.REACT_APP_API_URL + device.img} // in order for images to load, we need to add URL of our server
                />
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    {/* <div>Samsung...</div> */}
                    <div
                        className="d-flex align-items-center"
                        style={priceStyle}
                    >
                        <div>${device.price}.00</div>
                        {/* <Image width={18} height={18} src={star} />  */}
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    );
};

export default DeviceItem;
