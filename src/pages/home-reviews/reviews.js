// import { render } from '@testing-library/react'
// import React, { Component } from 'react'
// import './reviews.css'
// import fire from "../home-reviews/fire"
// import StarRating from '../review/StarRating'
// class Reviews extends Component{
//     state={
//         text:""
//     }
//     handleText=e=>{
//         this.setState({
//             text:e.target.value
//     })
// }
// handleSubmit=e=>{
    
//     let messageRef = fire.database().ref('messages').orderByKey().limitToLast(100);
//     fire.database().ref('Contribution').push(this.state.text);
//     this.setState({
//         text : ""
//     })
// }

// // function Reviews() {
//     render(){
//         return(
//             <div className = "container-review">
//                 <div className = "heading">
//                     <h1>Review and suggestions</h1>
//                 </div>
//                 <div className = "subheading">
//                     <h2>For any review/suggestion or contribution to the content, fill the following form.</h2>
//                 </div>
//                 <div className = "review-form">
//                     <form className = "form-1">
//                         <div className = "name-div"><input className = "name-field" placeholder = "Name"></input></div>
//                         <div className = "email-div"><input className = "email-field" placeholder = "Email ID"></input></div>
//                     </form>
//                     <br /><br />
//                     <StarRating></StarRating>
//                     <form className = "ta-forms">
//                         <div className = "ta-div">
//                             <label>Review/Questions</label><br/>
//                             <input type = "textarea" onChange={this.handleText} className = "ta-field"></input>
//                         </div>
//                         <div className = "ta-div">
//                             <label>Text Resource Contribution</label><br/>
//                             <input type = "textarea" onChange={this.handleText} className = "ta-field"></input>
//                         </div>
//                         <div className = "ta-div">
//                             <label>Video Resource Contribution</label><br/>
//                             <input type = "textarea" onChange={this.handleText} className = "ta-field"></input>
//                         </div>
//                     </form>
//                     <button type = "button" className = "rev-submit" onClick={this.handleSubmit}>Submit</button>
//                 </div>
//             </div>
//         )
//     }
// }

// export default Reviews











import { render } from '@testing-library/react'
import React, { Component } from 'react'
import './reviews.css'
import fire from "./fire"
import StarRating from '../review/StarRating'

class Reviews extends Component{
    state={
         obj:{textName:"",textRev:"",textRead:"",textEmail:""}
    }
    handleText=e=>{
        this.setState({
            textEmail:e.target.value,
            textRev:e.target.value,
            textRead:e.target.value,
            textName:e.target.value}
    )
}


handleSubmit=e=>{
    
    let messageRef = fire.database().ref('messages').orderByKey().limitToLast(100);
    fire.database().ref('Contribution').push(this.state.obj);
    this.setState({
        textEmail:"",
        textRev : "",
        textRead:"",
        textName:""
    })
    document.getElementById("form-one").reset();
    document.getElementById("form-two").reset();
    
}
 

// function Reviews() {
    render(){
        return(
            <div className = "container-review">
                <div className = "heading">
                    <h1>Review and suggestions</h1>
                </div>
                <div className = "subheading">
                    <h2>For any review/suggestion or contribution to the content, fill the following form.</h2>
                </div>
                <div className = "review-form">
                    <form className = "form-1" id="form-one">
                        <div className = "name-div"><input className = "name-field" placeholder = "Name" onChange={this.handleText} ></input></div>
                        <div className = "email-div"><input className = "email-field" placeholder = "Email ID" onChange={this.handleText} ></input></div>
                    </form>
                    <br /><br />
                 <StarRating></StarRating>
                    <form className = "ta-forms" id="form-two">
                        <div className = "ta-div">
                            <label>Review/Questions</label><br/>
                            <input type = "textarea" onChange={this.handleText} className = "ta-field"></input>
                        </div>
                        <div className = "ta-div">
                            <label>Text Resource Contribution</label><br/>
                            <input type = "textarea" onChange={this.handleText} className = "ta-field"></input>
                        </div>
                        <div className = "ta-div">
                            <label>Video Resource Contribution</label><br/>
                            <input type = "textarea" onChange={this.handleText} className = "ta-field"></input>
                        </div>
                    </form>
                    <button type = "button" className = "rev-submit" onClick={this.handleSubmit}  value="Reset form" >Submit</button>
                </div>
                {/* <StarRating onClick={this.handleSubmit}></StarRating> */}
            </div>
        )
        
    }
     
}

export default Reviews