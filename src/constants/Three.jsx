import React from "react"
import bank from '../assets/bank.svg'
import timer from '../assets/timer.svg'
import planet from '../assets/planet.svg'
import review from '../assets/review.svg'

const Three = [

    {
        id: 2,
        icon: <img src={bank} alt="bank"/>,
        title: "912,000",
        text: `Fundraising campaign in all time`,
    },
    {
        id: 1,
        icon: <img src={timer} alt="timer"/>,
        title: "$200m +",
        text: `Raised and counting donations`,
    },
    {
        id: 3,
        icon: <img src={planet} alt="planet"/>,
        title: "1,600",
        text: `Volunteers in worldwide suppor of patients`,
    },
    {
        id: 4,
        icon: <img src={review} alt="review"/>,
        title: "90%",
        text: `Good reviews from our clients `,
    },

]

export default Three