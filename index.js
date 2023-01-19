// import React from "react"
// import ReactDOM from "react-dom"


//ReactDOM.render(<h1></h1> , document.getElementById("root"))//

//Creating components
// function MainContent() {
//     return (
//             <h1>I'm learning React</h1>
//     )
// }
// ReactDOM.render(
//     <div>
//         <Navbar />
//         <MainContent />
//     </div>,
//     document.getElementById("root")
// )


// const h1 = document.createElement("h1")

// h1.textContent= "Hi, I am learning React"
// h1.className = "header"
// console.log(h1)

// const element = <h1 className="header">This is JSX</h1>
// console.log(element)

// ReactDOM.render(
//         <h1 className="header">This is JSX</h1>, 
//         document.getElementById("root")
// )

//How to have more than one element in one parent node
// const page = (
//         <div>
//             <h1>This is JSX</h1>
//             <p>I love learning React</p>
//         </div>
// )
// ReactDOM.render(
//     page, 
//     document.getElementById("root")
//     )



// const navbar = (
//     <nav> 
//         <h1>Michelle's Bistro</h1>
//         <ul>
//             <li>Pricing</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>


//     </nav>
// )
// ReactDOM.render(
//     navbar,
//     document.getElementById("root")
// )


const exercise = (
    <div>
        <h1>Sample website</h1>
        <p>This is a thought exercise </p>
        <h2>This is created by JSX</h2>
        <p>React is very interesting</p>
    </div>
)
ReactDOM.render(exercise, document.getElementById("root"))