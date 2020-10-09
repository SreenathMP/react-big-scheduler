"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _schedulerWidth$besid;

var _ViewTypes = require("./ViewTypes");

var _ViewTypes2 = _interopRequireDefault(_ViewTypes);

var _SummaryPos = require("./SummaryPos");

var _SummaryPos2 = _interopRequireDefault(_SummaryPos);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = (_schedulerWidth$besid = {
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
  customCellWidth: 80

}, _defineProperty(_schedulerWidth$besid, "dayMaxEvents", 99), _defineProperty(_schedulerWidth$besid, "weekMaxEvents", 99), _defineProperty(_schedulerWidth$besid, "monthMaxEvents", 99), _defineProperty(_schedulerWidth$besid, "quarterMaxEvents", 99), _defineProperty(_schedulerWidth$besid, "yearMaxEvents", 99), _defineProperty(_schedulerWidth$besid, "customMaxEvents", 99), _defineProperty(_schedulerWidth$besid, "eventItemHeight", 24), _defineProperty(_schedulerWidth$besid, "eventItemLineHeight", 22), _defineProperty(_schedulerWidth$besid, "nonAgendaSlotMinHeight", 0), _defineProperty(_schedulerWidth$besid, "dayStartFrom", 0), _defineProperty(_schedulerWidth$besid, "dayStopTo", 23), _defineProperty(_schedulerWidth$besid, "defaultEventBgColor", "#80C5F6"), _defineProperty(_schedulerWidth$besid, "selectedAreaColor", "#F4F4F8"), _defineProperty(_schedulerWidth$besid, "nonWorkingTimeHeadColor", "#2A2D37"), _defineProperty(_schedulerWidth$besid, "nonWorkingTimeHeadBgColor", "#ffffff"), _defineProperty(_schedulerWidth$besid, "nonWorkingTimeBodyBgColor", "#ffffff"), _defineProperty(_schedulerWidth$besid, "summaryColor", "#666"), _defineProperty(_schedulerWidth$besid, "summaryPos", _SummaryPos2.default.TopRight), _defineProperty(_schedulerWidth$besid, "startResizable", true), _defineProperty(_schedulerWidth$besid, "endResizable", true), _defineProperty(_schedulerWidth$besid, "movable", true), _defineProperty(_schedulerWidth$besid, "creatable", true), _defineProperty(_schedulerWidth$besid, "crossResourceMove", true), _defineProperty(_schedulerWidth$besid, "checkConflict", false), _defineProperty(_schedulerWidth$besid, "scrollToSpecialMomentEnabled", true), _defineProperty(_schedulerWidth$besid, "eventItemPopoverEnabled", true), _defineProperty(_schedulerWidth$besid, "calendarPopoverEnabled", true), _defineProperty(_schedulerWidth$besid, "recurringEventsEnabled", true), _defineProperty(_schedulerWidth$besid, "headerEnabled", true), _defineProperty(_schedulerWidth$besid, "displayWeekend", true), _defineProperty(_schedulerWidth$besid, "relativeMove", true), _defineProperty(_schedulerWidth$besid, "resourceName", "Resource Name"), _defineProperty(_schedulerWidth$besid, "taskName", "Task Name"), _defineProperty(_schedulerWidth$besid, "agendaViewHeader", "Agenda"), _defineProperty(_schedulerWidth$besid, "addMorePopoverHeaderFormat", "MMM D, YYYY dddd"), _defineProperty(_schedulerWidth$besid, "eventItemPopoverDateFormat", "MMM D"), _defineProperty(_schedulerWidth$besid, "nonAgendaDayCellHeaderFormat", "HH:mm"), _defineProperty(_schedulerWidth$besid, "nonAgendaOtherCellHeaderFormat", "ddd M/D"), _defineProperty(_schedulerWidth$besid, "timeHourTextFontSize", "15px"), _defineProperty(_schedulerWidth$besid, "minuteStep", 30), _defineProperty(_schedulerWidth$besid, "views", [{
  viewName: "Day",
  viewType: _ViewTypes2.default.Day,
  showAgenda: false,
  isEventPerspective: false
}]), _schedulerWidth$besid);