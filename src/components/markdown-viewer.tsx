'use client';
import dynamic from 'next/dynamic';
const ReactGitHubMarkdownViewer = dynamic(() => import('react-github-markdown').then((mod) => mod.MarkdownViewer), { ssr: false });

type TMDViewer = {
  content: string;
} & any;

const MarkdownViewer = (props: TMDViewer) => {
  return (typeof props?.content == 'string' && props?.content.length) ? (
      <ReactGitHubMarkdownViewer value={props?.content} isDarkTheme={false} />
  ) : <div />;
};

export default MarkdownViewer;
