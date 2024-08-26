import { Grid, Typography, useMediaQuery } from "@mui/material";
import { useResponsiveLayout } from "../hooks/useResponsiveLayout";

export const AboutPsychotherapy = () => {
  const isMobile = useMediaQuery("(max-width:430px)");
  const isTablet = useMediaQuery("(max-width:820px)");
  const { isExtraSmall, isMedium, isSmall } =
    useResponsiveLayout();
  return (
    <>
      <Grid
        container
        alignItems={"center"}
        justifyContent={"space-around"}
        height={"auto"}
      >
        <Grid item xs={isMobile ? 11 : 6} sx={{ lineHeight: 1.6 }}>
          <Typography
            fontSize={isMobile ? 17 : 20}
            fontWeight={"bold"}
            marginBottom={2}
            align="center"
          >
            Por que fazer tratamento psicológico com{" "}
            <Typography
              fontSize={isMobile ? 17 : 20}
              fontWeight={"bold"}
              component={"span"}
              className="highlight"
            >
              Hipnose Clínica??
            </Typography>
          </Typography>

          <Typography
            fontSize={isMobile ? 10 : isTablet ? 12 : 15}
            align="justify"
            marginBottom={1}
            variant="body2"
            sx={{ textIndent: "20px" }}
          >
            Você dever ter assistido vídeos com pessoas sendo hipnotizadas em
            que elas esqueciam por um certo momento o próprio nome, ou comiam
            uma cebola demonstrando sentir o sabor de uma maçã. Essa experiência
            é o que denominamos de alucinação positiva hipnótica. Uma
            experiência proporcionada pela indução hipnótica num contexto de
            Hipnose de Entretenimento. No entanto, para vias de tratamento com
            finalidade terapêutica, num contexto de vida no qual o paciente
            deseja a cura ou melhora do seu contexto de vida psicológica e
            noética, não será essas experiências citadas que realizo em minhas
            sessões de Hipnose Clínica.
          </Typography>

          <Typography
            fontSize={isMobile ? 10 : isTablet ? 12 : 15}
            align="justify"
            marginBottom={1}
            variant="body2"
            sx={{ textIndent: "20px" }}
          >
            Meu trabalho como hipnólogo clínico é fundamentado na teoria e
            prática do célebre Milton Hyland Erickson, psicanalista e hipnólogo
            clínico norte-americano, que desenvolveu a hipnose conversacional.
            Milton Erickson foi um homem ético que se dedicou ao desenvolvimento
            e aplicabilidade da Hipnose com finalidade a libertar o ser humano
            dos processos dolorosos inconscientes. O próprio Milton Erickson
            superou graves processos de adoecimento com a vivência da
            auto-hipnose.
          </Typography>
          <Typography
            fontSize={isMobile ? 10 : isTablet ? 12 : 15}
            align="justify"
            marginBottom={1}
            variant="body2"
            sx={{ textIndent: "20px" }}
          >
            A Hipnose Clínica que desenvolvo tem como finalidade a
            ressignificação de memórias traumáticas que, inconscientemente,
            influenciam sua vida psicológica. São incontáveis os casos clínicos
            que pessoas diagnosticadas com Transtornos de Ansiedade, Depressão
            Grave, dentre outras psicopatologias, sofreram tendo como causas
            memórias traumáticas que não raramente são geradoras de traços
            disfuncionais da personalidade. Com os recursos terapêuticos da
            Hipnose puderam recomeçar suas vidas.
          </Typography>
          <Typography
            fontSize={isMobile ? 10 : isTablet ? 12 : 15}
            align="justify"
            marginBottom={1}
            variant="body2"
            sx={{ textIndent: "20px" }}
          >
            Convido-te a iniciar essa jornada nos labirintos da tua mente para
            poderes estar em outros níveis de realizações emocionais e noética.
          </Typography>
        </Grid>
        <Grid
          item
          xs={isMobile ? 12 : 5}
          container
          justifyContent={"center"}
          sx={{ overflow: "hidden" }}
        >
          <img
            src="images/terapy.jpg"
            style={{
              width: isMobile ? 300 : isTablet ? 300 : 400,
              height: isMobile ? 200 : isTablet ? 400 : 500,
              borderRadius: 15,
            }}
          />
        </Grid>
      </Grid>
      <Grid
        container
        marginTop={2}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          bgcolor: "#6b8cb624",
          height: isExtraSmall || isSmall ? 40 : 80,
        }}
      >
        <Typography
          fontSize={isExtraSmall || isSmall ? 6 : isMedium ? 15 : 20}
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
