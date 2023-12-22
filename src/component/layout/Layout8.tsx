import React from 'react'
import HeaderSection8 from '../header/HeaderSection8';
import FooterSection6 from '../footer/FooterSection6';

interface LayoutProps {
    children: any;
}
const Layout8:React.FC<LayoutProps> = ({children}) => {
  return (
    <>
      <HeaderSection8 
      style='tl-header-5-inner' 
      darkLogo="assets/images/logos/logo-dark.png"
      lightLogo="assets/images/logos/logo.png" 
      headerStyle='tl-header-5'
      btnStyle="tl-5-def-btn"
      loginBtn={true}
      />
      {children}
      <FooterSection6 
      darkLogo="assets/images/logos/logo-dark.png"
      lightLogo="assets/images/logos/logo.png" 
      />
    </>
  )
}

export default Layout8