export async function initMsw() {
  if (typeof window === "undefined") {
    const { server } = await import("./server.js");
    server.listen();
  } else {
    const { worker } = await import("./browser.js");
    await worker.start();
  }
}
