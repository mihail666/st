<template>
  <div class="bicycle-page">
    <div class="container1">
      <div class="bicycle-page__description">
        <div class="bicycle-page__description__image">
          <img src="@/assets/images/image1.png" alt="" />
        </div>
        <div class="bicycle-page__description__info">
          <h1>Велосипед STELS Navigator 510 HD 26 2022</h1>
          <p>
            Данный велосипед с колесами 26 дюймов хорошо подходит высоким
            подросткам. Прогиб рамы и небольшой размер рамы расчитан на рост от
            135 до 165 см.
          </p>
          <p>
            Суммарный вес велосипеда был снижен до 16,9 кг, так как рама была
            изготовлена с учетом использования велосипеда подростками.
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
            <p>Двойной обод</p>
          </li>
          <li class="bicycle-page__specifications__info_el">
            <p>Алюминиевый сплав</p>
          </li>
          <li class="bicycle-page__specifications__info_el">
            <p>Колеса диаметром 26 дюймов</p>
          </li>
          <li class="bicycle-page__specifications__info_el">
            <p>Покрышки 26х1,95"</p>
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

<script>
export default {
  name: "s-stels",
};
</script>
