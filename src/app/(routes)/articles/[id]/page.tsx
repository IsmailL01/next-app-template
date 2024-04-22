interface ArticlePageProps {
  params: {
    id: string;
  };
}

const ArticlePage = (props: ArticlePageProps) => {
  return <div>{props.params.id}</div>;
};

export default ArticlePage;
