import Link from "next/link";

export default function NotFound() {
  console.log("rendered notFound");
  return (
    <div style={{ fontSize: "1.5rem", margin: "1rem 0" }}>
      The page you are looking for cannot be found!
      <div style={{ margin: "2rem 0" }}>
        <Link href="/" style={{ color: "#ccc" }}>
          Please click to return to homepage
        </Link>
      </div>
    </div>
  );
}
