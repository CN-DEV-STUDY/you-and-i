import styled from "styled-components";
import { PlanCalendar } from "@/components/ui/PlanCalendar.tsx";
import {useEffect, useState} from "react";
import CreatePlan from "./CreatePlan.tsx";
import PlanDescription from "@/components/domain/plan/PlanDescription.tsx";
import {useQuery} from "@tanstack/react-query";
import {getPlans} from "@/services/api/plan/api.ts";
import {format} from "date-fns";
import {da} from "date-fns/locale";
import {PlanProps} from "@/components/domain/plan/type/type.ts";

function Calendar() {
    // state
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [open, setOpen] = useState<boolean>(false);

    // event
    const onSelect = (selectDate: Date) => {
        // 날짜 더블 클릭하면 계획 추가 팝업 노출
        if (selectDate === undefined || selectDate === date) {
            setOpen(true);
        } else {
            setOpen(false);
        }

        if (selectDate !== undefined) {
            setDate(selectDate);
        }
    };

    const onClose = () => {
        setOpen(false);
    };

    // query
    const { data, isSuccess } = useQuery<PlanProps[]>({
        queryKey: ["plans", date],
        queryFn: () => getPlans(format(date, "yyyy-MM-dd"))
    })


    return (
        <div>
            <Container className="h-screen">
                {open && <CreatePlan onClose={onClose} date={date} />}
                <PlanCalendar
                    mode="single"
                    selected={date}
                    onSelect={onSelect}
                    className="border flex justify-center align-center h-90 w-full pt-7 pb-7"
                    classNames={{
                        month: "text-2xl",
                    }}
                />
                {data  && data.map((plan, index) => (
                    <PlanDescription key={index.toString()} plan={plan} />
                ))}
            </Container>
        </div>
    );
}

export default Calendar;

// style
const Container = styled.div`
    width: 100%;
    /* margin-bottom: 20px; */
`;
