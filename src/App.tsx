import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import {
  Home,
  EventsPage,
  Programs,
  Portfolio,
  CommunityPage,
  Register,
  Login,
} from "./Pages/index.tsx";
import Layout from "./components/layout.tsx";
import Aboutus from "./Pages/Aboutus.tsx";
import { AuthProvider, useAuth } from "./auth/AuthProvider.tsx";
import AdminDashboard from "./Pages/AdminDashboard.tsx";
import StartupDashboard from "./Pages/StartupDashboard.tsx";
interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles: string[];
}
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  allowedRoles,
}) => {
  const { isAuthenticated, isAdmin, isStartup } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles.includes("admin") && !isAdmin) {
    return <Navigate to="/" replace />;
  }

  if (allowedRoles.includes("startup") && !isStartup) {
    return <Navigate to="/" replace />;
  }

  return children;
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/events" element={<EventsPage />} />
            <Route
              path="/admindashboard"
              element={
                <ProtectedRoute allowedRoles={["admin"]}>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/startupdashboard"
              element={
                <ProtectedRoute allowedRoles={["startup"]}>
                  <StartupDashboard />
                </ProtectedRoute>
              }
            />
            <Route path="/programs" element={<Programs />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
