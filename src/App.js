import "./App.css";
import Compilateur from "./Compilateur/Compilateur";
import Exercices from "./Exercices/Exercices";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { redirect, useParams } from "react-router-dom";

function App() {
  redirect("/student");
  const [step, setStep] = useState(0);
  const [currentExercice, setCurrentExercice] = useState();
  const [mode, setMode] = useState("student");
  const [language, setLanguage] = useState(63);

  // const [languageList, setLanguageList] = useState([
  //   { id: 1, label: "Assembly (NASM 2.14.02)", exercices: [""] },
  //   { id: 2, label: "Bash (5.0.0)", exercices: [""] },
  //   { id: 3, label: "Basic (FBC 1.07.1)", exercices: [""] },
  //   { id: 4, label: "C (Clang 7.0.1)", exercices: [""] },
  //   { id: 5, label: "C (GCC 7.4.0)", exercices: [""] },
  //   { id: 6, label: "C (GCC 8.3.0)", exercices: [""] },
  //   { id: 7, label: "C (GCC 9.2.0)", exercices: [""] },
  //   { id: 8, label: "C# (Mono 6.6.0.161)", exercices: [""] },
  //   { id: 9, label: "C++ (Clang 7.0.1)", exercices: [""] },
  //   { id: 10, label: "C++ (GCC 7.4.0)", exercices: [""] },
  //   { id: 11, label: "C++ (GCC 8.3.0)", exercices: [""] },
  //   { id: 12, label: "C++ (GCC 9.2.0)", exercices: [""] },
  //   { id: 13, label: "Clojure (1.10.1)", exercices: [""] },
  //   { id: 14, label: "COBOL (GnuCOBOL 2.2)", exercices: [""] },
  //   { id: 15, label: "Common Lisp (SBCL 2.0.0)", exercices: [""] },
  //   { id: 16, label: "D (DMD 2.089.1)", exercices: [""] },
  //   { id: 17, label: "Elixir (1.9.4)", exercices: [""] },
  //   { id: 18, label: "Erlang (OTP 22.2)", exercices: [""] },
  //   { id: 19, label: "Executable", exercices: [""] },
  //   { id: 20, label: "F# (.NET Core SDK 3.1.202)", exercices: [""] },
  //   { id: 21, label: "Fortran (GFortran 9.2.0)", exercices: [""] },
  //   { id: 22, label: "Go (1.13.5)", exercices: [""] },
  //   { id: 23, label: "Groovy (3.0.3)", exercices: [""] },
  //   { id: 24, label: "Haskell (GHC 8.8.1)", exercices: [""] },
  //   { id: 25, label: "Java (OpenJDK 13.0.1)", exercices: [""] },
  //   {
  //     id: 26,
  //     label: "JavaScript (Node.js 12.14.0)",
  //     exercices: [
  //       {
  //         statement: "Return the sentence 'Hello World'",
  //         expectedResult: "Hello World",
  //         id: 0,
  //         state: {
  //           label: "On going...",
  //           color: "success",
  //           variant: "outlined",
  //         },
  //       },
  //       {
  //         statement: "Return the sentence 'Hello'",
  //         expectedResult: "Hello",
  //         id: 1,
  //         state: {
  //           label: "To do",
  //           color: "default",
  //           variant: "outlined",
  //         },
  //       },
  //       {
  //         statement: "Return the number 10",
  //         expectedResult: "Hello World",
  //         id: 2,
  //         state: { label: "To do", color: "default", variant: "outlined" },
  //       },
  //     ],
  //   },
  //   { id: 27, label: "Kotlin (1.3.70)", exercices: [""] },
  //   { id: 28, label: "Lua (5.3.5)", exercices: [""] },
  //   { id: 29, label: "Objective-C (Clang 7.0.1)", exercices: [""] },
  //   { id: 30, label: "OCaml (4.09.0)", exercices: [""] },
  //   { id: 31, label: "Octave (5.1.0)", exercices: [""] },
  //   { id: 32, label: "Pascal (FPC 3.0.4)", exercices: [""] },
  //   { id: 33, label: "Perl (5.28.1)", exercices: [""] },
  //   { id: 34, label: "PHP (7.4.1)", exercices: [""] },
  //   { id: 35, label: "Plain Text", exercices: [""] },
  //   { id: 36, label: "Prolog (GNU Prolog 1.4.5)", exercices: [""] },
  //   { id: 37, label: "Python (2.7.17)", exercices: [""] },
  //   { id: 38, label: "Python (3.8.1)", exercices: [""] },
  //   { id: 39, label: "R (4.0.0)", exercices: [""] },
  //   { id: 40, label: "Ruby (2.7.0)", exercices: [""] },
  //   { id: 41, label: "Rust (1.40.0)", exercices: [""] },
  //   { id: 42, label: "Scala (2.13.2)", exercices: [""] },
  //   { id: 43, label: "SQL (SQLite 3.27.2)", exercices: [""] },
  //   { id: 44, label: "Swift (5.2.3)", exercices: [""] },
  //   { id: 45, label: "TypeScript (3.7.4)", exercices: [""] },
  //   { id: 46, label: "Visual Basic.Net (vbnc 0.0.0.5943)", exercices: [""] },
  // ]);

  const [languageList, setLanguageList] = useState([
    { id: 45, label: "Assembly (NASM 2.14.02)", exercices: [""] },
    { id: 46, label: "Bash (5.0.0)", exercices: [""] },
    { id: 47, label: "Basic (FBC 1.07.1)", exercices: [""] },
    { id: 75, label: "C (Clang 7.0.1)", exercices: [""] },
    { id: 76, label: "C++ (Clang 7.0.1)", exercices: [""] },
    { id: 48, label: "C (GCC 7.4.0)", exercices: [""] },
    { id: 52, label: "C++ (GCC 7.4.0)", exercices: [""] },
    { id: 49, label: "C (GCC 8.3.0)", exercices: [""] },
    { id: 53, label: "C++ (GCC 8.3.0)", exercices: [""] },
    { id: 50, label: "C (GCC 9.2.0)", exercices: [""] },
    { id: 54, label: "C++ (GCC 9.2.0)", exercices: [""] },
    { id: 86, label: "Clojure (1.10.1)", exercices: [""] },
    { id: 51, label: "C# (Mono 6.6.0.161)", exercices: [""] },
    { id: 77, label: "COBOL (GnuCOBOL 2.2)", exercices: [""] },
    { id: 55, label: "Common Lisp (SBCL 2.0.0)", exercices: [""] },
    { id: 90, label: "Dart (2.19.2)", exercices: [""] },
    { id: 56, label: "D (DMD 2.089.1)", exercices: [""] },
    { id: 57, label: "Elixir (1.9.4)", exercices: [""] },
    { id: 58, label: "Erlang (OTP 22.2)", exercices: [""] },
    { id: 44, label: "Executable", exercices: [""] },
    { id: 87, label: "F# (.NET Core SDK 3.1.202)", exercices: [""] },
    { id: 59, label: "Fortran (GFortran 9.2.0)", exercices: [""] },
    { id: 60, label: "Go (1.13.5)", exercices: [""] },
    { id: 88, label: "Groovy (3.0.3)", exercices: [""] },
    { id: 61, label: "Haskell (GHC 8.8.1)", exercices: [""] },
    { id: 62, label: "Java (OpenJDK 13.0.1)", exercices: [""] },
    {
      id: 63,
      label: "JavaScript (Node.js 12.14.0)",
      exercices: [
        {
          statement: "Return the sentence 'Hello World'",
          expectedResult: "Hello World",
          id: 0,
          state: {
            label: "On going...",
            color: "success",
            variant: "outlined",
          },
        },
        {
          statement: "Return the sentence 'Hello'",
          expectedResult: "Hello",
          id: 1,
          state: {
            label: "To do",
            color: "default",
            variant: "outlined",
          },
        },
        {
          statement: "Return the number 10",
          expectedResult: "Hello World",
          id: 2,
          state: { label: "To do", color: "default", variant: "outlined" },
        },
      ],
    },
    { id: 78, label: "Kotlin (1.3.70)", exercices: [""] },
    { id: 64, label: "Lua (5.3.5)", exercices: [""] },
    { id: 89, label: "Multi-file program", exercices: [""] },
    { id: 79, label: "Objective-C (Clang 7.0.1)", exercices: [""] },
    { id: 65, label: "OCaml (4.09.0)", exercices: [""] },
    { id: 66, label: "Octave (5.1.0)", exercices: [""] },
    { id: 67, label: "Pascal (FPC 3.0.4)", exercices: [""] },
    { id: 85, label: "Perl (5.28.1)", exercices: [""] },
    { id: 68, label: "PHP (7.4.1)", exercices: [""] },
    { id: 43, label: "Plain Text", exercices: [""] },
    { id: 69, label: "Prolog (GNU Prolog 1.4.5)", exercices: [""] },
    { id: 70, label: "Python (2.7.17)", exercices: [""] },
    { id: 71, label: "Python (3.8.1)", exercices: [""] },
    { id: 80, label: "R (4.0.0)", exercices: [""] },
    { id: 72, label: "Ruby (2.7.0)", exercices: [""] },
    { id: 73, label: "Rust (1.40.0)", exercices: [""] },
    { id: 81, label: "Scala (2.13.2)", exercices: [""] },
    { id: 82, label: "SQL (SQLite 3.27.2)", exercices: [""] },
    { id: 83, label: "Swift (5.2.3)", exercices: [""] },
    { id: 74, label: "TypeScript (3.7.4)", exercices: [""] },
    { id: 84, label: "Visual Basic.Net (vbnc 0.0.0.5943)", exercices: [""] },
  ]);

  const { role } = useParams();
  useEffect(() => {
    setMode(role);
  });

  return (
    <Box className='App' sx={{ display: "flex" }}>
      <Exercices
        step={step}
        setCurrentExercice={setCurrentExercice}
        mode={mode}
        language={language}
        languageList={languageList}
        setLanguageList={setLanguageList}
      />
      <Compilateur
        step={step}
        setStep={setStep}
        currentExercice={currentExercice}
        setCurrentExercice={setCurrentExercice}
        language={language}
        setLanguage={setLanguage}
        languageList={languageList}
        setLanguageList={setLanguageList}
      />
    </Box>
  );
}

export default App;
