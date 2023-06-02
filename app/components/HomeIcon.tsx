"use client";
import Link from "next/link";
import { useState } from "react";
import SvgComponent from "./SvgComponent";
import styles from "./header.module.css";

type iconColor = string;

export default function HomeIcon() {
  const [iconColor, setIconColor] = useState("#ccc");

  return (
    <div
      className={styles.homeIcon}
      onMouseOver={() => setIconColor("white")}
      onMouseLeave={() => setIconColor("#ccc")}
    >
      <Link href="/">
        <SvgComponent color={iconColor}></SvgComponent>
      </Link>
    </div>
  );
}
