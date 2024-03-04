import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript (John Segreti)
            </header>
            <h1>This is a header!!</h1>
            <p>This is a text paragraph!</p>
            <div>
                <ol>
                    <li>List item 1</li>
                    <li>List item 2</li>
                    <li>List item 3</li>
                </ol>
            </div>
            <div>
                <Container>
                    <Row>
                        <Col>
                            First Column. Still column Still column Still column
                            <div className="LR">
                                Here is the rectangle. Look at its
                                rectangleness.
                            </div>
                        </Col>
                        <Col>
                            Second Column.Still column Still column Still column
                            <div className="RR">
                                Here is the rectangle. Look at its
                                rectangleness.
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div>
                <img
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVEhIVFBUVEhYZFRocFBUVGRUWFhocHBYZGh4aGh0dIS4nHCErHxYYJjonOC8xQzU1GiQ7QDszPy40NTEBDAwMEA8QHhISHjYrJCM0NjQxNDQxNDU0NDQ0OjQxNDE0NDQ0NDQ0NDQ0NDQ0NDQ0NDE0NDQxNDQ0NDQ0NDQ0P//AABEIAQMAwgMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUCAwYBB//EAEMQAAIBAgMEBwUFBAkFAQAAAAECAAMRBBIhBTFBUQYTIjJhcYFCUnKRkiMzYqGxFFSCohVDU3OTwdHS4SRjssLwFv/EABkBAQADAQEAAAAAAAAAAAAAAAABAgMEBf/EACQRAQEBAAEEAgICAwAAAAAAAAABAhEDEiExQVEEcSKRE2GB/9oADAMBAAIRAxEAPwD7BERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBETCpUCqWYhVAJZmIAAGpJJ3CBnNGLxlOkuaq601952CjyuePhOYxXSWpWJXCAJT/eaik5v7pDvH4208GlemEXPnctVqf2lU538l4IPBQB4St1IrdSL2r0qT+ppVq/4gopJ86hUkeIUyK238U18tLD0+WZ6lU+oCp+srq2JRO8wB5bz8hrIr7UX2VY+dlEzu6yvU4+Vr/S2NJ+9ww8Bh6h/WvMk2xjBvfDOP7qqh+fWt+k547YqX+5S3D7U3/8Jmu2T7VFx8DI/wCpB/KO6/aP8n+3TJ0lrLfPhlcc6NUFj/C6qB9UnYbpNh2IVmagxtZa6mncngGPYY+AYzlKO1qTEDPkY7lcFD6ZrA+l5NZQQQQCDvB1BkzVWm67eJwmFD0NcO/Vj+xe70D4BL3TzUjxB3TpNk7cWserZeprAXNJjcMBvam2gdfkRcXAvLzUrTOpVvERLLEREBER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"
                    alt="a good spongebob moment"
                />
            </div>
            <div>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </div>

            <p>
                Edit <code>src/App.tsx</code> and save. (Hello World) This page
                will automatically reload.
            </p>
        </div>
    );
}
export default App;
