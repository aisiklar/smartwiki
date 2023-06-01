"use client";

type Props = {
  params: {
    searchItem: string;
  };
};

export default function searchParam({ params: { searchItem } }: Props) {
  console.log("params: ", searchItem);
  return <div></div>;
}
