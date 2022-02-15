import React, { useEffect, useState } from 'react'
import FeaturedInfo from '../../components/FeaturedInfo/FeaturedInfo'
import "./Home.css"
import { userData, userData2, userData3 } from "../../../fake-db/dummyData"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import ChartList from 'app/components/Chart/ChartList'
// import Chart from '../../components/Chart/Chart'
// import FilterButton from 'app/components/FilterButton/FilterButton'
// import ChartWeek from 'app/components/Chart/ChartWeek'
// import ChartMonth from 'app/components/Chart/ChartMonth'
// import FeaturedInfoMonth from 'app/components/FeaturedInfo/FeaturedInfoMonth'
// import FeaturedInfoWeek from 'app/components/FeaturedInfo/FeaturedInfoWeek'

const Home = () => {
    const [selected, setSelected] = useState("week");
    const [data, setData] = useState([]);

    const list = [
        {
        id: "week",
        title: "Week",
        },
        {
        id: "month",
        title: "Month",
        },
        {
        id: "year",
        title: "Year",
        },
    ];

    useEffect(() => {

        switch(selected) {
          case "week":
            setData(userData3);
            break;
          case "month":
            setData(userData2);
            break;
          case "year":
            setData(userData);
            break;
          default: 
            setData(userData3);
        }
    
      }, [selected]);


    return (
        <>
            <div className="home">
                <FeaturedInfo />
                <ul>
                    {list.map((item) =>(
                        <ChartList 
                        title={item.title}
                        id={item.id}
                        active={selected === item.id}
                        setSelected={setSelected}
                        />
                    ))}
                </ul>
                <div className="chart">
                    {/* {data.map((d) => ( */}
                        <><h3 className="chartTitle">
                            Purchase Order Analytics
                        </h3><ResponsiveContainer width="100%" aspect={4 / 1}>
                                <LineChart data={data}>
                                    <XAxis dataKey="month" stroke="#5550bd" />
                                    <YAxis dataKey="total_PO" stroke="#5550bd" />
                                    <Line type="monotone" dataKey="active_order" stroke="#5550bd" />
                                    <Tooltip />
                                    {data.grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
                                </LineChart>
                            </ResponsiveContainer></>
                    {/* ))} */}
                </div>
                {/* <Chart data={userData} title="Purchase Order Analytics" grid dataKey="active_order" /> */}
            </div>
        </>
    )
}

export default Home
