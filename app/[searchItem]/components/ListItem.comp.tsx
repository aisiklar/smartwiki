"use client";

import styles from "./listitem.module.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Props = {
  data: wikiResult;
};

//export default function ListItem(props: Props) {

export default function ListItem({ data }: Props) {
  //console.log("data: ", data);

  
  const [imageSize, setImageSize] = useState(80);
  
  useEffect(()=> {
    //console.log("window.innerWidth: ", window.innerWidth);
    if (window.innerWidth < 600) {
      setImageSize(50)
    }
    
  }, [])


  /* useEffect(() => {
    console.log("creating error intentionally!");
    throw new Error("my error");
  }, []); */

  let contents = (
    <div className={styles.listItemContainer}>
      <div className={styles.thumbnail}>
        {data.thumbnail ? (
          <Image
            src={data.thumbnail.source}
            alt={`${data.title} pic`}
            width={imageSize}
            height={imageSize}
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
