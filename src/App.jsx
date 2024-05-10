import { Link, Outlet } from "react-router-dom";

function App() {
    return (
        <div>
            <header className="header">
                <nav className="navbar">
                    <Link to="/">Home</Link>
                    <Link to="/create">Create User +</Link>
                </nav>
            </header>

            <div>
                <Outlet />
            </div>
        </div>
    );
}

export default App;
