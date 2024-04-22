'use client';

import React, { ReactNode, useEffect, useState } from 'react';
import { TEXT_VALUE_LC, ArticleTextContext } from '../config/articleTextContext';

export const ArticleTextProvider = ({ children }: { children: ReactNode }) => {
  const [text, setText] = useState('');
  const textValueLC = localStorage.getItem(TEXT_VALUE_LC);

  const changeText = (textValue: string) => {
    setText(textValue);
    localStorage.setItem(TEXT_VALUE_LC, JSON.stringify(textValue));
  };

  useEffect(() => {
    if (textValueLC) {
      setText(textValueLC.replace(/"/g, ''));
    }
  }, []);

  return (
    <ArticleTextContext.Provider value={{ text, changeText }}>
      {children}
    </ArticleTextContext.Provider>
  );
};
