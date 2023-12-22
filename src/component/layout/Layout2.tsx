import React from 'react'
import HeaderSection3 from '../header/HeaderSection3';
import FooterSection3 from '../footer/FooterSection3';
interface LayoutProps {
    children: any;
}
const Layout2:React.FC<LayoutProps> = ({children}) => {
  return (
    <>
      <HeaderSection3 style='tl-7-header-inner' logo="/assets/images/logos/logo.png"/>
      {children}
      <FooterSection3 style='' logo="/assets/images/logos/logo.png"/>
    </>
  )
}

export default Layout2