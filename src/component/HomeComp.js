import React from 'react';


function HomeComp() {
  return (
    <div className="mt-4 container">
    <h1 className="h3 text-warning text-center">Our Service</h1>
    <h1 className="h1 fw-bold text-center">We Provide Services</h1>
    <div className="row my-5  justify-content-center">
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="card colorblue imgheight mx-auto">
          <img src="./Images/service-1.jpg" className="card-img-top img-fluid" alt="..."/>
          <div className="colorblue d-flex justify-content-between">
            <div className="mx-3 pt-2">
              <h6 className="card-title text-warning">Building Construction</h6>
            </div>
            <div className="bg-warning">
              <button className="btn text-dark fw-bold p-2 " type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample">
                +</button>
            </div>
          </div>
          <div className="collapse" id="collapseExample1">
            <div className="card card-body">
              Some placeholder content for the collapse component. This panel is hidden by default but revealed when
              the
              user activates the relevant trigger.
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12 ">
        <div className="card colorblue imgheight mx-auto">
          <img src="./Images/service-2.jpg" className="card-img-top img-fluid" alt="..."/>
          <div className="colorblue d-flex justify-content-between">
            <div className="mx-3 pt-2">
              <h6 className="card-title text-warning">House Renovation</h6>
            </div>
            <div className="bg-warning">
              <button className="btn text-dark fw-bold p-2 " type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">
                +</button>
            </div>
          </div>
          <div className="collapse" id="collapseExample2">
            <div className="card card-body">
              Some placeholder content for the collapse component. This panel is hidden by default but revealed when
              the
              user activates the relevant trigger.
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="card colorblue imgheight mx-auto">
          <img src="./Images/service-3.jpg" className="card-img-top img-fluid" alt="..."/>
          <div className="colorblue d-flex justify-content-between">
            <div className="mx-3 pt-2">
              <h6 className="card-title text-warning">Architecture Design</h6>
            </div>
            <div className="bg-warning">
              <button className="btn text-dark fw-bold p-2 " type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample">
                +</button>
            </div>
          </div>
          <div className="collapse" id="collapseExample3">
            <div className="card card-body">
              Some placeholder content for the collapse component. This panel is hidden by default but revealed when
              the
              user activates the relevant trigger.
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12 ">
        <div className="card colorblue imgheight mx-auto">
          <img src="./Images/service-4.jpg" className="card-img-top img-fluid" alt="..."/>
          <div className="colorblue d-flex justify-content-between">
            <div className="mx-3 pt-2">
              <h6 className="card-title text-warning">Interior Design</h6>
            </div>
            <div className="bg-warning">
              <button className="btn text-dark fw-bold p-2 " type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseExample4" aria-expanded="false" aria-controls="collapseExample">
                +</button>
            </div>
          </div>
          <div className="collapse" id="collapseExample4">
            <div className="card card-body">
              Some placeholder content for the collapse component. This panel is hidden by default but revealed when
              the
              user activates the relevant trigger.
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12 ">
        <div className="card colorblue imgheight mx-auto">
          <img src="./Images/service-5.jpg" className="card-img-top img-fluid" alt="..."/>
          <div className="colorblue d-flex justify-content-between">
            <div className="mx-3 pt-2">
              <h6 className="card-title text-warning">Fixing And Support</h6>
            </div>
            <div className="bg-warning">
              <button className="btn text-dark fw-bold p-2 " type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseExample5" aria-expanded="false" aria-controls="collapseExample">
                +</button>
            </div>
          </div>
          <div className="collapse" id="collapseExample5">
            <div className="card card-body">
              Some placeholder content for the collapse component. This panel is hidden by default but revealed when
              the
              user activates the relevant trigger.
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12 ">
        <div className="card colorblue imgheight mx-auto">
          <img src="./Images/service-6.jpg" className="card-img-top img-fluid" alt="..."/>
          <div className="colorblue d-flex justify-content-between">
            <div className="mx-3 pt-2">
              <h6 className="card-title text-warning">Painting</h6>
            </div>
            <div className="bg-warning">
              <button className="btn text-dark fw-bold p-2 " type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseExample6" aria-expanded="false" aria-controls="collapseExample">
                +</button>
            </div>
          </div>
          <div className="collapse" id="collapseExample6">
            <div className="card card-body">
              Some placeholder content for the collapse component. This panel is hidden by default but revealed when
              the
              user activates the relevant trigger.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
export default HomeComp
