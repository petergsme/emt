import { createElement } from 'react';
import { icons } from './icons';
import theme from './icon.module.scss';

export type IconName = keyof typeof icons;

interface IconProps {
  icon: IconName;
  size?: 'small' | 'medium' | 'large';
  color?: 'onprimary' | 'onprimary-secondary' | 'onbrand' | 'onbrand-secondary' | 'disabled';
}

export const Icon = ({ icon, size = 'medium', color = 'onprimary' }: IconProps) => {
  return (
    <span
      className={`${theme.icon} ${theme[`icon__size--${size}`]} ${theme[`icon__color--${color}`]}`}
      aria-label={icon}
      role="img"
    >
      {createElement(icons[icon], {})}
    </span>
  );
};
