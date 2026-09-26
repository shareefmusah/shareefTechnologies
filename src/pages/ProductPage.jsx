import React from 'react';
import FeaturedProduct from '../sections/FeaturedProduct';
import OtherProjects from '../sections/OtherProjects';

export default function ProductPage() {
  return (
    <div style={{ paddingTop: '100px' }}>
      <FeaturedProduct />
      <OtherProjects />
    </div>
  );
}