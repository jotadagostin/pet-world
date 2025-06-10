import { apiConfig } from "./api-config.js";

export async function deleteSchedule(id) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
      method: "DELETE",
    });
    alert("Appointment cancelled successfully!");
  } catch (error) {
    console.log(error);
    alert("Unable to cancel appointment");
  }
}
