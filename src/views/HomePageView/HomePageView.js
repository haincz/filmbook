import React from 'react';
import HomepageListWrapper from '../../components/ListsWrapper/HomepageListWrapper'
import MetaTags from 'react-meta-tags';


const HomePageView = () => (

  <div className="shell">
    <MetaTags>
      <title>Movies, Serials - filmbooks - your movies library</title>
    </MetaTags>
    <HomepageListWrapper />
  </div>

)

export default HomePageView;
