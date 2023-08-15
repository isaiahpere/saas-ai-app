import { Menu } from "lucide-react"; // from chadcn-ui New York
import React, { FC } from "react";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

const Navbar: FC = () => {
  return (
    <div className="flex items-center p-4">
      <Button variant="ghost" size="icon" className="md:hidden">
        <Menu />
      </Button>
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
