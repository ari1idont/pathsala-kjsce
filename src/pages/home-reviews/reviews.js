import React from 'react'
import './reviews.css'

function Reviews() {
    return(
        <div className = "container-review">
            <div className = "heading">
                <h1>Review and suggestions</h1>
            </div>
            <div className = "subheading">
                <h2>For any review/suggestion or contribution to the content, fill the following form.</h2>
            </div>
            <div className = "review-form">
                <form className = "form-1">
                    <div className = "name-div"><input className = "name-field" placeholder = "Name"></input></div>
                    <div className = "email-div"><input className = "email-field" placeholder = "Email ID"></input></div>
                </form>
                <form className = "ta-forms">
                    <div className = "ta-div">
                        <label>Review/Questions</label><br/>
                        <input type = "textarea" className = "ta-field"></input>
                    </div>
                    <div className = "ta-div">
                        <label>Text Resource Contribution</label><br/>
                        <input type = "textarea" className = "ta-field"></input>
                    </div>
                    <div className = "ta-div">
                        <label>Video Resource Contribution</label><br/>
                        <input type = "textarea" className = "ta-field"></input>
                    </div>
                </form>
                <button type = "button" className = "rev-submit">Submit</button>
            </div>
        </div>
    )
}

export default Reviews