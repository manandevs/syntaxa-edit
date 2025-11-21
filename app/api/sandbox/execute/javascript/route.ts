import { NextResponse } from "next/server";
import vm from "node:vm";

export async function POST(req: Request) {
  try {
    const { code } = await req.json();

    if (!code) {
      return NextResponse.json({ error: "No code provided" }, { status: 400 });
    }

    // 1. Create a buffer to capture console.log output
    const logs: string[] = [];

    // 2. Define the sandbox environment
    const sandbox = {
      console: {
        log: (...args: unknown[]) => {
          logs.push(args.map(arg => 
            typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
          ).join(" "));
        },
        error: (...args: unknown[]) => {
          logs.push("Error: " + args.map(arg => String(arg)).join(" "));
        },
        warn: (...args: unknown[]) => {
          logs.push("Warning: " + args.map(arg => String(arg)).join(" "));
        }
      },
    };

    // 3. Create the context
    const context = vm.createContext(sandbox);

    // 4. Execute the code
    vm.runInContext(code, context, {
      timeout: 2000, 
      displayErrors: true,
    });

    // 5. Return the captured logs
    return NextResponse.json({
      output: logs.length > 0 ? logs.join("\n") : "No output returned.",
      stderr: "",
    });

  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Runtime Error";
    return NextResponse.json({
      output: "",
      stderr: errorMessage,
    });
  }
}