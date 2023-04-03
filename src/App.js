
// import React, { useState } from "react";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Login from "./pages/Login/Login";
// import DiscoveryPage from "./pages/DiscoveryPage/DiscoveryPage";
// import UserAccount from "./pages/UserAccount/UserAccount";

// const App = () => {
//   const [user, setUser] = useState(null);

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Login setUser={setUser} />} />
//         <Route
//           path="/discovery"
//           element={user ? <DiscoveryPage /> : <Navigate to="/login" />}
//         />
//         <Route
//           path="/edit-profile"
//           element={
//             user ? (
//               <UserAccount user={user} setUser={setUser} />
//             ) : (
//               <Navigate to="/login" />
//             )
//           }
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DiscoveryPage from "./pages/DiscoveryPage/DiscoveryPage";
import UserAccount from "./pages/UserAccount/UserAccount";

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <DiscoveryPage
              user={user}
              setUser={setUser}
            />
          }
        />
        <Route
          path="/edit-profile"
          element={
            user ? (
              <UserAccount user={user} setUser={setUser} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
