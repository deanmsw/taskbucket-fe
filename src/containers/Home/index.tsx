import React from 'react';
// import styles from './styles.module.css';
import PageContainer from '@/components/PageContainer';
import Hero from '@/components/Hero';
import FeaturedCategories from '@/components/FeaturedCategories';
import EarnSlice from '@/components/EarnSlice';
import WorkSlice from '@/components/WorkSlice';

function HomeContainer() {
  return (
    <PageContainer>
      <Hero />
      <FeaturedCategories />
      <EarnSlice />
      <WorkSlice />
    </PageContainer>
  );
}

export default HomeContainer;
