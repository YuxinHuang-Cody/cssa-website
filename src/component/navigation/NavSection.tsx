import React from 'react'
import NavLink from './NavLink';
interface NavProps {
    ulPosition: string;
    liStyle: string;
}
const NavSection:React.FC<NavProps> = ({ulPosition,liStyle}) => {
  return (
    <ul className={ulPosition}>
        <li className={`tl-nav-item ${liStyle} tl-dropdown`}>
            <a role="button">
            首页 <i className="fa-regular fa-angle-down"></i>
            </a>
            <ul className="tl-submenu">
            <li>
                <NavLink href="/">首页</NavLink>
            </li>
            
            </ul>
        </li>

        <li className={`tl-nav-item ${liStyle} tl-dropdown`}>
            <a role="button">
            关于学联<i className="fa-regular fa-angle-down"></i>
            </a>
            <ul className="tl-submenu">
            <li>
                <NavLink href="/">学联简介</NavLink>
            </li>
            <li>
                <NavLink href="/">部门介绍</NavLink>
            </li>
            <li>
                <NavLink href="/past-members">历届成员</NavLink>
            </li>
            </ul>
        </li>

        <li className={`tl-nav-item ${liStyle} tl-dropdown`}>
            <a role="button">
            学联活动<i className="fa-regular fa-angle-down"></i>
            </a>
            <ul className="tl-submenu">
            <li>
                <NavLink href="/">学联活动</NavLink>
            </li>
            </ul>
        </li>

        <li className={`tl-nav-item ${liStyle} tl-dropdown`}>
            <a role="button">
            学联新闻<i className="fa-regular fa-angle-down"></i>
            </a>
            <ul className="tl-submenu">
            <li>
                <NavLink href="/">学联新闻</NavLink>
            </li>
            </ul>
        </li>

        <li className={`tl-nav-item ${liStyle} tl-dropdown`}>
            <a>
            联系我们<i className="fa-regular fa-angle-down"></i>
            </a>

            <ul className="tl-submenu">
            <li>
                <NavLink href="/">联系我们</NavLink>
            </li>
            </ul>
        </li>
    </ul>
  )
}

export default NavSection