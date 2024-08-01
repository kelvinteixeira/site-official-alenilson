import { Grid, Rating, Typography, useMediaQuery } from "@mui/material";
import { depoiments } from "../services/api";

export const Depoiments = () => {
  const isMobile = useMediaQuery("(max-width:430px)");
  const isTablet = useMediaQuery("(max-width:820px)");
  return (
    <>
      <Grid
        container
        padding={isTablet ? 5 : 2}
        height={isMobile ? "auto" : isTablet ? "auto" : "auto"}
        justifyContent={"center"}
      >
        <Typography
          fontSize={isMobile ? 17 : 20}
          align="center"
          fontWeight={"bold"}
          marginTop={isTablet || isMobile ? 0 : 10}
          marginBottom={isMobile ? 2 : 5}
        >
          Depoimentos de <span className="highlight">Pacientes</span>
        </Typography>
        <Grid container justifyContent={"space-around"}>
          {depoiments.map((depoiments) => (
            <Grid
              key={depoiments.id}
              item
              width={isTablet ? 300 : 350}
              sx={{
                bgcolor: "#6b8cb624",
                height: "auto",
                borderRadius: 5,
                padding: 4,
                marginBottom: 2,
              }}
            >
              <Typography fontWeight={"bold"} marginBottom={1} fontSize={18}>
                {depoiments.name},{" "}
                <span className="highlight">{depoiments.age} anos</span>
              </Typography>
              <Grid container justifyContent={"end"}>
                <Rating
                  sx={{ bottom: 0, right: 0, marginBottom: 1 }}
                  name="read-only"
                  value={5}
                  readOnly
                />
              </Grid>
              <Typography
                fontSize={isMobile ? 12 : 14}
                align="justify"
                marginBottom={1}
              >
                {depoiments.text}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid
        marginBottom={2}
        container
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ bgcolor: "#6b8cb624", height: isMobile ? 40 : 80 }}
      >
        <Typography
          fontSize={isMobile ? 8 : isTablet ? 15 : 20}
          className="highlight"
          fontWeight={"bolder"}
          textTransform={"uppercase"}
        >
          Agende sua consulta online ou presencial, será um prazer ver você
          voar!
        </Typography>
      </Grid>
    </>
  );
};
