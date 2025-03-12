import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function AdminLayout() {
  return (
    <div className="p-4 border bg-blue-400 max-w-3xs">
      <h1 className="pb-3">Admin Dashboard</h1>
      <div className="grid grid-cols-1 gap-y-3 max-w-3xs">
        <Button>
          <Link href="/admin">Admin products</Link>
        </Button>
        <Button>
          <Link href="/admin/create">Add product</Link>
        </Button>
       
      </div>
    </div>
  );
}

export default AdminLayout;
