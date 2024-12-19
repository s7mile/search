import * as stylex from '@stylexjs/stylex';
import SearchForm from "@/components/SearchForm";

const styles = stylex.create({
  header: {
  
    backgroundColor: '#444'
  },

  title: {
    margin: 0,
    fontSize: "30px",
    lineHeight: '30px',
    color: '#fff',
  },

  navi: {
    display: "flex",
  },

  naviList: {
    fontSize: "30px",
    lineHeight: '30px',
    color: '#fff',
  },
});

export default function Home() {
  const menuList = [
    { title: "메뉴1" },
    { title: "메뉴2" },
    { title: "메뉴3" },
  ];
  
  return (
    <main>
      <header {...stylex.props(styles.header)}>
        <h1 {...stylex.props(styles.title)}>써치</h1>
        <nav>
          <ul {...stylex.props(styles.navi)}>
            {menuList.map(menu => (
              <li {...stylex.props(styles.naviList)}>메뉴1</li>
            ))}
          </ul>
        </nav>
      </header>
      <SearchForm />
      <footer>
        copyright haeru
      </footer>
    </main>
  );
}
