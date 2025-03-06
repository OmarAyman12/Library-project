import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Button } from "../ui/button";
import Link from "next/link";
function DropDownMenu() {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="bg-transparent hover:bg-gray-900">
          <RiArrowDropDownLine className="text-blue-400 size-7" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>
            <Link href="/">Home</Link>
          </DropdownMenuLabel>
          <DropdownMenuItem>
            <Link href="/product">Products</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/cart">Cart</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/admin">Admin</Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href="/">Login</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default DropDownMenu;
