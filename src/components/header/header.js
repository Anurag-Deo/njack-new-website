import { useState, useEffect } from 'react';
import styles from './header.module.css';
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';

const HeaderComp = ({ selected }) => {
  const [isDrawerVisible, setDrawerVisibility] = useState(false);
  const [isResourceDrawerVisible, setResourceDrawerVisibility] = useState(false);
  const [isMenuVisible, setMenuVisibility] = useState(false);

  const drawerHandleMouse = () => {
    setDrawerVisibility((current) => !current);
  };
  const resourceDrawerHandleMouse = () => {
    setResourceDrawerVisibility((current) => !current);
  };
  const menuHandleMouseClick = () => {
    setMenuVisibility((current) => !current);
  };

  const menuHandleMouseLeave = () => {
    setMenuVisibility(false);
    setDrawerVisibility(false);
    setResourceDrawerVisibility(false);
  };

  return (
    <>
      <Link href="/">
        <img id={styles.logo} loading="lazy" src="/home/NJACK logo.svg" alt="NJACK Logo" />
      </Link>
      <section>
        <Link
          style={{ height: '30px' }}
          id={selected == 'Home' ? styles.selected : undefined}
          href="/"
        >
          HOME
        </Link>
        <div
          onMouseEnter={drawerHandleMouse}
          onMouseLeave={drawerHandleMouse}
          style={{ display: 'flex', height: '30px' }}
        >
          <Link id={selected == 'Departments' ? styles.selected : undefined} href="#">
            DEPARTMENTS
          </Link>
          {isDrawerVisible && <DeptDrawer isVisible={isDrawerVisible} />}
        </div>
        <div
          onMouseEnter={resourceDrawerHandleMouse}
          onMouseLeave={resourceDrawerHandleMouse}
          style={{ display: 'flex', height: '30px' }}
        >
          <Link id={selected == 'Resources' ? styles.selected : undefined} href="#">
            RESOURCES
          </Link>
          {isResourceDrawerVisible && <ResourceDrawer isVisible={isResourceDrawerVisible} />}
        </div>
        <Link
          style={{ height: '30px' }}
          id={selected == 'Gallery' ? styles.selected : undefined}
          href="/gallery"
        >
          GALLERY
        </Link>
        <Link
          style={{ height: '30px' }}
          id={selected == 'Contact' ? styles.selected : undefined}
          href="/contact-us"
        >
          CONTACT
        </Link>
      </section>
      <div id={styles.menuButton} onMouseLeave={menuHandleMouseLeave}>
        <GiHamburgerMenu color="white" size={25} onClick={menuHandleMouseClick} />
        {isMenuVisible && (
          <MenuDrawer
            selected={selected}
            isDrawerVisible={isDrawerVisible}
            drawerHandleMouse={drawerHandleMouse}
            resourceDrawerHandleMouse={resourceDrawerHandleMouse}
            isResourceDrawerVisible={isResourceDrawerVisible}
          />
        )}
      </div>
      {/* {isMenuVisible && <MenuDrawer selected={selected} vertical={true} />} */}
    </>
  );
};

const MenuDrawer = ({
  selected,
  isDrawerVisible,
  drawerHandleMouse,
  resourceDrawerHandleMouse,
  isResourceDrawerVisible
}) => {
  return (
    <section id={styles.menuDrawerVisible}>
      <Link id={selected == 'Home' ? styles.selected : undefined} href="/">
        HOME
      </Link>
      {/* 480 for Home + 4 */}
      {/* Change @media (max-width: __px) accordingly <Link id={selected == 'Resources' ? styles.selected : undefined} href='/resources'>
					RESOURCES
				</Link> */}
      {/* 400 for Home + 3*/}
      <div
        onMouseEnter={drawerHandleMouse}
        onMouseLeave={drawerHandleMouse}
        style={{ display: 'flex' }}
      >
        <Link id={selected == 'Departments' ? styles.selected : undefined} href="#">
          DEPARTMENTS
        </Link>
        {isDrawerVisible && <DeptDrawer isVisible={isDrawerVisible} />}
      </div>
      <div
        onMouseEnter={resourceDrawerHandleMouse}
        onMouseLeave={resourceDrawerHandleMouse}
        style={{ display: 'flex' }}
      >
        <Link id={selected == 'Resources' ? styles.selected : undefined} href="#">
          RESOURCES
        </Link>
        {isResourceDrawerVisible && <ResourceDrawer isVisible={isResourceDrawerVisible} />}
      </div>
      <Link id={selected == 'Gallery' ? styles.selected : undefined} href="/gallery">
        GALLERY
      </Link>
      <Link id={selected == 'Contact' ? styles.selected : undefined} href="/contact-us">
        CONTACT
      </Link>
    </section>
  );
};

const DeptDrawer = ({ isVisible }) => {
  return (
    <div className={`${styles.drawer} ${isVisible ? styles.isVisible : ''}`}>
      <Link className={styles.drawerText} href="/departments/cp">
        Competitive Programming
      </Link>
      <Link className={styles.drawerText} href="/departments/dev-os">
        Dev & OS
      </Link>
      <Link className={styles.drawerText} href="/departments/ml">
        Machine Learning
      </Link>
      <Link className={styles.drawerText} href="/departments/cyber-security">
        Cyber Security
      </Link>
    </div>
  );
};
const ResourceDrawer = ({ isVisible }) => {
  return (
    <div className={`${styles.resourcedrawer} ${isVisible ? styles.isVisible : ''}`}>
      <Link href="/resources/cp">Competitive Programming</Link>
      <Link href="/resources/dev-os">Dev & OS</Link>
      <Link href="/resources/ml">Machine Learning</Link>
      <Link href="/resources/cyber-security">Cyber Security</Link>
    </div>
  );
};

const Header = ({ selected }) => {
  const [isElevated, setIsElevated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setIsElevated(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <header
        style={{
          boxShadow: isElevated
            ? 'rgba(0, 0, 0, 0.2) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'
            : 'none'
        }}
        className={styles.header}
      >
        <HeaderComp selected={selected} />
      </header>
      <header
        style={{
          boxShadow: isElevated
            ? 'rgba(0, 0, 0, 0.2) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'
            : 'none'
        }}
        className={styles.header}
        id={styles.copy}
      >
        <HeaderComp selected={selected} />
      </header>
    </>
  );
};

export default Header;
