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

const queryClient = new QueryClient();

function App() {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <Toaster />

        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/complete-profile" element={<CompleteProfile />} />

          <Route path="/owner" element={<OwnerLayout />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<OwnerDashboard />} />
            <Route path="projects" element={<OwnerProjects />} />
            <Route path="projects/:id" element={<OwnerProject />} />
          </Route>

          <Route path="/freelancer" element={<FreelancerLayout />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<FreelancerDashboard />} />
            <Route path="projects" element={<SubmittedProjects />} />
            <Route path="proposals" element={<FreelancerProposals />} />
          </Route>

          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;
