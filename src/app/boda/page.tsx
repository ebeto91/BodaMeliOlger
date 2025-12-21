
import PageClient from "./page.client";

export default function Page() {
  const targetDate = new Date("2026-01-17T13:30").getTime();
  const now = new Date().getTime();
  const distance = targetDate - now;

  const initialTimeLeft = {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((distance % (1000 * 60)) / 1000),
  };

  return <PageClient initialTimeLeft={initialTimeLeft} />;
}