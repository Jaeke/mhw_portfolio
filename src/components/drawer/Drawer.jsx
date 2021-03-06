import React, { useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import cn from 'classnames';

import './Drawer.style.scss';
import useMountTransition from './overlay/useMountTransition';

function createPortalRoot() {
  const drawerRoot = document.createElement('div');
  drawerRoot.setAttribute('id', 'drawer-root');
  return drawerRoot;
}

const SideDrawer = ({
  isOpen,
  children,
  className,
  onClose,
  position = 'left',
  removeWhenClosed = true,
}) => {
  const portalRootRef = useRef(
    document.getElementById('drawer-root') || createPortalRoot()
  );
  const bodyRef = useRef(document.querySelector('body'));

  const isTransitioning = useMountTransition(isOpen, 300);

  // mobile
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidthAndHeight);
    return () => window.removeEventListener('resize', updateWidthAndHeight);
  }, []);

  // Append portal root on mount
  useEffect(() => {
    bodyRef.current.appendChild(portalRootRef.current);
    const portal = portalRootRef.current;
    const bodyEl = bodyRef.current;
    return () => {
      // Clean up the portal when drawer component unmounts
      portal.remove();
      // Ensure scroll overflow is removed
      bodyEl.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    const updatePageScroll = () => {
      if (isOpen) {
        bodyRef.current.style.overflow = 'hidden';
      } else {
        bodyRef.current.style.overflow = '';
      }
    };

    updatePageScroll();
  }, [isOpen]);

  // Allow Esc key to dismiss the drawer
  useEffect(() => {
    const onKeyPress = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keyup', onKeyPress);
    }

    return () => {
      window.removeEventListener('keyup', onKeyPress);
    };
  }, [isOpen, onClose]);

  if (!isTransitioning && removeWhenClosed && !isOpen) {
    return null;
  }

  return createPortal(
    <>
      <div
        aria-hidden={isOpen ? 'false' : 'true'}
        className={cn('drawer-container', {
          open: isOpen,
          in: isTransitioning,
          className,
        })}
      >
        <div className={cn('drawer', position)} role="dialog">
          {children}
        </div>
        <div
          className={width > 716 ? 'backdrop' : 'mobile_backdrop'}
          onClick={onClose}
        />
      </div>
    </>,
    portalRootRef.current
  );
};

export default SideDrawer;
