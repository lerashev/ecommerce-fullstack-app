import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";
import CreateType from "../components/modals/CreateType";

// admin will add types, brands and devices
const Admin = () => {
    // create a few states, if model is visible or not
    const [brandVisible, setBrandVisible] = useState(false);
    const [typeVisible, setTypeVisible] = useState(false);
    const [deviceVisible, setDeviceVisible] = useState(false);
    return (
        <Container className="d-flex flex-column">
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setTypeVisible(true)} // when we clik on a button a corresponding modal will open
            >
                Add type
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setBrandVisible(true)}
            >
                Add brand
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setDeviceVisible(true)}
            >
                Add device
            </Button>
            <CreateBrand
                show={brandVisible}
                onHide={() => setBrandVisible(false)}
            />
            <CreateDevice
                show={deviceVisible}
                onHide={() => setDeviceVisible(false)}
            />
            <CreateType
                show={typeVisible}
                onHide={() => setTypeVisible(false)}
            />
        </Container>
    );
};

export default Admin;
