import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const useAxiosFetch = (dataUrl) => {
  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    // 7:00:02 // and now use effect we're going to define we'll call this is mounted and we really want the component to be mounted and not attempt to apply something after it is unmounted which would also be a memory leak so we'll set is mounted to true  and we'll check that status as we apply things the next
    // а тепер використаємо ефект, який ми збираємося визначити, ми назвемо це змонтовано, і ми справді хочемо, щоб компонент був змонтований, а не намагався застосувати щось після його відключення, що також буде витоком пам’яті, тому ми встановимо змонтовано до правди і ми перевіримо цей статус під час наступного застосування
    const source = axios.CancelToken.source();

    const fetchData = async (url) => {
      //   7:00:58  i'll just call this url as we define this function it can sometimes be confusing to accept a parameter we're going to use and then use that same name when you create a definition because this isn't where we would use it it's just the definition of the function so here i'll call this url
      // я просто називатиму цю url-адресу, оскільки ми визначаємо цю функцію, іноді може бути заплутано прийняти параметр, який ми збираємося використати, а потім використовувати те саме ім’я, коли ви створюєте визначення, тому що це не місце, де ми використовував би це, це просто визначення функції, тому тут я називатиму цю URL-адресу
      setIsLoading(true);
      try {
        const response = await axios.get(url, {
          cancelToken: source.token,
          //   7:01:42 ahead and apply our cancel token and this will allow us to cancel the request if we unmount the component and of course we can handle that in the cleanup but we need to set the cancel token here so here's the cancel token sent with the request
          //   7:01:42 вперед і застосувати наш маркер скасування, і це дозволить нам скасувати запит, якщо ми відключимо компонент, і, звичайно, ми зможемо впоратися з цим під час очищення, але нам потрібно встановити маркер скасування тут, тому ось надісланий маркер скасування з проханням
        });
        if (isMounted) {
          setData(response.data);
          setFetchError(null);
        }
      } catch (err) {
        if (isMounted) {
          setFetchError(err.message);
          setData([]);
        }
      } finally {
        // isMounted && setTimeout(() => setIsLoading(false), 2000);
        isMounted && setIsLoading(false);
      }
    };

    fetchData(dataUrl);

    const cleanUp = () => {
      // console.log('clean up function')
      isMounted = false;
      source.cancel();
    };
    // well but since we're doing two things let's define this as cleanup and then call it here and leave that like it is we are setting the is mounted to false and we're also cancelingthe request with axios so let's save that

    return cleanUp;
  }, [dataUrl]);

  return { data, fetchError, isLoading };
};

export default useAxiosFetch;

// 7:06:08
// review before we move on and put this into action so we've defined our custom hook we've imported axios and use state and use effect we set different states here at the beginning of the custom hook we're receiving a data url and then we defined our use effect hook inside here and we set an is mounted status to true and we also define a cancellation token for axios and then we set the fetch data function we defined it and inside of this function we have a try block a catch block and a finally block we're constantly checking to see if the component is indeed mounted and if it is we can go ahead and take action after we've requested the data we can set the data state and of course set the error to null and if we catch an error we're going to set the error message and set the data to empty array and finally this will happen no matter what whether we're successful with the data or we have an error we'll go ahead and see if the component is still mounted and if so we're going to set loading is loading to false and right now we're doing that with a delay just so we can test our is loading message we call that into action with the url received by the hook and eventually we can call the cleanup function here that will cancel a request if the component is unloaded during the request and it will also set is mounted to faults we're returning the data possible error and the loading status and that is our use axios fetch custom hook
// перевірте, перш ніж рухатися далі та втілити це в дію, тому ми визначили наш спеціальний хук, ми імпортували axios і використовували стан і використовували ефект, ми встановлюємо різні стани тут, на початку спеціального хука, ми отримуємо URL-адресу даних, а потім ми визначили наш хук ефекту використання тут усередині, і ми встановили статус монтовано як true, і ми також визначили маркер скасування для axios, а потім ми встановили функцію отримання даних, яку ми визначили, і всередині цієї функції ми маємо блок try блок catch і остаточний блок, який ми постійно перевіряємо, чи компонент справді змонтовано, і якщо це так, ми можемо продовжити та вжити заходів після запиту даних, ми можемо встановити стан даних і, звичайно, встановити помилку на нуль і якщо ми виявимо помилку, ми встановимо повідомлення про помилку та встановимо дані як порожній масив, і врешті-решт це станеться, незалежно від того, успішно ми з даними чи у нас є помилка, ми підемо далі та перевіримо, чи компонент все ще змонтовано, і якщо так, ми збираємося встановити завантаження завантажується до false, і зараз ми робимо це із затримкою, щоб ми могли перевірити наше повідомлення про завантаження, ми викликаємо це в дію за допомогою URL-адреси, отриманої хуком, і зрештою ми можемо викликати тут функцію очищення, яка скасує запит якщо компонент вивантажено під час запиту, і він також буде встановлено для помилок, ми повертаємо дані про можливу помилку та стан завантаження, і це наш користувацький хук для отримання axios
