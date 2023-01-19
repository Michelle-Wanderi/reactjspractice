// const page = (
//     <div>
//         <img src="./react.png" width = "40px"></img>
//         <h1>Fun facts about React</h1>
//             <ul>
//                 <li>Was first created in 2013</li>
//                 <li>Has originally created by Jordan Walke</li>
//                 <li>Has well over 100K stars on Github</li>
//                 <li>Is maintained by Facebook</li>
//                 <li>Powers thousands of enterprise apps including mobile apps</li>
//             </ul>
//     </div>
// )
// ReactDOM.render(
//     page ,
//     document.getElementById("root")
// )

//This method of storing all JSX elements in one variable is not common nor is it efficient

//Creating custom components

//A component is a function that returns React elements whenever the function is called.
//A component must be named using Pascal case(TemporaryName) and it is not called as function where we use () instead we use <Temporary /> which are known as fragment tags

//  function TemporaryName() {
//     return (

//         <div>
//             <img src="./react.png" width = "40px"></img>
//             <h1>Fun facts about React</h1>
//                 <ul>
//                 <li>Was first created in 2013</li>
//                 <li>Has originally created by Jordan Walke</li>
//                 <li>Has well over 100K stars on Github</li>
//                 <li>Is maintained by Facebook</li>
//                 <li>Powers thousands of enterprise apps including mobile apps</li>
//             </ul>
//     </div>
//     )
//  }
//  ReactDOM.render(<TemporaryName/>, document.getElementById("root"))


function Page() {
    return (
        <div>
            <header>
                <nav>
                    <img src="./react.png" width = "40px"></img>
                </nav>
            </header>
            <h1> Reasons why I love React</h1>
            <ol>
                <li>It is efficient</li>
                <li>Easy to learn</li>
                <li>It is a hireable skill</li>
            </ol>
            <footer>
                @2023 Wanderi development. All rights reserved
            </footer>
        </div>
    )
}
ReactDOM.render( <Page /> , document.getElementById("root"))
