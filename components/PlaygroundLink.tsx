import Link, { LinkProps as NextLinkProps } from 'next/link';
import { PlaygroundRoute } from '@/lib/constants';

type InternalLinkProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  'href'
> &
  Omit<NextLinkProps, 'href'> & {
    href: PlaygroundRoute;
    target?: '_self' | undefined;
  };

type ExternalLinkProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  'href'
> & {
  href: string;
  target?: '_blank';
};

type AppLinkProps = InternalLinkProps | ExternalLinkProps;

export default function AppLink({
  href,
  target,
  children,
  ...rest
}: AppLinkProps) {
  if (target === '_blank') {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} {...rest}>
      {children}
    </Link>
  );
}
