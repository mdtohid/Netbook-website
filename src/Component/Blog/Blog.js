import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import blogImg1 from '../../image/blogImg1.png';
import blogImg2 from '../../image/blogImg2.png';
import blogImg3 from '../../image/blogImg3.png';
import member1 from '../../image/teamMember1.png';
import './Blog.css';

const Blog = () => {
    return (
        <div>
            <div className='text-center'>
            <p className='text-primary'>Get Our Aplication</p>
            <h1>Latest News</h1>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4 blog">
                <div className="col">
                        <div className="card border-0">
                            <img src={blogImg1} alt="" srcset=""  className='card-img-top'/>                
                            <div className="card-body d-flex">
                                <div className="col-1 line">
                                {/* .......line....... */}
                                </div>

                                <div className='col mx-1'>
                                    <h5 className="card-title">It Does Not Matter Hows Slowly go as Long</h5>
                                    <p className="card-text mt-3">
                                        <small>Continue Reading
                                            <FontAwesomeIcon icon={faArrowRight} className='blogArrow align-middle ms-1'></FontAwesomeIcon>
                                        </small> 
                                    </p>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="col">
                        <div className="card border-0">
                            <img src={blogImg2} alt="" srcset=""  className='card-img-top'/>                
                            <div className="card-body d-flex">
                                <div className="col-1 line">
                                {/* .......line....... */}
                                </div>

                                <div className='col mx-1'>
                                    <h5 className="card-title">Netbook Network Added New Photo Filter</h5>
                                    <p className="card-text text-primary mt-3">
                                        <small>Continue Reading
                                            <FontAwesomeIcon icon={faArrowRight} className='blogArrow align-middle ms-1'></FontAwesomeIcon>
                                        </small> 
                                    </p>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="col">
                        <div className="card border-0">
                            <img src={blogImg3} alt="" srcset=""  className='card-img-top'/>                
                            <div className="card-body d-flex">
                                <div className="col-1 line">
                                {/* .......line....... */}
                                </div>

                                <div className='col mx-1'>
                                    <h5 className="card-title">We Optimised Netbooks Better Navigation
                                    </h5>
                                    <p className="card-text mt-3">
                                        <small>Continue Reading
                                            <FontAwesomeIcon icon={faArrowRight} className='blogArrow align-middle ms-1'></FontAwesomeIcon>
                                        </small> 
                                    </p>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;