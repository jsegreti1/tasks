import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setUserAns] = useState<string>("");
    const [isCorrect, setIsCorrect] = useState<boolean>(false);

    function updateUserAns(event: React.ChangeEvent<HTMLInputElement>) {
        setUserAns(event.target.value);
        if (event.target.value === expectedAnswer) {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
    }

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="checkAnswer">
                <Form.Label>Answer:</Form.Label>
                <Form.Control value={answer} onChange={updateUserAns} />
                {isCorrect !== null && <p>{isCorrect ? "✔️" : "❌"}</p>}
            </Form.Group>
        </div>
    );
}
