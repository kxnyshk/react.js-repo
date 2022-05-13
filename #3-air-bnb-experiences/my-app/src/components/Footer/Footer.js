import React from 'react';
import ReactDOM from 'react-dom';

import './Footer.css';

function Footer() {
    
    // Support
    const HelpCentreLink = 'https://forms.gle/ihYg5RcyiKbgbarL6';
    const Covid19Advisory = 'https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public';
    const ReportConcern = 'https://forms.gle/2J84mXTxbm6VrDUF8';

    // Community
    const AfghanCrisis = 'https://www.afgdiasporahub.com/';
    const RohingyaCrisis = 'https://www.brac.net/';
    const UkraineCrisis = 'https://bank.gov.ua/en/';

    // Hosting
    const HostingAirbnb = 'https://www.airbnb.co.in/host/homes';
    const HostingResources = 'https://www.airbnb.co.in/resources/hosting-homes';
    const CommunityForum = 'https://community.withairbnb.com/t5/Community-Center/ct-p/community-center';

    // About
    const Careers = 'https://forms.gle/SyzmGFC1DoKFimw39';
    const Investors = 'https://forms.gle/eRH9ngwgb9Caz15DA';
    const Dev = 'https://kxnyshkdev.netlify.app';

    // Socials
    const Twt = 'https://twitter.com/'
    const Insta = 'https://instagram.com/'
    const Fb = 'https://facebook.com/'

    return(
        <footer>
            <div className='Footer-div'>
                <div className='Footer-col Footer-col-1'>
                    <div className='Footer-row-div Footer-row-div-1'>
                        <div className='Footer-row Footer-row-1 Footer-row-header'>Support</div>
                        <div className='Footer-row Footer-row-1 Footer-row-body'><a href={ReportConcern} target='_blank'>Report</a></div>
                        <div className='Footer-row Footer-row-1 Footer-row-body'><a href={HelpCentreLink} target='_blank'>Help Centre</a></div>
                        <div className='Footer-row Footer-row-1 Footer-row-body'><a href={Covid19Advisory} target='_blank'>Covid-19 Advisory</a></div>

                        <div className='Footer-row Footer-row-1 Footer-row-header'>Community</div>
                        <div className='Footer-row Footer-row-1 Footer-row-body'><a href={AfghanCrisis} target='_blank'>Support Afghan Crisis</a></div>
                        <div className='Footer-row Footer-row-1 Footer-row-body'><a href={RohingyaCrisis} target='_blank'>Support Rohingyas</a></div>
                        <div className='Footer-row Footer-row-1 Footer-row-body'><a href={UkraineCrisis} target='_blank'>Support Ukraine</a></div>
 
                        <div className='Footer-row Footer-row-1 Footer-row-header'>Hosting</div>
                        <div className='Footer-row Footer-row-1 Footer-row-body'><a href={HostingAirbnb} target='_blank'>Try hosting</a></div>
                        <div className='Footer-row Footer-row-1 Footer-row-body'><a href={HostingResources} target='_blank'>Explore resources</a></div>
                        <div className='Footer-row Footer-row-1 Footer-row-body'><a href={CommunityForum} target='_blank'>Community forum</a></div>
                    </div>
                </div>

                <div className='Footer-col Footer-col-2'>
                    <div className='Footer-row-div Footer-row-div-2'>
                        <div className='Footer-row Footer-row-2 Footer-row-header'>About</div>
                        <div className='Footer-row Footer-row-2 Footer-row-body'><a href={Careers} target='_blank'>Careers</a></div>
                        <div className='Footer-row Footer-row-2 Footer-row-body'><a href={Investors} target='_blank'>Investors</a></div>
                        <div className='Footer-row Footer-row-2 Footer-row-body'><a href={Dev} target='_blank'>Developers</a></div>
 
                        <div className='Footer-row Footer-row-2 Footer-row-header'>Socials</div>
                        <div className='Footer-row Footer-row-2 Footer-row-body'><span><a href={Insta} target='_blank'>Instagram <i className="Footer-icons fa fa-brands fa-instagram"></i></a></span></div>
                        <div className='Footer-row Footer-row-2 Footer-row-body'><span><a href={Fb} target='_blank'>Facebook <i className="Footer-icons fa fa-brands fa-facebook"></i></a></span></div>
                        <div className='Footer-row Footer-row-2 Footer-row-body'><span><a href={Twt} target='_blank'>Twitter <i className="Footer-icons fa fa-brands fa-twitter"></i></a></span></div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer