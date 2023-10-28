import styled from "styled-components";
import { PlanCalendar } from "@/components/ui/PlanCalendar";
import { useState } from "react";
import CreatePlan from "./CreatePlan";
import { Card, CardDescription } from "./ui/Card";
import {Trash2} from "lucide-react";

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

                <Card className="h-fit pl-9 py-2 flex justify-start items-center mx-5 mb-2.5 ">
                    <div className="flex gap-4 items-center">
                        <div className="w-1 bg-indigo-600 h-[30px]"></div>
                        <CardDescription className="text-base w-[200px] mr-6">
                            강남역 파이브 가이즈 점심 약속
                        </CardDescription>
                        <Trash2  className="w-[20px] h-[25px]"/>
                    </div>
                </Card>

                <Card className="h-fit pl-9 py-2 flex justify-start items-center mx-5 mb-2.5">
                    <div className="flex gap-4 items-center">
                        <div className="w-1 bg-indigo-600 h-[30px]"></div>
                        <CardDescription className="text-base w-[200px] mr-6">
                            사당역 부추 삼겹살 삼겹살 삼겹살 삼겹살 사당역 부추 삼겹살 삼겹살 삼겹살 삼겹살
                        </CardDescription>
                        <Trash2  className="w-[20px] h-[25px]"/>
                    </div>
                </Card>
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
