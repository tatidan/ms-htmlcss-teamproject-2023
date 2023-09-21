<a id="top"></a>
[__english<span style="color: #38AE5F;">excellence</span>.__](https://tatidan.github.io/ms-htmlcss-teamproject-2023/)

<div style="display: flex; align-items: center; max-width: 100vw; height: 100px; background: #38AE5F;">
   <a style="margin-left: 24px; font-size: 40px; color: #FFFFFF;" href="https://github.com/tatidan/ms-htmlcss-teamproject-2023">English excellence</a>
</div>

<ul style="display: flex; margin-top: 36px; list-style: none; font-weight: 700;">
   <li style="margin-right: 24px;">
      <a href="#1">Опис</a>
   </li>
   <li style="margin-right: 24px;">
      <a href="#2">Функції</a>
   </li>
   <li style="margin-right: 24px;">
      <a href="#3">Підготовка</a>
   </li>
   <li>
      <a href="#4">Технології</a>
   </li>
</ul>

___
<a id="1"></a>

## Опис Проєкту
___
[__English Excellence__](https://tatidan.github.io/ms-htmlcss-teamproject-2023/) - це Landing page, що презентує продукт, а саме: реєстрація на курс уроків для вивчення англійської мови.

Завдання [_English Excellence_](https://tatidan.github.io/ms-htmlcss-teamproject-2023/) - запропонувати відвідувачу сторінки приєднатися до групи студентів і разом з командою вчителів відкрити для себе радість вивчення англійської мови!

На сторінц [_English Excellence_](https://tatidan.github.io/ms-htmlcss-teamproject-2023/), не переходячі за посиланням по іншим сторінкам, є можливість ознайомитися з [_перевагами команди вчителів_](https://github.com/tatidan/ms-htmlcss-teamproject-2023/blob/main/src/partials/about.html), загальним [_змістом курсу_](https://github.com/tatidan/ms-htmlcss-teamproject-2023/blob/main/src/partials/proposal.html) вивчення мови та самими [_вчителями_](https://github.com/tatidan/ms-htmlcss-teamproject-2023/blob/main/src/partials/teachers.html). Наведені фото вчителів та їх експертні навички.

Сторінка передбачає можливість, за допомогою наведеної на сторінці [_форми_](https://github.com/tatidan/ms-htmlcss-teamproject-2023/blob/main/src/partials/leave-app.html), зареєструватись та обрати собі за допомогою радіокнопок вчителя.

Для зручності користувачів, в [_шапці_](https://github.com/tatidan/ms-htmlcss-teamproject-2023/blob/main/src/partials/header.html) та [_футері_](https://github.com/tatidan/ms-htmlcss-teamproject-2023/blob/main/src/partials/footer.html) сторінки, наведені посилання, за якими можна переміщуватися між секціями. Починаючи з другої секції, в правому нижньому куті з’являється кнопка для переходу до шапки сторінки. Також, в шапці та футері сторінки, є посилання на соцмережі у вигляді іконок.

В якості зворотного зв’язку передбачено [_секцію з відгуками студентів_](https://github.com/tatidan/ms-htmlcss-teamproject-2023/blob/main/src/partials/reviews.html).
У [_футері_](https://github.com/tatidan/ms-htmlcss-teamproject-2023/blob/main/src/partials/footer.html) зазначена контактна інформація (адреса та телефон).

<a id="2"></a>

## Функції
___
Верстка адаптивна, окрім мобільних пристроїв. Точки перелому:
   - mobile: верстка гумова від 320px, стає адаптивною з 375px;
   - tablet: з 768px;
   - desktop: з 1280px

[__Проєкт__](https://github.com/tatidan/ms-htmlcss-teamproject-2023) створено з урахуванням наступних вимог:
1. Верстка валідна та перевірена за допомогою сервісів (https://validator.w3.org/ , https://jigsaw.w3.org/css-validator/).
2. Забезпечено дотримання семантики відповідно до стандартів HTML5.
3. Здійснено підключення шрифтів.
4. Забезпечено оптимізацію розмірів векторної та растрової графіки.
5. Забезпечено підтримку відображення картинок для retina-екранів.
6. Оптимізовано завантаження зображень.
7. Всі svg-іконки підключено через [_sprite_](https://github.com/tatidan/ms-htmlcss-teamproject-2023/blob/main/src/img/sprite.svg?short_path=664ce67).
8. Додано відображення [_фавікон_](https://github.com/tatidan/ms-htmlcss-teamproject-2023/blob/main/src/img/icon-favicon.svg) сторінки.

<a id="3"></a>

## Підготовка до роботи
___
Переконайся, що на комп'ютері встановлено LTS-версію Node.js.
[Скачай та встанови](https://nodejs.org/en/) її якщо необхідно.

### Iніціювати проект
Встанови базові залежності проекту в терміналі командою `npm install`. :white_check_mark:
### Запустити проект
1. Запусти режим розробки, виконавши в терміналі команду `npm run dev`. :white_check_mark:
2. Перейдіть у браузері за адресою [http://localhost:5173](http://localhost:5173). Ця сторінка буде автоматично
   перезавантажуватись після збереження змін у файли проекту. :white_check_mark:

<a id="4"></a>

## Застосовані технології
[![Technologies](https://skillicons.dev/icons?i=html,css,js,vite,nodejs)](https://skillicons.dev)
[![Tools](https://skillicons.dev/icons?i=github,git,vscode,figma,ai)](https://skillicons.dev)

## Vanilla App Template

Цей проект було створено за допомогою Vite. Для знайомства та налаштування
додаткових можливостей [звернись до документації](https://vitejs.dev/).

## Файли і папки

- Файли розмітки компонентів сторінки в папці `src/partials` та
  імпортуються до файлу `index.html`.
- Файли стилів в папці `src/css`.
- Зображення в `src/img`.

[Вгору :arrow_double_up:](#top)