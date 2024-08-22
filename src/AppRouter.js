// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ExaminationGuideline from './In_Footer/ExaminationGuideline';
import NoticeBoard from './In_Footer/NoticeBoard';
import UtilizationPolicy from './In_Footer/UtilizationPolicy';
import FeeInformation from './In_Footer/FeeInformation';
import Footer from './Footer';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/notice-board" element={<NoticeBoard />} />
        <Route path="/fee-information" element={<FeeInformation />} />
        <Route path="/examination-guideline" element={<ExaminationGuideline />} />
        <Route path="/utilization-policy" element={<UtilizationPolicy />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default AppRouter;
