import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import MyAccount from "./pages/MyAccount/MyAccount"
import DiscoveryPage from "./pages/DiscoveryPage/DiscoveryPage";
import BookmarkContextProvider from "./context/BookmarkContext";



const App = () => {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
    <BookmarkContextProvider>
      <Routes>
        <Route path="/" element={<Login setUser={setUser} />} />
        <Route
          path="/discovery"
          element={user ? <DiscoveryPage user={user} /> : <Navigate to="/login" />}
        />
        <Route
          path="/my-account"
          element={
            user ? (
              <MyAccount user={user} setUser={setUser} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
      </BookmarkContextProvider>
    </BrowserRouter>
  );
};

export default App;

