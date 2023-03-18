import {BrowserRouter as Router, Route, Routes, Link, Navigate} from "react-router-dom";
import HomePage from "./pages/home/homePage";
import  NotFoundPage from "./pages/404/notFoundPage";
import AboutPage from "./pages/about/aboutPage";
import DashBoard from "./pages/DashBoard/dashBoard";
import LoginPage from "./pages/auth/loginPage";
import ProtectedPages from "./routes/ProtectedPages";
import RegisterPage from "./pages/auth/registerPage";
import TaskList from "./components/container/taskList"


function AppRoutingOne() {

let loggedIn = false;
  
  return (
   <Router>
    <Routes>
      
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route element={<ProtectedPages isAllow={loggedIn} redirectTo="/login"/>}>
        <Route path="/dashboard" element={<DashBoard></DashBoard>}></Route>
        <Route path="/about" element={<AboutPage></AboutPage>}></Route>
        <Route path="/tasks" element={<TaskList></TaskList>}></Route>
      </Route>

      <Route path="/login" element={<LoginPage></LoginPage>}></Route>
     
      <Route path="/register" element={<RegisterPage></RegisterPage>}></Route>
      <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
    </Routes>
   </Router>
  );
}
export default AppRoutingOne;
