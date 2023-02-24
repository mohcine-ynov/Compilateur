import { Box, Typography, Divider, Chip } from "@mui/material";

function Exercice(props) {
  const { mode, number, statement, state, step, index } = props;
  return (
    <Box
      sx={{
        backgroundColor:
          mode === "admin" ? "none" : index <= step ? "none" : "grey",
        m: 1,
        border: "solid 1px #1976d2",
        borderRadius: "5px",
        textAlign: "left",
        padding: 1,
      }}
    >
      <Box>
        <Typography variant='h6'>Exercice {number + 1}</Typography>
        <Divider sx={{ mb: "10px" }} />
        <Typography
          variant='p'
          sx={{
            visibility: step < number && mode == "student" ? "hidden" : "",
          }}
        >
          {statement}
        </Typography>
      </Box>
      <Box sx={{ textAlign: "right" }}>
        {mode === "student" && !!state ? (
          <Chip
            label={state.label}
            color={state.color}
            variant={state.variant}
            sx={{ mt: "10px" }}
          />
        ) : (
          <></>
        )}
      </Box>
    </Box>
  );
}

export default Exercice;
