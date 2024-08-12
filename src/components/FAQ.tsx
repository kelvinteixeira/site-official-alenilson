import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import { questions } from "../services/api";

export default function FAQ() {
  const isMobile = useMediaQuery("(max-width:430px)");
  const isTablet = useMediaQuery("(max-width:820px)");
  return (
    <>
      <Grid
        container
        padding={isTablet ? 5 : 10}
        height={isMobile ? "auto" : isTablet ? "auto" : "auto"}
        justifyContent={"center"}
      >
        <Typography
          fontSize={isMobile ? 17 : 20}
          align="center"
          fontWeight={"bold"}
          marginBottom={isMobile ? 2 : 5}
        >
          Perguntas <span className="highlight">Comuns</span>
        </Typography>
        {questions.map((question) => (
          <Accordion sx={{ bgcolor: "#6b8cb624", marginBottom: 2 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography fontSize={isMobile ? 14 : 18} fontWeight={"bold"}>
                {question.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography fontSize={isMobile ? 12 : 18}>
                {question.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Grid>
    </>
  );
}
