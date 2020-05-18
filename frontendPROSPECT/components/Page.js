import React, {Component} from 'react';

class Page extends Component {
    render() {
        return (
            <div>
            <p>Call me Masta Prospecta!</p>
            {this.props.children}   
            </div>
        );
    }
}

export default Page;