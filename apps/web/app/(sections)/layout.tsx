import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/sidebar/app-sidebar"
import TopNavbar from "@/components/top-navbar"

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <SidebarProvider className="bg-gradient-to-l from-primary-gradient/80 to-background ">
      {/* <div className="fixed w-full h-[20%] z-0 bg-gradient-to-b from-background to-transparent pointer-events-none" /> */}
      <div className="fixed w-full h-[20%] bottom-0 z-0 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      <div
        className="fixed z-0 w-[300px] h-[300px] rounded-full animate-float pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(0, 99, 138, 0.76) 0%, rgba(0, 64, 75, 0.22) 100%)',
          filter: 'blur(95px)',
          left: '5%',
          top: '50%',
          animation: 'float 6s ease-in-out infinite',
        }}
      />
      <AppSidebar />
      <SidebarInset className="bg-background">
        <TopNavbar />
          {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
