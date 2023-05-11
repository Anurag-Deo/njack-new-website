import React from 'react'
import { Chrono } from "react-chrono";
// import data from "./resourcedata";

const Resources = ({data}) => {
  return (
    <div style={{
      fontFamily: 'sans-serif',
      textAlign: 'center',
      fontFamily: 'Nunito, sans-serif',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {data ? <div style={{ width: "95%" }}>
        <Chrono
          items={data}
          itemWidth={500}
          mode="VERTICAL_ALTERNATING"
          showAllCardsHorizontal
          cardWidth={500}
          cardHeight={300}
          contentDetailsHeight={100}
          fontSizes={{
            title: "1rem"
          }}
          slideShow
        />
      </div> : null}
    </div>
  )
}

export default Resources
