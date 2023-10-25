import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import styled from "styled-components";

function PlanCalendar() {
  moment.locale('ko-KR');
  const localizer = momentLocalizer(moment);

  return <div>
        <Container>
          <Calendar
              localizer={localizer}
              // events={myEventsList}
              style={{ height: 500, backgroundColor: "white"}}
          />
        </Container>
  </div>;
}

export default PlanCalendar;

// style
const Container = styled.div`
  width: 100%;
  height: 100%;
`