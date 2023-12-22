import React from 'react'
import HeaderSection6 from '../header/HeaderSection6';
import FooterSection4 from '../footer/FooterSection4';


interface LayoutProps {
    children: any;
}
const Layout6:React.FC<LayoutProps> = ({children}) => {
  return (
    <>
      <HeaderSection6 style='' darkLogo="assets/images/logos/logo-dark.png" lightLogo="assets/images/logos/logo.png"/>
      {children}
      <FooterSection4 style='tl-2-footer' logo="assets/images/logos/logo.png" form='tl-9-footer-subs-form'/>
    </>
  )
}

export default Layout6