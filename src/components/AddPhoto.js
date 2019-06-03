import React, { Component } from 'react'

export default class AddPhoto extends Component {

    constructor() {
        super();

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        // console.log(event.target);
        const imageLink = event.target.elements.link.value;
        const description = event.target.elements.description.value;

        const post = {
            id: Number(new Date()),
            description: description,
            imageLink: imageLink
        }

        if ( imageLink && description ) {
            // console.log(post);
            this.props.onAddPhoto(post);
        }
    }

    render() {
        return (
            <div>
                <h1>Add Photo's Page</h1>

                <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="link" placeholder="Your Link" />
                        <input type="text" name="description" placeholder="Description" />
                        <button>Submit</button>
                    </form>
                </div>
                
            </div>
        )
    }
}
