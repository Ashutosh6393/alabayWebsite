import React from 'react'
import styles from './social.module.css'
import img1 from '../../assets/social/img1.png'
import img2 from '../../assets/social/img2.png'
import img3 from '../../assets/social/img3.png'

const Social = () => {
  return (
    <div  className={`${styles.container}`}>
        <div className={`${styles.heading}`}>
            <h1>
                SOCIAL MEDIA <br /> LINKS
            </h1>
        </div>
        <div className={`${styles.content}`}>
            <div className={`${styles.links}`}>
                <p><span><img src={`${img3}`} alt="" /></span><a href="#"> Twitter Link</a></p>
                <p><span><img src={`${img2}`} alt="" /></span><a href="#"> Telegram Link</a></p>
            </div>
            <div className={`${styles.imageContainer}`}>
                <img src={`${img1}`} alt="dog image" />
            </div>
        </div>

    </div>
  )
}

export default Social