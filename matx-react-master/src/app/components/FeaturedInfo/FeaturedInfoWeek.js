import React from 'react'
import "./FeaturedInfo.css"
import { ArrowDownward, ArrowUpward } from '@mui/icons-material'

const FeaturedInfoWeek = () => {
    return (
        <>
            <div className="featured">
                <div className="featuredItem one">
                    <span className="featuredTitle">
                        Total Puchase Order
                    </span>
                    <div className="featuredNumberContainer">
                        <span className="featuredNumber">
                            10
                        </span>
                        <span className="featuredNumberRate">
                            + 2% <ArrowUpward className="featuredIcon" /> 
                        </span>
                    </div>
                    <span className="featuredSub">
                        This Week
                    </span>
                </div>
                <div className="featuredItem two">
                    <span className="featuredTitle">
                        Unpaid Payment
                    </span>
                    <div className="featuredNumberContainer">
                        <span className="featuredNumber">
                            0
                        </span>
                        <span className="featuredNumberRate">
                            - 1% <ArrowDownward className="featuredIcon negative" /> 
                        </span>
                    </div>
                    <span className="featuredSub">
                        This Week
                    </span>
                </div>
                <div className="featuredItem three">
                    <span className="featuredTitle">
                        Overdue Payment
                    </span>
                    <div className="featuredNumberContainer">
                        <span className="featuredNumber">
                            1
                        </span>
                        <span className="featuredNumberRate">
                            - 1% <ArrowDownward className="featuredIcon negative" /> 
                        </span>
                    </div>
                    <span className="featuredSub">
                        This Week
                    </span>
                </div>
            </div>
            <div className="featured">
                <div className="featuredItem four">
                    <span className="featuredTitle">
                        Payment Received
                    </span>
                    <div className="featuredNumberContainer">
                        <span className="featuredNumber">
                            7
                        </span>
                        <span className="featuredNumberRate">
                            + 3% <ArrowUpward className="featuredIcon" /> 
                        </span>
                    </div>
                    <span className="featuredSub">
                        This Week
                    </span>
                </div>
                <div className="featuredItem five">
                    <span className="featuredTitle">
                        Pending Amount
                    </span>
                    <div className="featuredNumberContainer">
                        <span className="featuredNumber">
                            3
                        </span>
                        <span className="featuredNumberRate">
                            - 3% <ArrowDownward className="featuredIcon negative" /> 
                        </span>
                    </div>
                    <span className="featuredSub">
                        This Week
                    </span>
                </div>
                <div className="featuredItem six">
                    <span className="featuredTitle">
                        Total Amount
                    </span>
                    <div className="featuredNumberContainer">
                        <span className="featuredNumber">
                            10
                        </span>
                        <span className="featuredNumberRate">
                            + 2% <ArrowUpward className="featuredIcon" /> 
                        </span>
                    </div>
                    <span className="featuredSub">
                        This Week
                    </span>
                </div>
            </div>
        </>
    )
}

export default FeaturedInfoWeek
