import React, { Component } from 'react'
import Title from './Title';
import Photowall from './Photowall';
import AddPhoto from './AddPhoto';
import { Route } from 'react-router-dom';

export default class Main extends Component {
    constructor() {
        super();
        this.state = {
            posts:  [],
            screen: 'photos' //addPhoto
        }

        this.removePhoto = this.removePhoto.bind(this);
        this.navigate = this.navigate.bind(this);
        // this.addedPost = this.addedPost.bind(this);
    }

    fetchPhotos() {
        return [    
        {
            id: 0,
            description: "Nike snickers 1",
            imageLink: "http://picture-cdn.wheretoget.it/rq8aws-l-610x610-shoes-nike-snickers.jpg"
        },
        {
            id: 1,
            description: "Nike snickers 2",
            imageLink: "http://picture-cdn.wheretoget.it/rq8aws-l-610x610-shoes-nike-snickers.jpg"
        },
        {
            id: 3,
            description: "Nike snickers 3",
            imageLink: "http://picture-cdn.wheretoget.it/rq8aws-l-610x610-shoes-nike-snickers.jpg"
        },]
    }

    navigate() {
        this.setState({
            screen: 'addPhoto'
        })
    }

    componentDidMount() {
        const posts = this.fetchPhotos();
        this.setState({
            posts
        })
    }

    // componentDidUpdate(prevProps, prevState) {
    //     console.log("updated safely")
    //     console.log(prevState.posts)
    //     console.log(this.state)
    // }

    removePhoto(postRemoved) {
        console.log(postRemoved.description);
        this.setState((state) => ({
            posts: state.posts.filter(post => post !== postRemoved)
        }))
    }

    addPhoto(postSubmitted) {
        this.setState((state) => ({
            posts: state.posts.concat([postSubmitted])
        }));
    }

    render() {
        console.log(this.state.posts)
        return (
            <div>
                {/* { this.state.screen === 'photos' && (
                    <div>    
                        <Title  title={'Photowall project'}/>
                        <Photowall posts={this.state.posts} onRemovePhoto={this.removePhoto} onNavigate = {this.navigate}/>
                    </div>
                    )
                }
                
                { this.state.screen === 'addPhoto' && (
                    <div>
                        <AddPhoto />
                    </div>
                    )
                } */}
                {/* instead of using state to control navigation lets use routes */}
                
                {/* effective for multiple components */}
                <Route exact path="/" render = {() => (
                    <div>    
                      <Title  title={'Photowall project'}/>
                      <Photowall posts={this.state.posts} onRemovePhoto={this.removePhoto} onNavigate = {this.navigate}/>
                  </div>
                )}/>

                <Route path="/AddPhoto" render = {({history}) => (
                    <div>
                      <AddPhoto onAddPhoto={(addedPost) => { 
                          this.addPhoto(addedPost)
                        // console.log(addedPost);
                        history.push('/');
                        }}/>
                    </div>
                )}/>

                {/* since its a single component */}
                {/* <Route path="/AddPhoto" component={AddPhoto} /> */}

            </div>
        )
    }
}
