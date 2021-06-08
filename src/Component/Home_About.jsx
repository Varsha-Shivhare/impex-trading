import React from 'react';
import { NavLink } from 'react-router-dom';
import solar from '../images/solar.png'
const HomeAbout = () => {
 
  return (
    <>   
    <div id='HomeABout' className='pt-3 px-2'>
        <div className="row m-0 p-0">
            <div className="col-lg-8">
                <h1 className='text-center'>Impex Story</h1>
                <p>Shakti being one of the pioneers in manufacturing of energy efficient pumps and motors with its 
                latest series of new advanced solar energy operated pumps has emerged as a prestigious brand in domestic 
                and international markets.
                "Shakti" brand products are well received in the market as they are conforming to national international 
                standards coupled with superior quality and durability. Shakti offers advanced water pumping solutions to 
                a wide range of applications such as irrigation – flood and micro irrigation, horticulture, domestic water 
                supply, commercial and industrial applications and so on. With a leading position in solar pump markets in 
                India, Shakti exports a wide range of pumping products to over 100 countries globally.
                With a humble beginning way back in 1982, we had worked hard to get where we are today and have had 
                embraced every opportunity that has come in our way. Luckily, a combination of passion, grit and 
                determination signifies that our business has not only grown, it has truly flourished over the years. 
                And now, we are proud to say that we have achieved our goal “to become the best in class pumping solution 
                provider on a global scale.   
                    <NavLink to='/About'> 
                    <span className='text-light bg-info mx-3 px-1 rounded'>Read More</span>
                    </NavLink>
                    </p>
            </div>
            <div className="col-lg-4 d-lg-block d-none">
                <img className='w-100 pt-3' src={solar} alt="img not found"/>
            </div>
        </div>
    </div>
    </>
  );
};

export default HomeAbout;