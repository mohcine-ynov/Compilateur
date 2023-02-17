import { Box, Typography, Button } from "@mui/material";
import Exercice from "../Exercices/Exercice";

const exerciceList = [];
function Exercices() {
  return (
    <Box>
      <Button variant='contained'>+</Button>
      <Typography variant='h4'>Exercices</Typography>
      {exerciceList.map((exercice, index) => (
        <Exercice
          key={index}
          statement={exercice.statement}
          expectedResult={exercice.expectedResult}
          number={index}
        />
      ))}
    </Box>
  );
}

export default Exercices;
