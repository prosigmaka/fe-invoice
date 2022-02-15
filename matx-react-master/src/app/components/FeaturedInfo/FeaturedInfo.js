import React from 'react'
import "./FeaturedInfo.css"
import { ArrowDownward, ArrowUpward } from '@mui/icons-material'

const FeaturedInfo = () => {
    return (
        <>
            <div className="featured">
                <div className="featuredItem one">
                    <span className="featuredTitle">
                        Total Puchase Order
                    </span>
                    <div className="featuredNumberContainer">
                        <span className="featuredNumber">
                            1.234
                        </span>
                        <span className="featuredNumberRate">
                            - 0.4%  
                            {/* - 0.4% <ArrowDownward className="featuredIcon negative" />  */}
                        </span>
                    </div>
                    <span className="featuredSub">
                        This Year
                    </span>
                </div>
                <div className="featuredItem two">
                    <span className="featuredTitle">
                        Unpaid Payment
                    </span>
                    <div className="featuredNumberContainer">
                        <span className="featuredNumber">
                            15
                        </span>
                        <span className="featuredNumberRate">
                            + 1.1% 
                            {/* + 1.1% <ArrowUpward className="featuredIcon" />  */}
                        </span>
                    </div>
                    <span className="featuredSub">
                        This Year
                    </span>
                </div>
                <div className="featuredItem three">
                    <span className="featuredTitle">
                        Overdue Payment
                    </span>
                    <div className="featuredNumberContainer">
                        <span className="featuredNumber">
                            29
                        </span>
                        <span className="featuredNumberRate">
                            + 4.6%  
                            {/* + 4.6% <ArrowUpward className="featuredIcon" />  */}
                        </span>
                    </div>
                    <span className="featuredSub">
                        This Year
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
                            105
                        </span>
                        <span className="featuredNumberRate">
                            + 10.0% 
                            {/* + 10.0% <ArrowUpward className="featuredIcon" />  */}
                        </span>
                    </div>
                    <span className="featuredSub">
                        This Year
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
                            - 15.3% 
                            {/* - 15.3% <ArrowDownward className="featuredIcon negative" />  */}
                        </span>
                    </div>
                    <span className="featuredSub">
                        This Year
                    </span>
                </div>
                <div className="featuredItem six">
                    <span className="featuredTitle">
                        Total Amount
                    </span>
                    <div className="featuredNumberContainer">
                        <span className="featuredNumber">
                            108
                        </span>
                        <span className="featuredNumberRate">
                            - 2.9% 
                            {/* - 2.9% <ArrowDownward className="featuredIcon negative" />  */}
                        </span>
                    </div>
                    <span className="featuredSub">
                        This Year
                    </span>
                </div>
            </div>
        </>
    )
}

export default FeaturedInfo
