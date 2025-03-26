import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={
            <>
              <nav className="navbar">
                <div className="logo">Tribu</div>
                <div className="nav-links">
                  <a href="#features">Features</a>
                  <a href="#about">About</a>
                  <a href="#contact">Contact</a>
                  <div className="auth-buttons">
                    <Link to="/login" className="nav-button login">Login</Link>
                    <Link to="/signup" className="nav-button signup">Sign Up</Link>
                  </div>
                </div>
              </nav>

              <section className="hero">
                <div className="hero-image">
                  <img src="/training-hero.jpg" alt="Man training squats in gym" />
                  <div className="hero-overlay"></div>
                </div>
                <div className="hero-content">
                  <h1>Transform Your Training Journey</h1>
                  <p>Create personalized training plans, track your progress, and achieve your fitness goals with our intuitive platform</p>
                  <div className="hero-buttons">
                    <button className="cta-button primary">Get Started</button>
                    <button className="cta-button secondary">Watch Demo</button>
                  </div>
                  <div className="hero-stats">
                    <div className="stat-item">
                      <span className="stat-number">50K+</span>
                      <span className="stat-label">Active Users</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-number">98%</span>
                      <span className="stat-label">Success Rate</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-number">100+</span>
                      <span className="stat-label">Training Plans</span>
                    </div>
                  </div>
                </div>
              </section>

              <section id="features" className="features">
                <h2>Why Choose Tribu?</h2>
                <div className="feature-grid">
                  <div className="feature-card">
                    <div className="feature-icon">📊</div>
                    <h3>Smart Planning</h3>
                    <p>AI-powered training plans that adapt to your progress and goals</p>
                  </div>
                  <div className="feature-card">
                    <div className="feature-icon">🎯</div>
                    <h3>Goal Tracking</h3>
                    <p>Real-time analytics and progress visualization to keep you motivated</p>
                  </div>
                  <div className="feature-card">
                    <div className="feature-icon">🤝</div>
                    <h3>Community Support</h3>
                    <p>Connect with fellow athletes and share your journey</p>
                  </div>
                  <div className="feature-card">
                    <div className="feature-icon">📱</div>
                    <h3>Mobile First</h3>
                    <p>Access your training plans anywhere, anytime</p>
                  </div>
                </div>
              </section>

              <section id="about" className="about">
                <div className="about-image-container">
                  <img src="/about-image.jpg" alt="Team training together" />
                  <div className="about-overlay"></div>
                </div>
                <div className="about-content">
                  <div className="about-header">
                    <span className="about-tag">Our Story</span>
                    <h2>Revolutionizing Fitness Training</h2>
                  </div>
                  <div className="about-grid">
                    <div className="about-text">
                      <p>Founded in 2024, Tribu is revolutionizing the way athletes train and achieve their fitness goals. Our platform combines cutting-edge technology with proven training methodologies to deliver personalized fitness experiences.</p>
                      <p>We believe that everyone deserves access to professional-grade training tools and guidance. Whether you're a beginner or an elite athlete, Tribu provides the resources and support you need to succeed.</p>
                      <div className="about-features">
                        <div className="about-feature">
                          <i>🎯</i>
                          <h3>Personalized Plans</h3>
                          <p>Tailored to your goals and progress</p>
                        </div>
                        <div className="about-feature">
                          <i>📊</i>
                          <h3>Progress Tracking</h3>
                          <p>Real-time analytics and insights</p>
                        </div>
                        <div className="about-feature">
                          <i>🤝</i>
                          <h3>Community Support</h3>
                          <p>Connect with fellow athletes</p>
                        </div>
                      </div>
                      <div className="about-stats">
                        <div className="about-stat">
                          <span className="about-stat-number">50K+</span>
                          <span className="about-stat-label">Active Users</span>
                        </div>
                        <div className="about-stat">
                          <span className="about-stat-number">100+</span>
                          <span className="about-stat-label">Training Plans</span>
                        </div>
                        <div className="about-stat">
                          <span className="about-stat-number">98%</span>
                          <span className="about-stat-label">Success Rate</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section id="contact" className="contact">
                <div className="contact-content">
                  <h2>Get in Touch</h2>
                  <div className="contact-grid">
                    <div className="contact-info">
                      <div className="contact-item">
                        <div className="contact-icon">📍</div>
                        <div className="contact-details">
                          <h3>Location</h3>
                          <p>123 Fitness Street, Gym City, 12345</p>
                        </div>
                      </div>
                      <div className="contact-item">
                        <div className="contact-icon">📧</div>
                        <div className="contact-details">
                          <h3>Email</h3>
                          <p>support@tribu.com</p>
                        </div>
                      </div>
                      <div className="contact-item">
                        <div className="contact-icon">📱</div>
                        <div className="contact-details">
                          <h3>Phone</h3>
                          <p>+1 (555) 123-4567</p>
                        </div>
                      </div>
                    </div>
                    <form className="contact-form">
                      <div className="form-group">
                        <input type="text" placeholder="Your Name" required />
                      </div>
                      <div className="form-group">
                        <input type="email" placeholder="Your Email" required />
                      </div>
                      <div className="form-group">
                        <textarea placeholder="Your Message" required></textarea>
                      </div>
                      <button type="submit" className="cta-button primary">Send Message</button>
                    </form>
                  </div>
                </div>
              </section>

              <section className="testimonials">
                <div className="testimonials-bg">
                  <img src="/testimonials-bg.jpg" alt="Training background" />
                  <div className="testimonials-overlay"></div>
                </div>
                <h2>What Our Users Say</h2>
                <div className="testimonial-grid">
                  <div className="testimonial-card">
                    <div className="testimonial-content">
                      "Tribu has completely transformed my training routine. The personalized plans are spot-on!"
                    </div>
                    <div className="testimonial-author">
                      <img src="/avatar1.jpg" alt="Sarah M." className="author-avatar" />
                      <div className="author-info">
                        <span className="author-name">Sarah M.</span>
                        <span className="author-title">Professional Athlete</span>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-card">
                    <div className="testimonial-content">
                      "The progress tracking features are incredible. It's like having a personal trainer in your pocket!"
                    </div>
                    <div className="testimonial-author">
                      <img src="/avatar2.jpg" alt="Mike R." className="author-avatar" />
                      <div className="author-info">
                        <span className="author-name">Mike R.</span>
                        <span className="author-title">Fitness Enthusiast</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <footer className="footer">
                <div className="footer-content">
                  <div className="footer-section">
                    <h4>Tribu</h4>
                    <p>Your personal training companion</p>
                  </div>
                  <div className="footer-section">
                    <h4>Quick Links</h4>
                    <a href="#features">Features</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                  </div>
                  <div className="footer-section">
                    <h4>Connect</h4>
                    <div className="social-links">
                      <a href="#" className="social-link">Twitter</a>
                      <a href="#" className="social-link">Instagram</a>
                      <a href="#" className="social-link">LinkedIn</a>
                    </div>
                  </div>
                </div>
                <div className="footer-bottom">
                  <p>&copy; 2024 Tribu. All rights reserved.</p>
                </div>
              </footer>
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
