import { apiConfig } from "./api-config.js";

export async function deleteSchedule(id) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
      method: "DELETE",
    });
    alert("Agendamento cancelado com sucesso!");
  } catch (error) {
    console.log(error);
    alert("Nao foi possivel cancelar o agendamento");
  }
}
