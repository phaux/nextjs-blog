"use client";
import clsx from "clsx";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

export function PostListToolbar(props: { className?: string }) {
  const { className } = props;
  const params = useSearchParams();
  const router = useRouter();
  const filters = params.getAll("filter");
  const favorite = filters.includes("favorite");
  const order = params.get("order");

  return (
    <form
      role="search"
      className={clsx("flex flex-wrap gap-8 items-center", className)}
    >
      <p className="flex-1 flex gap-8 items-baseline">
        <Link
          href={{ query: { filter: "favorite" } }}
          scroll={false}
          className={clsx(
            "uppercase decoration-2 cursor-pointer",
            favorite && "text-red-900 dark:text-red-700 font-bold underline",
          )}
        >
          Ulubione
        </Link>
        <span className="text-red-900 dark:text-red-700">{" / "}</span>
        <Link
          href={{ query: { filter: "" } }}
          scroll={false}
          className={clsx(
            "uppercase decoration-2 cursor-pointer",
            !favorite && "text-red-900 dark:text-red-700 font-bold underline",
          )}
        >
          Wszystkie
        </Link>
      </p>
      <label className="flex-1 flex gap-8 items-baseline">
        <span className="text-slate-400">Sortowanie</span>{" "}
        <select
          className="font-bold border-b-1 border-b-slate-500 h-10 cursor-pointer"
          name="order"
          value={order || "latest"}
          onChange={(e) => {
            const newParams = new URLSearchParams(params);
            newParams.set("order", e.target.value);
            router.push("?" + newParams.toString(), { scroll: false });
          }}
        >
          <option value="latest">Najnowsze</option>
          <option value="title">Alfabetycznie</option>
        </select>
      </label>
    </form>
  );
}
