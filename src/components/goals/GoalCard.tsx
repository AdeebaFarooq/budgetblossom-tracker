import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface GoalCardProps {
  title: string;
  current: number;
  target: number;
  color: string;
}

export const GoalCard = ({ title, current, target, color }: GoalCardProps) => {
  const progress = (current / target) * 100;

  return (
    <Card className="p-6">
      <h3 className="font-semibold mb-2">{title}</h3>
      <div className="space-y-2">
        <Progress value={progress} className={color} />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>${current}</span>
          <span>${target}</span>
        </div>
      </div>
    </Card>
  );
};