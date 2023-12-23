import Image from "next/image";
import styles from "./page.module.css";
const test = [
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with",
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
];
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.evenbox}>
        <h2 className={styles.h2}>sidebar and main</h2>
        <div className={styles.sidebarmain}>
          <div className={styles.col2}>{test[0].slice(0, 50)}</div>
          <div className={styles.col2}>{test[1].slice(0, 400)}</div>
        </div>
      </div>

      <div className={styles.evenbox}>
        <h2 className={styles.h2}>Gridish</h2>
        <div className={styles.gridis}>
          <div className={styles.col2}>{test[0].slice(0, 50)}</div>
          <div className={styles.col2}>{test[1].slice(0, 40)}</div>
          <div className={styles.col2}>{test[2].slice(0, 80)}</div>
          <div className={styles.col2}>{test[2].slice(0, 100)}</div>
          <div className={styles.col2}>{test[2].slice(0, 50)}</div>
        </div>
      </div>
      <div className={styles.evenbox}>
        <h2 className={styles.h2}>Even Box</h2>
        <div className={styles.evencol}>
          <div className={styles.col1}>{test[0]}</div>
          <div className={styles.col1}>{test[1]}</div>
          <div className={styles.col1}>{test[2]}</div>
        </div>
      </div>
    </main>
  );
}
