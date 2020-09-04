import ViewTypes from "./ViewTypes";
import SummaryPos from "./SummaryPos";

export default {
  schedulerWidth: "90%",
  besidesWidth: 20,
  schedulerMaxHeight: 0,
  tableHeaderHeight: 40,

  agendaResourceTableWidth: 160,
  agendaMaxEventWidth: 100,

  dayMaxEvents: 2,
  weekMaxEvents: 4,
  monthMaxEvents: 4,
  quarterMaxEvents: 4,
  yearMaxEvents: 4,

  dayResourceTableWidth: 160,
  weekResourceTableWidth: "16%",
  monthResourceTableWidth: 160,
  quarterResourceTableWidth: 160,
  yearResourceTableWidth: 160,
  customResourceTableWidth: 160,

  dayCellWidth: 60,
  weekCellWidth: "12%",
  monthCellWidth: 80,
  quarterCellWidth: 80,
  yearCellWidth: 80,
  customCellWidth: 80,

  dayMaxEvents: 99,
  weekMaxEvents: 99,
  monthMaxEvents: 99,
  quarterMaxEvents: 99,
  yearMaxEvents: 99,
  customMaxEvents: 99,

  eventItemHeight: 24,
  eventItemLineHeight: 22,
  nonAgendaSlotMinHeight: 0,
  dayStartFrom: 0,
  dayStopTo: 23,
  defaultEventBgColor: "#80C5F6",
  selectedAreaColor: "#7EC2F3",
  nonWorkingTimeHeadColor: "#999999",
  nonWorkingTimeHeadBgColor: "#fff0f6",
  nonWorkingTimeBodyBgColor: "#fff0f6",
  summaryColor: "#666",
  summaryPos: SummaryPos.TopRight,

  startResizable: true,
  endResizable: true,
  movable: true,
  creatable: true,
  crossResourceMove: true,
  checkConflict: false,
  scrollToSpecialMomentEnabled: true,
  eventItemPopoverEnabled: true,
  calendarPopoverEnabled: true,
  recurringEventsEnabled: true,
  headerEnabled: true,
  displayWeekend: true,
  relativeMove: true,

  resourceName: "Resource Name",
  taskName: "Task Name",
  agendaViewHeader: "Agenda",
  addMorePopoverHeaderFormat: "MMM D, YYYY dddd",
  eventItemPopoverDateFormat: "MMM D",
  nonAgendaDayCellHeaderFormat: "HH:mm",
  nonAgendaOtherCellHeaderFormat: "ddd M/D",

  minuteStep: 30,

  views: [
    {
      viewName: "Day",
      viewType: ViewTypes.Day,
      showAgenda: false,
      isEventPerspective: false,
    },
  ],
};
