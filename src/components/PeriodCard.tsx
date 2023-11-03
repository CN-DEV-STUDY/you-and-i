import styled from "styled-components";
import periodImg from "./../assets/period.jpg";
import { useEffect, useState } from "react";
import { getPeriod } from "@/services/api/period/api.ts";
import { useSelector } from "react-redux";
import { RootState } from "@/store.ts";
import { Button } from "@/components/ui/Button.tsx";
import {toast, useToast} from "@/components/ui/use-toast"
import { Plus } from "lucide-react";
import CreatePeriod from "@/components/CreatePeriod.tsx";
import Cookies from "js-cookie";
import {COOKIE_NAME} from "@/services/types/user/types.ts";

interface PeriodCardProps {
    period: number;
    startedAt: string;
}

function PeriodCard() {
    // redux
    const isLoggedIn = useSelector((state: RootState) => state.login.isLoggedIn);

    // state
    const [period, setPeriod] = useState<PeriodCardProps>({
        period: 0,
        startedAt: "",
    });

    const [isClicked, setIsClicked] = useState<boolean>(false);

    const [isSuccess, setSuccess] = useState<boolean>(false);

    // event
    const onClick = () => {
        if (!isLoggedIn) {
            toast({
                description: "로그인 후 이용해주세요.",
            })
            return;
        }

        setIsClicked((prevState) => !prevState);
    };

    const onChangeSuccess = (status: boolean) => {
        setSuccess(status);
    };

    // method
    const fetchPeriod = async () => {
        const data = await getPeriod();

        if(data === '') {
            setPeriod({
                period: 0,
                startedAt: "",
            })
            return;
        }

        setPeriod(data);
    };

    // watch
    useEffect(() => {

        if (isLoggedIn) {
            fetchPeriod();
        }
    }, [isSuccess]);

    return (
        <>
            {isClicked && (
                <div>
                    <CreatePeriod
                        onClick={onClick}
                        onChangeSuccess={onChangeSuccess}
                        isSuccess={isSuccess}
                    />
                </div>
            )}
            <Container>
                <RoundCard>
                    {(!isLoggedIn || period.period === 0 )&& (
                        <Button
                            variant="outline"
                            className="h-14 bg-indigo-400 border-0 text-indigo-100 text-xl hover:bg-indigo-400 hover:text-indigo-100"
                            onClick={onClick}
                        >
                            <Plus className="mr-2 h-6 w-6" /> Register Period
                        </Button>
                    )}
                    {(isLoggedIn && period.period !== 0) && (
                        <>
                            <Text fontWeight={"bold"} fontSize={24}>
                                {period.period}일
                            </Text>
                            <Text justifycontent={"flex-end"}>
                                {period.startedAt}
                            </Text>
                        </>
                    )}
                </RoundCard>
            </Container>
        </>
    );
}

export default PeriodCard;

// style
const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 0 20px;
    margin-bottom: 20px;
`;
const RoundCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;
    width: 100%;
    margin-top: 10px;
    padding: 10px 20px;
    height: 120px;
    border-radius: 10px;
    background-color: var(--color__white);
    background-image: url(${periodImg});
    background-size: cover;
    background-position: center bottom;
`;

const Text = styled.div<TextStyles>`
    display: flex;
    padding-top: 10px;
    color: var(--color__white);
    font-weight: ${(props) => props.fontWeight};
    font-size: ${(props) => props.fontSize}px;
    justify-content: ${(props) => props.justifycontent};
`;

type TextStyles = {
    fontWeight?: string;
    fontSize?: number;
    justifycontent?: string;
};
