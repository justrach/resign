"use client"; // this registers <Editor> as a Client Component
import { BlockNoteView, useCreateBlockNote } from "@blocknote/react";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/react/style.css";
import { useEffect } from "react";
 
// Our <Editor> component we can reuse later
export default function Editor({content}: {content: string}) {
  // Creates a new editor instance.
  const editor = useCreateBlockNote();
 
  useEffect(() => {
    if (editor && content) {
      // Assume `setContent` is the method to update BlockNoteView's content
      editor.setContent(content);
    }
  }, [editor, content]);

  return <BlockNoteView editor={editor} />;
}