import Image from "next/image";
import logo from "@/public/images/logo.png";

export function AppHeader(props: { className?: string }) {
  const { className = "" } = props;
  return (
    <header className={"flex flex-col gap-8 lg:gap-16 " + className}>
      <Image className="dark:invert" src={logo} alt="Logo" priority />
      <h1 className="hidden lg:block text-sm font-bold uppercase pb-4 border-b-1 border-b-slate-300 dark:border-b-slate-700">
        - Blog
      </h1>
    </header>
  );
}
