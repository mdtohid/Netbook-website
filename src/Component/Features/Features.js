import React from 'react';
import membersIcon from '../../image/membersIcon.png';
import groupsIcon from '../../image/group (2).png';
import forumIcon from '../../image/forum.png';
import customIcon from '../../image/custom.png';
import listBuilderIcon from '../../image/listBuilder.png';
import listScrollEffectsIcon from '../../image/listScrollEffects.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Features.css';


const Features = () => {
    return (
                //       <div className='row g-2'>
                //     <div className="card mb-3 p-2 col" style={{ maxWidth: '522px' }}>
                //         <div className="row">
                //             <div className="col-2">
                //             <img src={membersIcon} alt="" srcset="" />
                //             </div>
                //             <div className="col-8">
                //             <div className="card-body">
                //                 <h5 className="card-title">Members, Friends</h5>
                //                 <p className="card-text">Members, Friends Connection ( like <br /> followers ), Private Message</p>
                //             </div>
                //             </div>
                //         </div>
                //     </div>
                //     <div className="card mb-3 p-2 col" style={{ maxWidth: '522px' }}>
                //         <div className="row">
                //             <div className="col-2">
                //             <img src={membersIcon} alt="" srcset="" />
                //             </div>
                //             <div className="col-10">
                //             <div className="card-body">
                //                 <h5 className="card-title">Members, Friends</h5>
                //                 <p className="card-text">Members, Friends Connection ( like <br /> followers ), Private Message</p>
                //             </div>
                //             </div>
                //         </div>
                //     </div>
                // </div>

                <div className='features'>
                        <div className='featuresSize'>
                        <div className='text-center'>
                            <p className='text-primary'>Our Community</p>
                            <h1>Community Main Feature</h1>
                            <p>The wise man therefore always holds in these matters <br /> to this principle of selection.</p>
                        </div>
                        
                        <div className="row g-5 m-0">
                            <div className="col-6">
                                <div className="border bg-light row p-2 align-items-center rounded">
                                    <div className="col-md-3 col-12">
                                        <img src={membersIcon} alt="" srcset="" />
                                    </div> 

                                    <div className="col-md-9 col-12">
                                            <h5 className="card-title">Members, Friends</h5>
                                            <p className="card-text">Members, Friends Connection ( like <br /> followers ), Private Message</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6">
                                <div className="border bg-light row p-2 align-items-center rounded">
                                    <div className="col-md-3 col-12">
                                        <img src={groupsIcon} alt="" srcset="" />
                                    </div> 

                                    <div className="col-md-9 col-12">
                                            <h5 className="card-title">Members, Friends</h5>
                                            <p className="card-text">Members, Friends Connection ( like <br /> followers ), Private Message</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6">
                                <div className="border bg-light row p-2 align-items-center rounded">
                                    <div className="col-md-3 col-12">
                                        <img src={forumIcon} alt="" srcset="" />
                                    </div> 

                                    <div className="col-md-9 col-12">
                                            <h5 className="card-title">Members, Friends</h5>
                                            <p className="card-text">Members, Friends Connection ( like <br /> followers ), Private Message</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6">
                                <div className="border bg-light row p-2 align-items-center rounded">
                                    <div className="col-md-3 col-12">
                                        <img src={customIcon} alt="" srcset="" />
                                    </div> 

                                    <div className="col-md-9 col-12">
                                            <h5 className="card-title">Members, Friends</h5>
                                            <p className="card-text">Members, Friends Connection ( like <br /> followers ), Private Message</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6">
                                <div className="border bg-light row p-2 align-items-center rounded">
                                    <div className="col-md-3 col-12">
                                        <img src={listBuilderIcon} alt="" srcset="" />
                                    </div> 

                                    <div className="col-md-9 col-12">
                                            <h5 className="card-title">Members, Friends</h5>
                                            <p className="card-text">Members, Friends Connection ( like <br /> followers ), Private Message</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 ">
                                <div className="border bg-light row p-2 align-items-center rounded">
                                    <div className="col-md-3 col-12">
                                        <img src={listScrollEffectsIcon} alt="" srcset="" />
                                    </div> 

                                    <div className="col-md-9 col-12">
                                            <h5 className="card-title">Members, Friends</h5>
                                            <p className="card-text">Members, Friends Connection ( like <br /> followers ), Private Message</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>



                   

    );
};

export default Features;