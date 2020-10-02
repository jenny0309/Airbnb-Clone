import React from 'react'
import Banner from './Banner'
import Card from './Card'
import './Home.css'

function Home() {
    return (
        <div className="home">
            <Banner />

            <div className="home__section">
                <Card
                    src="https://img1.goodfon.com/wallpaper/nbig/6/3b/girl-beach-summer-party-6505.jpg"
                    title="Online Experiences"
                    description="Unique activities we can do together, led by a world of hosts."
                />
                <Card
                    src="https://photos.zillowstatic.com/cc_ft_768/IS7m8b9l6swg4x1000000000.jpg"
                    title="Unique Stays"
                    description="Spaces that are more than just a place to sleep."
                />
                <Card
                    src="https://photos.zillowstatic.com/cc_ft_768/ISj3ifw91qb7kl1000000000.jpg"
                    title="Entire Homes"
                    description="Comfortable private places, with room for friends or family."
                />
            </div>
            <div className="home__section">
                <Card
                    src="https://photos.zillowstatic.com/uncropped_scaled_within_1536_1152/ISrp4anozdj2rt0000000000.webp"
                    title="3 Bedroom Flat in San Francisco"
                    description="Superhost with a stunning view of the beachside in Sunny Bay Area"
                    price="$130/night"
                />
                <Card
                    src="https://photos.zillowstatic.com/uncropped_scaled_within_1536_1152/IS3rhqt57dajpo0000000000.webp"
                    title="Penthouse in San Francisco"
                    description="Enjoy the amazing of San Francisco with this stunning penthouse"
                    price="$350/night"
                />
                <Card
                    src="https://photos.zillowstatic.com/uncropped_scaled_within_1536_1152/IS3fk068nfcnyx1000000000.webp"
                    title="1 Bedroom apartment"
                    description="Superhost with great amanities and a fabulous shopping complex nearby"
                    price="$70/night"
                />
            </div>
        </div>
    )
}

export default Home
