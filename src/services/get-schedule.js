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
    alert("Nao foi possivel buscar o agendamento do dia selecionado.");
  }
}
