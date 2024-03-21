import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "cyan",
    "magenta",
    "white",
    "black"
];

export function ChangeColor(): JSX.Element {
    const [selColor, setColor] = useState<string>(COLORS[0]);
    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            <Form.Group controlId="colors">
                {COLORS.map((color: string) => (
                    <Form.Check
                        key={color}
                        inline
                        type="radio"
                        name={color}
                        onChange={updateColor}
                        id={color}
                        label={color}
                        value={color}
                        checked={selColor === color}
                        style={{ backgroundColor: color }}
                    />
                ))}
                <span>You have chosen: </span>
                <span
                    style={{ backgroundColor: selColor }}
                    data-testid="colored-box"
                >
                    {selColor}.
                </span>
            </Form.Group>
        </div>
    );
}
