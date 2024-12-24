import React from 'react'

const CtaSection = () => {
  return (
    <section className="tl-2-cta bg-defaults pt-120 pb-130">
      <div className="container">
        <h2 className="tl-2-section-title">加入我们</h2>
        <p className="tl-2-cta-descr">
          通过学联，你可以锻炼领导才能，推动校园发展，结识志同道合的伙伴，共同为校园的繁荣贡献力量。
        </p>
        <div className="qr-section">
          <h3 className="qr-title">扫码了解更多</h3>
          <p className="qr-desc">扫描二维码，关注我们，获取更多信息。</p>
          <div className="qr-row">
            <img
              src="assets/images/kb-16/Screenshot 2024-12-21 023000.png"
              alt="公众号二维码"
              className="qr-image"
            />
            <img
              src="assets/images/kb-16/Screenshot 2024-12-21 023000.png"
              alt="抖音二维码"
              className="qr-image"
            />
            <img
              src="assets/images/kb-16/Screenshot 2024-12-21 023000.png"
              alt="小红书二维码"
              className="qr-image"
            />
            <img
              src="assets/images/kb-16/Screenshot 2024-12-21 023000.png"
              alt="小助手1二维码"
              className="qr-image"
            />
            <img
              src="assets/images/kb-16/Screenshot 2024-12-21 023000.png"
              alt="小助手2二维码"
              className="qr-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
