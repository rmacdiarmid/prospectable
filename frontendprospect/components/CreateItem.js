import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
import Form from './styles/Form';
import formatMoney from '../lib/formatMoney';
import Error from './ErrorMessage';


const CREATE_ITEM_MUTATION = gql`
    mutation CREATE_ITEM_MUTATION (
        $title: String!
        $description: String!
        $price: Int!
        $image: String
        $largeImage: String
    )   {
        createItem(
            title: $title
            description: $description
            price: $price
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
        price: 25000000,
    };
    handleChange = e => {
        const { name, type, value } = e.target;
        const val = type ==='number' ? parseFloat(value) : value;
        this.setState({ [name]: val });
    }

    uploadFile = async e => {
        console.log('uploading file...');
        const files = e.target.files;
        const data = new FormData();
        data.append('file', files[0]);
        data.append('upload_preset', 'prospectable');

        const res = await fetch
        ('https://api.cloudinary.com/v1_1/macdiarmid-enterprises/image/upload', {
            method: 'POST',
            body: data
        });
        const file = await res.json();
        console.log(file);
        this.setState({
            image: file.secure_url,
            largeImage: file.eager[0].secure_url

        })
    };


    render() {
        return (
            <Mutation mutation={CREATE_ITEM_MUTATION} variables={this.state}>
                {(createItem, { loading, error }) => (

            <Form 
                onSubmit={async e => {
                    //Stop the form from submitting
                    e.preventDefault();
                    // call the mutation
                    const res = await createItem();
                    // change them to the single item page
                    console.log(res);
                    Router.push({
                        pathname: '/item',
                        query: { id: res.data.createItem.id },
                    });
                }}
            >
                <Error error={error} />
                <fieldset disabled={loading} aria-busy={loading}>
                <label htmlFor="file">
                        Image
                        <input 
                            type="file" 
                            id="file" 
                            name="file" 
                            placeholder="Upload an image" 
                            required 
                            value={this.state.file}
                            onChange={this.uploadFile}
                        />
                        {this.state.image && <img width="200" src={this.state.image} alt="Upload Preview"/>}
                    </label>
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

                    <label htmlFor="price">
                        Amount
                        <input 
                            type="number" 
                            id="price" 
                            name="price" 
                            placeholder="price" 
                            required 
                            value={this.state.price}
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