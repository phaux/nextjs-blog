import {
  BookMarkedIcon,
  BrainIcon,
  BrushIcon,
  GlassesIcon,
} from "lucide-react";
import { CategoryCard } from "./CategoryCard";
import artistImage from "@/public/images/artist.jpg";
import booksImage from "@/public/images/books.jpg";
import cityImage from "@/public/images/city.jpg";
import drawingImage from "@/public/images/drawing.jpg";

export function CategoryList(props: {
  className?: string;
  activeCategories?: string[];
}) {
  const { className, activeCategories = [] } = props;
  return (
    <section className={"flex flex-col gap-8 lg:gap-16 " + className}>
      <h1 className="text-2xl font-bold">Kategorie</h1>
      <ul className="grid gap-8 lg:gap-16 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        <li>
          <CategoryCard
            className="bg-blue-900 text-white ring-blue-950"
            href="/knowledge"
            image={booksImage}
            alt="Książki"
            title="Wiedza"
            icon={<BookMarkedIcon />}
            active={activeCategories.includes("knowledge")}
          />
        </li>
        <li>
          <CategoryCard
            className="bg-yellow-400 text-black ring-yellow-600"
            href="/inspiration"
            image={drawingImage}
            alt="Rysunek"
            title="Inspiracje"
            icon={<BrainIcon />}
            active={activeCategories.includes("inspiration")}
          />
        </li>
        <li>
          <CategoryCard
            className="bg-red-700 text-white ring-red-900"
            href="/interpretation"
            image={artistImage}
            alt="Artystka"
            title="Interpretacje"
            icon={<BrushIcon />}
            active={activeCategories.includes("interpretation")}
          />
        </li>
        <li>
          <CategoryCard
            className="bg-teal-300 text-black ring-teal-600"
            href="/available"
            image={cityImage}
            alt="Miasto"
            title="Dostępne"
            icon={<GlassesIcon />}
            active={activeCategories.includes("available")}
          />
        </li>
      </ul>
    </section>
  );
}
