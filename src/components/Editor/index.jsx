import React, { useEffect, useRef } from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import './style.css'

const EditorComponent = () => {
  const editorInstance = useRef(null);
  const editorCore = useRef(null);

  useEffect(() => {
    if (!editorInstance.current) {
      const editor = new EditorJS({
        holder: 'editor',
        tools: {},
        data: {},
        onChange: () => {
          editorCore.current.saver.save();
        },
      });

      editorInstance.current = editor;
      editorCore.current = editor;
    }

    return () => {
      if (editorInstance.current && editorCore.current) {
        editorInstance.current.isReady
          .then(() => {
            editorCore.current = null;
          })
          .catch(() => {});
      }
    };
  }, []);

  const handlePaste = (event) => {
    const selection = window.getSelection();
    if (editorCore.current && selection.rangeCount > 0) {
      const currentRange = selection.getRangeAt(0);
      editorCore.current.caret.setToRange(currentRange);
      editorCore.current.paste(event.clipboardData);
    }
  };

  return (
    <div>
      <div id="editor" onPaste={handlePaste} className='editor'></div>
    </div>
  );
};

export default EditorComponent;