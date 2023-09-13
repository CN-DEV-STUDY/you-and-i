import { TextField } from "@mui/material";
import { DateCalendar } from "@mui/x-date-pickers";
import { useState } from "react";

function Calendar() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [plans, setPlans] = useState<{ [date: string]: string }>({});
  const [planInput, setPlanInput] = useState<string>("");
  const [showPlanForm, setShowPlanForm] = useState<boolean>(false);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handlePlanChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlanInput(e.target.value);
  };

  const handlePlanSubmit = () => {
    if (selectedDate && planInput.trim() !== "") {
      setPlans((prevPlans) => ({
        ...prevPlans,
        [selectedDate.toString()]: planInput,
      }));
      setPlanInput("");
      setShowPlanForm(false);
    }
  };
  return (
    <>
      <DateCalendar value={selectedDate} onChange={handleDateChange} />
      {selectedDate && (
        <div>
          <h3>선택한 날짜:</h3>
          <p>{selectedDate.toString()}</p>
          {showPlanForm ? (
            <div>
              <TextField
                label="계획 입력"
                variant="outlined"
                value={planInput}
                onChange={handlePlanChange}
              />
              <button onClick={handlePlanSubmit}>계획 저장</button>
            </div>
          ) : (
            <button onClick={() => setShowPlanForm(true)}>계획 추가</button>
          )}
        </div>
      )}
      {selectedDate && plans[selectedDate.toString()] && (
        <div>
          <h3>계획:</h3>
          <p>{plans[selectedDate.toString()]}</p>
        </div>
      )}
    </>
  );
}

export default Calendar;
