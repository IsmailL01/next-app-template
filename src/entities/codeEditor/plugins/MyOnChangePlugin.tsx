'use client';

import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { useEffect, useRef } from 'react';
import { $generateHtmlFromNodes } from '@lexical/html';
import Parse from 'html-react-parser';
import { useArticleTextProvider } from '@/src/app/_providers/articleTextProvider/config/articleTextContext';
import '../ui/codeEditor.css';

export function MyOnChangePlugin() {
  const { changeText, text } = useArticleTextProvider();

  const [editor] = useLexicalComposerContext();
  const componentMounted = useRef(true);

  const defaultTMP = '<p class="editor-paragraph"><br></p>';

  useEffect(() => {
    if (componentMounted) {
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          const htmlText = $generateHtmlFromNodes(editor);
          if (htmlText !== defaultTMP) {
            changeText?.(htmlText);
          }
        });
      });
    }
    return () => {
      componentMounted.current = false;
    };
  }, [editor]);

  return <div className="paperList">{Parse(text)}</div>;
}
