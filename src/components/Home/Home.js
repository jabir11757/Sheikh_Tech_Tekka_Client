import React from 'react';
import Software from '../../images/Software.jpg'
import Graphics from '../../images/Graphics.jpg'
import Digital from '../../images/Digital.jpeg'
import Robotics from '../../images/Robotics.jpg'
import Cybersecurity from '../../images/Cybersecurity.avif'
import Game from '../../images/Game.jpeg'
import './Home.css'
import { Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={Software}
                        alt="First slide"
                        style={{ height: '450px' }}
                    />
                    <Carousel.Caption>
                        <h3>Software Development</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={Digital}
                        alt="Second slide"
                        style={{ height: '450px' }}
                    />
                    <Carousel.Caption>
                        <h3>Digital Marketing</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Graphics}
                        alt="Third slide"
                        style={{ height: '450px' }}
                    />
                    <Carousel.Caption>
                        <h3>Graphics Design</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Robotics}
                        alt="Third slide"
                        style={{ height: '450px' }}
                    />
                    <Carousel.Caption>
                        <h3>Robotics</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Cybersecurity}
                        alt="Third slide"
                        style={{ height: '450px' }}
                    />
                    <Carousel.Caption>
                        <h3>Cyber Security</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Game}
                        alt="Third slide"
                        style={{ height: '450px' }}
                    />
                    <Carousel.Caption>
                        <h3>Game Development</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div className='btn-course d-flex justify-content-center my-5'>
                <Button className='w-25' variant='outline-dark'><Link to='/courses'>Go to Course</Link></Button>
            </div>
        </div>
    );
};

export default Home;