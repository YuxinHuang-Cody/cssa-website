import React from 'react'
import HeaderSection5 from '../header/HeaderSection5';
import FooterSection3 from '../footer/FooterSection3';

interface LayoutProps {
    children: any;
}
const Layout5:React.FC<LayoutProps> = ({children}) => {
  return (
    <div className='tl-3-inner tl-inner-courses-body'>
      <HeaderSection5 style='position-relative' logo="/assets/images/logos/logo.png"/>
      {children}
      <FooterSection3 style='tl-8-footer' logo="/assets/images/logos/logo.png"/>
    </div>
  )
}

export default Layout5