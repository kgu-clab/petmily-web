import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function ScrollToTop({ children }) {
  const location = useLocation();

  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);

  return <div className="ml-[18rem] grow p-5">{children}</div>;
}

ScrollToTop.propTypes = {
  children: PropTypes.node,
};
