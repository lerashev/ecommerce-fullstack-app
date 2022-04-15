import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Form } from "react-bootstrap";
import { createType } from "../../http/deviceAPI";

// show is responsible for visibility of a component
// onHide is a function
const CreateType = ({ show, onHide }) => {
    //  revive input (line 22-25)
    const [value, setValue] = useState("");
    const addType = () => {
        // after we clicked on a button, we need to send a request
        createType({ name: value }).then((data) => {
            setValue(""); // if request was succcessfull, we will reset input
            onHide(); // so that modal window will hide
        });
    };
    return (
        <Modal show={show} onHide={onHide} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add type
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        //input
                        value={value}
                        // event listener
                        onChange={(e) => setValue(e.target.value)}
                        placeholder={"Enter type name"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>
                    Close
                </Button>
                <Button variant="outline-success" onClick={addType}>
                    Add
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateType;
