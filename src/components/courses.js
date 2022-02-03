import React from 'react';
import { Link } from 'react-router-dom';
import { darasahuru, designs, elia1, group_people, phina, world } from './images';
import { BiStar } from 'react-icons/bi';

function Courses() {
    return <>
        <header id="header" className="d-flex align-items-center ">
            <div className="container d-flex justify-content-between align-items-center">
                <div className="logo">
                    <Link to="/"><img src={darasahuru} alt="" className="img-fluid" /></Link>
                </div>
                <nav id="navbar" className="navbar">
                    <ul>
                        <li><Link to="/">Log in</Link></li>
                        <li><Link to="/">Courses</Link></li>
                        <li><Link to="/">Sign up</Link></li>
                        <li><Link to="/">Forums</Link></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>
                {/* <!-- .navbar --> */}
            </div>
        </header>

        <main className="mt-5">
            {/* <!-- ======= What is Darasa Huru ======= --> */}
            <section className="intro">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 intro-img">
                            <img src={darasahuru} className="img-fluid" alt="" />
                            <Link to="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="play-btn mb-4"></Link>
                        </div>

                        <div className="col-lg-6 p-5">
                            <h4 className="title"><Link to="/">Get to know Darasa Huru</Link></h4>
                            <p className="description">Darasa huru is a platform to help anyone to get knowledge of variety
                                of stuffs
                                going
                                on in the world
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End What is Darasa Huru --> */}

            <div className="mid_title">
                <h2 className="text-center">Top Rated Courses</h2>
            </div>

            {/* <!-- ======= Courses ======= --> */}
            <section className="wrapper">
                {/* <!-- Grow Business course --> */}
                <div className="mb-5">
                    <div className="card text-white card-has-bg"
                        style={{ backgroundImage: `url(${designs})` }}>
                        <div className="card-img-overlay d-flex flex-column">
                            <div className="card-body">
                                <small className="card-meta mb-2">Business</small>
                                <h4 className="card-title mt-0 "><Link to="/" className="text-white">Grow your business:
                                    Master customer relationships and marketing</Link></h4>
                                <small><i className="bi bi-clock"></i> October 15, 2020</small>
                            </div>
                            <div className="card-footer">
                                <div className="long">
                                    <i className="bi bi-stopwatch" style={{ fontSize: "2rem", color: "cornflowerblue" }}></i>
                                    <h6 className="my-0 text-white d-block">About 20 mins</h6>
                                </div>
                                <div className="rated text-white">
                                    <span><BiStar /></span>
                                    <h4>Highly rated by users</h4>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="extra">
                        <Link to="/">See more grow business courses
                        </Link>
                    </div>
                </div>

                {/* <!-- Save Earth course --> */}
                <div className="mb-5">
                    <div className="card text-white card-has-bg"
                        style={{ backgroundImage: `url(${world})` }}>
                        <div className="card-img-overlay d-flex flex-column">
                            <div className="card-body">
                                <small className="card-meta mb-2">Earth</small>
                                <h4 className="card-title mt-0 "><Link to="/" className="text-white">How you can help
                                    to change Global warming.
                                </Link></h4>
                                <small><i className="bi bi-clock"></i> October 15, 2020</small>
                            </div>
                            <div className="card-footer">
                                <div className="long">
                                    <i className="bi bi-stopwatch" style={{ fontSize: "2rem", color: "cornflowerblue" }}></i>
                                    <h6 className="my-0 text-white d-block">About 20 mins</h6>
                                </div>
                                <div className="rated">
                                    <i className="bi bi-star"></i>
                                    <i className="bi bi-star"></i>
                                    <i className="bi bi-star"></i>
                                    <i className="bi bi-star"></i>
                                    <i className="bi bi-star"></i>
                                    <h4>Highly rated by users</h4>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="extra">
                        <Link to="/">See more earth courses
                        </Link>
                    </div>
                </div>

                {/* <!-- Politics course --> */}
                <div className="mb-5">
                    <div className="card text-white card-has-bg"
                        style={{ backgroundImage: `url(${group_people})` }}>
                        <div className="card-img-overlay d-flex flex-column">
                            <div className="card-body">
                                <small className="card-meta mb-2">Politics</small>
                                <h4 className="card-title mt-0 "><Link to="/" className="text-white">How to lead your People
                                    in a good way.
                                </Link></h4>
                                <small><i className="bi bi-clock"></i> January 15, 2022</small>
                            </div>
                            <div className="card-footer">
                                <div className="long">
                                    <i className="bi bi-stopwatch" style={{ fontSize: "2rem", color: "cornflowerblue" }}></i>
                                    <h6 className="my-0 text-white d-block">About 50 mins</h6>
                                </div>
                                <div className="rated">
                                    <i className="bi bi-star"></i>
                                    <i className="bi bi-star"></i>
                                    <h4>Highly rated by users</h4>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="extra">
                        <Link to="/">See more politics courses
                        </Link>
                    </div>
                </div>

                <div className="more-course">
                    <Link to="/"> See more courses</Link>
                </div>
            </section>

            {/* <!-- ======= What to learn ======= --> */}
            <div className="mid_title">
                <h2 className="text-center">Not sure what to learn?
                    <i className="bx bx-confused"></i>
                </h2>
            </div>
            <section className="wrapper">

                <div className="row text-white">
                    <div className="col-md-5 learn-what get-job ">
                        <i className="bx bx-briefcase fs-1"></i>
                        <h2>Get a job</h2>
                    </div>
                    <div className="col-md-5 learn-what rise-brain">
                        <i className="bx bx-brain fs-1"></i>
                        <h2>Increase you knowledge</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5 learn-what get-career">
                        <i className="bx bxs-business fs-1"></i>
                        <h2>Get a career</h2>
                    </div>
                    <div className="col-md-5 learn-what find-passion">
                        <i className="bx bx-compass fs-1"></i>
                        <h2>Find you passion</h2>
                    </div>
                </div>

            </section>


            {/* <!-- ====== Feedback ===== --> */}
            <div className="mid_title">
                <h2 className="text-center">Feedback from people benefited by Darasa Huru</h2>
            </div>
            <section className="wrapper">
                <div className="container">

                    <div className="feedback">
                        <div className="row">
                            <div className="col-md-4">
                                <img src={elia1} className="avatar" alt="" />
                            </div>
                            <div className="col-md-8 comment">
                                <h3>Elia Mkumbo</h3>
                                <h4>Software Engineer</h4>
                                <p>
                                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                    Darasa huru is one of the best platform i have never seen. There is variety of courses
                                    to help you get want you want freely.
                                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                </p>
                                <ul>
                                    <li><i className="bi bi-check2-circle"></i>Grow your business:
                                        Master customer relationships and marketing.</li>
                                    <li><i className="bi bi-check2-circle"></i> How you can help
                                        to change Global warming.</li>
                                    <li><i className="bi bi-check2-circle"></i> How to lead your People
                                        in a good way.</li>
                                </ul>
                                <p>These are just few of my favorite courses in Darasa huru</p>
                            </div>
                        </div>
                    </div>

                    <div className="feedback">
                        <div className="row">
                            <div className="col-md-4">
                                <img src={phina} className="avatar" alt="" />
                            </div>
                            <div className="col-md-8 comment">
                                <h3>Martha Mwandambo</h3>
                                <h4>Graphics Designer</h4>
                                <p>
                                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                    Darasa huru is the best in town. What i like the most is its
                                    challenges in courses. I use Darasa Huru most of my free time.
                                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                </p>
                                <ul>
                                    <li><i className="bi bi-check2-circle"></i>How to follow your dreams.</li>
                                    <li><i className="bi bi-check2-circle"></i> Grow your business: Master customer
                                        relationships and marketing.</li>
                                    <li><i className="bi bi-check2-circle"></i>Nail your public speaking skills.</li>
                                </ul>
                                <p>These are some of many favorite courses present in Darasa huru for free.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>

        {/* <!-- ======= Footer ======= --> */}
        <footer id="footer" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500">
            <div className="footer-newsletter">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h4>Our Newsletter</h4>
                            <p>Kindly fill your Email to join our newsletter to get updates about Darasa Huru</p>
                        </div>
                        <div className="col-lg-6">
                            <form action="" method="post">
                                <input type="email" name="email" /><input type="submit" value="Subscribe" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-top">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-4 col-md-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right"></i> <Link to="/"> Home</Link></li>
                                <li><i className="bx bx-chevron-right"></i> <Link to="/"> About us</Link></li>
                                {/* <li><i className="bx bx-chevron-right"></i> <Link to="/"> Services</Link></li> */}
                                <li><i className="bx bx-chevron-right"></i> <Link to="/"> Terms of service</Link></li>
                                <li><i className="bx bx-chevron-right"></i> <Link to="/"> Privacy policy</Link></li>
                            </ul>
                        </div>


                        <div className="col-lg-4 col-md-6 footer-contact">
                            <h4>Contact Us</h4>
                            <p>
                                07 Serengeti Street <br />
                                Tabata, Dar-es-salaam<br />
                                United Republic of Tanzania <br /><br />
                                <strong>Phone:</strong> +255 724 234 223<br />
                                <strong>Email:</strong> darasahuru@co.tz<br />
                            </p>

                        </div>

                        <div className="col-lg-4 col-md-6 footer-info">
                            <h3>About Darasa Huru</h3>
                            <p>A platform created by patriotic Tanzanian youth.</p>
                            <div className="social-links mt-3">
                                <Link to="/" className="twitter"><i className="bx bxl-twitter"></i></Link>
                                <Link to="/" className="facebook"><i className="bx bxl-facebook"></i></Link>
                                <Link to="/" className="instagram"><i className="bx bxl-instagram"></i></Link>
                                <Link to="/" className="linkedin"><i className="bx bxl-linkedin"></i></Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container">
                <div className="copyright">
                    &copy; Copyright <strong><span>Darasa Huru</span></strong>. All Rights Reserved
                </div>
            </div>
        </footer>

        {/* <!-- End Footer --> */}
    </>
}

export default Courses;
