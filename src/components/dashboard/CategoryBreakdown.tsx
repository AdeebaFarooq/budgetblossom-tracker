import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const categories = [
  { name: "Food & Dining", amount: 450, total: 600, color: "bg-expense-medium" },
  { name: "Transportation", amount: 200, total: 300, color: "bg-expense-low" },
  { name: "Entertainment", amount: 280, total: 250, color: "bg-expense-high" },
];

export const CategoryBreakdown = () => {
  return (
    <Card className="p-6">
      <h3 className="font-semibold text-lg mb-4">Top Categories</h3>
      <div className="space-y-6">
        {categories.map((category) => (
          <div key={category.name} className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>{category.name}</span>
              <span className="font-medium">
                ${category.amount} / ${category.total}
              </span>
            </div>
            <Progress
              value={(category.amount / category.total) * 100}
              className={category.color}
            />
          </div>
        ))}
      </div>
    </Card>
  );
};