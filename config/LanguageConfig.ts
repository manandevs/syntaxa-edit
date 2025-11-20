

export const languageConfig: { [key: string]: { monaco: string; fileName: string; boilerplate: string } } = {
  c: {
    monaco: "c",
    fileName: "main.c",
    boilerplate: `#include <stdio.h>

    int main() {
        printf("Hello World!");
        return 0;
    }`,
  },
  javascript: {
    monaco: "javascript",
    fileName: "index.js",
    boilerplate: `// Write your JavaScript code here
    console.log("Hello, World!");

    const sum = (a, b) => a + b;
    console.log("Sum of 5 and 10 is:", sum(5, 10));`,
  },
};