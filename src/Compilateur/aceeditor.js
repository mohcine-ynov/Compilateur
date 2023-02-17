import React from "react";
import { Box } from "@mui/material";
import AceEditor from "react-ace";
import "brace/mode/javascript";
import "brace/theme/tomorrow";

function Editor({ getCode }) {
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
      />
    </Box>
  );
}

export default Editor;
