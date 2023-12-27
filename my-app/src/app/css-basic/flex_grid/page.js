import styles from "./page.module.css";
const test = [
  {
    cardTitle: "Test",
    cardContent:
      "sadnak asdnas dasbnasm fan asgas fnf anfkdandaskjnf mdn fddam f as fdma  fgd,mas gnfbewhf",
    tags: ["aa", "bbbbbb", "cccccc"],
  },
  {
    cardTitle: "Test as",
    cardContent:
      "sadnak asj zas fna sdfkjb djkgf ba  mgnabgn agna adnd ahjunagd sdthfxs sfdashn asdnas dasbnasm fan asgas fnf anfkdandaskjnf mdn fddam f as fdma  fgd,mas gnfbewhf",
    tags: ["aa", "bbcc bbbb", "ccc", "dd"],
  },
  {
    cardTitle: "Test adsdas as",
    cardContent:
      "sadnakskas dska dkam kf s hgkn ds s  m mngbas g md gmjd cgb asdg,mbdas s dasbnasm fan asgas fnf anfkdandaskjnf mdn fddam f as fdma  fgd,mas gnfbewhf",
    tags: ["xxx", "bbs sbbbb", "ccvv vcccc"],
  },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.evenbox}>
        <h2 className={styles.h2}>Cards</h2>
        <section className={styles.cards}>
          <h3>some cards</h3>

          <div className={styles.colunms}>
            {test.map((item, id) => (
              <article key={id} className={styles.card}>
                <h4 className={styles.card_title}>{item.cardTitle}</h4>
                <p>{item.cardContent}</p>
                <ul className={styles.tags}>
                  {item.tags.map((tag, ids) => (
                    <li className={styles.tag} key={ids}>
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            ))}{" "}
          </div>
        </section>
      </div>

      <div className={styles.evenbox}>
        <h2 className={styles.h2}>Youtube card</h2>
        <section className={styles.cards}>
          <h3>some cards</h3>

          <div className={styles.colunms}>
            {test.map((item, id) => (
              <article key={id} className={styles.card}>
                <h4 className={styles.card_title}>{item.cardTitle}</h4>
                <p>{item.cardContent}</p>
                <ul className={styles.tags}>
                  {item.tags.map((tag, ids) => (
                    <li className={styles.tag} key={ids}>
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            ))}{" "}
          </div>
        </section>
      </div>
    </main>
  );
}
