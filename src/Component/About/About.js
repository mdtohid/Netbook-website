import React from 'react';
import './About.css';
import about1 from '../../image/about1.png';
import about2 from '../../image/about2.png';
import about3 from '../../image/about3.png';

const   About= () => {
    return (
            <div className='row gx-0' >
           <div className='col aboutText' >
           <p>Whats netbooks?</p>
            <h1>Why Join to Netbook <br />
             Social Network?</h1>
            <p><small>
            Recent surveys have indicated that small <br />
             businesses recognise the need they have to connect with consumer.
            </small></p>
            <ul>
                <li>Group</li>
                <li>Messages</li>
                <li>Share</li>
            </ul>
           </div>
           <div className='col aboutImg'>
            <div className='row gx-0 align-items-center'>
            <div className='col about1'>
            <img src={about1} alt="" srcset="" />
            </div>
            <div className='col'>
                <div className='row gx-0 mb-4' >
                <img src={about2} alt="" srcset="" />
                </div>

                <div className='row gx-0'>
                <img src={about3} alt="" srcset="" />
                </div>
            </div>
            </div>
           </div>
        </div>
    );
};

export default About;