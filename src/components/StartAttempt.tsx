import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [numAttempts, setNumAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);

    function start(): void {
        if (!inProgress && numAttempts > 0) {
            setInProgress(true);
            setNumAttempts(numAttempts - 1);
        }
    }

    function stop(): void {
        if (inProgress) {
            setInProgress(false);
        }
    }

    function mulligan(): void {
        if (!inProgress && numAttempts < 10) {
            setNumAttempts(numAttempts + 1);
        }
    }

    return (
        <div>
            <Button onClick={start} disabled={inProgress || numAttempts == 0}>
                Start Quiz
            </Button>
            <Button onClick={stop} disabled={!inProgress}>
                Stop Quiz
            </Button>
            <Button
                onClick={mulligan}
                disabled={inProgress || numAttempts == 10}
            >
                Mulligan
            </Button>
            {<div>{numAttempts}</div>}
        </div>
    );
}
