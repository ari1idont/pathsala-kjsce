import React from 'react'
import './home.css'
import Landing from '../home-landing/landing'
import HomeCards from '../home-cards/home_cards'
import Reviews from '../home-reviews/reviews'

function Home() {
    return(
        <div className = "container-home">
            <Landing className = "landing-page"></Landing>
            <HomeCards className = "cards-page"></HomeCards>
            <Reviews className = "reviews-page"></Reviews>
        </div>
    )
}

export default Home