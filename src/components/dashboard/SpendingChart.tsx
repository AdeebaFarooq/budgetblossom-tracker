import { Card } from "@/components/ui/card";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { month: "Jan", amount: 1200 },
  { month: "Feb", amount: 900 },
  { month: "Mar", amount: 1500 },
  { month: "Apr", amount: 1100 },
  { month: "May", amount: 1800 },
  { month: "Jun", amount: 1300 },
];

export const SpendingChart = () => {
  return (
    <Card className="p-6">
      <h3 className="font-semibold text-lg mb-4">Monthly Spending Trends</h3>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="month" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="amount"
              stroke="#6366F1"
              strokeWidth={2}
              dot={{ fill: "#6366F1" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};