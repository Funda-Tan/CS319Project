import React from 'react'
import Group from './Group'

export default class GroupFrame extends React.Component {

    constructor() {
        super()
        this.state = {
            groupObj: null
        }
        this.handleJoinRequestClick = this.handleJoinRequestClick.bind(this)
        this.handleReviewButton = this.handleReviewButton.bind(this)
    }

    async handleJoinRequestClick() {
        console.log("Join request ", this.props.id)

        var response = fetch("https://681c5d6a-be24-42b8-b9e7-885328e48bf3.mock.pstmn.io/joinGroup?userid=1&groupid=1", {
            method: "POST",
        })

        var result = (await response).ok;

        if (result === true) {
            alert("Join Request Successful!")
        }
        console.log("response", result)

    }


    handleReviewButton() {

        this.props.handleReview(this.props.id);
    }
    render() {
        return (
            <div className="field6">
                <Group id={this.props.id} ></Group>
                <div>{
                    this.props.student ?
                        <button onClick={this.handleJoinRequestClick}>Join Request</button>
                        :
                        <p></p>
                }
                </div>
                <button type="button" onClick={this.handleReviewButton}>Review </button>
            </div>
        )
    }
}


