import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Settings, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface AlertCardProps {
  severity: "critical" | "warning" | "info";
  location: string;
  time: string;
  action?: string;
  probability?: string;
  status?: "active" | "resolved" | "assigned";
  className?: string;
}

const severityConfig = {
  critical: {
    badge: "bg-destructive text-destructive-foreground",
    border: "border-destructive/20",
    label: "CRITICAL"
  },
  warning: {
    badge: "bg-warning text-warning-foreground",
    border: "border-warning/20",
    label: "WARNING"
  },
  info: {
    badge: "bg-info text-info-foreground",
    border: "border-info/20",
    label: "INFO"
  }
};

export const AlertCard = ({ 
  severity, 
  location, 
  time, 
  action, 
  probability, 
  status = "active",
  className 
}: AlertCardProps) => {
  const config = severityConfig[severity];

  return (
    <Card className={cn("p-4 bg-card/50 backdrop-blur-sm", config.border, className)}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 space-y-2">
          <div className="flex items-center gap-2">
            <Badge className={config.badge}>{config.label}</Badge>
            {status === "resolved" && (
              <CheckCircle className="h-4 w-4 text-success" />
            )}
          </div>
          
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span className="text-foreground font-medium">{location}</span>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{time}</span>
            </div>
            
            {action && (
              <div className="text-sm text-muted-foreground">
                Action: <span className="text-foreground">{action}</span>
              </div>
            )}
            
            {probability && (
              <div className="text-sm text-muted-foreground">
                Probability: <span className="text-foreground">{probability}</span>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          {status === "active" && (
            <>
              <Button size="sm" variant="outline" className="text-xs">
                <Settings className="h-3 w-3 mr-1" />
                Assign
              </Button>
              <Button size="sm" variant="outline" className="text-xs">
                Resolve
              </Button>
            </>
          )}
        </div>
      </div>
    </Card>
  );
};