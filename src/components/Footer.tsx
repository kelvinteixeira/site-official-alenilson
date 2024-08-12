import { Box, Typography } from "@mui/material";
import { useResponsiveLayout } from "../hooks/useResponsiveLayout";

export const Footer = () => {
  const { getFontSize, isSmall, isExtraSmall, isMedium } =
    useResponsiveLayout();
  return (
    <Box padding={2} marginBottom={6}>
      <Typography
      marginBottom={1}
        align="center"
        sx={{
          fontSize: `${getFontSize(
            isExtraSmall || isSmall ? 0.8 : isMedium ? 3 : 1.5
          )}rem`,
        }}
      >
        <Typography
          component={"span"}
          fontWeight={"bold"}
          
          align="center"
          sx={{
            fontSize: `${getFontSize(
              isExtraSmall || isSmall ? 1 : isMedium ? 2.5 : 2
            )}rem`,
          }}
        >
          Atenção:{" "}
        </Typography>
        <Typography
        marginBottom={1}
          component={"span"}
          sx={{
            fontSize: `${getFontSize(
              isExtraSmall || isSmall ? .8 : isMedium ? 2.5 : 2
            )}rem`,
          }}
        >
          Este site não oferece atendimento imediato a pessoas em crise suicida.
        </Typography>
      </Typography>
      <Typography
        textTransform={"uppercase"}
        fontWeight={"bolder"}
        align="center"
        marginBottom={1}
        sx={{
          fontSize: `${getFontSize(
            isExtraSmall || isSmall ? 1 : isMedium ? 3 : 2
          )}rem`,
        }}
      >
        Em caso de crise ligue para o CVV - 188
      </Typography>
      <Typography
        align="center"
        sx={{
          fontSize: `${getFontSize(
            isExtraSmall || isSmall ? 0.7 : isMedium ? 2.5 : 1.5
          )}rem`,
        }}
      >
        Em caso de emergência, procure o hospital mais próximo. Havendo risco de
        morte, ligue imediatamente para o SAMU (192) ou Corpo de Bombeiro (193).
      </Typography>
    </Box>
  );
};
