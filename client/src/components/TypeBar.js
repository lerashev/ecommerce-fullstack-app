import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../index";
import ListGroup from "react-bootstrap/ListGroup";

const TypeBar = observer(() => {
    const { device } = useContext(Context);
    return (
        <ListGroup>
            {/* here we will go over types that our store has */}
            {device.types.map((type) => (
                // for each type we will have ListGroup.Item component, where we will store name of types
                <ListGroup.Item
                    style={{ cursor: "pointer" }}
                    active={type.id === device.selectedType.id} // a selected element is somehow visually different, will apply an active prop
                    onClick={() => device.setSelectedType(type)}
                    key={type.id}
                >
                    {type.name}
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
});

export default TypeBar;
