import Link from "next/link";
const Aaa = () => {
  return (
    <>
      <div>Aaa 페이지입니다.</div>;
      <Link href="/section04/bbb">Link to 를 활용하여 bbb 페이지로 이동</Link>
      <a href="/section04/bbb">a href 를 홀용하여 bbb 페이지로 이동</a>
    </>
  );
};
export default Aaa;
