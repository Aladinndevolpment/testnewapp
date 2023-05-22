import dynamic from "next/dynamic";
import React, { useRef } from "react";
import { DockPosition, ThemeColor, EditorConfig } from "react-email-editor";

const EmailEditor = dynamic(import("react-email-editor"), { ssr: false });

export default function EmailBuilder() {
  const emailEditorRef = useRef<any>(null);

  const exportHtml = () => {
    emailEditorRef.current.editor.exportHtml((data: any) => {
      const { design, html } = data;
      console.log("exportHtml", html);
    });
  };

  const onReady = () => {
    // editor is ready
    // you can load your template here;
    // const templateJson = {};
    // emailEditorRef.current.editor.loadDesign(templateJson);
  };

  return (
    <div className="h-[88%]">
      <div>
        <button onClick={exportHtml}>Export HTML</button>
      </div>

      <EmailEditor
        onReady={onReady}
        ref={emailEditorRef}
        minHeight="100%"
        style={{ backgroundColor: "white" }}
        options={{
          displayMode: "web",
          //   editor: { confirmOnDelete: true },
          tools: {},
          appearance: { panels: { tools: { dock: "left" } }, theme: "light" },
          //   blocks: [{}],
          features: { ai: false },
        }}
        tools={{}}
      />
    </div>
  );
}
