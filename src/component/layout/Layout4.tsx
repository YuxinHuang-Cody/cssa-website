import React from 'react'
import HeaderSection4 from '../header/HeaderSection4';
import FooterSection4 from '../footer/FooterSection4';

interface LayoutProps {
    children: any;
}
const Layout4:React.FC<LayoutProps> = ({children}) => {
  return (
    <div>
      <HeaderSection4 style='' logo="assets/images/logos/logo.png"/>
      {children}
      <FooterSection4 style='tl-9-footer' logo="assets/images/logos/logo.png" form=''/>
    </div>
  )
}

export default Layout4