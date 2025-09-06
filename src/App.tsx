import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Dashboard } from "./components/Dashboard";
import { TeamPage } from "./pages/TeamPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/risk-map" element={<div className="flex-1 flex items-center justify-center text-muted-foreground">Risk Map - Coming Soon</div>} />
            <Route path="/data" element={<div className="flex-1 flex items-center justify-center text-muted-foreground">Data Analytics - Coming Soon</div>} />
            <Route path="/forecasts" element={<div className="flex-1 flex items-center justify-center text-muted-foreground">Forecasts - Coming Soon</div>} />
            <Route path="/alerts" element={<div className="flex-1 flex items-center justify-center text-muted-foreground">Alert Management - Coming Soon</div>} />
            <Route path="/plugins" element={<div className="flex-1 flex items-center justify-center text-muted-foreground">Plugins - Coming Soon</div>} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
