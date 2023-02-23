import { useState } from "react";
import "./compilateur.css";
import axios from "axios";
import Editor from "./aceeditor";
import {
  Button,
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";

function Compilateur(props) {
  const {
    language,
    currentExercice,
    step,
    setStep,
    setLanguage,
    languageList,
  } = props;

  const [output, setOutput] = useState("Compiled code will appear here !");
  const [code, setCode] = useState("");
  const [borderColor, setBorderColor] = useState("#c4c4c4");

  const checkResult = (result) => {
    if (result === currentExercice.expectedResult) {
      setBorderColor("green");
      setStep(step + 1);
      setOutput(result);
    } else {
      setBorderColor("red");
      setOutput(":(");
    }
  };

  const optionsForPost = {
    method: "POST",
    url: "https://judge0-ce.p.rapidapi.com/submissions",
    params: { base64_encoded: "true", fields: "*" },
    headers: {
      "content-type": "application/json",
      "Content-Type": "application/json",
      "X-RapidAPI-Key": "3ab6f7ab76msh2b87d564d8ff6b0p1e6003jsnb21732a1a78a",
      "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
    },
    data: {
      language_id: language,
      source_code:
        "I2luY2x1ZGUgPHN0ZGlvLmg+CgppbnQgbWFpbih2b2lkKSB7CiAgY2hhciBuYW1lWzEwXTsKICBzY2FuZigiJXMiLCBuYW1lKTsKICBwcmludGYoImhlbGxvLCAlc1xuIiwgbmFtZSk7CiAgcmV0dXJuIDA7Cn0=",
      stdin: "SnVkZ2Uw",
    },
  };

  const executeCode = () => {
    const codeToCompile = code;
    console.log(codeToCompile);
    console.log(currentExercice.expectedResult);
    if (language === 25) {
      console.log(eval(codeToCompile));
      const result = eval(codeToCompile);
      setOutput(result);
      checkResult(result);
    } else {
      optionsForPost.data = {
        language_id: language,
        source_code: window.btoa(codeToCompile),
        // "stdin": "SnVkZ2Uw"
      };

      // console.log(this.options);
      // console.log("code to compile : " + codeToCompile);
      // console.log("encoded code : " + codeToCompileEncoded);

      //sending the code to get the token
      axios
        .request(optionsForPost)
        .then((response) => {
          var optionsForGet = {
            method: "GET",
            // url: 'https://judge0-ce.p.rapidapi.com/submissions/415414eb-f565-4fcc-a8e1-2a284152d504',
            params: { base64_encoded: "true", fields: "*" },
            headers: {
              "X-RapidAPI-Key":
                "3ab6f7ab76msh2b87d564d8ff6b0p1e6003jsnb21732a1a78a",
              "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
            },
          };
          optionsForGet.url =
            "https://judge0-ce.p.rapidapi.com/submissions/" +
            response.data.token;

          //sending the token to get the output
          axios
            .request(optionsForGet)
            .then((response) => {
              setOutput(response.data.stdout);
            })
            .catch(function (error) {
              console.error(error);
            });
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  };

  return (
    <Box sx={{ width: "70%", margin: "auto", mt: "20px" }}>
      <FormControl fullWidth sx={{ my: "10px" }}>
        <InputLabel id='demo-simple-select-label'>Langage</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          defaultValue={26}
          label='language'
          onChange={(e) => setLanguage(e.target.value)}
        >
          {languageList.map((languageOption) => (
            <MenuItem value={languageOption.id} key={languageOption.id}>
              {languageOption.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Editor getCode={setCode} />
      <br />
      <Button variant='contained' onClick={executeCode} sx={{ m: "10px" }}>
        Executer
      </Button>
      <Box
        sx={{
          border: `solid ${borderColor} 1px`,
          borderRadius: "4px",
          p: "10px",
          m: "20px",
        }}
      >
        <p>{output}</p>
      </Box>
    </Box>
  );
}

export default Compilateur;
