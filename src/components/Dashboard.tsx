import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertCard } from "./AlertCard";
import { RiskLevelCard } from "./RiskLevelCard";
import { LiveChart } from "./LiveChart";
import { Bell } from "lucide-react";
import riskMapImage from "@/assets/risk-map.jpg";

export const Dashboard = () => {
  const alerts = [
    {
      severity: "critical" as const,
      location: "Eagle Peak Trailhead",
      time: "2023-10-26 05:08:30 AM",
      action: "Immediate Evacuation & Closure",
      status: "active" as const
    },
    {
      severity: "warning" as const,
      location: "Whispering Pines Road",
      time: "2023-10-26 06:00 Loose Rocks",
      action: "Caution & Geotech Review",
      status: "assigned" as const
    },
    {
      severity: "info" as const,
      location: "Old Quarry Site",
      time: "Probability: 20% Minor Debris",
      action: "Monitor Conditions",
      status: "resolved" as const
    }
  ];

  const recentAlerts = [
    {
      time: "10:30 AM",
      message: "Major Instability Detected - Sector 4",
      type: "critical" as const
    },
    {
      time: "10:25 AM", 
      message: "Increased Movement - Sector 4",
      type: "warning" as const
    },
    {
      time: "10:35 AM",
      message: "Conditions Stable - Sector 1", 
      type: "success" as const
    }
  ];

  return (
    <div className="flex-1 p-6 space-y-6 overflow-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-foreground">Rockfall Prediction System</h1>
        <Badge variant="destructive" className="flex items-center gap-2">
          <Bell className="h-4 w-4" />
          2 Active Alerts
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Risk Level Cards */}
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4 text-foreground">Risk Level Cards</h2>
            <div className="grid grid-cols-3 gap-4">
              <RiskLevelCard level="safe" percentage={65} />
              <RiskLevelCard level="moderate" percentage={25} />
              <RiskLevelCard level="high" percentage={10} />
            </div>
          </Card>

          {/* Live Monitoring Chart */}
          <LiveChart />

          {/* Alert History */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-foreground">Alert History</h2>
              <div className="flex gap-2">
                <Badge variant="outline">Severity</Badge>
                <Badge variant="outline">Location</Badge>
                <Badge variant="outline">Time Period</Badge>
              </div>
            </div>
            <div className="space-y-3">
              {alerts.map((alert, index) => (
                <AlertCard key={index} {...alert} />
              ))}
            </div>
          </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Forecast Map */}
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4 text-foreground">Forecast Map Palchoder</h2>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <img
                src={riskMapImage}
                alt="Risk forecast map"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
          </Card>

          {/* Alerts Panel */}
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4 text-foreground">Alerts Panel</h2>
            <div className="space-y-3">
              {recentAlerts.map((alert, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    alert.type === 'critical' ? 'bg-destructive' :
                    alert.type === 'warning' ? 'bg-warning' : 'bg-success'
                  }`} />
                  <div className="flex-1">
                    <div className="text-sm text-muted-foreground">{alert.time}</div>
                    <div className="text-sm text-foreground">{alert.message}</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};