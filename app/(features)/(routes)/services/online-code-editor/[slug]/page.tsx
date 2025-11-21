"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/shared/Resizable";
import { SidebarProvider } from "@/components/contexts/SidebarContext";
import AdBanner from "@/components/online-code-editor/AdBanner";
import CodeEditor from "@/components/online-code-editor/Editor";
import Sidebar from "@/components/online-code-editor/Sidebar";
import Button from "@/components/shared/Button";
import Text from "@/components/shared/Text";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Tooltip from "@/components/shared/Tooltip";

const Page = () => {
  const params = useParams();
  const slug = params?.slug as string;

  const [output, setOutput] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect Screen Responsively
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 786);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Detect success or error automatically
  const handleSetOutput = (value: string) => {
    setOutput(value);

    const errorKeywords = [
      "error",
      "Error",
      "failed",
      "exception",
      "Exception",
      "undefined",
      "syntax",
    ];

    if (value?.trim()) {
      const hasError = errorKeywords.some((keyword) => value.includes(keyword));

      setIsError(hasError);
      setIsSuccess(!hasError);
    } else {
      setIsSuccess(false);
      setIsError(false);
    }
  };

  return (
    <SidebarProvider>
      <section className="relative w-full h-auto flex items-center bg-white pt-[98px]">
        <div className="w-full z-10">
          <div className="flex flex-col h-screen font-sans">
            <div className="flex flex-1 overflow-hidden">
              <Sidebar activeSlug={slug} />

              <main className="flex flex-1 overflow-auto">
                <ResizablePanelGroup
                  direction={isMobile ? "vertical" : "horizontal"}
                  className="flex rounded-lg"
                >
                  {/* Code Editor Panel */}
                  <ResizablePanel
                    defaultSize={60}
                    minSize={30}
                    className="flex flex-col"
                  >
                    <CodeEditor languageSlug={slug} setOutput={handleSetOutput} />
                  </ResizablePanel>

                  <ResizableHandle className="bg-gray-100 hover:bg-blue-400 transition-colors cursor-col-resize" />

                  {/* Output Panel */}
                  <ResizablePanel
                    defaultSize={40}
                    minSize={20}
                    className="flex flex-col bg-white shadow-sm border"
                  >
                    <div className="p-2 border-b flex justify-between items-center bg-gray-50">
                      <Text variant="small" className="font-semibold text-gray-700">
                        Output
                      </Text>

                      <Tooltip content="Clear Execution" placement="bottom">
                        <Button
                          className="py-1 text-sm"
                          variant="outline"
                          onClick={() => handleSetOutput("")}
                        >
                          Clear
                        </Button>
                      </Tooltip>
                    </div>

                    {/* SUCCESS MESSAGE */}
                    {isSuccess && (
                      <div className="mx-4 mt-2 p-2 bg-green-100 border border-green-300 text-green-700 rounded-md text-sm animate-fadeIn">
                        ✅ Code executed successfully
                      </div>
                    )}

                    {/* ERROR MESSAGE */}
                    {isError && (
                      <div className="mx-4 mt-2 p-2 bg-red-100 border border-red-300 text-red-700 rounded-md text-sm animate-fadeIn">
                        ❌ An error occurred while executing the code
                      </div>
                    )}

                    <div className="p-4 h-full font-mono text-sm text-gray-700 flex-grow overflow-x-scroll whitespace-pre-wrap">
                      {output ? (
                        <SyntaxHighlighter
                          language="bash"
                          style={vs}
                          customStyle={{
                            margin: 0,
                            padding: "1rem",
                            fontSize: "0.875rem",
                            lineHeight: "1.5",
                            background: "transparent",
                            height: "100%",
                          }}
                          wrapLongLines={true}
                        >
                          {output}
                        </SyntaxHighlighter>
                      ) : (
                        <div className="p-4 text-gray-400 text-sm font-mono italic select-none">
                          Run your code to see the output here...
                        </div>
                      )}
                    </div>
                  </ResizablePanel>
                </ResizablePanelGroup>

                <AdBanner />
              </main>
            </div>
          </div>
        </div>
      </section>
    </SidebarProvider>
  );
};

export default Page;
