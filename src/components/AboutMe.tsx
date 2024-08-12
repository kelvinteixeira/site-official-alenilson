import { Button, Grid, Typography, useMediaQuery } from "@mui/material";
import { AiOutlineWhatsApp } from "react-icons/ai";

export const AboutMe = () => {
  const isMobile = useMediaQuery("(max-width:430px)");
  const isTablet = useMediaQuery("(max-width:820px)");
  return (
    <>
      <Grid
        container
        alignItems={"center"}
        justifyContent={"space-around"}
        height={isMobile ? "auto" : isTablet ? "auto" : "auto"}
        sx={{
          backgroundColor: "#6b8cb624",
        }}
      >
        <Grid item xs={isMobile ? 11 : 6}>
          <Typography
            fontSize={isTablet ? 15 : 20}
            fontWeight={"bold"}
            color={"secondary"}
            marginBottom={1}
            marginTop={isMobile ? 2 : 6}
          >
            Sobre mim
          </Typography>
          <Typography fontSize={isTablet ? 20 : 25} fontWeight={"bold"}>
            Alenilson Cruz
          </Typography>
          <Typography fontSize={isTablet ? 10 : 13} marginBottom={2}>
            CRP/13 - 7560
          </Typography>
          <Typography
            fontSize={isMobile ? 10 : isTablet ? 12 : 15}
            align="justify"
            marginBottom={1}
            variant="body2"
            sx={{textIndent: "20px"}}
          >
            Olá, muito prazer! Sou Alenilson, psicólogo clínico e hipnoterapeuta
            com uma trajetória em atendimentos presenciais e online desde 2016,
            com experiências psicoterapêuticas bem sucedidas no atendimento de
            todas as faixas etárias, também atuo como palestrante com temas
            vinculados à educação, espiritualidade e saúde mental. Sempre me
            dedicando à psicanálise e à constante formação. A possibilidade de
            me conectar e oferecer apoio a pessoas em qualquer lugar do mundo é
            algo que considero extremamente enriquecedor.
          </Typography>
          <Typography
            fontSize={isMobile ? 10 : isTablet ? 12 : 15}
            align="justify"
            marginBottom={1}
            variant="body2"
            sx={{textIndent: "20px"}}
          >
            Minha paixão pela mente humana sempre me guiou, amo ser psicólogo, o
            sentido da minha vida consiste em ser um facilitador para pessoas
            que vivenciam sofrimentos emocionais encontrem sentido para sua
            existência, como também transcendam suas limitações psicológicas.
            Participar do processo terapêutico e testemunhar o crescimento de
            cada paciente é uma das maiores recompensas da minha profissão.
          </Typography>
          <Typography
            fontSize={isMobile ? 10 : isTablet ? 12 : 15}
            align="justify"
            marginBottom={1}
            variant="body2"
            sx={{textIndent: "20px"}}
          >
            Meu objetivo na terapia psicológica é facilitar o autoconhecimento, e para isso,
            adoto uma postura acolhedora, ética e com uma escuta atenta em cada
            atendimento. Convido você a embarcar nessa jornada comigo, rumo ao
            desenvolvimento emocional que a terapia pode proporcionar.
          </Typography>
          <Typography
            fontSize={isMobile ? 12 : isTablet ? 15 : 20}
            fontWeight={"bold"}
            color={"secondary"}
            marginBottom={1}
            align={isMobile ? "center" : "right"}
            
          >
            Vamos juntos iniciar essa jornada?
          </Typography>
          <Grid container justifyContent={isMobile ? "center" : "end"}>
            <Button
              onClick={() =>
                window.open("https://api.whatsapp.com/send?phone=5583987511576")
              }
              color="secondary"
              variant="contained"
              sx={{
                borderRadius: 5,
                padding: 2,
                color: "#fff",
                fontSize: isMobile ? 8 : isTablet ? 10 : 15,
                marginBottom: 1,
                height: isMobile ? 30 : "auto",
              }}
              startIcon={
                <AiOutlineWhatsApp style={{ fontSize: isTablet ? 20 : 30 }} />
              }
            >
              Fale comigo no Whatsapp
            </Button>
          </Grid>
        </Grid>
        <Grid
          item
          xs={isMobile ? 12 : 5}
          container
          justifyContent={"center"}
          sx={{ overflow: "hidden" }}
        >
          <img
            src="images/AlenilsonRelogio.png"
            style={{ width: isTablet ? 500 : 600 }}
          />
        </Grid>
      </Grid>
    </>
  );
};
