import Link from "next/link";
const Bbb = () => {
  return (
    <>
      <div>Aaa 페이지입니다.</div>;
      <Link href="/section04/aaa">Link to 를 활용하여 aaa 페이지로 이동</Link>
      <a href="/section04/aaa">a href 를 홀용하여 aaa 페이지로 이동</a>
    </>
  );
};
export default Bbb;
