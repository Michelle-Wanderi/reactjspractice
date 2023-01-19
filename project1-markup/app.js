const page = (
    <div>
        <img src="./react.png" width = "40px"></img>
        <h1>Fun facts about React</h1>
            <ul>
                <li>Was first created in 2013</li>
                <li>Has originally created by Jordan Walke</li>
                <li>Has well over 100K stars on Github</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps including mobile apps</li>
            </ul>
    </div>
)
ReactDOM.render(
    page ,
    document.getElementById("root")
)

//This method of storing all JSX elements in one variable is not common nor is it efficient

//Creating custom components

 