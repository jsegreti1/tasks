import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [reveal, setReveal] = useState<boolean>(false);

    function hideReveal(): void {
        setReveal(!reveal);
    }
    return (
        <div>
            <Button onClick={hideReveal}>Reveal Answer</Button>
            {reveal && <div>42</div>}
        </div>
    );
}
