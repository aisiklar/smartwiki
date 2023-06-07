import Link from "next/link";

export default function NotFound() {
  console.log("rendered notFound");
  return (
    <div style={{ fontSize: "1.5rem", margin: "1rem 1rem" }}>
      The page you are looking for cannot be found!
      <div style={{ margin: "2rem 0" }}>
        <Link href="/" style={{ color: "#ccc" }}>
          Please click to return to homepage or make a new search.
        </Link>
      </div>
    </div>
  );
}
