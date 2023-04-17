import React from 'react';
import './OurFeatures.css';

function OurFeatures() {
  return (
    <div className="our-features-container container-fluid">
      <div className="about-section text-center mt-5">
        <h1 className="display-4">Our Features will Help in Pest Free Environment</h1>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100">
            <img src="https://5.imimg.com/data5/CE/FO/IV/SELLER-9549927/pest-control-cervices-500x500.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Fully Supported</h5>
              <p className="card-text">Our service company provides full support to our clients, helping them to optimize and maintain their technology solutions. We offer 24/7 technical support, CRM customization and integration, software and app development, and other services to ensure that our clients have everything they need to succeed in the digital age.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src="https://www.shutterstock.com/image-vector/pest-control-harmful-insects-rodents-260nw-465458375.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Product Review</h5>
              <p className="card-text">Our product review service is designed to provide our clients with an objective and unbiased assessment of their technology solutions. We'll evaluate your software, apps, and CRM systems, providing you with detailed feedback on their performance, usability, and overall effectiveness.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
          <img src="https://img.lovepik.com/photo/45013/6003.jpg_wh860.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Best Services</h5>
              <p className="card-text">Our pest control service is the best in the industry, with a team of highly trained professionals dedicated to providing effective solutions for all types of pest problems. Using the latest techniques and equipment, we can eliminate pests such as insects, rodents, and other pests from your home or business quickly and efficiently. Trust us to keep your property pest-free and comfortable for you and your family or customers.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurFeatures;
