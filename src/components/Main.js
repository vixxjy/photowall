import React, { Component } from 'react'
import Title from './Title';
import Photowall from './Photowall'

export default class Main extends Component {
    constructor() {
        super();
        this.state = {
            posts:  []
        }

        this.removePhoto = this.removePhoto.bind(this);
    }

    fetchPhotos() {
        return [    
        {
            id: "0",
            description: "Nike snickers 1",
            imageLink: "http://picture-cdn.wheretoget.it/rq8aws-l-610x610-shoes-nike-snickers.jpg"
        },
        {
            id: "1",
            description: "Nike snickers 2",
            imageLink: "http://picture-cdn.wheretoget.it/rq8aws-l-610x610-shoes-nike-snickers.jpg"
        },
        {
            id: "2",
            description: "Nike snickers 3",
            imageLink: "http://picture-cdn.wheretoget.it/rq8aws-l-610x610-shoes-nike-snickers.jpg"
        },]
    }

    componentDidMount() {
        const posts = this.fetchPhotos();
        this.setState({
            posts
        })
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("updated safely")
        console.log(prevState.posts)
        console.log(this.state)
    }

    removePhoto(postRemoved) {
        console.log(postRemoved.description);
        this.setState((state) => ({
            posts: state.posts.filter(post => post !== postRemoved)
        }))
    }

    render() {
        return (
            <div>
                <Title  title={'Photowall project'}/>
                <Photowall posts={this.state.posts} onRemovePhoto={this.removePhoto}/>
            </div>
        )
    }
}
