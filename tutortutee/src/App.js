import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import Header from "./layout/Header";
import Main from "./page/Main";
import Login from "./page/Login";
import Signup from "./page/Signup";
import Profile from "./page/Profile";
import FindInfo from "./page/FindInfo";
import ResetPassword from "./page/ResetPassword";
import { useSelector } from "react-redux";
import LoginHandeler from "./components/login/LoginHandeler";

const App = () => {
  const isLoggedIn = useSelector((state) => state.member.isLoggedIn);
  return (
    <Router>
      <LayoutWrapper>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/profile"
            element={isLoggedIn ? <Profile /> : <Navigate to="/login" />}
          />
          <Route path="/find" element={<FindInfo />} />
          <Route path="/reset" element={<ResetPassword />} />
          <Route
            path="/oauth2/authorization/kakao"
            element={<LoginHandeler />}
          />
        </Routes>
      </LayoutWrapper>
    </Router>
  );
};

const LayoutWrapper = ({ children }) => {
  const location = useLocation();

  const hideHeader = ["/login", "/signup", "/find"].includes(location.pathname);

  return (
    <>
      {!hideHeader && <Header />}
      <main>{children}</main>
    </>
  );
};

export default App;
