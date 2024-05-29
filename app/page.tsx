import * as stylex from '@stylexjs/stylex';
import Test from "@/components/Test";

const styles = stylex.create({
  test: {
    fontSize: "30px",
    lineHeight: '30px',
    color: 'red',
  },
});

export default function Home() {
  return (
    <main>
      <header {...stylex.props(styles.test)}>
        헤더
      </header>
      <Test />
      <footer>
        푸터
      </footer>
    </main>
  );
}
