import React from 'react'
import support from "../images/Support.png"

const Service = ()=>{
    return(
        <>
        <div className="container mt-5">
            <h1  className='main_heading'>Service {"&"} Support</h1>
            <hr/>
            <div className="row">
                <div className="col-md-6">
                    <p>
                    The Company's service policy is aimed at ensuring proper and timely services to its customers 
                    across the country. It is committed to achieving complete customer satisfaction with excellence 
                    in service quality and support. The quality of service and service accessibility are steadily 
                    improving with the setting up of new branches and service centers thanks to the growth strategies 
                    being adopted by the company from time to time.
                    </p>
                    <p>
                    To achieve above service objectives, as on June 2020, company has a total of 266 authorized 
                    service centers pan India dealing with any customer complaints effectively within the 
                    stipulated time frame. Proper training is given to Service Engineers at service centers 
                    to handle various models of "Shakti" brand pumps and motors with focus on customer care. 
                    The service centers maintain essential stock of all critical spare parts to meet any spares 
                    requirements.
                    </p>
                    <p>
                    The quality of and service accessibility is steadily improving with setting up of new branches 
                    and service centers thanks to the growth strategies being adopted by the company from time to 
                    time.
                    </p>
                </div>
                <div className="col-md-6">
                    <img src={support} alt="Chicago"/>
                    <div className="row">
                        <div className="col-md-5 border">
                            <a download="" target='_blank' rel="noreferrer" href="https://www.dropbox.com/h?preview=6a_Casting_Details.pdf">
                                Download- Warranty matter of submersible moter
                            </a>
                        </div>
                        <div className="offset-2 border col-md-5">
                            <a download="" target='_blank' rel="noreferrer" href="https://www.dropbox.com/h?preview=6a_Casting_Details.pdf">
                                Download- Mechanicl shaft seal Failure
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Service;