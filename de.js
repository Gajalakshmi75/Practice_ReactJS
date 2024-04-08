import React from "react";

// const InnerComponent=()=>{
//     return <h1>InnerComponent</h1>;
// }

// const PrintName =()=>{
//     return <h1>hello</h1>; 
// }


// const App=()=> {
//     const User={
//         firstName:"lakshmi",
//         lastName:"Yarramsetti",
//     };
//     return <section>
//         <PrintName/>
//         <PrintName/> 
//         <PrintName/>
//         <PrintName/>
//         <PrintName/> 
//         <PrintName/>
//         <InnerComponent/>
//     </section>
// };

    // return <section class="container">
    //     <header>
    //     <h1>HELLO {new Date().toLocaleTimeString()}</h1>
    //     <h2>HELOOOOOOOOO {new Date().toLocaleDateString()}</h2>
    //     <p>dbhfgfudhjsnceug</p>
    //     </header>
    //     <p>hbvyuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuegfbeeeeeeeeeeeeeeeeeeeeeyyyyyyyyyyy</p>
    // </section>

// function App(){
//     return React.createElement('div',{className:'container'},React.createElement("h1",{className:"heading"},"heloooo world"));
// }

// function App(){
//     return React.createElement('h1',{className:"heading"},"hello world");
// }


// function App(){
//     return React.createElement
//     ( "div",{ className:"container"},React.createElement('h1',{className:"heading"},"hello world")
//     );
// }
// function App() {
//     return <h1>Hello</h1>
// }

const App=()=>{
    return <section className="movie-container">
    <Movie/>
    <Movie/>
    </section>
};
const Movie =()=>{
    return <article className="each">
        <Imagecomponent/>
        <Title/>

    </article>
};
const Imagecomponent=()=>{
    return <img src="https://media.istockphoto.com/id/1454962600/photo/summer-meadow.webp?s=1024x1024&w=is&k=20&c=gQKWRB_Qft7MjUuG0jb2Yc46y36d3hmXb1L659mkn94=" alt="flower"></img>
}
const Title = () => {
    const styles = {
        heading: {
            color:"red",
            fontSize:"30px",
        },
        smallheadings: {
            color:"green",
            fontSize:"20px",
        },
    };
    return <h3 className="heading">FLOWERS</h3>
    // return <h3 style={{color:"pink",fontSize:"1.5rem"}}>FLOWERS {10+20}
    // <span style={styles.heading}>Small Title</span>
    // <span style={styles.smallheadings}>Smallheading </span></h3>;
};
// const Index =()=>{
//     return <h1>srilekha</h1>
// }
// function getData(firstName,lastName){
//     console.log(firstName);
//     console.log(lastName);
// }
// getData("lakshmi","yarramsetti")
export default App;