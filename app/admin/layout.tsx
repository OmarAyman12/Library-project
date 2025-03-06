import AdminLayout from "./AdminLayout";
import { Toaster } from "@/components/ui/sonner";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <AdminLayout/>
      {children} 
      <Toaster/>
    </div>
  );
}
