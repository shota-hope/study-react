import styles from "src/styles/Home.module.css";

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

export function Links() {
  return (
    <div className={styles.grid}>
      {ITEMS.map(item => {
        return (
          <a key={item.id} href={item.href} className={styles.card}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </a>
        );
      })}
    </div>
  );
}
