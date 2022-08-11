import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "@/styles/Header.module.scss";
import ExportedImage from "next-image-export-optimizer";
import SearchIcon from "@mui/icons-material/Search";
import { Button, InputBase, Stack } from "@mui/material";

const Header = ({ visibleMobileNav, setVisibleMobileNav }) => {
  const [navClasses, setNavClasses] = useState([styles.nav]);

  useEffect(() => {
    if (visibleMobileNav) {
      setNavClasses([styles.nav]);
    } else {
      setNavClasses([styles.nav, styles.shadow]);
    }
  }, [visibleMobileNav]);

  return (
    <nav className={navClasses.join(' ')}>
        <div className={styles.innercontainer}>
            <div className={styles.clogo}>
                <Link href='/'><ExportedImage src={'images/zot-logo-color.png'} alt="zot Logo" width={64} height={60} /></Link>
            </div>
            <div className={styles.inputcontainer}>
                <Stack className={styles.searchbar} direction="row" alignItems="center" justifyContent="space-between" spacing={2}>
                    <InputBase style={{marginLeft:'3%',height: 46, color:"rgba(0, 0, 0, 0.6)"}}
                                placeholder="Search for content" />
                    <SearchIcon className={styles.searchicon}/>
                </Stack>
            </div>
            <div>
                <Button className={styles.signinbutton} variant="outlined" size="large">Sign in</Button>
            </div>
        </div>
    </nav>
  );
};

export const MobileNav = ({ setVisibleMobileNav }) => {
  const onMobileLinkClickHandler = () => setVisibleMobileNav(false);
  return (
    <div className={styles.mobilenav}>
      <div className={styles.stack}>
        <div className={styles.stackitem}>
          <Link href="https://raulkele.github.io/project-zot-docs/">
            <a onClick={onMobileLinkClickHandler}>Docs</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
