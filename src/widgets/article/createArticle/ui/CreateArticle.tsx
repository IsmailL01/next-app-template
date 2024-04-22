import { createArticle } from '@/src/entities/article/model/service/createArticle/createArticle';
import React from 'react';

const CreateArticle = () => {
  const onHandleSubmit = () => {
    createArticle;
  };

  return (
    <form>
      <button type="submit"></button>
    </form>
  );
};

export default CreateArticle;
