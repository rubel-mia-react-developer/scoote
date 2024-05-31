import './App.css'

function App() {


return (
<>
  {/* nav bar start */}
  <nav id='nav-scotter'>
    <div className="container">
      <img className='nav-logo' src="src/assets/Group 1 (5).png" alt="logo" />
      <div className='nav-text'>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
      <div className='nav-auth'>
        <ul>
          <li><a href="#">Login</a></li>
          <li><a href="#">Book Scooter</a></li>
        </ul>
      </div>
      <div className='picture'>
        <img src="src/assets/Ellipse 1 (4).png" alt="Ellipse" />
      </div>
    </div>
  </nav>
  {/* nav bar end */}
  {/* banner part start */}
  <section id='sec-scotter'>
    <div className="container">
      <div className='sec-text'>
        <h2>Fair price ride</h2>
        <h1>Rent our <span>Scooter</span></h1>
        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
          galley of type and scrambled it to make a type specimen book. </p>
        <div className="dashboard">
          <h3>Location</h3>
          <div className="line"></div>
          <h3>Pickup Date</h3>
          <div className="line"></div>
          <h3>Kilometers</h3>
          <a href="#">Book Scooter</a>
        </div>
      </div>
      <div className='sec-picture'>
        <img src="src/assets/scooter.png" alt="scotter" />
      </div>
    </div>
    <img className='vectary' src="src/assets/Vectary texture (3) 1.png" alt="vectary" />
    <div className="text">
      {/*  */}
    </div>
    <img className='leaf-left' src="src/assets/33 1 (1).png" alt="leaf left" />
    <img className='leaf-right' src="src/assets/1 1 (1).png" alt="leaf right" />
  </section>
   {/* banner part end */}
</>
)
}

export default App