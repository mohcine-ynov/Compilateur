import "./App.css";
import Compilateur from "./Compilateur/Compilateur";
import Exercices from "./Exercices/Exercices";
import { Box } from "@mui/material";

function App() {
  return (
    <Box className='App' sx={{ display: "flex" }}>
      <Exercices />
      <Compilateur />
    </Box>
  );
}

export default App;
