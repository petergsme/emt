import { createElement } from 'react';
import { icons } from './icons';

export type IconName = keyof typeof icons;

interface IconProps {
  icon: IconName;
  className?: 'sm' | 'md' | 'lg';
}

export const Icon = ({ icon, className = 'sm' }: IconProps) => {
  return (
    <span className={className} aria-label={icon} role="img">
      {createElement(icons[icon], {})}
    </span>
  );
};

//que es un aria-label, mira si necesitas themes y binds o si estos son clases de utilidad. y lo mismo para el color. tamaño tambien.
