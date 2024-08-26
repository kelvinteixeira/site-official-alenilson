import { Grid, Rating, Typography } from "@mui/material";
import { depoiments } from "../services/api";
import { useResponsiveLayout } from "../hooks/useResponsiveLayout";

export const Depoiments = () => {
  const { isSmall, isExtraSmall, isMedium } = useResponsiveLayout();
  return (
    <>
      <Grid
        container
        padding={isMedium ? 5 : 2}
        height={"auto"}
        justifyContent={"center"}
      >
        <Typography
          fontSize={isExtraSmall || isSmall ? 17 : 20}
          align="center"
          fontWeight={"bold"}
          marginTop={isMedium || isExtraSmall || isSmall ? 0 : 10}
          marginBottom={isExtraSmall || isSmall ? 2 : 5}
        >
          Depoimentos de <span className="highlight">Pacientes</span>
        </Typography>
        <Grid container justifyContent={"space-around"}>
          {depoiments.map((depoiments) => (
            <Grid
              key={depoiments.id}
              item
              xs={isExtraSmall ? 12 : 5}
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
                variant="body1"
                fontSize={isExtraSmall || isSmall ? 12 : 14}
                marginBottom={1}
              >
                {depoiments.text}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
};
