import { Box, styled } from "@mui/material";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import NextLink from 'next/link';
import style from '../../styles/dropdown.module.css'
import { useState, useEffect } from "react";

const NavLink = ({ title, path, cssName }) => {
  return (
    <NextLink href={path} passHref >
      <a className={style.navlink}>
        {title}
      </a>
    </NextLink>
  );
}

const Navbar = ({ navLinks }) => {

  const [scrollPosition, setScroll] = useState(0)
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  return (
    <>
      <Box className={style.menu}>
        <Toolbar
          component="nav"
          sx={{ display: { xs: 'none', md: 'flex' }, }}
        >
          <Stack
            direction="row"
            spacing={2}
            className={`${style.navbar} ${scrollPosition > 100 ? style.scrolledDown : style.scrolledUp}`}
          >
            {navLinks.map(
              ({ title, path, cssName }, i) => (
                <NavLink
                  title={title}
                  path={path}
                  cssName={cssName}
                  key={i} />
              )
            )}
          </Stack>
        </Toolbar>
      </Box>
    </>
  );
};

export default Navbar;