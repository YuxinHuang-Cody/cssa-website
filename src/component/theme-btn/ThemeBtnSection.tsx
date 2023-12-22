'use client'
import { useTalimContext } from '@/context/TalimContext';
import React from 'react';

const ThemeBtnSection = () => {
  const {isDarkTheme,toggleTheme} = useTalimContext()

  return (
    <div
      className={`tl-dark-light-view-box ${isDarkTheme ? '' : 'has-clicked'}`}
      onClick={toggleTheme}
    >
      <div className={`tl-dark-light-view-toogle-dot ${isDarkTheme ? 'pos-bottom' : ''}`}></div>
    </div>
  );
};

export default ThemeBtnSection;

