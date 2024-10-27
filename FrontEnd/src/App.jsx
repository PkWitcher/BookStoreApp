import React from "react";
import Home from "./home/Home.jsx";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses.jsx";
import Signup from "./component/Signup.jsx";
import Contacts from "./contacts/Contacts.jsx";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider.jsx";

const App = () => {
  const [authUser, setAuthUser] = useAuth(); // destructuring `authUser` from context
  console.log(authUser);

  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contacts />} />
          {/* Catch-all route for undefined paths */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Toaster/>
      </div>
    </>
  );
};

export default App;
