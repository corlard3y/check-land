import { Fragment } from 'react';
import Background from '../../Assets/marcel.jpg'
import Icon from '../../Assets/icons8.png'
import Umbrella from '../../Assets/umbrella.png'
import Handbag from '../../Assets/handbag.png'
import Iphone from '../../Assets/artificialart.jpg'
import Engine from '../../Assets/engine.jpg'
import EngineMan from '../../Assets/enginestuff.jpg'
import Human from '../../Assets/human.jpeg'
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './Landing.css'

function Landing() {

  const openNav = () => {
      if(
        document.getElementById("myNav")
      ){
    document.getElementById("myNav").style.width = "100%";
}
  }
  
  const closeNav = () => {
    if(
        document.getElementById("myNav")
      ){
    document.getElementById("myNav").style.width = "0%";
}}

  return (
      <Fragment>
    <div className="w-auto h-screen bg-local bg-cover max-w-screen"  style={{backgroundImage:`url(${Background})`}}>


        {/* Background & Navbar */}
        <div className='flex flex-row justify-between'>
        <div className="invisible sm:visible sm:w-1/2 sm:ml-auto sm:mr-auto sm:flex sm:flex-row sm:justify-around sm:py-8 sm:font-bold sm:text-gray-800">
                <a href="#!">
                    Home
                </a>
                <a href="#blog">
                    Blog
                </a>
                <a href="#contact">
                    Contact
                </a>
                <a href="#!">
                    Support
                </a>
        </div>


        <div className='m-8 block sm:hidden' onClick={()=>openNav()}>  
             <FontAwesomeIcon icon={faBars}/>
        </div>
        </div>



        <div className='text-center mt-48 text-4xl 2xl:mt-96 sm:mt-56 sm:text-6xl'>
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


    <div id="myNav" className="overlay">
  <a href="#!" className="closebtn" onClick={()=>closeNav()}>&times;</a>
  <div className="overlay-content">
    <a href="#!" onClick={()=>closeNav()}>Home</a>
    <a href="#blog" onClick={()=>closeNav()}>Blog</a>
    <a href="#contact" onClick={()=>closeNav()}>Contact</a>
    <a href="#!" onClick={()=>closeNav()}>Support</a>
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

<div className='mt-40' id='blog'>
    <div className='w-auto text-center text-5xl font-bold'>
        Blog
    </div>


    <div className='mt-28 flex flex-col sm:flex-row justify-center p-4 sm:p-0'>

    <div className='border border-gray-300 w-full sm:w-96 rounded-2xl my-8 sm:my-0 sm:mx-4'>
                <div>
                        <img src={Iphone} alt='' className='rounded-t-2xl' style={{width:'auto'}}/>
                </div>
                <div className='p-8'>
                        <b className=''>How we adding fun and playful ambience on online course</b>


                        <div className='flex flex-row mt-4'>
                            <div>
                                <img src={Human} alt='' style={{width:'50px',height:'50px',borderRadius:'160px'}}/>
                            </div>
                            <div className='flex flex-col mx-4'>
                                <span>
                                Dwinawan
                                </span>
                                <span>Mar 20,2020</span>
                            </div>
                        </div>
                </div>
    </div>



    <div className='border border-gray-300 w-full sm:w-96 rounded-2xl my-8 sm:my-0 sm:mx-4'>
                <div>
                        <img src={Engine} alt='' className='rounded-t-2xl' style={{width:'auto'}}/>
                </div>
                <div className='p-8'>
                        <b className=''>How we adding fun and playful ambience on online course</b>


                        <div className='flex flex-row mt-4'>
                            <div>
                                <img src={Human} alt='' style={{width:'50px',height:'50px',borderRadius:'160px'}}/>
                            </div>
                            <div className='flex flex-col mx-4'>
                                <span>
                                Dwinawan
                                </span>
                                <span>Mar 20,2020</span>
                            </div>
                        </div>
                </div>
    </div>


    <div className='border border-gray-300 w-full sm:w-96 rounded-2xl my-8 sm:my-0 sm:mx-4'>
                <div>
                        <img src={EngineMan} alt='' className='rounded-t-2xl' style={{width:'auto'}}/>
                </div>
                <div className='p-8'>
                        <b className=''>How we adding fun and playful ambience on online course</b>


                        <div className='flex flex-row mt-4'>
                            <div>
                                <img src={Human} alt='' style={{width:'50px',height:'50px',borderRadius:'160px'}}/>
                            </div>
                            <div className='flex flex-col mx-4'>
                                <span>
                                Dwinawan
                                </span>
                                <span>Mar 20,2020</span>
                            </div>
                        </div>
                </div>
    </div>


    </div>


    <div className='mt-4 sm:mt-8 text-indigo-500 flex justify-center'>
        <small>See more <FontAwesomeIcon icon={faChevronRight}/> </small>
    </div>

    
</div>


<div className='mt-36 w-full flex justify-center'>
    <div className='bg-blue-300 w-5/6 h-96 flex flex-col p-12 justify-around  rounded-md'>
            <div className='text-lg sm:text-6xl text-white'>
                Find the Support to <br></br> get your Start up growing. 
            </div>
            <div>
                <button className='nav-stuff'>Read More</button>
            </div>
    </div>
</div>


<div id='contact'>
    <Footer />
</div>
</Fragment>
  );
}

export default Landing;
