"use client";

import { usePathname } from "next/navigation";
import classNames from "classnames";
import styles from "./tab-link.module.css";
import Link from "next/link";

export const TabLink = ({ href, title }) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={classNames(styles.link, {
        [styles.activeLink]: href === pathname,
      })}
    >
      {title}
    </Link>
  );
};
