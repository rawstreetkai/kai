/*
HW9 pipeline (OpenAI version):
1. Ask the OpenAI Responses API for structured JSON.
2. Parse the JSON produced from a strict JSON Schema.
3. POST that JSON to a Make.com Custom Webhook.
4. Make.com formats and delivers the result as an email or file.

Required environment variables:
OPENAI_API_KEY
MAKE_WEBHOOK_URL
*/

function extractOutputText(response) {
  for (const item of response.output || []) {
    if (item.type !== "message") continue;
    for (const part of item.content || []) {
      if (part.type === "output_text" && typeof part.text === "string") {
        return part.text;
      }
    }
  }
  throw new Error("OpenAI returned no output_text.");
}

async function main() {
  const apiKey = process.env.OPENAI_API_KEY;
  const webhookUrl = process.env.MAKE_WEBHOOK_URL;

  if (!apiKey || !webhookUrl) {
    throw new Error("Set OPENAI_API_KEY and MAKE_WEBHOOK_URL first.");
  }

  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "Authorization": "Bearer " + apiKey,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-6-luna",
      input: "Create a short summary about three useful habits for learning web programming.",
      text: {
        format: {
          type: "json_schema",
          name: "web_programming_habits",
          strict: true,
          schema: {
            type: "object",
            additionalProperties: false,
            properties: {
              subject: { type: "string" },
              summary: { type: "string" },
              bullets: {
                type: "array",
                items: { type: "string" }
              }
            },
            required: ["subject", "summary", "bullets"]
          }
        }
      }
    })
  });

  if (!response.ok) {
    throw new Error(
      "OpenAI request failed: " +
      response.status +
      " " +
      await response.text()
    );
  }

  const result = await response.json();
  const structured = JSON.parse(extractOutputText(result));

  console.log("Structured JSON:", JSON.stringify(structured, null, 2));

  const makeResponse = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(structured)
  });

  if (!makeResponse.ok) {
    throw new Error(
      "Make.com webhook failed: " +
      makeResponse.status +
      " " +
      await makeResponse.text()
    );
  }

  console.log("Sent successfully to Make.com.");
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
