import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import UploadButton from "./components/UploadButton";
import Home from "./pages/Home/Home";
import User from "./pages/User/User";
import View from "./pages/View/View";
import Landing from "./pages/Landing/Landing";

function App() {
  const isLoggedIn = true;

  return (
    <div className="w-screen min-h-screen max-h-fit">
      {isLoggedIn ? (
        <>
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/user" element={<User />}></Route>
            <Route path="/view" element={<View />}></Route>
          </Routes>
          <Footer />
          <UploadButton />
        </>
      ) : (
        <>
          <Landing />
        </>
      )}
    </div>
  );
}

export default App;

// import { useEffect, useState } from "react";

// const App = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     fetch("http://localhost:8080/user", { credentials: "include" })
//       .then((res) => res.json())
//       .then((data) => setUser(data.name ? data : null))
//       .catch(console.error);
//   }, []);

//   return (
//     <div>
//       {user ? (
//         <h1>Welcome, {user.name}!</h1>
//       ) : (
//         <a href="http://localhost:8080/oauth2/authorization/google">
//           <button>Login with Google</button>
//         </a>
//       )}
//     </div>
//   );
// };

// export default App;
