export const AuthToken = "Bearer 9c48df2694a849b6089f9d0d3513efe";
export const ApiVersion = "2021-04-15";

// export const baseUrl = "https://stoplight.io/mocks/highlevel/integrations/";
export const baseUrl = "https://dev-api.ehr.software/";

export const apiHeaders = {
  Authorization: "Bearer 9c48df2694a849b6089f9d0d3513efe",
  Version: "2021-07-28",
};

export const contactBaseUrl = `${baseUrl}/contacts/`;
export const contactOwner = `${baseUrl}users/location/`;
export const calendarBaseUrl = `${baseUrl}39582850/calendars/`;
export const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbEFkZHJlc3MiOiJjb3JleS5wZGdyb3VwQGdtYWlsLmNvbSIsImV4cCI6MTY5MDQyNzI5OH0.0WF4CYCWHI7WK7FpxM_2EneIm1lvu5TILdvQLEYj_44";

export const locationID = "f209ee50-96e6-4ca2-9eb5-80b93d31591f";

export const APIConst = {
  contactApi: contactBaseUrl,
  contactAdd: `${contactBaseUrl}ocQHyuzHvysMo5N5VsXc`,
  tagsAdd: `${contactBaseUrl}sx6wyHhbFdRXh302LLNR/tags`,
  appAppointment: `${calendarBaseUrl}events/appointments`,
  allCalendar: `${calendarBaseUrl}?locationId=`,
};

export const leadSource = `${baseUrl}/contacts/{id}/lead-sources`;
