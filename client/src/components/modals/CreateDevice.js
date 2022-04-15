import React, { useContext, useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Dropdown, Form, Row, Col } from "react-bootstrap";
import { Context } from "../../index";
import { createDevice, fetchBrands, fetchTypes } from "../../http/deviceAPI";
import { observer } from "mobx-react-lite";

const CreateDevice = observer(({ show, onHide }) => {
    // integration with backend
    const { device } = useContext(Context); // we need deviceStore
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [file, setFile] = useState(null);
    const [info, setInfo] = useState([]); // for each device we will need to add an array of characteristics

    // when we open modal, types and brands should be uploaded
    useEffect(() => {
        fetchTypes().then((data) => device.setTypes(data));
        fetchBrands().then((data) => device.setBrands(data));
    }, []);

    // function,,which we will use for adding new characteristics
    const addInfo = () => {
        setInfo([...info, { title: "", description: "", number: Date.now() }]);
    };

    const removeInfo = (number) => {
        setInfo(info.filter((i) => i.number !== number));
    };
    //
    const changeInfo = (key, value, number) => {
        // key --> title or description
        setInfo(
            info.map((i) => (i.number === number ? { ...i, [key]: value } : i))
        ); // return new object with characteristic or unchanged object
    };

    // is going to execute, when we choose file from a computer
    const selectFile = (e) => {
        setFile(e.target.files[0]);
    };

    // this function will send a request to a server and add new device
    const addDevice = () => {
        console.log(info); // --> Array(2)
        // 0: {title: '123', description: 'werwe', number: 1649885327052}
        // 1: {title: '12', description: 'wefe', number: 1649885329867}
        // length: 2

        const formData = new FormData();
        formData.append("name", name);
        formData.append("price", `${price}`); //Blob or string
        formData.append("img", file);
        formData.append("brandId", device.selectedBrand.id);
        formData.append("typeId", device.selectedType.id); // from deviceStore
        formData.append("info", JSON.stringify(info)); // an array of data; Blob or string
        createDevice(formData).then((data) => onHide()); // if request was successful, we will close modal
    };

    return (
        <Modal show={show} onHide={onHide} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add device
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    {/* with dropdown we will choose type and brand for a new device */}
                    <Dropdown className="mt-2 mb-2">
                        {/* this is a button */}
                        <Dropdown.Toggle>
                            {device.selectedType.name || "Choose type"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {/*  iterate throuth types that we get fron deviceStore */}
                            {device.types.map((type) => (
                                <Dropdown.Item
                                    onClick={() => device.setSelectedType(type)}
                                    key={type.id}
                                >
                                    {type.name}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-2 mb-2">
                        {/* this is a button */}
                        <Dropdown.Toggle>
                            {device.selectedBrand.name || "Choose brand"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {/*  iterate throuth brands that we get fron deviceStore */}
                            {device.brands.map((brand) => (
                                <Dropdown.Item
                                    onClick={() =>
                                        device.setSelectedBrand(brand)
                                    }
                                    key={brand.id}
                                >
                                    {brand.name}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                    {/* here we will add inputs */}
                    <Form.Control
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-3"
                        placeholder="Enter a name of a device"
                    />
                    <Form.Control
                        value={price}
                        onChange={(e) => setPrice(Number(e.target.value))}
                        className="mt-3"
                        placeholder="Enter a price of a device"
                        type="number"
                    />
                    <Form.Control
                        className="mt-3"
                        type="file"
                        onChange={selectFile}
                    />
                    <hr />
                    <Button variant="outline-dark" onClick={addInfo}>
                        Add new property
                    </Button>

                    {/* here we iterate throuth an array with info; for each characteristic we will have a Row and inside Col  */}
                    {info.map((i) => (
                        <Row className="mt-4" key={i.number}>
                            <Col md={4}>
                                {/* input for a title */}
                                <Form.Control
                                    value={i.title} // get title from an object from a current iteration
                                    onChange={(e) =>
                                        changeInfo(
                                            "title", // key
                                            e.target.value,
                                            i.number
                                        )
                                    }
                                    placeholder=" Enter a name of a characteristic"
                                />
                            </Col>
                            <Col md={4}>
                                {/* input for a description */}
                                <Form.Control
                                    value={i.description} // get description from an object from a current iteration
                                    onChange={(e) =>
                                        changeInfo(
                                            "description", // key
                                            e.target.value,
                                            i.number
                                        )
                                    }
                                    placeholder=" Enter a description of a characteristic"
                                />
                            </Col>
                            <Col md={4}>
                                {/* if we entered a wrong/useless characteristic, we will have a delete button*/}
                                <Button
                                    onClick={() => removeInfo(i.number)}
                                    variant="outline-danger"
                                >
                                    Delete
                                </Button>
                            </Col>
                        </Row>
                    ))}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>
                    Close
                </Button>
                <Button variant="outline-success" onClick={addDevice}>
                    Add
                </Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateDevice;
