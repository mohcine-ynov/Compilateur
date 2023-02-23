import React from "react";
import { Box } from "@mui/material";
import AceEditor from "react-ace";
import "brace/mode/javascript";
import "brace/theme/tomorrow";

function Editor(props) {
  const { getCode } = props;
  const DEFAULT_CODE = `let result = null
  \n function displayResult(){
  \t //type your code here
  \t return result
  }
  \n displayResult()`;
  return (
    <Box sx={{ border: "solid #c4c4c4 1px", borderRadius: "4px" }}>
      <AceEditor
        mode='javascript'
        theme='tomorrow'
        name='editor'
        fontSize={14}
        onChange={getCode}
        editorProps={{ $blockScrolling: true }}
        style={{ width: "100%", height: "200px" }}
        defaultValue={DEFAULT_CODE}
      />
    </Box>
  );
}

export default Editor;
