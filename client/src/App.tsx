import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch, useLocation } from "wouter";
import { useEffect, useRef } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { QuoteModalProvider } from "./contexts/QuoteModalContext";
import { QuoteModal } from "./components/QuoteModal";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

/** Wraps each page with a fade+slide-up entrance and scrolls to top on route change */
function PageWrapper({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    const el = ref.current;
    if (!el) return;
    el.classList.remove("page-enter");
    // force reflow
    void el.offsetWidth;
    el.classList.add("page-enter");
  }, [location]);

  return <div ref={ref}>{children}</div>;
}

function Router() {
  return (
    <PageWrapper>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/terms" component={Terms} />
        <Route>
          {() => (
            <div className="min-h-screen flex items-center justify-center font-fun text-2xl text-[oklch(0.22_0.05_240)]">
              404 – Page Not Found 💩
            </div>
          )}
        </Route>
      </Switch>
    </PageWrapper>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <QuoteModalProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
            <QuoteModal />
          </TooltipProvider>
        </QuoteModalProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
