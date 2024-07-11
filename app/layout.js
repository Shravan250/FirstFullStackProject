import Nav from "./nav";

export default function layout({}) {
  return (
    <div>
      <Nav />
      <main>{children}</main>
    </div>
  );
}
