import {
  Eventcalendar,
  getJson,
  Toast,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscEventClickEvent,
  setOptions,
  Button,
  localeKo,
} from "@mobiscroll/react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import { useCallback, useEffect, useMemo, useState } from "react";
import styled from "styled-components";

setOptions({
  locale: localeKo,
  theme: "ios",
  themeVariant: "light",
});

const now = new Date();
const myEvents: MbscCalendarEvent[] = [
  {
    start: "2023-09-13T09:00",
    end: "2023-09-16T18:00",
    title: "Business of Software Conference",
    color: "#ff6d42",
  },
  {
    start: "2023-09-13T13:00",
    end: "2023-09-14T21:00",
    title: "Friends binge marathon",
    color: "#7bde83",
  },
  {
    start: "2023-09-20T13:00",
    end: "2023-09-21T21:00",
    title: "Friends binge marathon",
    color: "#7bde83",
  },
  {
    start: "2023-09-13T08:00",
    end: "2023-09-13T09:00",
    title: "Product team mtg.",
    color: "#913aa7",
  },
  {
    start: "2023-09-14T07:00",
    end: "2023-09-14T08:00",
    title: "Green box to post office",
    color: "#6e7f29",
  },
  {
    start: "2023-09-12T08:45",
    end: "2023-09-12T10:00",
    title: "Quick mtg. with Martin",
    color: "#de3d83",
  },
  {
    start: "2023-09-08T09:30",
    end: "2023-09-08T10:30",
    title: "Product team mtg.",
    color: "#f67944",
  },
  {
    start: "2023-09-08T11:00",
    end: "2023-09-08T11:45",
    title: "Stakeholder mtg.",
    color: "#a144f6",
  },
  {
    start: "2023-09-08T13:00",
    end: "2023-09-08T13:45",
    title: "Lunch @ Butcher's",
    color: "#00aabb",
  },
  {
    start: "2023-09-08T15:00",
    end: "2023-09-08T16:00",
    title: "General orientation",
    color: "#a71111",
  },
  {
    recurring: {
      repeat: "yearly",
      month: now.getMonth() + 1,
      day: 14,
    },
    allDay: true,
    title: "Dexter BD",
    color: "#37bbe4",
  },
  {
    recurring: {
      repeat: "yearly",
      month: now.getMonth() + 1,
      day: 25,
    },
    allDay: true,
    title: "Luke BD",
    color: "#37bbe4",
  },
  {
    recurring: {
      repeat: "weekly",
      weekDays: "WE",
    },
    allDay: true,
    title: "Employment (Semi-weekly)",
    color: "#228c73",
  },
  {
    start: "2023-09-10T00:00",
    end: "2023-09-15T00:00",
    allDay: true,
    title: "Sam OFF",
    color: "#ca4747",
  },
  {
    start: "2023-09-18T00:00",
    end: "2023-09-29T00:00",
    allDay: true,
    title: "Europe tour",
    color: "#56ca70",
  },
  {
    start: "2023-02-07T00:00",
    end: "2023-02-25T00:00",
    allDay: true,
    title: "Dean OFF",
    color: "#99ff33",
  },
  {
    start: "2023-03-05T00:00",
    end: "2023-03-14T00:00",
    allDay: true,
    title: "Mike OFF",
    color: "#e7b300",
  },
  {
    start: "2023-05-07T00:00",
    end: "2023-05-16T00:00",
    allDay: true,
    title: "John OFF",
    color: "#669900",
  },
  {
    start: "2023-06-01T00:00",
    end: "2023-06-11T00:00",
    allDay: true,
    title: "Carol OFF",
    color: "#6699ff",
  },
  {
    start: "2023-07-02T00:00",
    end: "2023-07-17T00:00",
    allDay: true,
    title: "Jason OFF",
    color: "#cc9900",
  },
  {
    start: "2023-08-06T00:00",
    end: "2023-08-14T00:00",
    allDay: true,
    title: "Ashley OFF",
    color: "#339966",
  },
  {
    start: "2023-09-10T00:00",
    end: "2023-09-20T00:00",
    allDay: true,
    title: "Marisol OFF",
    color: "#8701a9",
  },
  {
    start: "2023-10-01T00:00",
    end: "2023-10-12T00:00",
    allDay: true,
    title: "Sharon OFF",
    color: "#cc6699",
  },
  {
    recurring: {
      repeat: "yearly",
      month: 12,
      day: 25,
    },
    allDay: true,
    title: "Christmas Day",
    color: "#ff0066",
  },
  {
    recurring: {
      repeat: "yearly",
      month: 1,
      day: 1,
    },
    allDay: true,
    title: "New Year's day",
    color: "#99ccff",
  },
  {
    recurring: {
      repeat: "yearly",
      month: 4,
      day: 1,
    },
    allDay: true,
    title: "April Fool's Day",
    color: "#ff6666",
  },
  {
    recurring: {
      repeat: "yearly",
      month: 11,
      day: 2,
    },
    allDay: true,
    title: "File Form 720 for the third quarter",
    color: "#147ea6",
  },
  {
    recurring: {
      repeat: "yearly",
      month: 11,
      day: 2,
    },
    allDay: true,
    title: "File Form 730 and pay tax on wagers accepted during September",
    color: "#a73a4e",
  },
  {
    recurring: {
      repeat: "yearly",
      month: 11,
      day: 2,
    },
    allDay: true,
    title:
      "File Form 2290 and pay the tax for vehicles first used during September",
    color: "#218e0d",
  },
  {
    recurring: {
      repeat: "yearly",
      month: 11,
      day: 2,
    },
    allDay: true,
    title: "File Form 941 for the third quarter",
    color: "#a67914",
  },
  {
    recurring: {
      repeat: "yearly",
      month: 11,
      day: 2,
    },
    allDay: true,
    title: "Deposit FUTA owed through Sep if more than $500",
    color: "#3c0707",
  },
  {
    recurring: {
      repeat: "yearly",
      month: 11,
      day: 30,
    },
    allDay: true,
    title:
      "Deposit payroll tax for payments on Nov 21-24 if the semiweekly deposit rule applies",
    color: "#14a618",
  },
  {
    recurring: {
      repeat: "yearly",
      month: 11,
      day: 30,
    },
    allDay: true,
    title: "File Form 730 and pay tax on wagers accepted during October",
    color: "#722ac1",
  },
  {
    recurring: {
      repeat: "yearly",
      month: 11,
      day: 30,
    },
    allDay: true,
    title:
      "File Form 2290 and pay the tax for vehicles first used during October",
    color: "#256069",
  },
];

