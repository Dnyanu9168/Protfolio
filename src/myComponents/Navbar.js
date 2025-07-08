import React, { useEffect,useState  } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typewriter from 'typewriter-effect';


// import './App.css';

export default function Navbar() {
   const [isOpen, setIsOpen] = useState(false);
 const [showNavbar, setShowNavbar] = useState(true);
  let lastScrollY = window.scrollY;

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    

    const skillBars = document.querySelectorAll('.skill-bar .progress');
    const skillObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const bar = entry.target;
            bar.style.width = bar.dataset.progress;
            skillObserver.unobserve(bar);
          }
        });
      },
      { threshold: 0.5 }
    );
    skillBars.forEach(bar => skillObserver.observe(bar));

    document.querySelectorAll('.filter-btns button').forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        document.querySelectorAll('.project-card').forEach(card => {
          card.style.display =
            filter === 'all' || card.dataset.category === filter
              ? ''
              : 'none';
        });
      });
    });

    const backToTop = document.getElementById('backToTop');
    const scrollHandler = () => {
      if (backToTop) {
        backToTop.style.display = window.scrollY > 300 ? 'flex' : 'none';
      }

      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY < lastScrollY || currentScrollY < 10);
      lastScrollY = currentScrollY;
    };
    window.addEventListener('scroll', scrollHandler);
    if (backToTop) {
      backToTop.addEventListener('click', () =>
        window.scrollTo({ top: 0, behavior: 'smooth' })
      );
    }
 


    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <>
      <nav className={`navbar navbar-expand-lg  navbar-dark navbar-zoomin sticky-top ${showNavbar ? '' : 'd-none'}`}>
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <div className="logo-box">
              <span>D</span>
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navMenu">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-center">
              {/* <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">
                  Projects
                </a>
              </li> */}
              {/* <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li> */}
            </ul>
 
          </div>
                  </div>

      </nav>
      

 {/* Toggle Button */}
      <button className="sidebar-toggle" onClick={() => setIsOpen(!isOpen)}>
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
          <li><a href="#portfolio" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
        <div className="d-flex justify-content-center gap-4 mt-4">
  <div className="social-icons d-flex justify-content-center gap-3 mt-4">
  <a href="https://github.com/Dnyanu9168" className="icon-circle" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-github"></i>
  </a>
  <a href="https://www.linkedin.com/in/dnyaneshwar-tekane-788a8128b?" className="icon-circle" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-linkedin-in"></i>
  </a>
  <a href="https://x.com/BabluTekane_126?t=DlxcrgUBT-c63CJeSYQG5g&s=09" className="icon-circle" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-twitter"></i>
  </a>
</div>

  
</div>
      </div>

      
 <section id="home" class="text-center" data-aos="fade">
    <div class="container">
      <div class="card hero-card mx-auto p-4">
        <img
          src="https://png.pngtree.com/png-clipart/20231018/original/pngtree-business-portfolio-3d-character-illustration-png-image_13355679.png"
          alt="Profile"
          class="rounded-circle mb-3 mx-auto"
        />
        <h1 class="h4 mb-2 typewriter">Hi, I’m Dnyaneshwar Tekane</h1>
        <p class="text-muted mb-3 fade-in">A Passionate Java & React Developer</p>
        <div class="d-flex justify-content-center flex-wrap gap-2">
          <a href="#portfolio" class="btn btn-outline-primary">
            <i class="fas fa-eye me-1"></i> View CV
          </a>
          <a href="assets/UpdatedCV.pdf" download class="btn btn-primary">
            <i class="fas fa-download me-1"></i> Download CV
          </a>
        </div>
      </div>
    </div>
  </section>
 
  <section id="about" class="container text-center" data-aos="fade-down">
  <h2 class="section-title">About Me</h2>
  <p data-aos="fade-up">
    I recently completed my MCA and have a strong passion for developing responsive and user-friendly web applications. I specialize in Java, Spring Boot, React, and modern web technologies.
  </p>
  <p data-aos="fade-up" data-aos-delay="100">
    Currently, I am working at <strong>Cye Tech</strong> as a <strong>Software Engineer</strong>, where I contribute to building scalable and high-performance web applications.
  </p>
