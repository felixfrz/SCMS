import React from 'react';
import ABOUT from './images/about.png';

const About = () => {
    return (
      <>
        {/* <!-- ======= About Section ======= --> */}
        <section id='about' className='about section-bg'>
          <div className='container' data-aos='fade-up'>
            <div className='text-center'>
              <h2 className='display-3'>About</h2>
              <h3 className=' display-5'>
                Find Out More{' '}
                <span className='bg-secondary text-white'>About Us</span>
              </h3>
              <p>
                Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
                adipisci expedita at voluptas atque vitae autem.
              </p>
            </div>

            <div className='row'>
              <div
                className='col-lg-6'
                data-aos='fade-right'
                data-aos-delay='100'
              >
                <img src={ABOUT} className='img-fluid' alt='about-us' />
              </div>
              <div
                className='col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center'
                data-aos='fade-up'
                data-aos-delay='100'
              >
                <h3>
                  Voluptatem dignissimos provident quasi corporis voluptates sit
                  assumenda.
                </h3>
                <p className='fst-italic'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul>
                  <li>
                    <i class='fa-brands fa-linkedin text-secondary'></i>
                    <div>
                      <h5>Ullamco laboris nisi ut aliquip consequat</h5>
                      <p>
                        Magni facilis facilis repellendus cum excepturi quaerat
                        praesentium libre trade
                      </p>
                    </div>
                  </li>
                  <li>
                    <i class='fa-brands fa-square-twitter text-secondary'></i>
                    <div>
                      <h5>Magnam soluta odio exercitationem reprehenderi</h5>
                      <p>
                        Quo totam dolorum at pariatur aut distinctio dolorum
                        laudantium illo direna pasata redi
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End About Section --> */}
      </>
    );
}

export default About
