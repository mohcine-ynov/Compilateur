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

const languageList = [
  { id: 1, label: "Assembly (NASM 2.14.02)" },
  { id: 2, label: "Bash (5.0.0)" },
  { id: 3, label: "Basic (FBC 1.07.1)" },
  { id: 4, label: "C (Clang 7.0.1)" },
  { id: 5, label: "C (GCC 7.4.0)" },
  { id: 6, label: "C (GCC 8.3.0)" },
  { id: 7, label: "C (GCC 9.2.0)" },
  { id: 8, label: "C# (Mono 6.6.0.161)" },
  { id: 9, label: "C++ (Clang 7.0.1)" },
  { id: 10, label: "C++ (GCC 7.4.0)" },
  { id: 11, label: "C++ (GCC 8.3.0)" },
  { id: 12, label: "C++ (GCC 9.2.0)" },
  { id: 13, label: "Clojure (1.10.1)" },
  { id: 14, label: "COBOL (GnuCOBOL 2.2)" },
  { id: 15, label: "Common Lisp (SBCL 2.0.0)" },
  { id: 16, label: "D (DMD 2.089.1)" },
  { id: 17, label: "Elixir (1.9.4)" },
  { id: 18, label: "Erlang (OTP 22.2)" },
  { id: 19, label: "Executable" },
  { id: 20, label: "F# (.NET Core SDK 3.1.202)" },
  { id: 21, label: "Fortran (GFortran 9.2.0)" },
  { id: 22, label: "Go (1.13.5)" },
  { id: 23, label: "Groovy (3.0.3)" },
  { id: 24, label: "Haskell (GHC 8.8.1)" },
  { id: 25, label: "Java (OpenJDK 13.0.1)" },
  { id: 26, label: "JavaScript (Node.js 12.14.0)" },
  { id: 27, label: "Kotlin (1.3.70)" },
  { id: 28, label: "Lua (5.3.5)" },
  { id: 29, label: "Objective-C (Clang 7.0.1)" },
  { id: 30, label: "OCaml (4.09.0)" },
  { id: 31, label: "Octave (5.1.0)" },
  { id: 32, label: "Pascal (FPC 3.0.4)" },
  { id: 33, label: "Perl (5.28.1)" },
  { id: 34, label: "PHP (7.4.1)" },
  { id: 35, label: "Plain Text" },
  { id: 36, label: "Prolog (GNU Prolog 1.4.5)" },
  { id: 37, label: "Python (2.7.17)" },
  { id: 38, label: "Python (3.8.1)" },
  { id: 39, label: "R (4.0.0)" },
  { id: 40, label: "Ruby (2.7.0)" },
  { id: 41, label: "Rust (1.40.0)" },
  { id: 42, label: "Scala (2.13.2)" },
  { id: 43, label: "SQL (SQLite 3.27.2)" },
  { id: 44, label: "Swift (5.2.3)" },
  { id: 45, label: "TypeScript (3.7.4)" },
  { id: 46, label: "Visual Basic.Net (vbnc 0.0.0.5943)" },
];

function Compilateur() {
  const [out, setOut] = useState({
    stdout: "Compiled code will appear here !",
  });

  const [code, setCode] = useState("");
  const [language, setLanguage] = useState(languageList[25]);

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
      language_id: language.id,
      source_code:
        "I2luY2x1ZGUgPHN0ZGlvLmg+CgppbnQgbWFpbih2b2lkKSB7CiAgY2hhciBuYW1lWzEwXTsKICBzY2FuZigiJXMiLCBuYW1lKTsKICBwcmludGYoImhlbGxvLCAlc1xuIiwgbmFtZSk7CiAgcmV0dXJuIDA7Cn0=",
      stdin: "SnVkZ2Uw",
    },
  };

  const executeCode = () => {
    const codeToCompile = code;
    if (language.id === 26) {
      // const result = eval(codeToCompile);s
      console.log(eval(codeToCompile));
      // setOut({
      //   stdout: window.atob(result()),
      // });
    } else {
      optionsForPost.data = {
        language_id: language.id,
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
              setOut({
                stdout: window.atob(response.data.stdout),
              });
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
          border: "solid #c4c4c4 1px",
          borderRadius: "4px",
          p: "10px",
          m: "20px",
        }}
      >
        <p>{out.stdout}</p>
      </Box>
    </Box>
  );
}

export default Compilateur;
