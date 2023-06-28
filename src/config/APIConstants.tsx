export const AuthToken = "Bearer 9c48df2694a849b6089f9d0d3513efe";
export const ApiVersion = "2021-04-15";

// export const baseUrl = "https://stoplight.io/mocks/highlevel/integrations/";
export const baseUrl = "https://dev-api.ehr.software/";

export const apiHeaders = {
  Authorization: "Bearer 9c48df2694a849b6089f9d0d3513efe",
  Version: "2021-07-28",
};

export const contactBaseUrl = `${baseUrl}/contacts/`;
export const calendarBaseUrl = `${baseUrl}39582850/calendars/`;

export const APIConst = {
  contactApi: contactBaseUrl,
  contactAdd: `${contactBaseUrl}ocQHyuzHvysMo5N5VsXc`,
  tagsAdd: `${contactBaseUrl}sx6wyHhbFdRXh302LLNR/tags`,
  appAppointment: `${calendarBaseUrl}events/appointments`,
  allCalendar: `${calendarBaseUrl}?locationId=`,
};
