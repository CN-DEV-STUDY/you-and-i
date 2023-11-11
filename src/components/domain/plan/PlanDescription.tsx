import {Card, CardDescription} from "@/components/ui/Card.tsx";
import {PenSquare, Trash2} from "lucide-react";
import {PlanProps} from "@/components/domain/plan/type/type.ts";
import React from "react";

function PlanDescription ({plan}: {plan : PlanProps}) {
    return (
        <>
            <Card className="h-fit pl-9 py-2 flex justify-start items-center mx-5 mb-2.5 ">
                <div className="flex gap-2 items-center">
                    <div className="w-1 bg-indigo-600 h-[30px]"></div>
                    <CardDescription className="text-base w-[200px] mr-6">
                        {plan.description}
                    </CardDescription>
                    <PenSquare className="w-[20px] h-[25px]"/>
                    <Trash2  className="w-[20px] h-[25px]"/>
                </div>
            </Card>
        </>
    )
}
export default PlanDescription;