import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const jsxHeading = (
    <h1 id="heading" className="head">Namaste React using JSX</h1>
)

//React Component
//Class Based Component=>Old way
//Function Based Component=>New way

//React functional component

// const HeadingComponent = () => {
//     return (
//         <h1 id="heading" className="head">Namaste React using Functional Component</h1>
//     )
// }
//Or we can write 

const Title =()=> (
    <h1 id="heading" className="head">Namaste React using JSX</h1>
);


//Component Composition
 const HeadingComponent = () => (
    <div id="container">
        <Title/>
        <h1 id="heading" className="head">
           Namaste React using Functional Component
        </h1>
    </div>

    )


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);