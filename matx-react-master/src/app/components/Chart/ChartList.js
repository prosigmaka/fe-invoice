import React from 'react'
import "./ChartList.css"

const ChartList = ({title, active, setSelected, id}) => {
  return (
    <>
        <li className={active ? "chartList active" : "chartList"} onClick={() => setSelected(id)}>
            {title}
        </li>    
    </>
  )
}

export default ChartList