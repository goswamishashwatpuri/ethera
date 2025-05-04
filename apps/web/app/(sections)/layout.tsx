import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/sidebar/app-sidebar"
import TopNavbar from "@/components/top-navbar"

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider className="bg-gradient-to-l from-primary-gradient/80 to-background">
      {/* <div className="fixed inset-0 z-0 bg-gradient-to-t from-background to-50% to-transparent pointer-events-none" /> */}
      <div
        className="fixed z-0 w-[300px] h-[300px] animate-float pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(60, 159, 251, 0.25) 0%, rgba(72, 189, 236, 0.29) 100%)',
          filter: 'blur(150px)',
          left: '5%',
          top: '50%',
          animation: 'float 6s ease-in-out infinite',
        }}
      />
      <AppSidebar />
      <SidebarInset className="bg-background">
        <TopNavbar />
        <div className="p-4">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
