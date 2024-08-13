import { Grid, Typography, Button } from "@mui/material";
import { useResponsiveLayout } from "../hooks/useResponsiveLayout";

export const FirstSection = () => {
  const {
    getFontSize,
    isExtraSmall,
    isSmall,
    isMedium,
    isLarge,
    isExtraLarge,
  } = useResponsiveLayout();
  return (
    <>
      <Grid
        container
        className="bg"
        padding={2}
        justifyContent={
          isMedium || isSmall || isExtraSmall ? "center" : "right"
        }
        height={isLarge  ? "100vh" : "auto"}
        sx={{
          backgroundColor: "#a8bbeca0",
        }}
      >
        <Grid
          item
          xs={isMedium || isExtraSmall || isSmall ? 12 : 6}
          padding={2}
          marginTop={isLarge || isExtraLarge ? 5 : 0}
        >
          <Grid container justifyContent={"center"}>
            <img
              style={{
                width: isExtraSmall ? 250 : 400,
                position:
                  isExtraSmall || isSmall || isMedium ? "relative" : "initial",
              }}
              src="/images/AlenilsonLogo.png"
            />
          </Grid>
          <Typography
            align={isMedium || isSmall || isExtraSmall ? "center" : "justify"}
            fontWeight={"bold"}
            marginBottom={2}
            sx={{
              fontSize: `${getFontSize(
                isExtraSmall ? 1.2 : isSmall ? 1.4 : isMedium ? 4 : 3
              )}rem`,
              textTransform: "uppercase",
            }}
          >
            INVESTIR EM TERAPIA PSICOLÓGICA É INVESTIR EM VOCÊ MESMO.
          </Typography>
          <Typography
            fontWeight={"bold"}
            marginBottom={2}
            align={isMedium ? "center" : "justify"}
            sx={{
              fontSize: `${getFontSize(
                isExtraSmall ? 1 : isSmall ? 1.4 : isMedium ? 2 : 2
              )}rem`,
            }}
          >
            Você pode transformar desafios em conquistas e Alcançar o equilíbrio
            que você merece.
          </Typography>
          <Typography
            sx={{
              fontSize: `${getFontSize(
                isExtraSmall ? 1 : isSmall ? 1.4 : isMedium ? 2 : 2
              )}rem`,
            }}
            marginBottom={2}
            align={isMedium ? "center" : "justify"}
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
                width: isExtraSmall ? 180 : 320,
                height: isLarge || isExtraLarge ? 50 : 30,
                fontWeight: "bold",
                fontSize: isExtraSmall ? 10 : "auto",
              }}
            >
              Agendar atendimento!
            </Button>
          </Grid>
        </Grid>
        {isExtraSmall || isSmall || isMedium ? null : (
          <Grid item xs={1}>
            <img
              src="/images/alenilson2.png"
              style={{
                width: 350,
                bottom: isExtraLarge ? -207 : 0,
                left: 0,
                zIndex: 0,
                position: "absolute",
                filter: "drop-shadow(0 0 0.75rem #0202024f)",
              }}
            />
          </Grid>
        )}
      </Grid>
    </>
  );
};
