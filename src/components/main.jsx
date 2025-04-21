import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero rounded-0 pb-3">
      <div className="card text-white border-0 mx-3 rounded-0" style={{ backgroundColor: '#ff6600' }}>
  <div className="row d-flex align-items-center" style={{ height: '500px' }}>
    
    {/* Text Content */}
    <div className="col-md-6 d-flex align-items-center">
      <div className="p-4">
        <h5 className="card-title fs-1 text fw-bold">Exclusive Offers Just for You</h5>
        <p className="card-text fs-5 ">
          Explore our exclusive collection of products tailored to your taste.
          Enjoy special discounts and new arrivals that are perfect for you.
          Don't miss out on these amazing deals!
        </p>
      </div>
    </div>

    {/* Image */}
    <div className="col-md-6 p-0 d-none d-sm-block">
      <img
        className="img-fluid w-100 h-100 rounded-0"
        src="./assets/img/main.png"
        alt="Card"
        style={{ objectFit: 'cover' }}
      />
    </div>
    
  </div>
</div>


      </div>
    </>
  );
};

export default Home;
