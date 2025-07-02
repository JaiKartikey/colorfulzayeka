import ScrollToTop from '@/components/ScrollToTop';

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import VegSection from "./pages/VegSection";
import SweetsSection from "./pages/SweetsSection";
import NonVegSection from "./pages/NonVegSection";
import WatercolorGallery from "./pages/WatercolorGallery";
import PencilGallery from "./pages/PencilGallery";
import RecipePage from "./pages/VegRecipePage";
import SweetRecipePage from "./pages/SweetRecipePage";
import NonVegRecipePage from "./pages/NonVegRecipePage";
import NotFound from "./pages/NotFound";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/veg" element={<VegSection />} />
          <Route path="/veg/:slug" element={<RecipePage />} />
          <Route path="/sweets" element={<SweetsSection />} />
          <Route path="/sweets/:slug" element={<SweetRecipePage />} />
          <Route path="/nonveg" element={<NonVegSection />} />
          <Route path="/nonveg/:slug" element={<NonVegRecipePage />} />
          <Route path="/gallery/watercolor" element={<WatercolorGallery />} />
          <Route path="/gallery/pencil" element={<PencilGallery />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
