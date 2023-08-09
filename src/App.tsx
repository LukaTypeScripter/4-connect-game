import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./pages/AnimatedRoutes/AnimatedRoutes";
import { AnimatePresence } from "framer-motion";


function App() {
  return (
    <Router>
        <AnimatePresence exitBeforeEnter={false}>
        <AnimatedRoutes />
      </AnimatePresence>
    </Router>
  );
}

export default App;
