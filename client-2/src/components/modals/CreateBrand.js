import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Form } from "react-bootstrap";
import { createBrand } from "../../http/deviceAPI";

const CreateBrand = ({ show, onHide }) => {
    const [value, setValue] = useState("");
    const addBrand = () => {
        // after we clicked on a button, we need to send a request
        createBrand({ name: value }).then((data) => {
            setValue(""); // if request was succcessfull, we will reset input
            onHide(); // so that modal window will hide
        });
    };
    return (
        <Modal show={show} onHide={onHide} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add brand
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        //input
                        value={value}
                        // event listener
                        onChange={(e) => setValue(e.target.value)}
                        placeholder={"Enter brand name"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>
                    Close
                </Button>
                <Button variant="outline-success" onClick={addBrand}>
                    Add
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateBrand;
