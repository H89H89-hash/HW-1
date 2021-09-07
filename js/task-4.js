let credits = 23580;
const pricePerDroid = 3000;
let order = prompt("Сколько вы хотите заказать?");
let totalPrice = pricePerDroid * Number(order);
credits = credits - totalPrice;
if (order !== null) {
  if (totalPrice === credits || totalPrice < credits) {
    alert(`Вы купили ${order} дроидов, На счету осталось ${credits} К`);
  } else if (totalPrice > credits) {
    alert("Недостаточно средств");
  }
}

if (order === null) {
  alert("Отменено пользовотелем!");
}
