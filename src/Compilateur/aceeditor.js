import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import AceEditor from "react-ace";
import "brace/mode/javascript";
import "brace/theme/tomorrow";

function Editor(props) {
  const { getCode, initCode } = props;
  // const DEFAULT_CODE = `let result = null
  // \n function displayResult(){
  // \t //type your code here
  // \t return result
  // }
  // \n displayResult()`;

  const [defaultCode, setDefaultCode] = useState("");

  useEffect(() => {
    setDefaultCode(initCode);
  }, [initCode]);

  return (
    <Box sx={{ border: "solid #c4c4c4 1px", borderRadius: "4px" }}>
      <AceEditor
        mode='javascript'
        theme='tomorrow'
        name='editor'
        fontSize={14}
        onChange={(e) => {
          getCode(e);
          setDefaultCode(e);
        }}
        editorProps={{ $blockScrolling: true }}
        style={{ width: "100%", height: "200px" }}
        value={defaultCode}
      />
    </Box>
  );
}

export default Editor;