</section>

 <section id="skills" className="container text-center" data-aos="fade-up">
  <h2 className="section-title mb-4">Skills</h2>
  <div className="row justify-content-center">
    {/* Skill Bars */}
    <div className="col-12 col-md-6 mb-4" data-aos="zoom-in-up" data-aos-delay="100">
      <p className="mb-1 fw-bold">Java</p>
      <div className="skill-bar"><div className="progress" data-progress="90%"></div></div>
    </div>
    <div className="col-12 col-md-6 mb-4" data-aos="fade-left">
      <p className="mb-1 fw-bold">React</p>
      <div className="skill-bar"><div className="progress" data-progress="85%"></div></div>
    </div>
    <div className="col-12 col-md-6 mb-4" data-aos="fade-right">
      <p className="mb-1 fw-bold">SQL</p>
      <div className="skill-bar"><div className="progress" data-progress="80%"></div></div>
    </div>
    <div className="col-12 col-md-6 mb-4" data-aos="fade-left">
      <p className="mb-1 fw-bold">Spring Boot</p>
      <div className="skill-bar"><div className="progress" data-progress="75%"></div></div>
    </div>
  </div>

  {/* Icons Row */}
  <div className="row justify-content-center mt-5">
    <div className="col-6 col-md-3 mb-4" data-aos="flip-up">
      <i className="fab fa-html5 fa-2x text-danger"></i>
      <p className="mt-2">HTML</p>
    </div>
    <div className="col-6 col-md-3 mb-4" data-aos="flip-down">
      <i className="fab fa-css3-alt fa-2x text-primary"></i>
      <p className="mt-2">CSS</p>
    </div>
    <div className="col-6 col-md-3 mb-4" data-aos="flip-up">
      <i className="fab fa-js fa-2x text-warning"></i>
      <p className="mt-2">JavaScript</p>
    </div>
    <div className="col-6 col-md-3 mb-4" data-aos="flip-down">
      <i className="fab fa-bootstrap fa-2x" style={{ color: "#7952b3" }}></i>
      <p className="mt-2">Bootstrap</p>
    </div>
  </div>
</section>


 
  <section id="portfolio" class="container text-center" data-aos="fade-up">
    <h2 class="section-title">Projects</h2>
    <div class="filter-btns mb-4">
      <button class="btn btn-sm btn-outline-primary" data-filter="all">All</button>
      <button class="btn btn-sm btn-outline-primary" data-filter="web">Web</button>
      <button class="btn btn-sm btn-outline-primary" data-filter="java">Java</button>
    </div>
    <div class="row g-4">
      <div class="col-12 col-md-6 col-lg-4 project-card" data-category="web" data-aos="fade-right">
        <div class="card h-100"><div class="card-body"><h5 class="card-title">🌐 Portfolio Site</h5><p class="card-text">Responsive Bootstrap 5 portfolio deployed on GitHub.</p></div></div>
      </div>
      <div class="col-12 col-md-6 col-lg-4 project-card" data-category="java" data-aos="zoom-in">
        <div class="card h-100"><div class="card-body"><h5 class="card-title">🏥 Hospital System</h5><p class="card-text">Java Spring Boot app for appointment management.</p></div></div>
      </div>
      <div class="col-12 col-md-6 col-lg-4 project-card" data-category="web" data-aos="fade-left">
        <div class="card h-100"><div class="card-body"><h5 class="card-title">🌦️ Weather App</h5><p class="card-text">JavaScript + OpenWeather API for live forecasts.</p></div></div>
      </div>
       <div class="col-12 col-md-6 col-lg-4 project-card" data-category="web" data-aos="fade-left">
        <div class="card h-100"><div class="card-body"><h5 class="card-title">🌦️ Text Converter app </h5><p class="card-text">JavaScript + OpenWeather API for live forecasts.</p></div></div>
      </div>
    </div>
  </section>

  <section id="contact" class="container text-center" data-aos="fade-up">
    <h2 class="section-title">Contact Me</h2>
    <form class="row g-3 justify-content-center">
      <div class="col-12 col-md-6"><input type="text" class="form-control" placeholder="Your Name" required /></div>
      <div class="col-12 col-md-6"><input type="email" class="form-control" placeholder="Your Email" required /></div>
      <div class="col-12 col-md-8"><textarea class="form-control" rows="4" placeholder="Your Message"></textarea></div>
      <div class="col-12"><button type="submit" class="btn btn-primary px-5">Send Message</button></div>
    </form>
  </section>
  <div className="mt-4 d-flex justify-content-center gap-4">
  <a href="https://github.com/Dnyanu9168" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-github fa-2x text-white"></i>
  </a>
  <a href="https://www.linkedin.com/in/dnyaneshwar-tekane-788a8128b?" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-linkedin fa-2x text-white"></i>
  </a>
</div>


  
  <div id="backToTop" class="d-flex"><i class="fas fa-arrow-up m-auto"></i></div>


  <footer class="text-center py-4">
    <div class="container">
      <p>© 2025 Dnyaneshwar Tekane | All rights reserved.</p>
    </div>
  </footer>

    </>
  );
}
