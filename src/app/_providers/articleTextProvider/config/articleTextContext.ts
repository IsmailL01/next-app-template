'use client';

import { createContext, useContext } from 'react';

interface articleTextProps {
  text: string;
  changeText?: (text: string) => void;
}

export const ArticleTextContext = createContext<articleTextProps>({ text: '' });

export const useArticleTextProvider = () => {
  const { text, changeText } = useContext(ArticleTextContext);

  return { text, changeText };
};

export const TEXT_VALUE_LC = 'TEXT_VALUE_LC';
