import Link from "next/link";
import styles from "./index.module.scss";
import Image from "next/image";

const TOPICS = [
  {
    path: "/",
    title: "All",
  },
  {
    path: "/topics/business",
    title: "Business",
  },
  {
    path: "/topics/technology",
    title: "Technology",
  },
  {
    path: "/topics/entertainment",
    title: "Entertainment",
  },
  {
    path: "/topics/sports",
    title: "Sports",
  },
  {
    path: "/topics/general",
    title: "General",
  },
  {
    path: "/topics/science",
    title: "Science",
  },
  {
    path: "/topics/health",
    title: "Health"
  }
];

const Nav: React.FC = () => {
  return (
    <section className={styles.container}>
      <ul className={styles.contents}>
        {TOPICS.map((topic, index) => {
          return (
            <li key={index} >
              <Link href={`${topic.path}`}>
                <a>
                  <span>{topic.title}</span>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Nav;
