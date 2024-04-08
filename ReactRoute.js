import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import  "./index.css";
import {Route,Routes} from "react-router-dom";
import Sucess from "./Components/Sucess";
import NotFound from "./Components/NotFound";
import Projects from "./Components/Projects";
import FeaturedProjects from "./Components/FeaturedProjects";
import NewProjects from "./Components/NewProjects";
import Users from "./Components/Users";
import UserDetails from "./Components/UserDetails";
import { AuthProvider } from "./Components/Auth";
import Login from "./Components/Login";
import Logout from "./Components/Logout";
import PrivateRoute from "./Components/PrivateRoute";
function App(){
    return <AuthProvider className="App">
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/sucess" element={<Sucess />}/>
            <Route path="*" element={<NotFound/>}/>
            <Route path="/projects" element={<Projects />}>
                <Route path="featured" element={<FeaturedProjects/>}/>
                <Route path="new" element={<NewProjects/>}/>
            </Route>
            <Route path="/users" element={<PrivateRoute>
                <Users/>
            </PrivateRoute>}/>
            <Route path="/users/:userId" element={<UserDetails/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/logout" element={<Logout/>}/>
        </Routes>
    </AuthProvider>
};
export default App;