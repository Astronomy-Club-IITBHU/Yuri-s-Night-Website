import React from 'react'
import './event.scss'
import Portfolio from '../portfolio/Portfolio'
import { motion } from "framer-motion";
import astropixel from './astropixel.jpg'
import astroquiz from './astroquiz.jpg'
import astrotalk from './astroTalk.jpg'
import cosmiccanva from './cosmiccanvas.jpg'
import cosmicscript from './cosmicscript.jpg'
import planethunt from './planethunt.jpg'
import telescon from './telescon.jpg'


const Event = () => {

    
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.1,duration:0.1}}   className='n-event-container'>
            <h2>Events</h2>
          <motion.div  className='n-event-card-container'>
                  <div className='n-event-card'>
                       <div className='n-event-img'>
                           <img src={astroquiz} className='event-info-img'></img>
                       </div>
                       <div className='n-event-info'>
                            <h3 className='n-event-title'>Astro Quiz</h3>
                            <p className='n-info'>
                            A celestial-themed trivia competition that challenges participants' knowledge of astronomy and space exploration.
                            </p>
                            <div className='n-btn'>
                                <button className='n-event-btn'>
                                    <a href='https://drive.google.com/file/d/19RzvJy0OrFSEPkpkWW9VYrLCJ6WgSS9d/view?usp=sharing'>
                                        Problem Statement
                                    </a>
                                </button>
                                <button className='n-event-btn'>
                                    <a>
                                        Register
                                    </a>
                                </button>
                            </div>
                            
                       </div>
                  </div>
          </motion.div>

          <motion.div  className='n-event-card-container'>
                  <div className='n-event-card'>
                       <div className='n-event-img'>
                       <img src={astrotalk} className='event-info-img'></img>
                       </div>
                       <div className='n-event-info'>
                            <h3 className='n-event-title'>Astro Talk</h3>
                            <p className='n-info'>
                            A celestial clash of intellects as contestants compete in debating astronomical topics, showcasing their knowledge and eloquence.
                            </p>
                            <div className='n-btn'>
                                <button className='n-event-btn'>
                                    <a href='https://drive.google.com/file/d/1lQPpnoxgwrS-UtZgsrGjdmONTWAKC84s/view?usp=sharing'>
                                        Problem Statement
                                    </a>
                                </button>
                                <button className='n-event-btn'>
                                    <a>
                                        Register
                                    </a>
                                </button>
                            </div>
                            
                       </div>
                  </div>
          </motion.div>

          <motion.div   className='n-event-card-container'>
                  <div className='n-event-card'>
                       <div className='n-event-img'>
                       <img src={astropixel} className='event-info-img'></img>
                       </div>
                       <div className='n-event-info'>
                            <h3 className='n-event-title'>Astro Pixels</h3>
                            <p className='n-info'>
                            Explore the universe through a cutting-edge lens, utilizing deep learning and computer vision to unlock the secrets of space within celestial images.
                            </p>
                            <div className='n-btn'>
                                <button className='n-event-btn'>
                                    <a href='https://drive.google.com/file/d/1cexZBDsABJDrJVZb3oo4fNjjteVBYnJ_/view?usp=sharing'>
                                        Problem Statement
                                    </a>
                                </button>
                                <button className='n-event-btn'>
                                    <a href="https://forms.gle/Sq3BSPfNYxm54pNb7">
                                        Register
                                    </a>
                                </button>
                            </div>
                            
                       </div>
                  </div>
          </motion.div>

          <motion.div   className='n-event-card-container'>
                  <div className='n-event-card'>
                       <div className='n-event-img'>
                       <img src={cosmiccanva} className='event-info-img'></img>
                       </div>
                       <div className='n-event-info'>
                            <h3 className='n-event-title'>Cosmic Canvas</h3>
                            <p className='n-info'>
                            A stellar showdown of artistic prowess, where participants vie to capture the beauty of the cosmos on canvas, blending imagination and skill in a celestial contest.
                            </p>
                            <div className='n-btn'>
                                <button className='n-event-btn'>
                                    <a href='https://drive.google.com/file/d/1duUV7VYTgQIkqzBKFEEf0C3V4WMj94oq/view?usp=sharinghttps://drive.google.com/file/d/1duUV7VYTgQIkqzBKFEEf0C3V4WMj94oq/view?usp=sharing'>
                                        Problem Statement
                                    </a>
                                </button>
                                <button className='n-event-btn'>
                                    <a href='https://unstop.com/competitions/cosmic-canvas-iit-bhu-944532'>
                                        Register
                                    </a>
                                </button>
                            </div>
                            
                       </div>
                  </div>
          </motion.div>

          <motion.div  className='n-event-card-container'>
                  <div className='n-event-card'>
                       <div className='n-event-img'>
                       <img src={cosmicscript} className='event-info-img'></img>
                       </div>
                       <div className='n-event-info'>
                            <h3 className='n-event-title'>Cosmic Script</h3>
                            <p className='n-info'>
                            Where quills meet quasars in a cosmic competition of literary prowess, as writers craft compelling articles exploring the wonders of the universe.
                            </p>
                            <div className='n-btn'>
                                <button className='n-event-btn'>
                                    <a href='https://drive.google.com/file/d/1i6jNq0JmFXcr8LrslQNMzsfieh9WSSVX/view?usp=sharing'>
                                        Problem Statement
                                    </a>
                                </button>
                                <button className='n-event-btn'>
                                    <a href='https://unstop.com/p/cosmic-script-yuris-night-iit-bhu-948491'>
                                        Register
                                    </a>
                                </button>
                            </div>
                            
                       </div>
                  </div>
          </motion.div>

          <motion.div   className='n-event-card-container'>
                  <div className='n-event-card'>
                       <div className='n-event-img'>
                       <img src={planethunt} className='event-info-img'></img>
                       </div>
                       <div className='n-event-info'>
                            <h3 className='n-event-title'>Planet Hunt</h3>
                            <p className='n-info'>
                            A celestial challenge of machine learning prowess, where participants race to identify exoplanets using cutting-edge algorithms in this thrilling competition.
                            </p>
                            <div className='n-btn'>
                                <button className='n-event-btn'>
                                    <a href='https://drive.google.com/file/d/1lQPpnoxgwrS-UtZgsrGjdmONTWAKC84s/view?usp=sharing'>
                                        Problem Statement
                                    </a>
                                </button>
                                <button className='n-event-btn'>
                                    <a href='https://unstop.com/hackathons/planet-hunt-iit-bhu-950022'>
                                        Register
                                    </a>
                                </button>
                            </div>
                            
                       </div>
                  </div>
          </motion.div>

          <motion.div  className='n-event-card-container'>
                  <div className='n-event-card'>
                       <div className='n-event-img'>
                       <img src={telescon} className='event-info-img'></img>
                       </div>
                       <div className='n-event-info'>
                            <h3 className='n-event-title'>Telescon</h3>
                            <p className='n-info'>
                            A hands-on experience in constructing your own telescope, merging education with practical astronomy, and bringing the cosmos closer to home.
                            </p>
                            <div className='n-btn'>
                                <button className='n-event-btn'>
                                    <a href='https://drive.google.com/file/d/10Zy3J29iwujvNJRGRy2e0aK2j8uXFaG1/view?usp=sharing'>
                                        Problem Statement
                                    </a>
                                </button>
                                <button className='n-event-btn'>
                                    <a href="https://forms.gle/iH6nYQPReJgJZ61U6">
                                        Register
                                    </a>
                                </button>
                            </div>
                            
                       </div>
                  </div>
          </motion.div>

          



          

          
             
          

 </motion.div>
  )
}

export default Event