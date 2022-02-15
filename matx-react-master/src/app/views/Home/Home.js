import React from 'react'
import Chart from '../../components/Chart/Chart'
import FeaturedInfo from '../../components/FeaturedInfo/FeaturedInfo'
import "./Home.css"
import { userData, userData2, userData3 } from "../../../fake-db/dummyData"
import FilterButton from 'app/components/FilterButton/FilterButton'
// import ChartWeek from 'app/components/Chart/ChartWeek'
// import ChartMonth from 'app/components/Chart/ChartMonth'
// import FeaturedInfoMonth from 'app/components/FeaturedInfo/FeaturedInfoMonth'
// import FeaturedInfoWeek from 'app/components/FeaturedInfo/FeaturedInfoWeek'

const Home = () => {
    return (
        <>
            <div className="home">
                <FeaturedInfo />
                <FilterButton />
                <Chart data={userData} title="Purchase Order / Year Analytics" grid dataKey="active_order" />
                {/* <ChartMonth data={userData2} title="Purchase Order / Month Analytics" grid dataKey="active_order" /> */}
                {/* <ChartWeek data={userData3} title="Purchase Order / Week Analytics" grid dataKey="active_order" /> */}
                {/* <FeaturedInfoMonth /> */}
                {/* <FeaturedInfoWeek /> */}
            </div>
        </>
    )
}

export default Home
