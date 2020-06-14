import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import formatMoney from '../lib/formatMoney';

const CREATE_ITEM_MUTATION = gql`
    mutation CREATE_ITEM_MUTATION (
        $title: String!
        $description: String!
        $amount: Int!
        $image: String
        $largeImage: String
    )   {
        createItem(
            title: $title
            description: $description
            amount: $amount
            image: $image
            largeImage: $largeImage
        ) {
            id
        }
    }
`;


class CreateItem extends Component {
    state = {
        title: '122 Main St. Loomis, CA',
        description: 'Industrial Property with 8 units',
        image: 'property.jpg',
        largeImage: 'large_property.jpg',
        amount: 25000000,
    };
    handleChange = e => {
        const { name, type, value } = e.target;
        const val = type ==='number' ? parseFloat(value) : value;
        this.setState({ [name]: val });
    }

    render() {
        return (
            <Mutation mutation={CREATE_ITEM_MUTATION} variables={this.state}>
                {(createItem, { loading, error}) => (

            <Form onSubmit={(e) => {
                e.preventDefault();
                console.log(this.state);
                }}
            >
                <fieldset>
                    <label htmlFor="title">
                        Title
                        <input 
                            type="text" 
                            id="title" 
                            name="title" 
                            placeholder="Title" 
                            required 
                            value={this.state.title}
                            onChange={this.handleChange}
                        />
                    </label>

                    <label htmlFor="amount">
                        Amount
                        <input 
                            type="number" 
                            id="amount" 
                            name="amount" 
                            placeholder="Amount" 
                            required 
                            value={this.state.amount}
                            onChange={this.handleChange}
                        />
                    </label>

                    <label htmlFor="description">
                        Description
                        <textarea
                            id="description" 
                            name="description" 
                            placeholder="Enter A Description" 
                            required 
                            value={this.state.description}
                            onChange={this.handleChange}
                        />
                    </label>
                    <button type="submit">Submit</button>
                </fieldset>
            </Form>
          )}
        </Mutation>
      );
    }
}

export default CreateItem;
export { CREATE_ITEM_MUTATION };