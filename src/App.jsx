import { Route, Routes } from "react-router-dom"
import LoginForm from "./login"
import RegisterForm from "./register"

function App() {
    return (
        <Routes>
            <Route path="/login" Component={LoginForm} />
            <Route path="/register" Component={RegisterForm} />
        </Routes>
    )
}


export default App