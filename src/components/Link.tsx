// Dependencies
import NextLink, { LinkProps as LinkNextProps } from "next/link";
import { UrlObject } from "url";

type Props = React.ComponentProps<"a"> & LinkNextProps;

const Link = ({
  href,
  as,
  passHref,
  replace,
  scroll,
  shallow,
  ...rest
}: Props): JSX.Element => {
  const isExternal = href.startsWith("http");

  if (isExternal) {
    return (
      <a {...rest} href={href} rel="noopener noreferrer" target="_blank" />
    );
  }

  return (
    <NextLink
      as={as as string | (string & UrlObject) | undefined}
      href={href}
      passHref={passHref}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
    >
      <a {...rest} />
    </NextLink>
  );
};

export default Link;
