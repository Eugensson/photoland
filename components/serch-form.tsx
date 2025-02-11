import { FiSearch } from "react-icons/fi";

import { cn } from "@/lib/utils";

export const SerchForm = ({ className }: { className?: string }) => {
  return (
    <form className={cn("relative", className)}>
      <input
        type="text"
        className="input pr-28"
        placeholder="Search for a product..."
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
