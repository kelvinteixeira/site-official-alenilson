import { Grid, Typography, useMediaQuery, Button } from "@mui/material";

export const FirstSection = () => {
  const isMobile = useMediaQuery("(max-width:430px)");
  const isTablet = useMediaQuery("(max-width:820px)");
  return (
    <>
      <Grid
        container
        alignItems={"center"}
        justifyContent={isTablet || isMobile ? "center" : "right"}
        height={isMobile || isMobile ? "35vh" : isTablet ? "40vh" : "100vh"}
        sx={{
          backgroundColor: "#a8bbeca0",
        }}
      >
        <img
          style={{
            width: "100%",
            height: isMobile ? "35vh" : isTablet ? "40vh" : "100vh",
            objectFit: "cover",
            position: "absolute",
            filter: "blur(5px)",
            zIndex: -1,
            content: "",
          }}
          alt="background abstrato"
          src="../images/bg.jpg"
        />

        <Grid
          item
          xs={isTablet || isMobile ? 12 : 6}
          marginRight={isTablet ? 0 : 15}
        >
          <Typography
            fontSize={isMobile ? 15 : isTablet ? 32 : 35}
            align={isTablet || isMobile ? "center" : "justify"}
            fontWeight={"bold"}
            marginBottom={isTablet ? 0 : 2}
            sx={{ padding: isTablet || isMobile ? "3rem 4rem 0 4rem" : 0 }}
          >
            INVESTIR EM TERAPIA É INVESTIR EM VOCÊ MESMO.
          </Typography>
          <Typography
            fontWeight={"bold"}
            fontSize={isMobile ? 10 : 15}
            marginBottom={1}
            align={isTablet ? "center" : "justify"}
          >
            Você pode transformar desafios em conquistas e Alcançar o equilíbrio
            que você merece.
          </Typography>
          <Typography
            fontSize={isMobile ? 10 : 15}
            marginBottom={2}
            align={isTablet ? "center" : "justify"}
          >
            Conheça mais sobre a terapia agende o seu atendimento agora.
          </Typography>
          <Grid container justifyContent={"center"}>
            <Button
              onClick={() =>
                window.open("https://api.whatsapp.com/send?phone=5583987511576")
              }
              variant="contained"
              color="secondary"
              sx={{
                borderRadius: 10,
                width: isMobile ? 200 : 320,
                height: 50,
                fontWeight: "bold",
                fontSize: isMobile ? 12 : "auto",
              }}
            >
              Agendar atendimento!
            </Button>
          </Grid>
        </Grid>
        {isMobile || isTablet ? null : (
          <img
            src="/images/alenilson2.png"
            style={{
              width: 350,
              bottom: 0,
              left: 0,
              zIndex: 0,
              position: "absolute",
              filter: "drop-shadow(0 0 0.75rem #0202024f)",
            }}
          />
        )}
      </Grid>
    </>
  );
};
