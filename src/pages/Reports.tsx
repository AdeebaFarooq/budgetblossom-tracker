import { useState } from "react";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CategoryBreakdown } from "@/components/dashboard/CategoryBreakdown";
import { SpendingChart } from "@/components/dashboard/SpendingChart";

const Reports = () => {
  const [timePeriod, setTimePeriod] = useState("monthly");

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold">Reports</h1>
            <p className="text-muted-foreground">
              Analyze your spending patterns
            </p>
          </div>
          <Select
            value={timePeriod}
            onValueChange={(value) => setTimePeriod(value)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select time period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
              <SelectItem value="yearly">Yearly</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <SpendingChart />
          <CategoryBreakdown />
        </div>
      </div>
    </div>
  );
};

export default Reports;