function DateTimeCalendar() {
  // const [myEvents, setEvents] = useState<MbscCalendarEvent[]>([]);
  const [isToastOpen, setToastOpen] = useState<boolean>(false);
  const [toastText, setToastText] = useState<string>();

  // useEffect(() => {
  //   getJson(
  //     "https://trial.mobiscroll.com/events/?vers=5",
  //     (events: MbscCalendarEvent[]) => {
  //       setEvents(events);
  //     },
  //     "jsonp"
  //   );
  // }, []);

  const closeToast = useCallback(() => {
    setToastOpen(false);
  }, []);

  const onEventClick = useCallback((event: MbscEventClickEvent) => {
    setToastText(event.event.title);
    setToastOpen(true);
  }, []);

  const view = useMemo<MbscEventcalendarView>(() => {
    return {
      calendar: {
        labels: true,
        // popover: true,
        // popoverClass: "custom-event-popover",
      },
      // agenda: { type: "month" },
    };
  }, []);
  return (
    <CalendarContainer>
      <Eventcalendar
        theme="ios"
        themeVariant="light"
        clickToCreate={true}
        dragToCreate={true}
        dragToMove={true}
        dragToResize={true}
        eventDelete={true}
        locale={localeKo}
        data={myEvents}
        view={view}
      />
      <Toast message={toastText} isOpen={isToastOpen} onClose={closeToast} />
    </CalendarContainer>
  );
}

export default DateTimeCalendar;

const CalendarContainer = styled.div`
  height: 800px;
`;
