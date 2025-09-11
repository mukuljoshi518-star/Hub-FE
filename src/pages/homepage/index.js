import React from 'react'
import Header from '../../layout/header'
import Banner from './banner'
import { Chatbot } from './Chatbot'
import Footer from '../../layout/footer'
import CreativeAbout from './CreativeAbout'
import HeroLeadCapture from './HeroLeadCapture'
import ArtPromptCard from './artPrompt'
import Moodboard from './Moodboard'
import GlobalCuriosityMap from '../Trackdata/LifeTracker'

export const Homepage = () => {
  return (
    <div>
        <Banner/>
        <CreativeAbout/>
        <HeroLeadCapture/>
        <ArtPromptCard/>
        <Moodboard/>
        <Chatbot/>
        <GlobalCuriosityMap/>
        {/* <CaseListSection/> */}
    </div>
  )
}
