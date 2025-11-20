import { NextResponse } from "next/server";
import vm from "node:vm";

export async function POST(req: Request) {
  try {
    const { code } = await req.json();

    if (!code) {
      return NextResponse.json({ error: "No code provided" }, { status: 400 });
    }

    // 1. Create a buffer to capture console.log output
    let logs: string[] = [];

    // 2. Define the sandbox environment (what variables/functions the code can access)
    const sandbox = {
      console: {
        log: (...args: any[]) => {
          // Convert arguments to strings and push to logs array
          logs.push(args.map(arg => 
            typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
          ).join(" "));
        },
        error: (...args: any[]) => {
          logs.push("Error: " + args.map(arg => String(arg)).join(" "));
        },
        warn: (...args: any[]) => {
          logs.push("Warning: " + args.map(arg => String(arg)).join(" "));
        }
      },
      // You can expose other safe globals here if needed
      // e.g. setTimeout, setInterval (though these require async handling)
    };

    // 3. Create the context
    const context = vm.createContext(sandbox);

    // 4. Execute the code
    // We set a timeout to prevent infinite loops from freezing your server
    vm.runInContext(code, context, {
      timeout: 2000, // 2 seconds timeout
      displayErrors: true,
    });

    // 5. Return the captured logs
    return NextResponse.json({
      output: logs.length > 0 ? logs.join("\n") : "No output returned.",
      stderr: "",
    });

  } catch (err: any) {
    // Catch runtime errors (syntax errors, throw errors, or timeout)
    return NextResponse.json({
      output: "",
      stderr: err.message || "Runtime Error",
    });
  }
}