import React from 'react';

const Content_1= () => { 
    return (
        <section className='pt-20  md:pt-40' >
        <div >
                <div className="Tagline w-64 medium pb-3">
                        Our product
                    </div>
            <div className='flex flex-col md:flex-row space-y-8 md:space-y-0 items-center md:justify-between'>
                <div className='basis-5/12 w-full  items-center '>
                    
                    <div className="LongHeadlineToTur min-w-72 semibold pb-5">Carbon Management</div>

                    <div className="SeparatedTheyLive min-w-72 medium pb-8">Measure carbon emissions and the supply chain of your business<br/>Develop de-carbonization projects<br/>Offset your carbon emissions through offset projects</div >

                    <div className="btn w-full sm:w-36 h-12 px-2.5 py-1.5 justify-start items-center">Book a demo</div>
                </div>
                <div className='basis-5/12 w-full items-center'>
                    <div className="LongHeadlineToTur  min-w-72  semibold pb-5">ESG strategy</div>

                    <div className="SeparatedTheyLive  min-w-72 medium pb-8">Integrate ESG strategies and governance frameworks<br/>Identify ESG risks and opportunities<br/>ESG dashboards & reports<br/>Generate a yearly ESG report</div>

                    <div className="btn w-full sm:w-36 h-12 px-2.5 py-1.5 justify-start items-center">Book a demo</div>
                </div>
            </div>
           
            
        </div>



        </section>
        );
};

export default Content_1;