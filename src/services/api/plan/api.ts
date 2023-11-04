import axios from "@/services/api/AxiosInstance.tsx";

interface PlanRequest {
    startDate: string;
    endDate : string;
    description : string
}
export const savePlan = async (planRequest:PlanRequest) => {
    const {data} = await axios.post("/plans", planRequest);
    return data;
}

export const getPlans = async (searchDate:string) => {
    const {data} = await axios.get("/plans?searchDate="+searchDate);
    return data.data;
}