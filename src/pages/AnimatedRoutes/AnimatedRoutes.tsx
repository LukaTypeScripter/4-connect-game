
import {  Route, Routes, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Home from '../Home/Home';
import Rules from '../rules/Rules';
import Game from '../Game/Game';
import MenuModal from '../../components/Modals/MenuModal';
import MainBoardContext from '../../contexts/Mainboards';
import { useContext } from 'react';
function AnimatedRoutes() {
    const location = useLocation();
   const {menuModal} = useContext(MainBoardContext)
    return (
      <AnimatePresence  initial={false} mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path="/game" element={<motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {menuModal && (
  <MenuModal />
            )}
          
           <Game />
          </motion.div>} />
          <Route path="/" element={<motion.div
           initial={{ opacity: 0, rotateY: -90 }}
           animate={{ opacity: 1, rotateY: 0 }}
           exit={{ opacity: 0, rotateY: 90 }}
           transition={{ duration: 0.5 }}
          >
            <Home />
          </motion.div>} />

          <Route path="/rule" element={<motion.div
           initial={{ opacity: 0, rotateY: -90 }}
           animate={{ opacity: 1, rotateY: 0 }}
           exit={{ opacity: 0, rotateY: 90 }}
           transition={{ duration: 0.5 }}
          >
            <Rules />
          </motion.div>} />
          
        </Routes>
      </AnimatePresence>
    );
  }

  export default AnimatedRoutes;