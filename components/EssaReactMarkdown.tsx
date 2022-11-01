/* eslint-disable react/no-unstable-nested-components */
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

export function EssaReactMarkdown({ children }: { children: string }) {
  return (
    <ReactMarkdown
      components={{
        a: ({ href, ...props }) => {
          if (!href) {
            return <a {...props}>{props.children}</a>;
          }
          return (
            <Link href={href}>
              <a {...props}>{props.children}</a>
            </Link>
          );
        },
      }}
    >
      {children}
    </ReactMarkdown>
  );
}
