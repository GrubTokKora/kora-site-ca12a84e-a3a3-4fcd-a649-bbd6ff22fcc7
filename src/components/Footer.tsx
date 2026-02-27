const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {currentYear} Fandi Mata. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;