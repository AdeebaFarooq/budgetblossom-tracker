import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";

const currencies = [
  { code: "USD", symbol: "$" },
  { code: "EUR", symbol: "€" },
  { code: "GBP", symbol: "£" },
  { code: "JPY", symbol: "¥" },
  { code: "CAD", symbol: "C$" },
  { code: "AUD", symbol: "A$" },
  { code: "INR", symbol: "₹" },
];

interface CurrencySelectProps {
  form: UseFormReturn<any>;
}

export const CurrencySelect = ({ form }: CurrencySelectProps) => {
  return (
    <FormField
      control={form.control}
      name="currency"
      render={({ field }) => (
        <FormItem className="w-32">
          <FormLabel>Currency</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select currency" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {currencies.map((currency) => (
                <SelectItem key={currency.code} value={currency.code}>
                  {currency.code} ({currency.symbol})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </FormItem>
      )}
    />
  );
};