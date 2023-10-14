import axios from 'axios';


export const savePeriodRequest = async (startedAt:string) => {
    const {data} = await axios.post('/period', {"startedAt" : startedAt});
    return data
}

export const getPeriod = async () => {
    const {data} = await axios.get('http://localhost:8080/period');
    return data;
}