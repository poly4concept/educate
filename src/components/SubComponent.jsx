import React from 'react'
import services from '../constants/SubComponent'

const SubComponent = () => {
    return (
        <div className="sub_component">
            <h2>6 Tips For Better Giving</h2>
            <p className="tips">Experience and resources are never necessary to make a big difference, and even the smallest donation or time commitment can help. Follow these simple tips to ensure that you give with your head as well as your heart.</p>
            <div className="sub-center">
                {
                    services.map(service => {
                        const { id, icon, title, text } = service
                        return (
                            <div key={id} className="sub-card">
                                <div className="card-header">
                                    <div className="card-left">
                                        {icon}
                                    </div>
                                    <div className="card-right">
                                        {title}
                                    </div>
                                </div>

                                <div className="card-footer">
                                    <p>{text}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SubComponent