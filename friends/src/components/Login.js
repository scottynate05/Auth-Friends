import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { Input, Button } from 'reactstrap'

class Login extends React.Component {
    // state = {
    //     credentials: {
    //         username: '',
    //         password: ''
    //     }
    // };

    constructor() {
        super();
        this.state = {
            isLoading: false,
            credentials: {
                username: '',
                password: ''
            }
        }
    }

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    login = e => {
        e.preventDefault()
        axiosWithAuth()
            .post('/login', this.state.credentials)
            .then(res => {
                localStorage.setItem('token', res.data.payload)
                this.props.history.push('/protected')
                console.log(res);
            })
            .catch(err => console.log('err: ', err.message))
    }

    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <Input
                        type='text'
                        name='username'
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                    <Input
                        type='password'
                        name='password'
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                    <Button>Login</Button>
                </form>
            </div>
        )
    }
}

export default Login;