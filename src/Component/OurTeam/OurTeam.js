import React from 'react';
import { Button } from 'react-bootstrap';
import './OurTeam.css';
import logo from '../../image/Group.png';
import member1 from '../../image/teamMember1.png';

const OurTeam = () => {
    return (
        <div className='text-center '>
            <div className='mt-5'>
                <p className='text-primary'>Valuable Team</p>
                <h1>Our Active Members</h1>
                <p>
                    <small>when an unknown printer took a galley of type and meeting <br /> fari scrambled it.</small>
                </p>
            </div>

            <button className='teamsButton rounded-3 border-0 '>
                <button className='border-0 memberButton rounded-4'>New</button>
                <button className='border-0 memberButton rounded-4'>Popular</button>
                <button className='border-0 memberButton rounded-4'>Active</button>
            </button>

            <div class="row teamCard row-cols-1 row-cols-md-4 g-4">
                <div class="col">
                    <div class="card h-100 p-1 shadow-sm border-0 memberCard">
                    <img className='memberImg' src={member1} alt=""/>
                    <div class="card-body">
                        <h5 class="card-title fw-bolder">Fahim Rahman</h5>
                        <p class="card-text">
                            <small>@rahman</small> 
                        </p>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 p-1 shadow-sm border-0 memberCard">
                    <img className='memberImg ' src={member1} alt=""/>
                    <div class="card-body">
                        <h5 class="card-title fw-bolder">Kazi Rahman</h5>
                        <p class="card-text">
                            <small>@rahman</small> 
                        </p>
                    </div>
                    </div>
                </div>
                <div class="col ">
                    <div class="card h-100 p-1 shadow-sm border-0 memberCard">
                    <img className='memberImg' src={member1} alt=""/>
                    <div class="card-body">
                        <h5 class="card-title fw-bolder">Masterero Ali</h5>
                        <p class="card-text">
                            <small>@rahman</small> 
                        </p>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 p-1 shadow-sm border-0 memberCard">
                    <img className='memberImg' src={member1} alt=""/>
                    <div class="card-body">
                        <h5 class="card-title fw-bolder">Alia Karon</h5>
                        <p class="card-text">
                            <small>@rahman</small> 
                        </p>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default OurTeam;