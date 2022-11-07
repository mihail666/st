<template>
  <div class="bicycle-page">
    <div class="container1">
      <div class="bicycle-page__description">
        <div class="bicycle-page__description__image">
          <img src="@/assets/images/image2.png" alt="" />
        </div>
        <div class="bicycle-page__description__info">
          <h1>Велосипед SCHWINN Traveler women 2022</h1>
          <p>
            Женский велосипед со стальной рамой Classic step-true lightweight
            позволяет девушкам без проблем его перемещать.
          </p>
          <p>
            На данном велосипеде имеется 7 скоростей с переключателями от
            Shimano, а жесткая вилка обеспечивает отличную управляемость.
            Подходит для катания по асфальтированным поверхностям.
          </p>
        </div>
      </div>
    </div>
    <div class="container2">
      <hr />
      <div class="bicycle-page__specifications">
        <h2>Характеристики</h2>
        <ul class="bicycle-page__specifications__info">
          <li class="bicycle-page__specifications__info_el">
            <p>Стальная рама</p>
          </li>
          <li class="bicycle-page__specifications__info_el">
            <p>Жесткая вилка</p>
          </li>
          <li class="bicycle-page__specifications__info_el">
            <p>Колеса диаметром 24 дюймов</p>
          </li>
          <li class="bicycle-page__specifications__info_el">
            <p>7 скоростей</p>
          </li>
        </ul>
      </div>
      <div class="bicycle-page__addproperty">
        <input
          class="bicycle-page__addproperty__input"
          type="text"
          placeholder="Алюминиевый сплав"
        />
        <button class="btn bicycle-page__addproperty__btn">добавить</button>
      </div>
    </div>
    <div class="bicycle-page__btnbar">
      <div class="bicycle-page__btnbar_el">
        <button class="btn">Окей</button>
        <button class="btn">Отмена</button>
      </div>
    </div>
  </div>
</template>
