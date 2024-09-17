import Link from "next/link";
const Navbar = () => {
  const styles = {
    display: "flex",
    background: "grey",
    justifyContent: "space-between",
    padding: "8px",
  };
  return (
    <div style={styles}>
      <Link href="/">Home</Link>
      <Link href="/about">About us</Link>
      <Link href="/contact">Contact us</Link>
    </div>
  );
};

export default Navbar;
