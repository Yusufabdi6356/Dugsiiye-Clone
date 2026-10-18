import Link from "next/link";
import { isClonedRoute } from "@/lib/routes";

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export default function SmartLink({ href, children, ...rest }: Props) {
  if (isClonedRoute(href)) {
    return (
      <Link href={href} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} {...rest}>
      {children}
    </a>
  );
}
