import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Blog from '../pages/Blog';
import FreeZoneVsMainland from '../pages/blog/FreeZoneVsMainland';
import GoldenVisa from '../pages/blog/GoldenVisa';
import BusinessSetup from '../pages/blog/BusinessSetup';
import { getBlogPost } from '../data/blogPosts';
import { Navigate } from 'react-router-dom';

const BlogRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Blog />} />
      <Route path="/free-zone-vs-mainland" element={<FreeZoneVsMainland />} />
      <Route path="/golden-visa-guide" element={<GoldenVisa />} />
      <Route path="/business-setup" element={<BusinessSetup />} />
      <Route path="*" element={<Navigate to="/blog" replace />} />
    </Routes>
  );
};

export default BlogRoutes; 