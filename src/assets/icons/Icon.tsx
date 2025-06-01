import { createElement } from 'react';
import { icons } from './icons';
import classNames from 'classnames/bind';
import theme from './icon.module.scss';

export type IconName = keyof typeof icons;

const cx = classNames.bind(theme);
interface IconProps {
  icon: IconName;
  size?: 'small' | 'medium' | 'large';
  color?: 'onprimary' | 'onprimary-secondary' | 'onbrand' | 'onbrand-secondary' | 'disabled';
}

//Using classnames package as an example, even if here it doesn't change much, but at least classes look more organized and I don't need to write theme.whateverclass all the time.

export const Icon = ({ icon, size = 'medium', color = 'onprimary' }: IconProps) => {
  return (
    <span
      className={cx({
        icon: true,
        [`icon__size--${size}`]: true,
        [`icon__color--${color}`]: true,
      })}
      aria-label={`${icon}-icon`}
      role="img"
    >
      {createElement(icons[icon], {})}
    </span>
  );
};

//This is the simple way of doing it, no classname package involved. A bit more difficult to read.

// export const Icon = ({ icon, size = 'medium', color = 'onprimary' }: IconProps) => {
//   return (
//     <span
//       className={`${theme.icon} ${theme[`icon__size--${size}`]} ${theme[`icon__color--${color}`]}`}
//       aria-label={`${icon}-icon`}
//       role="img"
//     >
//       {createElement(icons[icon], {})}
//     </span>
//   );
// };
