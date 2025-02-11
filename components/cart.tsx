import { SlBag } from "react-icons/sl";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const Cart = () => {
  return (
    <Sheet>
      <SheetTrigger className="relative cursor-pointer">
        <SlBag size={30} />
        <span className="absolute top-4 -right-1 flex items-center justify-center text-xs w-[18px] h-[18px] text-primary bg-accent rounded-full font-bold tracking-[-0.1em]">
          2
        </span>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
