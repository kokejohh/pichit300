"use client";

import Editor from "@monaco-editor/react";
import { useState } from "react";

export default function MonacoEditor() {
    const [code, setCode] = useState("// เขียนโค้ดที่นี่");

    return (
        <Editor
            className="w-20"
            width="500px"
            height="500px"
            defaultLanguage="javascript"
            value={code}
            onChange={(value) => setCode(value || "")}
            theme="vs-dark"
            options={{
                fontSize: 14,
                minimap: { enabled: false },
            }}
        />
    );
}
