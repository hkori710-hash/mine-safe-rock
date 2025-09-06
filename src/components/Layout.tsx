import { Sidebar } from "./Sidebar";
import topoBackground from "@/assets/topo-background.jpg";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Topographic Background */}
      <div 
        className="absolute inset-0 opacity-5 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${topoBackground})` }}
      />
      
      {/* Main Layout */}
      <div className="relative z-10 flex h-screen">
        <Sidebar />
        {children}
      </div>
    </div>
  );
};