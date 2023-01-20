//import react from react

export default function Header() {
    return (
        <header>
            <nav className = "nav">
                <img src= "./react.png" className = "nav-logo"/>
                    <ul className = "nav-items">
                        <li>Pricing</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
            </nav>
        </header>
    )
}

