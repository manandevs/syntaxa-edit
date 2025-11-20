

export const languageConfig: { [key: string]: { monaco: string; fileName: string; boilerplate: string } } = {
  c: {
    monaco: "c",
    fileName: "main.c",
    boilerplate: `#include <stdio.h>

int main() {
    printf("Hello World!");
    return 0;
}`,
  }
};