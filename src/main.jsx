import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AnimatePresence, motion as m } from "framer-motion";
import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import "./index.css";
import Navbar from "./components/Navbar";
import Statistics from "./Statistics";
import Calculus from "./Calculus";
import App from "./App";
import UnitConverter from "./UnitConverter";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.1 },
    },
};

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route
                    path="/"
                    element={
                        <m.div className="pt-32" initial="hidden" animate="visible" exit="exit" variants={containerVariants}>
                            <App />
                        </m.div>
                    }
                />
                <Route
                    path="/statistics"
                    element={
                        <m.div className="pt-32" initial="hidden" animate="visible" exit="exit" variants={containerVariants}>
                            <Statistics />
                        </m.div>
                    }
                />
                <Route
                    path="/calculus"
                    element={
                        <m.div className="pt-32" initial="hidden" animate="visible" exit="exit" variants={containerVariants}>
                            <Calculus />
                        </m.div>
                    }
                />
                <Route
                    path="/unit-converter"
                    element={
                        <m.div className="pt-32" initial="hidden" animate="visible" exit="exit" variants={containerVariants}>
                            <UnitConverter />
                        </m.div>
                    }
                />
            </Routes>
        </AnimatePresence>
    );
}

createRoot(document.getElementById("root")).render(
    // <StrictMode>
    //   <App />
    // </StrictMode>,
    <BrowserRouter>
        <Navbar />
        <AnimatedRoutes />
    </BrowserRouter>
);
