import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CategoryBreakdown } from "@/components/dashboard/CategoryBreakdown";
import { SpendingChart } from "@/components/dashboard/SpendingChart";
import { ExpenseForm } from "@/components/expenses/ExpenseForm";
import { GoalCard } from "@/components/goals/GoalCard";
import { PlusIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold">Finance Tracker</h1>
            <p className="text-muted-foreground">Track your expenses and goals</p>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button>
                <PlusIcon className="mr-2 h-4 w-4" />
                Add Expense
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Add New Expense</SheetTitle>
                <SheetDescription>
                  Enter the details of your expense below.
                </SheetDescription>
              </SheetHeader>
              <div className="mt-6">
                <ExpenseForm />
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Dashboard Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Total Balance Card */}
          <Card className="p-6 col-span-full md:col-span-1">
            <p className="text-sm font-medium text-muted-foreground">
              Total Balance
            </p>
            <h2 className="text-3xl font-bold">$4,550.00</h2>
            <p className="text-sm text-muted-foreground mt-1">
              Updated 2 minutes ago
            </p>
          </Card>

          {/* Monthly Budget Card */}
          <Card className="p-6 col-span-full md:col-span-1">
            <p className="text-sm font-medium text-muted-foreground">
              Monthly Budget
            </p>
            <h2 className="text-3xl font-bold">$3,000.00</h2>
            <p className="text-sm text-expense-low mt-1">
              $850.00 remaining this month
            </p>
          </Card>

          {/* Total Expenses Card */}
          <Card className="p-6 col-span-full md:col-span-1">
            <p className="text-sm font-medium text-muted-foreground">
              Total Expenses
            </p>
            <h2 className="text-3xl font-bold">$2,150.00</h2>
            <p className="text-sm text-expense-medium mt-1">
              This month so far
            </p>
          </Card>

          {/* Spending Chart */}
          <div className="col-span-full lg:col-span-2">
            <SpendingChart />
          </div>

          {/* Category Breakdown */}
          <div className="col-span-full lg:col-span-1">
            <CategoryBreakdown />
          </div>

          {/* Goals Section */}
          <div className="col-span-full">
            <h2 className="text-2xl font-semibold mb-4">Financial Goals</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <GoalCard
                title="Emergency Fund"
                current={3000}
                target={5000}
                color="bg-expense-low"
              />
              <GoalCard
                title="New Car"
                current={5000}
                target={20000}
                color="bg-expense-medium"
              />
              <GoalCard
                title="Vacation"
                current={1500}
                target={3000}
                color="bg-secondary"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;