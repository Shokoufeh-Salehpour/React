import Link from "next/link";
import style from "./index.module.css";

export default function Header() {
  return (
    <ul className={style.menu}>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/users">Users</Link>
      </li>
    </ul>
  );
}
