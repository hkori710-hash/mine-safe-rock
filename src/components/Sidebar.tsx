import { 
  LayoutDashboard, 
  Map, 
  Database, 
  TrendingUp, 
  Bell, 
  Puzzle, 
  Users,
  AlertTriangle
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const navigationItems = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Rockfall Risk Map", href: "/risk-map", icon: Map },
  { name: "Data", href: "/data", icon: Database },
  { name: "Forecasts", href: "/forecasts", icon: TrendingUp },
  { name: "Alerts", href: "/alerts", icon: Bell },
  { name: "Plugins", href: "/plugins", icon: Puzzle },
  { name: "Team", href: "/team", icon: Users },
];

export const Sidebar = () => {
  return (
    <div className="flex h-screen w-64 flex-col bg-background border-r border-border">
      {/* Header */}
      <div className="flex items-center gap-3 p-6 border-b border-border">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
          <AlertTriangle className="h-6 w-6 text-primary-foreground" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-lg font-semibold text-foreground">Rockfall Prediction</h1>
          <p className="text-xs text-muted-foreground">System</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 p-4">
        {navigationItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all hover:bg-accent hover:text-accent-foreground",
                isActive
                  ? "bg-accent text-accent-foreground border border-primary/20"
                  : "text-muted-foreground hover:text-foreground"
              )
            }
          >
            <item.icon className="h-4 w-4" />
            {item.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};