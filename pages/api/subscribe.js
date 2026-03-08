import crypto from "crypto";

const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY || "";
const MAILCHIMP_SERVER = process.env.MAILCHIMP_SERVER || "";
const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID || "";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { email } = req.body;

  if (!email || typeof email !== "string") {
    return res.status(400).json({ error: "Email is required" });
  }

  if (!MAILCHIMP_API_KEY || !MAILCHIMP_SERVER || !MAILCHIMP_LIST_ID) {
    return res.status(500).json({ error: "Mailchimp configuration missing." });
  }

  const authString = Buffer.from(`anystring:${MAILCHIMP_API_KEY}`).toString(
    "base64"
  );
  const subscriberHash = crypto
    .createHash("md5")
    .update(email.toLowerCase())
    .digest("hex");

  try {
    const response = await fetch(
      `https://${MAILCHIMP_SERVER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members/${subscriberHash}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${authString}`,
        },
        body: JSON.stringify({
          email_address: email.toLowerCase(),
          status: "subscribed",
          merge_fields: {},
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("Mailchimp API error:", { status: response.status, data });
    }

    // Apply tag regardless of whether member is new or existing
    await fetch(
      `https://${MAILCHIMP_SERVER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members/${subscriberHash}/tags`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${authString}`,
        },
        body: JSON.stringify({
          tags: [{ name: "taylor-zanke", status: "active" }],
        }),
      }
    );

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Mailchimp subscription error:", error);
    return res
      .status(500)
      .json({ error: "Failed to subscribe. Please try again later." });
  }
}
