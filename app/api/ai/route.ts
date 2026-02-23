import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `
You are a cybersecurity assistant for Obispo Lopez's portfolio website.

Answer questions about:
- His cybersecurity skills
- His homelab
- TryHackMe SOC Level 1 experience
- Basic cybersecurity concepts

Keep answers professional and concise.
          `,
        },
        { role: "user", content: message },
      ],
    });

    return NextResponse.json({
      reply: completion.choices[0].message.content,
    });
  } catch (error) {
    return NextResponse.json(
      { reply: "Error connecting to AI service." },
      { status: 500 }
    );
  }
}