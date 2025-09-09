"use client";
import styles from "./styles.module.css";

export default function CssPage() {
  return (
    <>
      <button className={styles.buttonStyle}>버튼</button>
      <div className={styles.divStyle}> 네모상자</div>
    </>
  );
}
