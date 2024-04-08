import React from "react";
import ReactDom from "react-dom/client"; 
import App from "./App";
import { BrowserRouter} from "react-router-dom";
// import {UserContextProvider} from "./context/UserContext";
const root=ReactDom.createRoot(document.getElementById("root"));
root.render(
    // <React.StrictMode>
    //     <App/>
    // </React.StrictMode>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
)
// setInterval(()=>{
// },1000);
// function PrintName(){
//     return <h1>Hello react js</h1>;
// }
// const PrintName=()=>{
//     return <h1>Helloooooooooooooo</h1>
// }
// ReactDom.render(<PrintName/>,document.getElementById("root"))
