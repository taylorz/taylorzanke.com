import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { email, fullName } = req.body;

  try {
    const response = await axios.post(
      "https://api.mailerlite.com/api/v2/subscribers",
      {
        email,
        fields: {
          full_name: fullName,
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
          "X-MailerLite-ApiKey": process.env.MAILERLITE_API_KEY,
        },
      }
    );

    return res.status(response.status).json(response.data);
  } catch (error) {
    console.error(error);
    return res
      .status(error.response?.status || 500)
      .json(error.response?.data || { message: "Internal Server Error" });
  }
}
