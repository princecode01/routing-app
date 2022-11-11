import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <>
        <div className="footer">
          <div className="container w-75">
            <div className="row text-center">
              <div className="col-lg-4 mb-5">
                <h4>LOCATION</h4>
                <p>2215 John Daniel Drive
                  Clark, MO 65243
                </p>
              </div>
              <div className="col-lg-4 mb-5">
                <h4>AROUND THE WEB</h4>
                <div className="d-flex justify-content-center">
                  <a><i className='fa-brands fa-facebook-f'></i></a>
                  <a><i className='fa-brands fa-twitter'></i></a>
                  <a><i className='fa-brands fa-linkedin-in'></i></a>
                  <a><i className='fa-brands fa-instagram'></i></a>
                </div>
              </div>
              <div className="col-lg-4 mb-5">
                <h4>ABOUT FREELANCER</h4>
                <p>Freelance is a free to use, MIT licensed Bootstrap theme created by Route</p>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright py-4 text-center text-white">
          <div className="container"><small>Copyright © Your Website 2021</small></div>
        </div>
      </>
    )
  }
}
