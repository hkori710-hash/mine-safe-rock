import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Dot } from "recharts";

const chartData = [
  { time: "-1030", value: 20 },
  { time: "-800", value: 15 },
  { time: "-400", value: 10 },
  { time: "-200", value: 20 },
  { time: "0", value: 80, highlight: true },
  { time: "2100", value: 30 },
  { time: "3030", value: 15 },
];

const CustomDot = (props: any) => {
  const { cx, cy, payload } = props;
  if (payload.highlight) {
    return <Dot cx={cx} cy={cy} r={6} fill="#ef4444" stroke="#fff" strokeWidth={2} />;
  }
  return <Dot cx={cx} cy={cy} r={3} fill="#f97316" />;
};

export const LiveChart = () => {
  return (
    <Card className="p-6 bg-card/50 backdrop-blur-sm">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-foreground">Live Monitoring Chart</h3>
      </div>
      
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <XAxis 
              dataKey="time" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6b7280' }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6b7280' }}
              domain={[0, 100]}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#f97316"
              strokeWidth={2}
              dot={<CustomDot />}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
        <span>Time</span>
        <span className="text-primary font-medium">Micro-Rockfall Events</span>
        <span>Rockfall Probability (%)</span>
      </div>
    </Card>
  );
};