import React from 'react';
import Slider from '../component/home/slider/Slider';
import PopularSkilled from '../component/home/PopularSkilled';
import Worksection from '../component/home/Worksection';
import Upcoming from '../component/home/Upcpming';
import CTASection from '../component/home/CTASection';
import PopularReview from '../component/home/Popularreview';
import Achievements from '../component/home/Achievements';

function Home() {
  return (
    <div >
     <Slider/>
     <PopularSkilled  />
     <Upcoming/>
     <Worksection/>
     <PopularReview/>
     <Achievements/>
     <CTASection/>
     
    </div>
  );
}

export default Home;