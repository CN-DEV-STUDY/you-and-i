import { Button } from "@/components/ui/Button"
import {
    Card,
    CardContent,
} from "@/components/ui/Card"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/Form";
import styled from "styled-components";
import {CalendarIcon} from "lucide-react";
import * as z from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/Popover";
import {cn} from "@/lib/utils.ts";
import {format} from "date-fns";
import {Calendar} from "@/components/ui/Calendar.tsx";
import { toast } from "@/components/ui/use-toast"
import {getPeriod, savePeriodRequest} from "@/services/api/period/api.ts";
import {useEffect, useState} from "react";

const FormSchema = z.object({
    startedDate: z.date({
        required_error: "started date is required.",
    }),
})

interface Props {
    onClick: () => void;
}

function CreatePeriod({onClick}: Props) {

    // hook form
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    })

    // state
    const [isSuccess, setSuccess] = useState<boolean>(false);

    // watch
    useEffect(() => {
        if (isSuccess) {
            getPeriod();
        }
    } , [])


    // method
    const savePeriod = async (formattedDate : string) => {
        await savePeriodRequest(formattedDate);
        setSuccess(true);
    }

    function onSubmit(data: z.infer<typeof FormSchema>) {

        const formattedDate = format(data.startedDate, 'yyyy-MM-dd')
        savePeriod(formattedDate)

        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
            ),
        })
    }

    return (
        <Container>
            <Card className="w-[350px]">
                <CardContent className="flex justify-center pt-3 pb-3">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <FormField
                                control={form.control}
                                name="startedDate"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col">
                                        <FormLabel className="font-bold">Started Date</FormLabel>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <FormControl>
                                                    <Button
                                                        variant={"outline"}
                                                        className={cn(
                                                            "w-[240px] pl-3 text-left font-normal",
                                                            !field.value && "text-muted-foreground"
                                                        )}
                                                    >
                                                        {field.value ? (
                                                            format(field.value, "yyyy-MM-dd")
                                                        ) : (
                                                            <span>Pick a date</span>
                                                        )}
                                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                    </Button>
                                                </FormControl>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0" align="start">
                                                <Calendar
                                                    className="z-40"
                                                    mode="single"
                                                    selected={field.value}
                                                    onSelect={field.onChange}
                                                    disabled={(date) =>
                                                        date > new Date() || date < new Date("1900-01-01")
                                                    }
                                                    initialFocus
                                                />
                                            </PopoverContent>
                                        </Popover>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="flex justify-between">
                                <Button variant="outline" onClick={onClick}>Cancel</Button>
                                <Button>Save</Button>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </Container>
    )
}
export default CreatePeriod;

// style
const Container = styled.div`
  position: fixed;
  top: 22%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  box-shadow: 0 0 15px 10px rgba(94, 53, 177, 0.1),
  0 0 15px 12px rgba(94, 53, 177, 0.1),
  0 0 15px 15px rgba(94, 53, 177, 0.1);
`