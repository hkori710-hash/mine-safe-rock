import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface RiskLevelCardProps {
  level: "safe" | "moderate" | "high";
  percentage: number;
  className?: string;
}

const riskConfig = {
  safe: {
    bg: "bg-success/20 border-success/30",
    text: "text-success",
    label: "Safe"
  },
  moderate: {
    bg: "bg-warning/20 border-warning/30", 
    text: "text-warning",
    label: "Moderate"
  },
  high: {
    bg: "bg-destructive/20 border-destructive/30",
    text: "text-destructive", 
    label: "High Risk"
  }
};

export const RiskLevelCard = ({ level, percentage, className }: RiskLevelCardProps) => {
  const config = riskConfig[level];

  return (
    <Card className={cn(
      "p-6 text-center border-2 transition-all hover:scale-105",
      config.bg,
      className
    )}>
      <div className={cn("text-sm font-medium mb-2", config.text)}>
        {config.label}
      </div>
      <div className={cn("text-3xl font-bold", config.text)}>
        {percentage}%
      </div>
    </Card>
  );
};