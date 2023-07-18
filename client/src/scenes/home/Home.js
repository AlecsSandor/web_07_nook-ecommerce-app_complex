import React from 'react'
import Banner from './Banner'
import TimerBanner from './TimerBanner/TimerBanner'
import TabsWithImages from '../../components/TabsWithImages'
import Testimonials from '../../components/Testimonials'
import TextVideoBanner from './TextVideoBanner'
import { g_1, g_3, g_4, g_10, g_9, g_8, g_7, g_2 } from '../../assets'
import ItemList from '../global/ItemList'
import GridBanners from './GridBanners/GridBanners'
import BlogPosts from './BlogPosts/BlogPosts'
import InstagramSections from './InstagramSection'

const Home = () => {
  
  return (
    <div
      style={{ backgroundColor: '#FFFFFF', width: '100%', overflow: 'hidden' }}
    >
      <Banner
        image={g_1}
        headingOne='BOOTS.'
        headingTwo='UPGRADED.'
        text={'Start anew with our freshly dropped styles'}
        buttonText={'Shop Men'}
        h={'100vh'}
      />
      <TabsWithImages
        firstTitle='Free Shipping'
        firstCaption='When you spend over $200'
        secondTitle='Hassle free returns'
        secondCaption='via Collect+ or Herms'
        thirdTitle='Genuine leather'
        thirdCaption='Highest quality leather made right here in the US'
        firstImage={g_2}
        secImage={g_7}
        firstImgT='MUST HAVE SHOES'
        secImgT='MUST HAVE SHOES'
        firstImgSub="WOMEN'S"
        secImgSub="MEN'S"
      />
      <ItemList title={'WOMENS'} sex={0} />
      <Banner
        image={g_3}
        headingOne='CHIPPING'
        text={'Introducing our new Chipping style.'}
        buttonText={'Learn more'}
        h={'70vh'}
      />
      <ItemList title={'MENS'} sex={1} />
      <TimerBanner image={g_4} deadline={'2023-09-30'} />
      <Testimonials />
      <TextVideoBanner />
      <GridBanners />
      <BlogPosts />
      <InstagramSections
        imageOne={g_10}
        imageTwo={g_9}
        imageThree={g_8}
        imageFour={g_7}
      />
    </div>
  )
}

export default Home
