function simpleClock(): void {
  const days: Date = new Date();
  const hours: string = String(days.getHours()).padStart(2, "0");
  const minutes: string = String(days.getMinutes()).padStart(2, "0");
  const seconds: string = String(days.getSeconds()).padStart(2, "0");

  const clock: HTMLElement | null = document.querySelector("#clock");

  if (!clock) throw new Error("Clock element not found");

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

simpleClock();
setInterval(simpleClock, 1000);
