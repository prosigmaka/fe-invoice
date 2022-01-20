import React from 'react'
import Chart from '../../Components/Chart/Chart'
import FeaturedInfo from '../../Components/FeaturedInfo/FeaturedInfo'
import "./Home.css"
import { userData } from "../../dummyData"

const Home = () => {
    return (
        <>
            <div className="home">
                <FeaturedInfo />
                <Chart data={userData} title="Purchase Order Analytics" grid dataKey="active_order" />
            </div>
        </>
    )
}

export default Home
