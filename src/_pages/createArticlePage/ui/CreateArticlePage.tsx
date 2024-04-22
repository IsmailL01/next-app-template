'use client';

import { InitialConfigType, LexicalComposer } from '@lexical/react/LexicalComposer';
import ExampleTheme from '@/src/entities/ExampleTheme';
import { CodeEditor } from '@/src/entities/codeEditor';
import { MyOnChangePlugin } from '@/src/entities/codeEditor/plugins/MyOnChangePlugin';
import cls from './createArticlePage.module.css';

const CreateArticlePage = () => {
  const editorConfig: InitialConfigType = {
    namespace: 'React.js Demo',
    nodes: [],
    onError(error: Error) {
      throw error;
    },
    theme: ExampleTheme,
  };

  return (
    <div className={cls.container}>
      <LexicalComposer initialConfig={editorConfig}>
        <CodeEditor />
        <MyOnChangePlugin />
      </LexicalComposer>
    </div>
  );
};

export default CreateArticlePage;
