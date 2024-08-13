import { Grid, Typography, useMediaQuery } from "@mui/material";

export const Psychotherapy = () => {
  const isMobile = useMediaQuery("(max-width:430px)");
  const isTablet = useMediaQuery("(max-width:820px)");
  return (
    <>
      <Grid
        container
        justifyContent={"space-around"}
        alignItems={"center"}
        padding={isTablet ? 5 : 2}
        height={"auto" }
      >
        <Grid
          item
          xs={isTablet ? 12 : 5}
          marginBottom={isTablet ? 5 : 0}
          sx={{
            bgcolor: "#6b8cb624",
            height: isTablet ? "auto" : "450px",
            borderRadius: 8,
            padding: 4,
          }}
        >
          <Typography
            align="justify"
            fontWeight={"bold"}
            fontSize={isMobile ? 13 : 20}
            marginBottom={2}
          >
            Se você quer assumir o{" "}
            <span className="highlight">controle da sua mente</span> e acabar
            com a ansiedade, está no lugar certo!{" "}
          </Typography>
          <Typography
            fontSize={isMobile ? 10 : 15}
            align="justify"
            marginBottom={1}
          >
            A ansiedade é um sinal de que algo precisa de atenção na sua vida.
            Para tratar a ansiedade, é essencial seguir por dois caminhos
            simultâneos.
          </Typography>
          <Typography fontSize={isMobile ? 10 : 15} align="justify">
            O primeiro é mais prático: utilizar técnicas específicas para
            reduzir a ansiedade e os desconfortos físicos que ela provoca. O
            segundo é mais profundo: explorar as raízes que deram origem à
            ansiedade. Este é um processo único e personalizado para cada
            paciente.
          </Typography>
        </Grid>
        <Grid
          item
          xs={isTablet ? 12 : 5}
          sx={{
            bgcolor: "#6b8cb624",
            height: isTablet ? "auto" : "450px",
            borderRadius: 8,
            padding: 4,
          }}
        >
          {" "}
          <Typography
            align="justify"
            fontWeight={"bold"}
            fontSize={isMobile ? 13 : 20}
            marginBottom={2}
          >
            Se você lida com ansiedade, procrastinação, falta de motivação ou
            baixa autoestima, é provável que experimente:
          </Typography>
          <Typography
            fontSize={isMobile ? 10 : 15}
            align="justify"
            marginBottom={1}
          >
            Preocupação constante e pensamentos acelerados, deixando sua mente
            sempre agitada.
          </Typography>
          <Typography
            fontSize={isMobile ? 10 : 15}
            align="justify"
            marginBottom={1}
          >
            Dificuldade para focar e concluir tarefas, além de incerteza na
            tomada de decisões.
          </Typography>
          <Typography fontSize={isMobile ? 10 : 15} align="justify" marginBottom={1}>
            Desinteresse e desânimo, tornando desafiador começar ou finalizar
            atividades. Problemas em se conectar com os outros, com dificuldade
            para impor limites e se afirmar.
          </Typography>
          <Typography fontSize={isMobile ? 10 : 15} align="justify" marginBottom={1}>
            Sintomas físicos como respiração ofegante e batimentos cardíacos
            acelerados. Sentimento de inadequação, como se estivesse sempre
            prestes a ser desmascarado.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
