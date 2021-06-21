import React from "react"
import heart from '../assets/heart.svg'
import wallet from '../assets/wallet.svg'
import donation from '../assets/donation.svg'

const Believe = [

    {
        id: 2,
        icon: <img src={heart} alt="call_center" className="blue" />,
        title: "Become Volunteer",
        text: `Become a volunteer if you are motivated & ready to support people and the community.`,
    },
    {
        id: 1,
        icon: <img src={wallet} alt="support" className="green" />,
        title: "Quick Fundraise",
        text: `The simplest and quickest way to make a donation, so you can support people in need.`,
    },
    {
        id: 3,
        icon: <img src={donation} alt="donation" className="yellow" />,
        title: "Start Donating",
        text: `Start donating for our campaigns to support poor people and children returning to school.`,
    },

]

export default Believe