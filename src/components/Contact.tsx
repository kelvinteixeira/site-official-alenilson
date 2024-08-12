import { Grid, IconButton, Typography, useMediaQuery } from "@mui/material";

export const Contact = () => {
  const isMobile = useMediaQuery("(max-width:430px)");
  const isTablet = useMediaQuery("(max-width:820px)");
  return (
    <>
      <Grid
        container
        alignItems={"center"}
        justifyContent={"space-around"}
        height={isMobile ? "auto" : isTablet ? "auto" : "100vh"}
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
            height: isMobile ? 250 : 300,
            borderRadius: 5,
          }}
        >
          <Typography
            fontWeight={"bolder"}
            fontSize={isMobile ? 20 : 30}
            color={"#6b8cb6"}
          >
            Vamos conversar
          </Typography>
          <Typography fontSize={isMobile ? 13 : 15} marginBottom={2}>
            Atendimento presencial e online.
          </Typography>
          <Typography
            fontSize={isMobile ? 15 : 20}
            marginBottom={isMobile ? 1 : 2}
          >
            <Grid fontWeight={"bold"} container alignItems={"center"}>
              <img src="images/phone.svg" style={{ width: 30 }} />
              83 98751-1576
            </Grid>
          </Typography>
          <Typography fontSize={isMobile ? 15 : 17} marginBottom={3}>
            <Grid container alignItems={"center"}>
              <img src="images/email.svg" style={{ width: 30 }} />
              alenilsondasilvacruz@gmail.com
            </Grid>
          </Typography>
          <Grid
            container
            alignItems={"center"}
            justifyContent={isMobile ?"center": "start"}
            marginLeft={isMobile ? 0 : 4}
            marginRight={isMobile ? 15 : 0}
          >
            <IconButton
              href="https://www.instagram.com/alenilson.cruz?utm_source=qr&igsh=MThmNmwzZnhwcjE1dQ%3D%3D"
              target="_blank"
            >
              <img
                src="images/instagram.svg"
                alt="instagram-logo"
                style={{ width: isMobile ? 20 : 40 }}
              />
            </IconButton>
            <IconButton
              href="https://www.facebook.com/lelo.silva.1865?mibextid=ZbWKwL"
              target="_blank"
            >
              <img
                src="images/facebook.svg"
                alt="facebook-logo"
                style={{ width: isMobile ? 20 : 40 }}
              />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/alenilson-cruz-88010515b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
            >
              <img
                src="images/linkedin.svg"
                alt="linkedin-logo"
                style={{ width: isMobile ? 20 : 40 }}
              />
            </IconButton>
          </Grid>
        </Grid>
        <Grid
          marginBottom={2}
          container
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ bgcolor: "#fff", height: 120 }}
        >
          <Typography fontSize={isMobile ? 10 : isTablet ? 13 : 15}>
            Atenção: Este site não oferece atendimento imediato a pessoas em
            crise suicida.
          </Typography>
          <Typography
            fontSize={isTablet ? 15 : 20}
            textTransform={"uppercase"}
            fontWeight={"bolder"}
          >
            Em caso de crise ligue para o CVV - 188
          </Typography>
          <Typography fontSize={isTablet ? 11 : 15} align="center">
            Em caso de emergência, procure o hospital mais próximo. Havendo
            risco de morte, ligue imediatamente para o SAMU (192) ou Corpo de
            Bombeiro (193).
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
