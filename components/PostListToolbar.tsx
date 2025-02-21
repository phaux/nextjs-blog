"use client";
import clsx from "clsx";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

export function PostListToolbar() {
  const params = useSearchParams();
  const router = useRouter();
  return (
    <form role="search" className="flex-1 flex flex-wrap gap-8 items-center">
      <p className="flex-1 flex gap-8 items-baseline">
        <Link
          href={{ query: { fav: true } }}
          scroll={false}
          className={clsx(
            "uppercase decoration-2 cursor-pointer",
            !!params.get("fav") &&
              "text-red-900 dark:text-red-700 font-bold underline",
          )}
        >
          Ulubione
        </Link>
        <span className="text-red-900 dark:text-red-700">{" / "}</span>
        <Link
          href={{ query: { fav: null } }}
          scroll={false}
          className={clsx(
            "uppercase decoration-2 cursor-pointer",
            !params.get("fav") &&
              "text-red-900 dark:text-red-700 font-bold underline",
          )}
        >
          Wszystkie
        </Link>
      </p>
      <label className="flex-1 flex gap-8 items-baseline">
        <span className="text-slate-400">Sortowanie</span>{" "}
        <select
          className="font-bold border-b-1 border-b-slate-500 h-10 cursor-pointer"
          name="sort"
        >
          <option value="newest">Najnowsze</option>
          <option value="popular">Najpopularniejsze</option>
        </select>
      </label>
    </form>
  );
}
