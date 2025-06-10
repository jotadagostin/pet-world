import { apiConfig } from "./api-config.js";

export async function getSchedules(date) {
  try {
    const response = await fetch(`${apiConfig.baseURL}/schedules`);
    const schedules = await response.json();
    const schedulesFilterByDate = schedules.filter(
      (schedule) => date === schedule.date
    );
    return schedulesFilterByDate;
  } catch (error) {
    console.log(error);
    alert(
      "It was not possible to search for the appointment for the selected day."
    );
  }
}
