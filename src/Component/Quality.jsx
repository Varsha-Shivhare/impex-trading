import React from 'react'
import {NavLink} from 'react-router-dom'
import qualityImage from '../images/quality.png'

const Quality  = ()=>{
    return(
        <>
        <div className="w-100 p-4">
        <h3 className='text-center'> Quality is the way of life</h3>
        <div className="row">
            <div className="col-md-6 col-12">
                <p>Shakti Pumps (India) Ltd. is committed to achieve total customer satisfaction by, 
                    manufacturing high quality pump set with global bench mark meeting customer expectations, 
                    providing timely supply and excellent services to our customers through team work and 
                    continual improvement. We are also committed to the environment protection, cleanliness, 
                    health, safety and welfare of our employees, and meeting expectations of other interested 
                    parties including the society.  We shall strive to maintain high degree of goodwill and 
                    brand image to emerge as a market leader in domestic as well as in international market. 
                    In this context, Shakti Pumps (India) Ltd. shall endeavour to…
                    <NavLink to='/Policy'> 
                        <span className='text-light bg-info mx-3 px-1 rounded'>Read More</span>
                    </NavLink>
                </p>    
            </div>
            <div className="col-lg-4 order-lg-3 order-sm-2 col-sm-6 p-0">
                <img src={qualityImage} alt=''/>
            </div>
        </div>
        </div>
        </>
    );
};
export default Quality;