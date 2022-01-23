import React from 'react'
import Chart from '../../components/Chart/Chart'
import FeaturedInfo from '../../components/FeaturedInfo/FeaturedInfo'
import "./Home.css"
import { userData } from "../../../fake-db/dummyData"

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
