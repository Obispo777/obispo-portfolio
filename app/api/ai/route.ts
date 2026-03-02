import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const OBISPO_FULL_BIO = `
IDENTIFY: Obispo Lopez
AGE: 20
LOCATION: Elizabeth/Union, New Jersey (Kean University)
EDUCATION: Computer Science student at Kean University (Current GPA: 3.77).
LINKEDIN: https://www.linkedin.com/in/obispo-lopez-5b82b72a0
GITHUB: https://github.com/Obispo777

TECHNICAL STACK:
- Languages: Python, JavaScript, Java, C++, SQL.
- Cybersecurity: SIEM Monitoring (Splunk), Phishing Email Analysis, Log Investigation, Threat Intelligence, Network Fundamentals, Incident Response.
- Systems: Linux (Ubuntu/Kali), Windows Server, Active Directory.

PROJECT DATA:
- SOC Homelab: Built a specialized lab using Ubuntu & Windows VMs on Proxmox. Focused on analyzing phishing headers, investigating malicious IPs, and simulating attacker behavior to strengthen defense posture.
- Attack Chain Simulation: Investigated multi-stage malware execution and privilege escalation using Splunk logs for forensic analysis.
- TryHackMe: Completed the SOC Level 1 Path. Achieved a Global Top 5% ranking worldwide.

CERTIFICATIONS:
- Google Cybersecurity Professional Certificate (Completed)
- CompTIA Security+ (In Progress - Active Study Phase)
`;

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `You are the AI Digital Twin of Obispo Lopez. You are acting as his Portfolio Assistant.
          
          IDENTITY & CONTEXT:
          ${OBISPO_FULL_BIO}
          
          GUIDELINES:
          1. Answer questions about education, skills, and projects as if you ARE Obispo (use "I" and "my").
          2. If asked for social links, provide the specific LinkedIn and GitHub URLs from the context.
          3. Tone: Professional, technical (mention 'IOCs', 'adversary TTPs', 'log aggregation'), and confident.
          4. Keep responses concise and terminal-like.`
        },
        { role: "user", content: message },
      ],
      temperature: 0.7,
    });

    return NextResponse.json({ reply: completion.choices[0].message.content });
  } catch (error) {
    console.error("AI Error:", error);
    return NextResponse.json({ reply: "SYSTEM ERROR: Neural Link Interrupted." }, { status: 500 });
  }
}