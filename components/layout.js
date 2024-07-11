import Nav from "./Nav";

export default function layout({}) {
  return (
    <div>
      <Nav />
      <main>{children}</main>
    </div>
  );
}
