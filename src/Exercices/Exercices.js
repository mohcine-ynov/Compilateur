import { Box, Typography, Button } from "@mui/material";
import Exercice from "../Exercices/Exercice";
import AddExercise from "./AddExercise";
import { useEffect, useState } from "react";

function Exercices(props) {
  const {
    step,
    setCurrentExercice,
    mode,
    language,
    languageList,
    setLanguageList,
  } = props;

  useEffect(() => {
    setCurrentExercice(
      languageList.find((l) => l.id == language).exercices[step]
    );
  });

  useEffect(() => {
    console.log("ici");
    const temp = languageList.map((l, index) => {
      if (l.id === language) {
        l.exercices.forEach((ex, index) => {
          if (ex.id === step - 1) {
            ex.state = {
              label: "Success",
              color: "success",
              variant: "filled",
            };
          } else if (ex.id === step) {
            ex.state = {
              label: "On going...",
              color: "success",
              variant: "outlined",
            };
          }
        });
      }
      return l;
    });
    setLanguageList(temp);
    // setCurrentExercice(languageList[language].exercices[step]);
  }, [step]);

  const [open, setOpen] = useState(false);
  // const addExercise = (data) => {
  //   setLanguageList([
  //     ...languageList[language].exercices,
  //     { statement: data.statement, expectedResult: data.expectedResult },
  //   ]);
  // };
  return (
    <Box>
      <AddExercise
        exerciseIndex={
          languageList.find((l) => l.id === language).exercices.length
        }
        open={open}
        setOpen={setOpen}
        addExercise={languageList.find((l) => l.id === language)}
      />
      <Typography variant='h4' sx={{ mt: "30px", mb: "10px" }}>
        Exercices
      </Typography>
      {mode == "admin" ? (
        <Button
          variant='contained'
          onClick={() => setOpen(true)}
          sx={{ width: "calc(100% - 1em)" }}
        >
          +
        </Button>
      ) : (
        <></>
      )}

      {languageList
        .find((l) => l.id === language)
        .exercices.map((exercice, index) => (
          <Exercice
            key={index}
            statement={exercice.statement}
            expectedResult={exercice.expectedResult}
            number={index}
            state={exercice.state}
            mode={mode}
            step={step}
            index={index}
          />
        ))}
    </Box>
  );
}

export default Exercices;
