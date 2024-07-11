import Nav from "./nav";

export default function layout({children}) {
  return (
    <div>
      <Nav />
      <main>{children}</main>
    </div>
  );
}
