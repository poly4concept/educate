import React from "react"
import love from '../assets/love.png'
import savings from '../assets/savings.png'
import talking from '../assets/talking.png'
import food from '../assets/food.png'
import teamwork from '../assets/teamwork.png'
import calendar from '../assets/calendar.png'

const SubComponent = [

    {
        id: 2,
        icon: <img src={love} alt="love" />,
        title: "Clarify your values",
        text: `Consider the type of charity you want to support—small or large; national, or international. Be proactive and don’t just give to the first one that solicits you.`,
    },
    {
        id: 3,
        icon: <img src={savings} alt="savings" />,
        title: "Think beyond dollars",
        text: `If you don’t have a lot of money, there are other ways to support a cause. Volunteering can be an option, especially for local charities.`,
    },
    {
        id: 4,
        icon: <img src={talking} alt="talking" />,
        title: "Focus on the mission",
        text: `Make sure a nonprofit has an easy-to-understand mission that aligns with your principles and beliefs. You can look up charities by category, size, and location.`,
    },
    {
        id: 1,
        icon: <img src={food} alt="food" />,
        title: "Decide on method of support",
        text: `What kind of impact do you want to have on the charity? Do you want to be an anonymous donor, organize events, or take on an even greater role?`,
    },
    {
        id: 5,
        icon: <img src={teamwork} alt="teamwork" />,
        title: "Get the facts",
        text: `Dig deeper to find a nonprofit that meets your requirements. Pay attention to most relevant to nonprofit performance factors —results, transparency, and leadership.`,
    },
    {
        id: 6,
        icon: <img src={calendar} alt="calendar" />,
        title: "Trust your instincts",
        text: `If you have concerns about a charity, don’t contribute. Instead, find another nonprofit that does similar work but makes you feel more comfortable.`,
    },

]

export default SubComponent