"use client";

import styles from "./listitem.module.css";
import Image from "next/image";
import Link from "next/link";

type Props = {
  data: wikiResult;
};

//export default function ListItem(props: Props) {

export default function ListItem({ data }: Props) {
  console.log("data: ", data);

  let contents = (
    <div className={styles.listItemContainer}>
      <div className={styles.thumbnail}>
        {data.thumbnail ? (
          <Image
            src={data.thumbnail.source}
            alt={`${data.title} pic`}
            width={80}
            height={80}
          ></Image>
        ) : null}
      </div>
      <div className={styles.textWrapper}>
        <p style={{ fontWeight: "bold", fontSize: "1.4rem" }}>{data.title}</p>
        <p>{data.extract}</p>
      </div>
      <div className={styles.linkWrapper}>
        <Link className={styles.links} href={data.fullurl} target="_blank">
          Go
        </Link>
      </div>
    </div>
  );

  return contents;
}
