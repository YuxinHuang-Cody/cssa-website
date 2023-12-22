'use client'
import { useTalimContext } from '@/context/TalimContext'
import React from 'react'
import { Modal } from 'react-bootstrap'

const VideoModal = () => {
    const {isVideoModalOpen,closeVideoModal,videoUrl} = useTalimContext()
  return (
    <Modal 
    id="video-overlay" 
    show={isVideoModalOpen}
    onHide={closeVideoModal}
    className={`video-overlay ${isVideoModalOpen? 'active':''}`} 
    contentClassName='custom-video-modal-content'
    size='xl' 
    centered
    >
        <Modal.Header className="video-overlay-close">
          <button className='video-modal-close-btn' onClick={closeVideoModal}>x</button>
        </Modal.Header>
        <Modal.Body>
          <iframe
            className="video-modal-iframe"
            src={videoUrl}
            allow="autoplay; accelerometer; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Modal.Body>
    </Modal>
  )
}

export default VideoModal