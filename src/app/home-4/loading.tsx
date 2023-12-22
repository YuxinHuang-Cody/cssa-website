import Image from 'next/image'
import React from 'react'

const loading = () => {
  return (
    <div id="loading">
        <div id="loading-center">
            <div id="loading-center-absolute">
                <div className="loading-content">
                    <Image 
                    className="loading-logo-text" 
                    src="/assets/images/logo/logo-text.png" 
                    alt="Kidba"
                    height={80}
                    width={242}
                    />
                    <div className="loading-stroke">
                        <Image 
                        className="loading-logo-icon" 
                        src="/assets/images/logo/logo-icon.png" 
                        alt="Pen"
                        height={104}
                        width={104}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default loading