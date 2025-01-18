import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import backgroundVideo from "./assets/video-background.mp4";
import surprises from "./assets/surprises.svg";
import flowers from "./assets/flowers.svg";
import gifts from "./assets/gifts.svg";
import questions from "./assets/questions.svg";
import axios from "axios";

const App = () => {
  const [data, setData] = React.useState({
    visitorName: "",
    phoneNumber: "",
    partnerName: "",
    childrenName: "",
    beVodka: false,
    beWine: false,
    beCongac: false,
    beChampagne: false,
    dontDrink: false,
    willTheRegistration: false,
    isVisit: false,
  });
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

  async function sendToEmail() {
    let config = {
      method: "POST",
      url: "https://monosortcoffee.ru/md/api/form",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    if (data.visitorName !== "" && data.phoneNumber !== "") {
      axios.request(config).then((response) => {
        console.log(response);

        if (response.data.status !== "error") {
          console.log(response.data);
					alert("Приглашение отправлено!");
        }
      });
    }
  }

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
              <span>-&nbsp;с 15:00 до 16:00&nbsp;-</span>
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
			<section className="tips">
        <h2 className="title">Место регистрации</h2>
        <p className="tips__location top">Дворец&nbsp;бракосочетания «Екатерининский&nbsp;зал»</p>
        <p className="tips__location">
          г.&nbsp;Краснодар, ул.&nbsp;Офицерская&nbsp;47
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
              defaultState={{ center: [45.060000, 38.987485], zoom: 18 }}
            >
              <Placemark geometry={[45.060000, 38.987485]} />
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
            <input
              type="text"
              onChange={(e) =>
                setData((prevData) => ({
                  ...prevData,
                  visitorName: e.target.value,
                }))
              }
            />
          </div>
          <div className="form__wrapper">
            <label htmlFor="">Планируете ли присутствовать?</label>
            <div className="select-wrapper">
              <select
                name=""
                id=""
                onChange={(e) => {
                  setData((prevData) => ({
                    ...prevData,
                    isVisit: e.target.selectedIndex === 1 ? true : false,
                  }));
                }}
              >
                <option selected value="default" disabled>
                  Выберите один вариант
                </option>
                <option value="1">Да, конечно </option>
                <option value="2">К сожалению, нет</option>
              </select>
            </div>
          </div>
          <div className="form__wrapper">
            <label htmlFor="">
              Планируете ли присутствовать на регистрации?
            </label>
            <div className="select-wrapper">
              <select
                name=""
                id=""
                onChange={(e) => {
                  setData((prevData) => ({
                    ...prevData,
                    willTheRegistration:
                      e.target.selectedIndex === 1 ? true : false,
                  }));
                }}
              >
                <option selected value="default" disabled>
                  Выберите один вариант
                </option>
                <option value="1">Да, конечно </option>
                <option value="2">К сожалению, нет</option>
              </select>
            </div>
          </div>
          <div className="form__wrapper">
            <label htmlFor="">Ваш номер телефона</label>
            <input
              type="phone"
              onChange={(e) =>
                setData((prevData) => ({
                  ...prevData,
                  phoneNumber: e.target.value,
                }))
              }
            />
          </div>
          <div className="form__wrapper">
            <label htmlFor="">Я буду с парой (Имя, Фамилия)</label>
            <input
              type="text"
              onChange={(e) =>
                setData((prevData) => ({
                  ...prevData,
                  partnerName: e.target.value,
                }))
              }
            />
          </div>
          <div className="form__wrapper">
            <label htmlFor="">Я буду с детьми (Имя)</label>
            <input
              type="text"
              onChange={(e) =>
                setData((prevData) => ({
                  ...prevData,
                  childrenName: e.target.value,
                }))
              }
            />
          </div>
        </div>
        <div className="form__alcohol">
          <h4 className="subtitle">Буду пить</h4>
          <div className="col">
            <div className="form__wrapper-checkbox">
              <input
                type="checkbox"
                id="vodka"
                onChange={() =>
                  setData((prevData) => ({
                    ...prevData,
                    beVodka: !prevData.beVodka,
                  }))
                }
              />
              <label htmlFor="vodka">Водка</label>
            </div>
            <div className="form__wrapper-checkbox">
              <input
                type="checkbox"
                id="wine"
                onChange={() =>
                  setData((prevData) => ({
                    ...prevData,
                    beWine: !prevData.beWine,
                  }))
                }
              />
              <label htmlFor="wine">Вино</label>
            </div>
            <div className="form__wrapper-checkbox">
              <input
                type="checkbox"
                id="cognac"
                onChange={() =>
                  setData((prevData) => ({
                    ...prevData,
                    beCongac: !prevData.beCongac,
                  }))
                }
              />
              <label htmlFor="cognac">Коньяк</label>
            </div>
            <div className="form__wrapper-checkbox">
              <input
                type="checkbox"
                id="champagne"
                onChange={() =>
                  setData((prevData) => ({
                    ...prevData,
                    beChampagne: !prevData.beChampagne,
                  }))
                }
              />
              <label htmlFor="champagne">Шампанское</label>
            </div>
            <div className="form__wrapper-checkbox">
              <input
                type="checkbox"
                id="not"
                onChange={() =>
                  setData((prevData) => ({
                    ...prevData,
                    dontDrink: !prevData.dontDrink,
                  }))
                }
              />
              <label htmlFor="not">Не буду пить алкоголь</label>
            </div>
          </div>
        </div>
        <button className="form__button" onClick={sendToEmail}>
          Отправить
        </button>
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
