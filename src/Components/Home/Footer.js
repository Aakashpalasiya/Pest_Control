import React from 'react';
import { FaFacebook, FaEnvelope, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return ( 
    <footer className="bg-dark text-light py-3 ">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5 className="text-uppercase mb-3">Company</h5>
            <ul className="list-unstyled">
              <li><Link to="about" href="/#">About Us</Link></li>
              <li><a href="/#">We Are Hiring</a></li>
              <li><a href="/#">Meet The Team</a></li>
              <li><a href="/#">Copyright</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 className="text-uppercase mb-3">Support</h5>
            <ul className="list-unstyled">
              <li><a href="/#">FAQ</a></li>
              <li><a href="/#">Blog</a></li>
              <li><a href="/#">Forum</a></li>
              <li><a href="/#">Documentation</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 className="text-uppercase mb-3">Services</h5>
            <ul className="list-unstyled">
              <li><a href="/#">General PestMaster</a></li>
              <li><a href="/#">Termite Master</a></li>
              <li><a href="/#">Rodent Master</a></li>
              <li><a href="/#">Mosquito Master</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 className="text-uppercase mb-3">Adress</h5>
            <ul className="list-unstyled ">
              <li >Shop No.1,Ashirwad Society</li>
              <li>Cross Road No.2,Thakur Village</li>
              <li>Kandivali East,Mumbai-400101</li>
            </ul>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6">
            <p>&copy; 2023 Pest Master All Right Reserved.</p>
          </div>

          <div className="col-md-6">
            <ul className="list-inline text-end">
              <li className="list-inline-item"><a href="/#"><FaWhatsapp /></a></li>
              <li className="list-inline-item"><a href="/#"><FaFacebook /></a></li>
              <li className="list-inline-item"><a href="/#"><FaEnvelope /></a></li>
              <li className="list-inline-item"><a href="/#"><FaLinkedin /></a></li>
              <li className="list-inline-item"><a href="/#"><FaTwitter /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
