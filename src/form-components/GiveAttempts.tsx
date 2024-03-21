import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [additional, setAdditional] = useState<number>(0);

    function gainAttempts(): void {
        setAttempts(attempts + additional);
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="giveAttempts">
                <Form.Label>Additional Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={additional}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setAdditional(parseInt(event.target.value) || 0)
                    }
                />
                <Button onClick={gainAttempts}>gain</Button>
                <Button
                    onClick={() => setAttempts(attempts - 1)}
                    disabled={attempts <= 0}
                >
                    use
                </Button>
                <p>Attempts: {attempts}</p>
            </Form.Group>
        </div>
    );
}
