import React from 'react'
import {Link,NavLink} from 'react-router-dom'

const Home = () => (
    <div className='container'>
        <div className="jumbotron mt-5">
            <h1 className="display-4">Welcome to Deetech Blog</h1>
            <p className="lead">we make all kinds of awesome blogs about various topics</p>
            <hr className="my-4"/>
                <p>Click on the button Below to check out our awesome Blog</p>
                
                <Link className="btn btn-primary btn-lg" exact to='/blogs' role="button">Check out our Blog</Link>


     </div>

        </div>


);

export default Home;