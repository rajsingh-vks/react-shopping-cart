import React, { Component } from 'react';
import Orders from '../components/Orders';

export class AdminScreen extends Component {
    render() {
        return (
            <div>
                <h1>Orders</h1>
                <Orders/>
            </div>
        )
    }
}

export default AdminScreen
