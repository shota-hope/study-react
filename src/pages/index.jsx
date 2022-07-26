import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Footer } from "../components/Footer";
import { Main } from "../components/Main";
import { Header } from "../components/Header";
import { useCallback, useState } from "react";
import { Links } from "src/components/Links";

const ITEMS = [
  {
    id: 1,
    href: "https://nextjs.org/docs",
    title: "Documentation→",
    description: "Find in-depth information about Next.js features and API.",
  },
  {
    id: 2,
    href: "hhttps://nextjs.org/learn",
    title: "Learn→",
    description: "Learn about Next.js in an interactive course with quizzes!",
  },
  {
    id: 3,
    href: "https://nextjs.org/docs",
    title: "Documentation→",
    description: "Find in-depth information about Next.js features and API.",
  },
  {
    id: 4,
    href: "https://nextjs.org/docs",
    title: "Documentation→",
    description: "Find in-depth information about Next.js features and API.",
  },
];

const Home = (props) => {
  const {
    doubleCount,
    isShow,
    handleClick,
    text,
    array,
    handleChange,
    handleAdd,
    handleDisplay,
  } = props;

  const [items, setItems] = useState([ITEMS]);
  const handleReduce = useCallback(() => {
    setItems((prevItems) => {
      return prevItems.slice(0, prevItems.length - 1);
    });
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Index pate</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Header />
      {isShow ? <h1>{doubleCount}</h1> : null}
      <button href="/about" onClick={handleClick}>
        ボタン
      </button>
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleAdd}>追加</button>
      <ul>
        {array?.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <Main page="index" />
      <Links items={items} handleReduce={handleReduce} />
      <Footer />
    </div>
  );
};

export default Home;
