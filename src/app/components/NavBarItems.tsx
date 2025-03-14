"use client";
import Link from "next/link";
import style from "./NavBarItems.module.css";
import { usePathname } from "next/navigation";

interface Props {
    path: string;
    title: string;
    link: string
}

const pathName = usePathname();


export default function NavBarItems({ path, title, link }: Props) {
  return (
    <Link className={`${style.link} ${pathName === path && style["active-link"]}`} href={path}>
        <div className={`${style.title}`}>{title}</div>
        <div className={`${style.link}`}>{link}</div>
    </Link>
  )
}
