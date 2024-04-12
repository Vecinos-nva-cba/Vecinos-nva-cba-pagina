import { TopMenu } from "@/components";
import Footer from "@/components/ui/Footer";


export default function PanelLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <main className="min-h-screen ">
        <TopMenu />

        <div className="">{children}</div>
  
        <Footer />

      </main>
    );
  }
  