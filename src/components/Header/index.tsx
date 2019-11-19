import React from 'react';

// Import Style
import { ParallaxHeader } from './style';

// Import Model
import { HeaderProps } from '../../models/models';

const Header = ({ height, url, component }: HeaderProps) => (
  <ParallaxHeader url={url} height={height}>
    <div className="component">{component}</div>
    <div className="color-overlay" />
  </ParallaxHeader>
);

export default Header;
