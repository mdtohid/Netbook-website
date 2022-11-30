import React from 'react';
import './TextImage.css';
import pic from '../../image/lamge.png';

const TextImage = () => {
    return (
                <div className='row gx-0'>
            <div className='col introText'>
                <button className='p-2 bg-info border-0 rounded mb-2'>Netbook community</button>
                <h1 className='mb-2'>Your Solutions For Community!</h1>
                <p className='mb-4'>More than 2 billion people in over countries use socibook to stay in touch with friends & family.</p>
                <button className='p-2 bg-primary border-0 rounded me-2 text-white '>About More</button>
                <button className='p-2  border border-info rounded'>Invite Friend</button>
            </div>
            <div className='col'>
            <img src={pic} className="avatarImg" alt="..."/>
            </div>   
        </div>
    );
};

export default TextImage;