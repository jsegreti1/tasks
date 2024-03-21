import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    if (editMode) {
        return (
            <div>
                <h3>Edit Mode</h3>
                <Form.Group controlId="editInformation">
                    <Form.Check
                        type="switch"
                        id="editMode"
                        label="Edit Mode"
                        checked={editMode}
                        onChange={() => setEditMode(!editMode)}
                    />
                    <Form.Label>Name:</Form.Label>
                    <Form.Control
                        value={name}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setName(event.target.value)}
                        // disabled={!editMode}
                    />
                    <Form.Check
                        type="checkbox"
                        id="isStudent"
                        label="Are You A Student?"
                        checked={isStudent}
                        onChange={() => setIsStudent(!isStudent)}
                        //disabled={!editMode}
                    />
                    <p>
                        {name} {isStudent ? "is a student" : "is not a student"}
                    </p>
                </Form.Group>
            </div>
        );
    } else {
        return (
            <div>
                <h3>Edit Mode</h3>
                <Form.Group controlId="editInformation">
                    <Form.Check
                        type="switch"
                        id="editMode"
                        label="Edit Mode"
                        checked={editMode}
                        onChange={() => setEditMode(!editMode)}
                    />
                    <p>
                        {name} {isStudent ? "is a student" : "is not a student"}
                    </p>
                </Form.Group>
            </div>
        );
    }
}
