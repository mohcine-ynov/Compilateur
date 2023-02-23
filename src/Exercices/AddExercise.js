import {
  Typography,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  Divider,
  DialogTitle,
} from "@mui/material";
import { useState } from "react";
import Exercice from "./Exercice";

function AddExercise(props) {
  const [statement, setStatement] = useState("");
  const [expectedResult, setExpectedResult] = useState("");
  return (
    <Dialog open={props.open} onClose={() => props.setOpen(false)}>
      <DialogTitle variant='h4'>Add exercise</DialogTitle>
      <Divider />
      <DialogContent>
        <Typography sx={{ fontSize: "1em" }}>
          Please enter the exercise instruction and the value of the output
          wanted
        </Typography>

        <TextField
          autoFocus
          margin='dense'
          id='instructions'
          label='Instructions'
          fullWidth
          variant='standard'
          value={statement}
          onChange={(e) => setStatement(e.target.value)}
          placeholder="Example: Return 'Hello World'"
        />
        <TextField
          autoFocus
          margin='dense'
          id='outputWanted'
          label='Output Wanted'
          fullWidth
          variant='standard'
          value={expectedResult}
          onChange={(e) => setExpectedResult(e.target.value)}
          placeholder="Example: 'Hello World'"
        />
        {/* <Divider sx={{ my: "20px" }} /> */}
        <Typography variant='h6' sx={{ mt: "5px" }}>
          Preview
        </Typography>
        <Exercice
          statement={statement}
          expectedResult={expectedResult}
          number={props.exerciseIndex}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={() => props.setOpen(false)}>Cancel</Button>
        <Button
          onClick={() => {
            props.addExercise({
              statement: statement,
              expectedResult: expectedResult,
              id: props.exerciseIndex,
            });
            props.setOpen(false);
          }}
        >
          AddExercise
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddExercise;
