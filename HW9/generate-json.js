/*
HW9 pipeline:
1. Send a prompt to Anthropic.
2. Ask Anthropic to return structured JSON.
3. Parse the JSON.
4. POST it to a Make.com Custom Webhook.
5. Make.com can format it and send an email or create a file.

Required environment variables:
ANTHROPIC_API_KEY
MAKE_WEBHOOK_URL
*/

function parseJsonText(text) {
  // If the model returns a fenced code block, remove the fences before parsing.
  const cleaned = text
    .trim()
    .replace(/^\`\`\`(?:json)?\s*/i, "")
    .replace(/\s*\`\`\`$/, "");
  return JSON.parse(cleaned);
}

async function main() {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  const webhookUrl = process.env.MAKE_WEBHOOK_URL;

  if (!apiKey || !webhookUrl) {
    throw new Error("Set ANTHROPIC_API_KEY and MAKE_WEBHOOK_URL first.");
  }

  const prompt = `
Return ONLY valid JSON with this exact structure:
{
  "subject": "string",
  "summary": "string",
  "bullets": ["string", "string", "string"]
}

Topic: Give a short structured summary about three useful habits for learning web programming.
`;

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01"
    },
    body: JSON.stringify({
      model: "claude-sonnet-5",
      max_tokens: 800,
      messages: [{ role: "user", content: prompt }]
    })
  });

  if (!response.ok) {
    throw new Error(
      "Anthropic request failed: " +
      response.status +
      " " +
      await response.text()
    );
  }

  const result = await response.json();
  const textBlock = result.content.find(block => block.type === "text");

  if (!textBlock) {
    throw new Error("Anthropic returned no text block.");
  }

  const structured = parseJsonText(textBlock.text);

  console.log("Structured JSON:", structured);

  const makeResponse = await fetch(webhookUrl, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(structured)
  });

  if (!makeResponse.ok) {
    throw new Error("Make.com webhook failed: " + makeResponse.status);
  }

  console.log("Sent successfully to Make.com.");
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
