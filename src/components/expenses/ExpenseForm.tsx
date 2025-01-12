import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";
import { CurrencySelect } from "./CurrencySelect";
import { DateSelect } from "./DateSelect";

const formSchema = z.object({
  amount: z.string(),
  category: z.string(),
  currency: z.string(),
  date: z.date(),
  description: z.string().optional(),
});

export const ExpenseForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: "",
      category: "",
      currency: "USD",
      date: new Date(),
      description: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast.success("Expense added successfully!");
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Amount</FormLabel>
                <FormControl>
                  <Input placeholder="0.00" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <CurrencySelect form={form} />
        </div>

        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="food">Food & Dining</SelectItem>
                  <SelectItem value="transport">Transportation</SelectItem>
                  <SelectItem value="entertainment">Entertainment</SelectItem>
                  <SelectItem value="utilities">Utilities</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />

        <DateSelect form={form} />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description (Optional)</FormLabel>
              <FormControl>
                <Input placeholder="Add a note" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          Add Expense
        </Button>
      </form>
    </Form>
  );
};