import React from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const HomeTabs = () => {
    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>Race Cars</Tab>
                    <Tab>Police Cars</Tab>
                    <Tab>Heavy Cars</Tab>
                </TabList>

                <TabPanel>
                    <div className='flex gap-4'>
                        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img src="https://i.ibb.co/qx4TWhc/download-2.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Go-Kart</h2>
                                <p>Price: $49.99</p>
                                <p>Rating: 4.8</p>
                                <div className="card-actions justify-end">
                                    <Link to='/toyDetails/648aebbc8ec5b4d13dd5c53b'><button className="btn btn-primary">View details</button></Link>
                                </div>
                            </div>
                        </div>
                        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img src="https://i.ibb.co/Sd7gYZj/download-3.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Race Track Set</h2>
                                <p>Price: $29.99</p>
                                <p>Rating: 4.2</p>
                                <div className="card-actions justify-end">
                                    <Link to='/toyDetails/648aebbc8ec5b4d13dd5c537'><button className="btn btn-primary">View details</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='flex gap-4'>
                        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img src="https://i.ibb.co/yRzrpxK/download-1.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Police Cars</h2>
                                <p>Price: $14.99</p>
                                <p>Rating: 4.5</p>
                                <div className="card-actions justify-end">
                                    <Link to='/toyDetails/648aebbc8ec5b4d13dd5c539'><button className="btn btn-primary">View details</button></Link>
                                </div>
                            </div>
                        </div>
                        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img src="https://i.ibb.co/SfS0HBk/download.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Remote Control Car</h2>
                                <p>Price: $39.99</p>
                                <p>Rating: 4.6</p>
                                <div className="card-actions justify-end">
                                    <Link to='/toyDetails/648aebbc8ec5b4d13dd5c536'><button className="btn btn-primary">View details</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='flex gap-4'>
                        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img src="https://i.ibb.co/PZ5K8Nc/240-F-173999830-EUMC9rxjx-OMBFkz6c-PGwg-VSGBW9k-Rii-W.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Monster Truck</h2>
                                <p>Price: $24.99</p>
                                <p>Rating: 4.3</p>
                                <div className="card-actions justify-end">
                                    <Link to='/toyDetails/648aebbc8ec5b4d13dd5c53a'><button className="btn btn-primary">View details</button></Link>
                                </div>
                            </div>
                        </div>
                        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img src="https://i.ibb.co/nbPjMxS/240-F-225344168-4u-Vj-Ffjz-Kpj-J2dq-Q8-WB70e-Edvh84-CCt7.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Construction Vehicle Set</h2>
                                <p>Price: $19.99</p>
                                <p>Rating: 4</p>
                                <div className="card-actions justify-end">
                                    <Link to='/toyDetails/648aebbc8ec5b4d13dd5c538'><button className="btn btn-primary">View details</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default HomeTabs;