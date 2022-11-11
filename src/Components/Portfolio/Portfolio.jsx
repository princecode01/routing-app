import React, { Component } from 'react';
import port1 from '../../images/cake.png';
import port2 from '../../images/cabin.png';
import port3 from '../../images/circus.png';
import port4 from '../../images/game.png';
import port5 from '../../images/safe.png';
import port6 from '../../images/submarine.png';
import styles from './portfolio.module.css'


export default class Portfolio extends Component {

  state = {
    display: 'none'
  }

  openPick=(e)=>{
    let display = this.state.display;
    display = 'block';
    this.setState({display})
    // let imgSrc = e.target.getAttribute('src');
    // console.log(imgSrc);
  }

  closePick=()=>{
    let display = this.state.display;
    display = 'none';
    this.setState({display})
  }

  render() {
    return (
      <>
        <section className={`d-${this.state.display} ${styles.openPick} p-5 vh-100`}>
          <div className="container bg-white text-center rounded p-5 position-relative">
            <span onClick={() => this.closePick()} className={styles.exit}><i class="fa-solid fa-xmark text-success"></i></span>
            <h2 className={`${styles.head} text-center`}>TASTY CAKE</h2>
            <div className={styles.dividerCustom}>
              <div className={styles.dividerCustomLine} />
              <div className={styles.dividerCustomIcon}><svg className={styles.faStar} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" /></svg>{/* <i class="fas fa-star"></i> Font Awesome fontawesome.com */}</div>
              <div className={styles.dividerCustomLine} />
            </div>
            <img className='w-25 rounded' src={port1} />
            <p className='text-black my-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.
            </p>
            <button onClick={() => this.closePick()} className='btn btn-success my-3'>close window</button>
          </div>
        </section>
        <section className={styles.portfolio}>
          <div className="container">
            <div className="col-sm-10 offset-1">
              <div>
                <h2 className={`${styles.head} text-center`}>PORTFOLIO</h2>
                <div className={styles.dividerCustom}>
                  <div className={styles.dividerCustomLine} />
                  <div className={styles.dividerCustomIcon}><svg className={styles.faStar} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" /></svg>{/* <i class="fas fa-star"></i> Font Awesome fontawesome.com */}</div>
                  <div className={styles.dividerCustomLine} />
                </div>
              </div>
              <div className="row g-4 text-center">
                <div className="col-lg-4">
                  <div className={styles.item}>
                    <img src={port1} className={styles.portImg} />
                    <div onClick={() => this.openPick()} className={styles.layer}><i className='fa fa-plus'></i></div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className={styles.item}>
                    <img src={port2} className={styles.portImg} />
                    <div onClick={() => this.openPick()} className={styles.layer}><i className='fa fa-plus'></i></div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className={styles.item}>
                    <img src={port3} className={styles.portImg} />
                    <div onClick={() => this.openPick()} className={styles.layer}><i className='fa fa-plus'></i></div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className={styles.item}>
                    <img src={port4} className={styles.portImg} />
                    <div onClick={() => this.openPick()} className={styles.layer}><i className='fa fa-plus'></i></div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className={styles.item}>
                    <img src={port5} className={styles.portImg} />
                    <div onClick={() => this.openPick()} className={styles.layer}><i className='fa fa-plus'></i></div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className={styles.item}>
                    <img src={port6} className={styles.portImg} />
                    <div onClick={() => this.openPick()} className={styles.layer}><i className='fa fa-plus'></i></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}
