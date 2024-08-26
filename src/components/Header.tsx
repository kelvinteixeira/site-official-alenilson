import { Button, Grid, useMediaQuery } from "@mui/material";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";

export const Header = () => {
  const isMobile = useMediaQuery("(max-width:430px)");
  const isTablet = useMediaQuery("(max-width:817px)");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isTablet || isMobile ? null : (
        <Grid
          container
          position={"fixed"}
          justifyContent={"space-around"}
          alignItems={"center"}
          height={isTablet ? 75 : 90}
          sx={{ color: "#fff" }}
          className={isScrolled ? "dark-header" : ""}
        >
          <Grid>
            <Button
              sx={{
                color: isScrolled ? "#1A4583" : "#fff",
                fontSize: isTablet ? 14 : 17,
                letterSpacing: 2,
                textTransform: "none",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              <Link
                to="first-section"
                smooth={true}
                duration={500}
                offset={-50}
              >
                Home
              </Link>
            </Button>

            <Button
              sx={{
                color: isScrolled ? "#1A4583" : "#fff",

                fontSize: isTablet ? 14 : 17,
                letterSpacing: 2,
                textTransform: "none",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              <Link to="about-me" smooth={true} duration={500} offset={-50}>
                Sobre mim
              </Link>
            </Button>
            
            <Button
              sx={{
                color: isScrolled ? "#1A4583" : "#fff",

                fontSize: isTablet ? 14 : 17,
                letterSpacing: 2,
                textTransform: "none",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              <Link
                to="psychotherapy"
                smooth={true}
                duration={500}
                offset={-50}
              >
                Hipnose clínica
              </Link>
            </Button>
            <Button
              sx={{
                color: isScrolled ? "#1A4583" : "#fff",

                fontSize: isTablet ? 14 : 17,
                letterSpacing: 2,
                textTransform: "none",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              <Link to="depoiments" smooth={true} duration={500} offset={-50}>
                Depoimentos
              </Link>
            </Button>
            <Button
              sx={{
                color: isScrolled ? "#1A4583" : "#fff",

                fontSize: isTablet ? 14 : 17,
                letterSpacing: 2,
                textTransform: "none",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              <Link to="faq" smooth={true} duration={500} offset={-50}>
                Dúvidas
              </Link>
            </Button>
            <Button
              sx={{
                color: isScrolled ? "#1A4583" : "#fff",

                fontSize: isTablet ? 14 : 17,
                letterSpacing: 2,
                textTransform: "none",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              <Link to="contact" smooth={true} duration={500} offset={-50}>
                Contato
              </Link>
            </Button>
          </Grid>
        </Grid>
      )}
    </>
  );
};
