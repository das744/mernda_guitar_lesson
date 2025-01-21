import Link from 'next/link';


const Navbar = () => {
  return (
    <nav className="navbar">
    <ul className="navbar-menu">
      <li><Link href="/">Home</Link></li>
      <li><Link href="/about">About</Link></li>
      <li><Link href="/services">Services</Link></li>
      <li><Link href="/contact">Contact</Link></li>
    </ul>
      <div className="logo">
        LOGO
        </div>
        <div className="contact">
          Contact Us
        </div>
      
    </nav>
  );
};

export default Navbar;