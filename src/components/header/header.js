import { useState, useEffect } from 'react';
import styles from './header.module.css';
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';

const HeaderComp = ({ selected }) => {
  const [isMobileView, setMobileView] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setMobileView(window.screen.availWidth < 1024);
    });
    setMobileView(window.screen.availWidth < 1024);
  }, []);

  const [drawerVisiblity, setDrawerVisibility] = useState('hidden');
  const [isMenuVisible, setMenuVisibility] = useState(false);

  function drawerHandleMouse(id) {
    if (drawerVisiblity == id) setDrawerVisibility('hidden');
    else setDrawerVisibility(id);
  }

  const menuHandleMouseClick = () => {
    setMenuVisibility((current) => !current);
  };

  const menuHandleMouseLeave = () => {
    setMenuVisibility(false);
    setDrawerVisibility('hidden');
  };

  return (
    <>
      <Link href="/">
        <img id={styles.logo} loading="lazy" src="/home/NJACK logo.svg" alt="NJACK Logo" />
      </Link>
      <section
        id={isMobileView && isMenuVisible ? styles.menuDrawerVisible : ''}
        onMouseLeave={menuHandleMouseLeave}>
        <Link id={selected == 'Home' ? styles.selected : undefined} href="/">
          HOME
        </Link>
        <div
          onMouseEnter={() => setDrawerVisibility('dept')}
          onMouseLeave={() => setDrawerVisibility('hidden')}
          onClick={() => drawerHandleMouse('dept')}
          style={{ display: 'flex' }}>
          <a id={selected == 'Departments' ? styles.selected : undefined}>DEPARTMENTS</a>
          {drawerVisiblity == 'dept' && <DeptDrawer />}
        </div>
        <div
          onMouseEnter={() => setDrawerVisibility('res')}
          onMouseLeave={() => setDrawerVisibility('hidden')}
          onClick={() => drawerHandleMouse('res')}
          style={{ display: 'flex' }}>
          <a id={selected == 'Resources' ? styles.selected : undefined}>RESOURCES</a>
          {drawerVisiblity == 'res' && <ResourceDrawer />}
        </div>
        <Link id={selected == 'Gallery' ? styles.selected : undefined} href="/gallery">
          GALLERY
        </Link>
        <Link id={selected == 'Contact' ? styles.selected : undefined} href="/contact-us">
          CONTACT
        </Link>
        <Link
          style={
            isMobileView
              ? { color: '#ff9f69' }
              : {
                  backgroundColor: '#ff9f69',
                  color: 'black',
                  padding: '5px 10px',
                  borderRadius: '5px',
                  marginLeft: '10px'
                }
          }
          id={selected == 'Apeireon' ? styles.selected : undefined}
          href="/apeireon">
          Apeireon
        </Link>
        <Link
          style={
            isMobileView
              ? { color: '#ff9f69' }
              : {
                  border: '1px solid #ff9f69',
                  color: '#ff9f69',
                  padding: '5px 10px',
                  borderRadius: '5px',
                  marginLeft: '10px'
                }
          }
          id={selected == 'Report' ? styles.selected : undefined}
          href="/report-cheating">
          Report Cheating
        </Link>
      </section>

      {isMobileView && (
        <div id={styles.menuButton}>
          <GiHamburgerMenu color="white" size={25} onClick={menuHandleMouseClick} />
        </div>
      )}
    </>
  );
};

const DeptDrawer = () => {
  return (
    <div className={styles.drawer}>
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
const ResourceDrawer = () => {
  return (
    <div className={styles.drawer}>
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
        className={styles.header}>
        <HeaderComp selected={selected} />
      </header>
      <header
        style={{
          boxShadow: isElevated
            ? 'rgba(0, 0, 0, 0.2) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'
            : 'none'
        }}
        className={styles.header}
        id={styles.copy}>
        <HeaderComp selected={selected} />
      </header>
    </>
  );
};

export default Header;
