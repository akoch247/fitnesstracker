import { Routes, Route } from "react-router-dom";
import Register from "./auth/Register";
import Login from "./auth/Login";
import ActivitiesPage from "./activities/ActivitiesPage";
import SingleActivity from "./activities/SingleActivity.jsx";
import Error404 from "./Error404.jsx";
import Layout from "./layout/Layout.jsx";
import RoutinesPage from "./routines/RoutinesPage.jsx";
import SingleRoutine from "./Routines/SingleRoutine.jsx";


/**
 * Fitness Trackr is a platform where fitness enthusiasts can share their workouts and
 * discover new routines. Anyone can browse the site and make an account, and users with an
 * account will be able to upload and manage their own activities.
 */
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<ActivitiesPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/activities" element={<ActivitiesPage />} />
        <Route path="activities/:activityID" element={<SingleActivity />} />
        <Route path="/routines" element={<RoutinesPage />} />
        <Route path="routines/:routineID" element={<SingleRoutine />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
}
