import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import backgroundVideo from "./assets/video-background.mp4";
import surprises from "./assets/surprises.svg";
import flowers from "./assets/flowers.svg";
import gifts from "./assets/gifts.svg";
import questions from "./assets/questions.svg";

const App = () => {
  const videoRef = React.useRef(null);

	function startVideo() {
    videoRef.current.currentTime = 0;
    videoRef.current.play();
  }

  function restartVideo() {
    videoRef.current.currentTime = 0;
    videoRef.current.play();
  }

  React.useEffect(() => {
		startVideo();

    setInterval(() => {
      restartVideo();
    }, 12000);

    return () => clearInterval();
  }, []);
  return (
    <>
      <div className="wrapper-background">
        <video
          ref={videoRef}
          className="background"
          src={backgroundVideo}
          loop
					muted
          playsInline
          autoPlay={false}
          controls={false}
          preload="auto"
          type="video/mp4"
        ></video>
        <section className="first-screen">
          <h1 className="first-screen__title">приглашение на свадьбу</h1>
          <div className="first-screen__wrapper-name">
            <h2>Дарья</h2>
            <span>&</span>
            <h2>Максим</h2>
          </div>
          <div className="first-screen__wrapper-date">
            <h4>Март</h4>
            <span>07</span>
            <h4>2025</h4>
          </div>
        </section>
        <section className="timing">
          <h3 className="subtitle">Дорогие родные и близкие!</h3>
          <p className="timing__top-text">
            Мы давно ждали момента, когда сможем разделить с вами самый важный и
            счастливый день в нашей жизни.
          </p>
          <p className="timing__bottom-text">
            Совсем скоро состоится наша свадьба! Мы рады пригласить вас стать
            свидетелями этого торжества и разделить с нами самые яркие моменты!
          </p>
          <h2 className="title">Тайминг</h2>
          <div className="timing__wrapper-time">
            <div className="col">
              <span>-&nbsp;10:00&nbsp;-</span>
              <p>Регистрация брака</p>
            </div>
            <div className="col">
              <span>-&nbsp;16:00&nbsp;-</span>
              <p>Сбор гостей в ресторане</p>
            </div>
          </div>
        </section>
      </div>
      <section className="dress-code">
        <h2 className="title">Дресс-код</h2>
        <p>
          Для нас главное – ваше присутствие! Но мы будем рады, если в своих
          нарядах вы поддержите цветовую гамму и стиль нашей свадьбы.{" "}
        </p>
        <div className="dress-code__palette">
          <div
            className="dress-code__palette-color"
            style={{ backgroundColor: "#53583E" }}
          ></div>
          <div
            className="dress-code__palette-color"
            style={{ backgroundColor: "#AEA38E" }}
          ></div>
          <div
            className="dress-code__palette-color"
            style={{ backgroundColor: "#DDDBD7" }}
          ></div>
          <div
            className="dress-code__palette-color"
            style={{ backgroundColor: "#593B1F" }}
          ></div>
          <div
            className="dress-code__palette-color"
            style={{ backgroundColor: "#744D29" }}
          ></div>
        </div>
      </section>
      <section className="tips">
        <h2 className="title">подсказки</h2>
        <p>
          Мы догадываемся, что после получения приглашения у вас может появится
          ряд вопросов
        </p>
        <ul className="tips__list">
          <li className="tips__list-item">
            <img src={surprises} alt="Сюрпризы" />
            <div className="col">
              <h3 className="tips__list-item__title">сюрпризы</h3>
              <p className="tips__list-item__description">
                Возьмите с собой отличное настроение! Приветствуются ваши
                поздравления, активное участие в интерактивах, творческие
                выступления! Вы можете обратиться к нашему организатору для
                воплощения своих идей! Дарья&nbsp;8&nbsp;918&nbsp;365&nbsp;8058
              </p>
            </div>
          </li>
          <li className="tips__list-item">
            <img src={flowers} alt="Цветы" />
            <div className="col">
              <h3 className="tips__list-item__title">Цветы</h3>
              <p className="tips__list-item__description">
                Наш праздник будет окружен изобилием цветов, поэтому приятным
                комплиментом для нас вместо букета будет бутылка вашего любимого
                вина, которую мы откроем на ближайшем совместном празднике.
              </p>
            </div>
          </li>
          <li className="tips__list-item">
            <img src={gifts} alt="Подарки" />
            <div className="col">
              <h3 className="tips__list-item__title">Что дарить?</h3>
              <p className="tips__list-item__description">
                В качестве подарка будем рады вкладу в бюджет нашей семьи. Он
                точно поможет воплотить нашу мечту в реальность!
              </p>
            </div>
          </li>
          <li className="tips__list-item">
            <img src={questions} alt="Вопросы" />
            <div className="col">
              <h3 className="tips__list-item__title">Что делать, если?</h3>
              <p className="tips__list-item__description">
                Если у вас появились какие-либо вопросы, вам с радостью поможет
                наш замечательный организатор:
                Дарья&nbsp;8&nbsp;918&nbsp;365&nbsp;8058
              </p>
            </div>
          </li>
        </ul>
        <h2 className="title">Место проведения</h2>
        <p className="tips__location top">Ресторан&nbsp;«У Фонтана»</p>
        <p className="tips__location">
          г.&nbsp;Усть-Лабинск, ул.&nbsp;Мира&nbsp;54А
        </p>
        <h4 className="tips__subtitle">Как добраться:</h4>
        <p className="tips__text">
          Пожалуйста, используйте карту для перехода в навигатор чтобы добраться
          до местоположения
        </p>
      </section>
      <section className="map">
        <YMaps query={{ apikey: "e93e98c3-63a7-4ee9-8394-2011186193f7" }}>
          <div className="map__wrapper">
            <Map
              className="y-map"
              defaultState={{ center: [45.209739, 39.689078], zoom: 18 }}
            >
              <Placemark geometry={[45.209739, 39.689078]} />
            </Map>
          </div>
        </YMaps>
      </section>
      <section className="form">
        <h2 className="title" style={{ textTransform: "capitalize" }}>
          С нетерпением ждём вас!
        </h2>
        <p className="form__description">
          07&nbsp;марта|Пятница|У&nbsp;фонтана
        </p>
        <div className="form__inputs">
          <div className="form__wrapper">
            <label htmlFor="">Ваше имя и фамилия</label>
            <input type="text" />
          </div>
          <div className="form__wrapper">
            <label htmlFor="">Планируете ли присутствовать?</label>
            <div className="select-wrapper">
            	<select name="" id="">
	              <option value="default">Выберите один вариант</option>
	              <option value="1">Да, конечно </option>
	              <option value="2">К сожалению, нет</option>
	            </select>
            </div>
          </div>
          <div className="form__wrapper">
            <label htmlFor="">Ваш номер телефона</label>
            <input type="text" />
          </div>
          <div className="form__wrapper">
            <label htmlFor="">Я буду с парой (Имя, Фамилия)</label>
            <input type="text" />
          </div>
          <div className="form__wrapper">
            <label htmlFor="">Я буду с детьми (Имя)</label>
            <input type="text" />
          </div>
        </div>
        <div className="form__alcohol">
          <h4 className="subtitle">Буду пить</h4>
          <div className="col">
          	<div className="form__wrapper-checkbox">
	            <input type="checkbox" id="vodka" />
	            <label htmlFor="vodka">Водка</label>
	          </div>
	          <div className="form__wrapper-checkbox">
	            <input type="checkbox" id="wine" />
	            <label htmlFor="wine">Вино</label>
	          </div>
	          <div className="form__wrapper-checkbox">
	            <input type="checkbox" id="cognac" />
	            <label htmlFor="cognac">Коньяк</label>
	          </div>
	          <div className="form__wrapper-checkbox">
	            <input type="checkbox" id="champagne" />
	            <label htmlFor="champagne">Шампанское</label>
	          </div>
	          <div className="form__wrapper-checkbox">
	            <input type="checkbox" id="not" />
	            <label htmlFor="not">Не буду пить алкоголь</label>
	          </div>
          </div>
        </div>
        <button className="form__button">Отправить</button>
        <div className="form__names">
          <p className="top">Ваши</p>
          <div className="form__name-wrapper">
            <h3 className="name">Дарья</h3>
            <span>и</span>
            <h3 className="name">Максим</h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
