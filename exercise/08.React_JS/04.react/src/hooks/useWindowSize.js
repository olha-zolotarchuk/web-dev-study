import React from "react";
import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    //   6:46:58  and that's essentially what we need to get those values every time because we added this listener at the beginning with use effect when it was loaded so it only adds it once

    // const cleanUp = () => {
    //   console.log("runs if a useEffect dep changes");
    //   window.removeEventListener("resize", handleResize);
    // };
    // return cleanUp;

    return () => window.removeEventListener("resize", handleResize);
    //   6:57:21  and if you see a return at the end of a use effect that is exactly what it is it is a cleanup function and it removes the event listener so this accomplishes the same thing just a little refactor not to be confused with the return at the end of our custom hook but this one is inside of the use effect
    //   і якщо ви бачите повернення в кінці ефекту використання, то це саме те, що це є, це функція очищення, і вона видаляє прослуховувач подій, тому це виконує те саме, лише невеликий рефакторинг, щоб не плутати з поверненням у кінці. нашого спеціального хука, але цей всередині ефекту використання
  }, []);
  return windowSize;
};

export default useWindowSize;

// 6:47:10
// but there is something else we need to do and it prevents a memory leak in our applications and that is to remove the event listener fortunately use effect has a cleanup function that will only run when the dependencies change for use effect and so we know the dependency won't change here this is only at load but it would actually happen on a say if i change the file and reload so we'll be able to see that happen but also it would happen when the application closes out it would essentially run the cleanup function and remove that event listener so we can do

// але є ще щось, що нам потрібно зробити, щоб запобігти витоку пам’яті в наших програмах, а це – видалити прослуховувач подій. На щастя, use effect має функцію очищення, яка запускатиметься лише тоді, коли залежності змінюватимуться для use effect, тому ми знаємо залежність тут не зміниться, це лише під час завантаження, але насправді це станеться, скажімо, якщо я зміню файл і перезавантажу, тож ми зможемо побачити, що це станеться, але також це станеться, коли програма закриється, це, по суті, запустить функцію очищення та видаліть цей слухач подій, щоб ми могли це зробити

// 6:49:18  we start out we have use state use effect we define the hook we set the state we use effect and then the key part here is we want to call it once at load time to call the function we've defined here handle resize but then we also want to add an event listener and so any time the resize event fires we continue to call this handle resize function and then another portion of this is the cleanup function and that's also important to prevent a memory leak so now we have completed this entire custom hook

// ми починаємо з того, що маємо ефект використання стану використання, ми визначаємо хук, ми встановлюємо стан, який ми використовуємо, і потім ключовою частиною тут є те, що ми хочемо викликати його один раз під час завантаження, щоб викликати функцію, яку ми тут визначили, обробляємо зміну розміру, але потім ми також хочеться додати прослуховувач подій, тому кожного разу, коли спрацьовує подія зміни розміру, ми продовжуємо викликати цю функцію зміни розміру ручки, а потім ще одна частина цього — функція очищення, і це також важливо для запобігання витоку пам’яті, тому тепер ми завершили весь цей настроюваний гачок
