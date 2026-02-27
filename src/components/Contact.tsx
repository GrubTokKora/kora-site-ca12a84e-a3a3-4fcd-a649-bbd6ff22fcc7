const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2>Contact & Location</h2>
        <div className="contact-content">
          <p>
            <strong>Address:</strong><br />
            74 Bayard St, Brooklyn, NY 11222, USA
          </p>
          <p>
            <strong>Phone:</strong><br />
            (555) 123-4567
          </p>
          <p>
            <strong>Email:</strong><br />
            reservations@fandimata.example.com
          </p>
          <a href="https://www.fandimata.com/" target="_blank" rel="noopener noreferrer" className="btn" style={{marginTop: '1.5rem'}}>
            Official Website
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;