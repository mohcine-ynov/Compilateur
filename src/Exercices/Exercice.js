import { Box, Typography } from "@mui/material";

function Exercice(statement, expectedResult, number) {
  return (
    <Box>
      <Typography variant='h4'>Exercice {number + 1}</Typography>
      <Typography variant='p'>{statement}</Typography>
    </Box>
  );
}

export default Exercice;
