import React, { Component } from 'react';
import styles from './Contact.module.css';

export default class Contact extends Component {
  render() {
    return (
      <>
        <section className={styles.contact}>
          <div className="container">
            <div className="col-sm-10 offset-1">
              <div>
                <h2 className={`${styles.head} text-center`}>CONTACT</h2>
                <div className={styles.dividerCustom}>
                  <div className={styles.dividerCustomLine} />
                  <div className={styles.dividerCustomIcon}><svg className={styles.faStar} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" /></svg>{/* <i class="fas fa-star"></i> Font Awesome fontawesome.com */}</div>
                  <div className={styles.dividerCustomLine} />
                </div>
              </div>
              <form>
                <div className={styles.inputs}>
                  <div className={styles.input}>
                      <input className={`${styles.name} form-control`} type="text" placeholder='Name' name='userName' />
                  </div>
                  <div className={styles.input}>
                      <input className={`${styles.name} form-control`} type="email" placeholder='Email Address' name='userEmail' />
                  </div>
                  <div className={styles.input}>
                      <input className={`${styles.name} form-control`} type="text" placeholder='Phone Number' name='userPhone' />
                  </div>
                  <div className={styles.input}>
                      <textarea className={`${styles.name} form-control`} type="text" placeholder='Message' name='messageFromUser' />
                  </div>
                </div>
                <button className='btn btn-success mt-3 px-5 py-3 fs-5'>Send</button>
              </form>
            </div>
          </div>
        </section>
      </>
    )
  }
}
