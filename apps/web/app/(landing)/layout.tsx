import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/sidebar/app-sidebar"

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {/* <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider> */}
      {children}
    </div>
  );
}
