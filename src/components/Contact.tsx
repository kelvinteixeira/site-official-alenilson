import { Grid, IconButton, Typography } from "@mui/material";
import { useResponsiveLayout } from "../hooks/useResponsiveLayout";

export const Contact = () => {
  const { getFontSize, isSmall, isExtraSmall, isMedium } =
    useResponsiveLayout();
  return (
    <>
      <Grid
        container
        alignItems={"center"}
        justifyContent={"space-around"}
        sx={{
          backgroundColor: "#6b8cb624",
        }}
      >
        <Grid
          padding={3}
          margin={5}
          sx={{
            bgcolor: "#fff",
            width: 500,
            height: isExtraSmall || isSmall ? 250 : 300,
            borderRadius: 5,
          }}
        >
          <Typography
            fontWeight={"bolder"}
            fontSize={isExtraSmall || isSmall ? 20 : 30}
            color={"#6b8cb6"}
          >
            Vamos conversar
          </Typography>
          <Typography
            sx={{
              fontSize: `${getFontSize(
                isExtraSmall || isSmall ? 0.8 : isMedium ? 3 : 2
              )}rem`,
            }}
            marginBottom={2}
          >
            Atendimento presencial e online.
          </Typography>
          <Typography
            sx={{
              fontSize: `${getFontSize(
                isExtraSmall || isSmall ? 1 : isMedium ? 3 : 2
              )}rem`,
            }}
            marginBottom={isExtraSmall || isSmall ? 1 : 2}
          >
            <Grid fontWeight={"bold"} container alignItems={"center"}>
              <img src="images/phone.svg" style={{ width: 30 }} />
              83 98751-1576
            </Grid>
          </Typography>
          <Typography
            sx={{
              fontSize: `${getFontSize(
                isExtraSmall || isSmall ? 0.7 : isMedium ? 3 : 2
              )}rem`,
            }}
            marginBottom={3}
          >
            <Grid container alignItems={"center"}>
              <img src="images/email.svg" style={{ width: 30 }} />
              alenilsondasilvacruz@gmail.com
            </Grid>
          </Typography>
          <Grid
            container
            marginLeft={isExtraSmall || isSmall ? 0 : 4}
            marginRight={isExtraSmall || isSmall ? 15 : 0}
          >
            <IconButton
              href="https://www.instagram.com/alenilson.cruz?utm_source=qr&igsh=MThmNmwzZnhwcjE1dQ%3D%3D"
              target="_blank"
            >
              <img
                src="images/instagram.svg"
                alt="instagram-logo"
                style={{ width: isExtraSmall || isSmall ? 20 : 40 }}
              />
            </IconButton>
            <IconButton
              href="https://www.facebook.com/lelo.silva.1865?mibextid=ZbWKwL"
              target="_blank"
            >
              <img
                src="images/facebook.svg"
                alt="facebook-logo"
                style={{ width: isExtraSmall || isSmall ? 20 : 40 }}
              />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/alenilson-cruz-88010515b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
            >
              <img
                src="images/linkedin.svg"
                alt="linkedin-logo"
                style={{ width: isExtraSmall || isSmall ? 20 : 40 }}
              />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
