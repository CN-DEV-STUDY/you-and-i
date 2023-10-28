import styled from "styled-components";
import { Calendar } from "@/components/ui/Calendar";
import { useState } from "react";
import { set } from "date-fns";
import CreatePlan from "./CreatePlan";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "./ui/Table";

function PlanCalendar() {
    // state
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [clickCnt, setClickCnt] = useState<number>(0);
    const [open, setOpen] = useState<boolean>(false);

    // event
    const onSelect = (selectDate: Date) => {
        if (selectDate === undefined || selectDate === date) {
            setClickCnt((prev) => prev + 1);
        } else {
            setClickCnt(0);
            setOpen(false);
        }

        if (clickCnt === 1) {
            setOpen(true);
        }

        if (selectDate !== undefined) {
            setDate(selectDate);
        }
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Container>
                {open && <CreatePlan onClose={onClose} date={date} />}
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={onSelect}
                    className="border flex justify-center align-center h-90 w-full pt-7 pb-7"
                    classNames={{
                        month: "text-2xl",
                    }}
                />
            </Container>

            <Table className="bg-white">
                <TableHeader>
                    <TableRow className="border-solid border-grey-900">
                        <TableHead className="w-[100px]">No.</TableHead>
                        <TableHead>description</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {/* <TableRow> */}
                    <TableRow className="border-solid">
                        <TableCell>1</TableCell>
                        <TableCell>강남에서 약속</TableCell>
                    </TableRow>
                    <TableRow className="border-t-neutral-50">
                        <TableCell>2</TableCell>
                        <TableCell>사당에서 약속</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
}

export default PlanCalendar;

// style
const Container = styled.div`
    width: 100%;
    /* margin-bottom: 20px; */
`;
