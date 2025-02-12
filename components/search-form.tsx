"use client";

import { FiSearch } from "react-icons/fi";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

export const SearchForm = ({ className }: { className?: string }) => {
  const [query, setQuery] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimating(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [isAnimating]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (!query.trim()) {
      setIsAnimating(true);
      event.preventDefault();
    }
  };

  return (
    <form
      action="/search"
      method="GET"
      className={cn(
        "relative",
        isAnimating ? "animate-shake" : "animate-none",
        className
      )}
      onSubmit={handleSubmit}
    >
      <input
        name="q"
        type="search"
        className="input pr-28"
        placeholder="Search for a product..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="submit"
        className="absolute top-0 right-0 rounded-l-none btn btn-accent"
      >
        <FiSearch size={20} />
      </button>
    </form>
  );
};
