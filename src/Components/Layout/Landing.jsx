import { Fragment } from 'react';
import Background from '../../Assets/marcel.jpg'
import Icon from '../../Assets/icons8.png'
import Umbrella from '../../Assets/umbrella.png'
import Handbag from '../../Assets/handbag.png'


function Landing() {
  return (
      <Fragment>
    <div className="w-auto h-screen bg-local bg-cover max-w-screen"  style={{backgroundImage:`url(${Background})`}}>

        {/* Background & Navbar */}
        <div className="invisible sm:visible sm:w-1/2 sm:ml-auto sm:mr-auto sm:flex sm:flex-row sm:justify-around sm:py-8 sm:font-bold sm:text-gray-800">
                <div className=''>
                    Home
                </div>
                <div>
                    Blog
                </div>
                <div>
                    Contact
                </div>
                <div>
                    Support
                </div>
        </div>

        <div className='text-center mt-48 text-4xl sm:mt-56 sm:text-6xl'>
            Connecting with <br></br>
            <span className=''>Artificial Intelligence</span>
        </div>


        <div className='text-center'>
            <small>Lorem ipsum dolor sit amet consecteur adipiscing elit</small>
        </div>

        <div className='mt-8 w-full text-center'>
            <button className='w-40 bg-gray-700 text-white py-2 rounded-full focus:outline-none font-bold'>Learn More</button>
        </div>

    </div>


<div className='mt-40'>
    <div className='w-auto text-center text-5xl font-bold'>
        What we do
    </div>

    <div className='w-full sm:w-2/3 ml-auto mr-auto flex flex-col text-center text-gray-500 sm:flex-row mt-16'>
        <div>
            <img src={Icon} alt='' className='icon-img'/>
            <b className='body-bold'>UI/UX</b> <br></br>
            <span>Landing Pages, User Flow, Wireframing, Prototyping, Mobile App Design, Web App</span>
        </div>
        <div>
            <img src={Icon} alt='' className='icon-img'/>
            <b className='body-bold'>UI/UX</b> <br></br>
            <span>Landing Pages, User Flow, Wireframing, Prototyping, Mobile App Design, Web App</span>
        </div>
        <div>
            <img src={Icon} alt='' className='icon-img'/>
            <b className='body-bold'>UI/UX</b> <br></br>
            <span>Landing Pages, User Flow, Wireframing, Prototyping, Mobile App Design, Web App</span>
        </div>
    </div>


    <div className='w-full sm:w-2/3 ml-auto mr-auto flex flex-col text-center text-gray-800 sm:flex-row mt-16'>
        <div>
            <img src={Icon} alt='' className='icon-img'/>
            <b className='body-bold'>UI/UX</b> <br></br>
            <span>Landing Pages, User Flow, Wireframing, Prototyping, Mobile App Design, Web App</span>
        </div>
        <div>
            <img src={Icon} alt='' className='icon-img'/>
            <b className='body-bold'>UI/UX</b> <br></br>
            <span>Landing Pages, User Flow, Wireframing, Prototyping, Mobile App Design, Web App</span>
        </div>
        <div>
            <img src={Icon} alt='' className='icon-img'/>
            <b className='body-bold'>UI/UX</b> <br></br>
            <span>Landing Pages, User Flow, Wireframing, Prototyping, Mobile App Design, Web App</span>
        </div>
    </div>
</div>

<div className='w-full mt-60'>
    <div className='w-auto text-center text-5xl font-bold'>
        Clients
    </div>

    <div className='w-auto text-center'>
        <small>We have been working with teams in the world</small>      
    </div>




<div className='w-screen mt-20 flex flex-col sm:flex-row justify-center'>

    <div className='hidden sm:flex sm:flex-col sm:justify-center sm:mx-4'>
    <div className='img-border'>
            <img src={Umbrella} alt=''/>
        </div>
    </div>

  <div className='hidden sm:flex sm:flex-col sm:justify-center sm:mx-4'>
    <div className='img-border'>
            <img src={Umbrella} alt=''/>
        </div>
        <div className='img-border'>
            <img src={Handbag} alt=''/>
        </div>
    </div>
    
    <div className='flex flex-col justify-center mx-4'>
        <div className='img-border'>
            <img src={Umbrella} alt='' />
        </div>
        <div className='img-border'>
            <img src={Handbag} alt='' />
        </div>
        <div className='img-border'>
            <img src={Umbrella} alt='' />
        </div>
    </div>

  <div className='hidden sm:flex sm:flex-col sm:justify-center sm:mx-4'>
    <div className='img-border'>
            <img src={Umbrella} alt=''/>
        </div>
        <div className='img-border'>
            <img src={Handbag} alt=''/>
        </div>
    </div>


    <div className='hidden sm:flex sm:flex-col sm:justify-center sm:mx-4'>
    <div className='img-border'>
            <img src={Umbrella} alt=''/>
        </div>
    </div>
</div>
    
    
</div>

<div className='mt-40'>
    <div className='w-auto text-center text-5xl font-bold'>
        Recent Works
    </div>
</div>
</Fragment>
  );
}

export default Landing;