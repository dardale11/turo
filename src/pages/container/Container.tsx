import { PropsWithChildren, useState } from 'react';
import style from './style.module.css';

const Container = (props: PropsWithChildren) => {
  const [activeComponent, setActiveComponent] = useState(1);

  const toggleComponent = () => {
    setActiveComponent((prev) => (prev === 1 ? 2 : 1));
  };
  return (
    <div className={style.sliderContainer}>
      <div
        className={style.sliderContent}
        style={{ transform: `translateX(-${(activeComponent - 1) * 100}%)` }}
      >
        {props.children}
      </div>
      <button onClick={toggleComponent}>Toggle Component</button>
    </div>
  );
};

export default Container;
