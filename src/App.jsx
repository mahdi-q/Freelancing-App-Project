import { Navigate, Route, Routes } from "react-router-dom";
import Auth from "./Pages/Auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import CompleteProfile from "./Pages/CompleteProfile";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import OwnerDashboard from "./Pages/OwnerDashboard";
import OwnerProjects from "./Pages/OwnerProjects";
import OwnerProject from "./Pages/OwnerProject";
import { DarkModeProvider } from "./Contexts/DarkModeContext";
import OwnerLayout from "./Features/Owner/OwnerLayout";
import FreelancerLayout from "./Features/Freelancer/FreelancerLayout";
import FreelancerDashboard from "./Pages/FreelancerDashboard";
import SubmittedProjects from "./Pages/SubmittedProjects";
import FreelancerProposals from "./Pages/FreelancerProposals";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ProtectedRoute from "./UI/ProtectedRoute";
import NotAccess from "./Pages/NotAccess";
import AdminLayout from "./Features/Admin/AdminLayout";
import AdminDashboard from "./Pages/AdminDashboard";
import Users from "./Pages/Users";
import Projects from "./Pages/Projects";
import Proposals from "./Pages/Proposals";
import Categories from "./Pages/Categories";
import { ToggleProvider } from "./Contexts/ToggleContext";
import AdminAuth from "./Pages/AdminAuth";

const queryClient = new QueryClient();

function App() {
  return (
    <ToggleProvider>
      <DarkModeProvider>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />

          <Toaster />

          <Routes>
            <Route path="/admin-auth" element={<AdminAuth />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/complete-profile" element={<CompleteProfile />} />

            <Route
              path="/owner"
              element={
                <ProtectedRoute>
                  <OwnerLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to="dashboard" replace />} />
              <Route path="dashboard" element={<OwnerDashboard />} />
              <Route path="projects" element={<OwnerProjects />} />
              <Route path="projects/:id" element={<OwnerProject />} />
            </Route>

            <Route
              path="/freelancer"
              element={
                <ProtectedRoute>
                  <FreelancerLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to="dashboard" replace />} />
              <Route path="dashboard" element={<FreelancerDashboard />} />
              <Route path="projects" element={<SubmittedProjects />} />
              <Route path="proposals" element={<FreelancerProposals />} />
            </Route>

            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to="dashboard" replace />} />
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="users" element={<Users />} />
              <Route path="projects" element={<Projects />} />
              <Route path="proposals" element={<Proposals />} />
              <Route path="categories" element={<Categories />} />
            </Route>

            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/not-access" element={<NotAccess />} />
          </Routes>
        </QueryClientProvider>
      </DarkModeProvider>
    </ToggleProvider>
  );
}

export default App;
