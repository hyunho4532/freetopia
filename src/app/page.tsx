import { Body } from "@/components/body";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <div className="flex-col">
      <Header />
      <Body />
    </div>
  );
}