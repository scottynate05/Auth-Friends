import React from 'react'
import axiosWithAuth from '../utils/axiosWithAuth';
import { Button } from 'reactstrap';

class AddFriend extends React.Component{

    constructor(){
        super();
        this.state = { friend: {name: '', age: '', email: '' } }
    }

    submitHandler = (e) => {
        e.preventDefault();
        axiosWithAuth()
        .post("/friends", this.state.friend)
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err))
    }

    changeHandler = (e) => {
        this.setState( {friend: {...this.state.friend, [e.target.name]: e.target.value}})
        console.log(this.state)
    }

    render(){
        return(
            <div className="AddFriend">
                <h2>Add Friend</h2>
                <form onSubmit={this.submitHandler}>
                    <input onChange={this.changeHandler} placeholder="Name" name="name" />
                    <input onChange={this.changeHandler} placeholder="Age" name="age" />
                    <input onChange={this.changeHandler} placeholder="Email" name="email" />
                    <Button>Add Friend</Button>
                </form>
            </div>
        )
    }

}


export default AddFriend 