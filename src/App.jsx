import { usePage } from "./layout/PageContext";

import Register from "./auth/Register";
import Login from "./auth/Login";
import ActivitiesPage from "./activities/ActivitiesPage";
import Error404 from "./Error404.jsx";
import { Routes, Route } from "react-router";

/**
 * Fitness Trackr is a platform where fitness enthusiasts can share their workouts and
 * discover new routines. Anyone can browse the site and make an account, and users with an
 * account will be able to upload and manage their own activities.
 */
export default function App() {
//  const { page } = usePage();

//  if (page === "register") return <Register />;
//  if (page === "login") return <Login />;
//  if (page === "activities") return <ActivitiesPage />;

  <Routes>
    <Route path="/" element={<Layout />} />
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
    <Route path="/activities" element={<ActivitiesPage />} />
    <Route path="*" element={<Error404 />} />
  </Routes>

  return <Error404 />;
}
