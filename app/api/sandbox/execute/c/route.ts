import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { code } = await req.json();

    if (!code) {
      return NextResponse.json({ error: "No code provided" }, { status: 400 });
    }

    // Piston request
    const response = await fetch("https://emkc.org/api/v2/piston/execute", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        language: "c",
        version: "10.2.0",
        files: [
          {
            name: "main.c",
            content: code,
          },
        ],
      }),
    });

    const result = await response.json();

    return NextResponse.json({
      output: result.run?.stdout || "",
      stderr: result.run?.stderr || "",
    });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "An unknown error occurred";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}