import { socialMediaData } from '@/data/Data'
import React from 'react'
type Props = {
    sectionStyle: string;
    cardStyle: string;
    btnStyle?: string;
}
const SocialSection = ({sectionStyle,cardStyle,btnStyle} : Props) => {
  return (
    <section className={`tl-4-socials ${sectionStyle}`}>
      <div className="row g-0">
        {socialMediaData.map((socialMedia, index) => (
          <div key={index} className="col-xl-3 col-md-6 col-12">
            <div className={cardStyle}>
              <div className="tl-4-social-txt">
                <h2 className="tl-4-social-title">{socialMedia.title}</h2>
                <div className="tl-4-social-hidden-content">
                  <p className="tl-4-social-descr">{socialMedia.description}</p>
                  <a href="#" className={`tl-4-social-btn ${btnStyle}`}>{socialMedia.platform}</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SocialSection