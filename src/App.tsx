import style from './app.module.css';
import Container from './pages/container/Container';

const App = () => {
  return (
    <div className={style.App}>
      <Container />
    </div>
  );
};

export default App;
