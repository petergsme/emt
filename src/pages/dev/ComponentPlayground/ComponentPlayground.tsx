import { Navbar } from "@/components/ui/Navbar/Navbar";
import './ComponentPlayground.scss'
import { Footer } from "@/components/ui/Footer/Footer";

export const ComponentPlayground = () => {
  return (
    <div className="component-playground">
      <Navbar />
      <Footer />
      {/* Add components to know how they look */}
    </div>
  );
};