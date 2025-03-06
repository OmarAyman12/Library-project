import Link from "next/link";
import React from "react";
import { FaBookOpen } from "react-icons/fa";
import { Button } from "../ui/button";

function NavbarLogo() {
  return <div>
    <Button size='icon' className="bg-transparent hover:bg-neutral-500"><Link href='/'><FaBookOpen className="text-blue-400"/></Link></Button>
    
  </div>;
}

export default NavbarLogo;
