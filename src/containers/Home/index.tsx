import React from 'react';
import PageContainer from '@/components/PageContainer';
import Hero from '@/components/Hero';
import FeaturedCategories from '@/components/FeaturedCategories';
import EarnSlice from '@/components/EarnSlice';
import WorkSlice from '@/components/WorkSlice';
import BlogSlice from '@/components/BlogSlice';

function HomeContainer() {
  return (
    <PageContainer>
      <Hero />
      {/* <FeaturedCategories /> */}
      <EarnSlice />
      <WorkSlice />
      <BlogSlice />
    </PageContainer>
  );
}

export default HomeContainer;
