import { Button } from '@material-ui/core'
import React from 'react'
import "./SearchPage.css"
import SearchResult from './SearchResult'

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>62 stays · 26 August to 30 August · 2 guests</p>
                <h1>Stays Nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of Place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and Beds</Button>
                <Button variant="outlined">More Filters</Button>
            </div>
            <SearchResult
                img="https://photos.zillowstatic.com/cc_ft_768/ISbd8ohrwd0exo0000000000.jpg"
                location="Private room in center of Bay Area"
                title="Stay at this spacious Californian House"
                description="1 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen · Free Parking · Washing Machine"
                star={4.73}
                price="$30 / night"
                total="$117 total"
            />
            <SearchResult
                img="https://photos.zillowstatic.com/uncropped_scaled_within_1536_1152/ISnmnbhcty7j3u1000000000.webp"
                location="Private room in center of Bay Area"
                title="Independent Luxury Studio Apartment"
                description="2 guest · 3 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen"
                star={4.3}
                price="$40 / night"
                total="$157 total"
            />
            <SearchResult
                img="https://photos.zillowstatic.com/cc_ft_768/ISfozbghwqgny21000000000.jpg"
                location="Private room in center of Bay Area"
                title="San Francisco Studio Apartments"
                description="4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free Parking · Washing Machine"
                star={3.8}
                price="$35 / night"
                total="$207 total"
            />
            <SearchResult
                img="https://photos.zillowstatic.com/uncropped_scaled_within_1536_1152/ISf0tao9niy7w80000000000.webp"
                location="Private room in center of Bay Area"
                title="20 mins to San Jose, Excel Silicon Valley"
                description="1 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen · Free Parking · Washing Machine"
                star={4.1}
                price="$55 / night"
                total="$320 total"
            />
            <SearchResult
                img="https://photos.zillowstatic.com/uncropped_scaled_within_1536_1152/ISr12c880nl4g31000000000.webp"
                location="Private room in center of Bay Area"
                title="Spacious Peaceful Modern Bedroom"
                description="3 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Free Parking · Dry Cleaning"
                star={5.0}
                price="$60 / night"
                total="$450 total"
            />
            <SearchResult
                img="https://photos.zillowstatic.com/cc_ft_768/ISv4jyganig4ys0000000000.jpg"
                location="Private room in center of Bay Area"
                title="The Blue Room in San Francisco"
                description="2 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Washing Machine"
                star={4.23}
                price="$65 / night"
                total="$480 total"
            />
            <SearchResult
                img="https://photos.zillowstatic.com/uncropped_scaled_within_1536_1152/ISrtzspwmjseuu0000000000.webp"
                location="Private room in center of Bay Area"
                title="5 Star Luxury Apartment"
                description="3 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen · Free Parking · Washing Machine"
                star={3.85}
                price="$90 / night"
                total="$650 total"
            />
        </div>
    )
}

export default SearchPage
