import { FC, memo } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

type Props = {
  to: string,
  text: string,
};

export const PageNavLink: FC<Props> = memo(({ to, text }) => (
  <NavLink
    to={to}
    className={({ isActive }) => classNames(
      'filter__link',
      { selected: isActive },
    )}
  >
    {text}
  </NavLink>
));
