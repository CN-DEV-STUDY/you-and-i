import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/Form";
import styled from "styled-components";
import { CalendarIcon } from "lucide-react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/Popover";
import { cn } from "@/lib/utils.ts";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/Calendar.tsx";
import { toast } from "@/components/ui/use-toast";
import { savePeriodRequest } from "@/services/api/period/api.ts";
import { Input } from "./ui/Input";
import { useState } from "react";

const FormSchema = z.object({
    startDate: z.date({
        required_error: "start date is required.",
    }),
    description: z.string({
        required_error: "description is required.",
    }),
});

type Props = {
    onClose: () => void;
    date: Date | undefined;
};

function CreatePlan({ onClose, date }: Props) {
    // hook form
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    });

    // state
    const [endDate, setEndDate] = useState<Date | undefined>(date);

    // method
    function onSubmit(data: z.infer<typeof FormSchema>) {
        const formattedStartDate = format(data.startDate, "yyyy-MM-dd");
        const formattedEndDate = format(data.startDate, "yyyy-MM-dd");

        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">
                        {JSON.stringify(data, null, 2)}
                    </code>
                </pre>
            ),
        });
    }

    const onChangeEndDate = (selectDate: Date) => {
        setEndDate(selectDate);
    };

    return (
        <Container>
            <Card className="w-[350px] pt-3 pb-3">
                <CardContent className=" p-6 flex justify-center">
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-4 w-full"
                        >
                            <FormField
                                control={form.control}
                                name="startDate"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col">
                                        <FormLabel className="font-bold">
                                            start Date
                                        </FormLabel>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <FormControl>
                                                    <Button
                                                        variant={"outline"}
                                                        className={cn(
                                                            "pl-3 text-left font-normal",
                                                            !field.value
                                                            // && "text-muted-foreground"
                                                        )}
                                                    >
                                                        {field.value
                                                            ? format(
                                                                  field.value,
                                                                  "yyyy-MM-dd"
                                                              )
                                                            : format(
                                                                  date,
                                                                  "yyyy-MM-dd"
                                                              )}
                                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                    </Button>
                                                </FormControl>
                                            </PopoverTrigger>
                                            <PopoverContent
                                                className="w-auto p-0"
                                                align="start"
                                            >
                                                <Calendar
                                                    className="z-40"
                                                    mode="single"
                                                    selected={field.value}
                                                    onSelect={field.onChange}
                                                    disabled={(date) =>
                                                        date > new Date() ||
                                                        date <
                                                            new Date(
                                                                "2023-01-01"
                                                            )
                                                    }
                                                    initialFocus
                                                />
                                            </PopoverContent>
                                        </Popover>
                                    </FormItem>
                                )}
                            />

                            <FormItem className="flex flex-col">
                                <FormLabel className="font-bold">
                                    end Date
                                </FormLabel>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <FormControl>
                                            <Button
                                                variant={"outline"}
                                                className={cn(
                                                    "pl-3 text-left font-normal"
                                                )}
                                            >
                                                {endDate ? (
                                                    format(
                                                        endDate,
                                                        "yyyy-MM-dd"
                                                    )
                                                ) : (
                                                    <span>Pick a date</span>
                                                )}

                                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                            </Button>
                                        </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent
                                        className="w-auto p-0"
                                        align="start"
                                    >
                                        <Calendar
                                            className="z-40"
                                            mode="single"
                                            disabled={(date) =>
                                                date > new Date() ||
                                                date < new Date("2023-01-01")
                                            }
                                            selected={endDate}
                                            onSelect={onChangeEndDate}
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                            </FormItem>
                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel htmlFor="password">
                                            description
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                id="description"
                                                type="text"
                                                placeholder="please write down description"
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            <div className="flex justify-between">
                                <Button variant="outline" onClick={onClose}>
                                    Cancel
                                </Button>
                                <Button>Save</Button>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </Container>
    );
}
export default CreatePlan;

// style
const Container = styled.div`
    position: fixed;
    top: 18%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 40;
    box-shadow: 0 0 15px 10px rgba(94, 53, 177, 0.1),
        0 0 15px 12px rgba(94, 53, 177, 0.1),
        0 0 15px 15px rgba(94, 53, 177, 0.1);
`;
