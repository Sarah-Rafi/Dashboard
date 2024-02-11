import React from "react";
import Login from "./pages/login.js";
import Signup from "./pages/signup";
import Home from "./pages/home";
import Pricing from "./pages/pricing";
import Chargers from "./pages/chargers";
import Bookings from "./pages/bookings";
import ActionDropdownMenu from "../src/features/ui/actionDropdown";
import { HelmetProvider } from "react-helmet-async";
import NavigationSidebar from "./features/ui/navigationSidebar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./features/ui/header.jsx";
// function App() {
//   return (
//     <BrowserRouter>
//       <div className="overflow-hidden">
//         <NavigationSidebar />
//         <Header />
//         <Routes>
//           <Route path="/dasboard" element={<Home />} />
//           <Route path="/pricing" element={<Pricing />} />
//           <Route path="/bookings" element={<Bookings />} />
//           <Route path="/chargers" element={<Chargers />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }
function App() {
  return (
    <BrowserRouter>
      <Signup />
    </BrowserRouter>
  );
}

export default App;
