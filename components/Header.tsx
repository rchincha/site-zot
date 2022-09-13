import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "@/styles/Header.module.scss";
import ExportedImage from "next-image-export-optimizer";
import SearchIcon from "@mui/icons-material/Search";
import { Button, Divider, InputBase, Stack } from "@mui/material";

const Header = (props) => {
  const { visibleMobileNav, setVisibleMobileNav } = props;
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
                <Link href='/'><ExportedImage src={'images/zot-white.svg'} alt="zot Logo" width={142.55} height={42} /></Link>
            </div>
            <div className={styles.inputcontainer}>
                <Stack className={styles.linksbar} direction="row" spacing={2}>
                    <Link href='/'>zothub</Link>
                    <Link href='/'>docs</Link>
                    <Link href='/'>blog</Link>
                    <Divider orientation="vertical" flexItem sx={{ borderRightWidth: 3, borderColor:'white' }} />
                    <Link href='https://github.com/project-zot/zot'>
                        <a><ExportedImage src={'images/github-white.svg'} alt="Github Logo" width={24} height={24} /></a>
                    </Link>
                    <Link href='https://twitter.com/Cisco/'>
                        <a><ExportedImage src={'images/twitter_new.svg'} alt="Twitter Logo" width={30} height={24} /></a>
                    </Link>
                    <Link href='https://slack.com/'>
                        <a><ExportedImage src={'images/slack.svg'} alt="Slack Logo" width={24} height={24} /></a>
                    </Link>
                </Stack>
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
