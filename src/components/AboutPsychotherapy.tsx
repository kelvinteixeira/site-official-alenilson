import { Grid, Typography, useMediaQuery } from "@mui/material";

export const AboutPsychotherapy = () => {
  const isMobile = useMediaQuery("(max-width:430px)");
  const isTablet = useMediaQuery("(max-width:820px)");
  return (
    <>
      <Grid
        container
        alignItems={"center"}
        justifyContent={"space-around"}
        height={isMobile ? "auto" : isTablet ? "auto" : "100vh"}
      >
        <Grid item xs={isMobile ? 11 : 6} sx={{ lineHeight: 1.6 }}>
          <Typography
            fontSize={isMobile ? 17 : 25}
            fontWeight={"bold"}
            marginBottom={2}
            align="center"
          >
            Por que a <span className="highlight">Psicanálise?</span>
          </Typography>

          <Typography
            fontSize={isMobile ? 10 : isTablet ? 12 : 15}
            align="justify"
            marginBottom={1}
          >
            A psicanálise é uma ferramenta poderosa para o autoconhecimento e a
            compreensão profunda dos nossos comportamentos, pensamentos e
            emoções. Ela nos permite explorar o inconsciente, onde muitas das
            nossas experiências passadas, desejos e conflitos estão armazenados
            e influenciam nossas vidas de maneiras que nem sempre percebemos. Ao
            trazer à tona esses conteúdos ocultos, a psicanálise nos ajuda a
            identificar padrões que podem estar limitando nosso bem-estar e
            desenvolvimento pessoal. Esse processo de introspecção nos
            proporciona uma maior consciência de nós mesmos e nos permite tomar
            decisões mais conscientes e autênticas, livres das amarras do
            passado.
          </Typography>

          <Typography
            fontSize={isMobile ? 10 : isTablet ? 12 : 15}
            align="justify"
            marginBottom={1}
          >
            Além disso, a psicanálise oferece um espaço seguro e acolhedor para
            expressar pensamentos e sentimentos que muitas vezes não temos a
            oportunidade de compartilhar no cotidiano. Esse ambiente de escuta
            qualificada, onde não há julgamentos, permite uma reflexão mais
            profunda sobre nossas vivências, medos e ansiedades. O terapeuta,
            com sua formação específica, nos guia nesse processo, ajudando a
            desvendar camadas da nossa personalidade que muitas vezes não
            conhecemos. Através da psicanálise, é possível alcançar uma
            transformação interna significativa, levando a uma vida mais
            equilibrada, saudável e satisfatória.
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
    </>
  );
};
