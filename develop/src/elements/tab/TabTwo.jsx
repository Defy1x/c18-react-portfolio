import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class TabsTwo extends Component{
    render(){
        let
        tab1 = "Skill Set",
        tab2 = "Experience",
        tab3 = "Education & Certification";
        const { tabStyle } = this.props
        return(
            <div>
                {/* Start Tabs Area */}
                <div className="tabs-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Tabs>
                                    <TabList  className={`${tabStyle}`}>
                                        <Tab>{tab1}</Tab>
                                        <Tab>{tab2}</Tab>
                                        <Tab>{tab3}</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <div className="single-tab-content">
                                            <ul>
                                                <li>
                                                    Fullstack Development <span> - UI/UX</span>
                                                    Delight the user and make it work.
                                                </li>
                                                <li>
                                                    <a href="/service">UX/UI Design<span> - Development</span></a>
                                                    Websites, web experiences, ...
                                                </li>
                                                <li>
                                                    <a href="/service">Graphic and Logo Design <span> - Animation</span></a>
                                                    I like to move it move it.
                                                </li>
                                            </ul>
                                        </div>
                                    </TabPanel>
                                    
                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/service">Senior UX/UI Designer <span> - UBS</span></a> 2020 - Current
                                               </li>
                                               <li>
                                                   <a href="/service">Senior UX/UI Designer, Front-End Engineer<span> - S3 Partners</span></a> 2016 - 2020
                                               </li>
                                               <li>
                                                   <a href="/service">Senior UX/UI Designer<span> - WorldQuant </span></a> 2014- 2016
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/service">Awwwards.com <span>- Winner</span></a> 2019 - 2020
                                               </li>
                                               <li>
                                                   <a href="/service">CSS Design Awards <span>- Winner</span></a> 2017 - 2018
                                               </li>
                                               <li>
                                                   <a href="/service">Design nominees <span>- site of the day</span></a> 2013- 2014
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>






                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Tabs Area */}
            </div>
        )
    }
}



export default TabsTwo;
