import React from 'react'
import resourceImg from '../../assets/resource.png'
// COMPONENTS


const Resource = () => {
    return (
        <div className="resource">
            <div className="resource-left">
                <div className="resource-left-center">
                    <img src={resourceImg} alt="resource-right-pic" />
                </div>
            </div>

            <div className="resource-right">
               <div className="resource-right-center">
                    <h1>Study Book and Resources</h1>
                    <h1>All in one shelf</h1>
                    <p>Study with IWE</p>
                    <p>Search for books and resources</p>
                        <button type='button'>Upload Resources</button>
               </div>
            </div>
        </div>
    )
}

export default Resource;
