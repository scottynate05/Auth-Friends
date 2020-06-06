import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';

class FriendsList extends React.Component {
    state = {
        friends: [],
        isLoading: false
    }

    componentDidMount() {
        this.getFriendsList();
    }

    getFriendsList = () => {
        this.setState({ ...this.state, isLoading: true });
        axiosWithAuth()
            .get('/friends')
            .then(res => {
                console.log('friends: ', res)
                this.setState({ friends: res.data })
                this.setState({ ...this.state, isLoading: false })
            })
            .catch(err => {
                console.log('err: ', err)
                this.setState({ ...this.state, isLoading: false })
            })
    }

    render() {
        return (
            <div className='FrendsList'>
                <h2>Your Friends!</h2>
                {this.state.isLoading}
                <Row>
                    {this.state.friends.map(friend => 
                        <Col sm='4' key={friend.id}>
                            <Card body>
                                <CardTitle>{`${friend.name}`}</CardTitle>
                                <CardText>{`Age: ${friend.age}, Email: ${friend.email}`}</CardText>
                                <CardText>{`ID: ${friend.id}`}</CardText>
                            </Card>
                        </Col>
                    )}
                </Row>
            </div>
        )
    }
}

export default FriendsList;