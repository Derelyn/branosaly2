// ** deps
import { FormDataMailType } from "@/types/mailType";

export const fetchPostMail = async (formData: FormDataMailType) => {
  try {
    const response = await fetch("/api/sendMail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    alert("Failed to send email. Please try again.");
  }
};
