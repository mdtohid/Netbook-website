import { faStar} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Achievement.css';
import achivementImg1 from '../../image/achievement1.png';
import { faArrowRight, faTrophy } from '@fortawesome/free-solid-svg-icons';
import githubIcon from '../../image/Ellipse3.png';

const Achievement = () => {
    return (
        <div className='row gx-0 achievement'>
            <div className='col marginMd' >
             <Card className='p-2 shadow border-0' style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title className='mb-4'><FontAwesomeIcon
                    className='text-primary' icon={faStar}/> 4.8 Rating</Card.Title>
                    <Card.Subtitle className="mb-3 text-muted">
                        <img src={achivementImg1} alt="" srcset=""/>
                        <small className='ms-1 text-primary'>+836k</small> Members</Card.Subtitle>
                    <Card.Text className='mb-4'>
                    More than 2 billion we people over countries use socibooks we to stay in touch with friends.
                    </Card.Text>
                    <Card.Link href="#" className='text-decoration-none'>Join Our Community
                    <FontAwesomeIcon style={{width:'10px'}}  className='ms-2'  icon={faArrowRight}></FontAwesomeIcon>
                    </Card.Link>
                </Card.Body>
              </Card>
            </div>

            <div className='col marginMd'>
             <Card className='p-2 shadow-sm border-0' style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title className='mb-4'><FontAwesomeIcon
                    className='text-primary' icon={faTrophy}/> Awards
                    </Card.Title>
                    <Card.Subtitle className="mb-3 text-muted">
                        <img src={githubIcon} className='me-1' alt="" srcset=""/>
                        Best of
                        <small className='mx-1 fs-6 text-danger'>2021</small>
                         on Github</Card.Subtitle>
                    <Card.Text className='mb-4'>
                    More than 2 billion we people over countries use socibooks we to stay in touch with friends.
                    </Card.Text>
                    <Card.Link href="#" className='text-decoration-none text-dark'>Go To Awards
                    <FontAwesomeIcon style={{width:'10px'}}  className='ms-2 ' icon={faArrowRight}></FontAwesomeIcon>
                    </Card.Link>
                </Card.Body>
              </Card>
            </div>

            <div className='col marginMd widthAchievement' >
                <sm>Our Achievement</sm><br />
                <h2>We are Connecting <br /> You The Digital Life.</h2>
                <p className=''>
                The scope the Social Media becomes crucial Is helps the business to directly engage with their needs and wants.
                </p>
                <Button className='mt-2 px-4 rounded'>Discover me
                <FontAwesomeIcon style={{width:'16px'}}  className='ms-2 ' icon={faArrowRight}></FontAwesomeIcon>
                </Button>
            </div>
        </div>
    );
};

export default Achievement;