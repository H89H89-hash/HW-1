const strana = prompt("Укажите свою страну");
let price;
switch (strana.toLowerCase()) {
  case "китай":
    price = 100;
    alert(`Доставка в Китай будет стоить ${price} К`);
    break;
  case "чили":
    price = 250;
    alert(`Доставка в Чили будет стоить ${price} К`);
    break;
  case "австралия":
    price = 170;
    alert(`Доставка в Австралию будет стоить ${price} К`);
    break;
  case "индия":
    price = 80;
    alert(`Доставка в Индию будет стоить ${price} К`);
    break;
  case "ямайка":
    price = 120;
    alert(`Доставка в Ямайку будит стоить ${price} К`);
    break;

  default:
    alert("В вашей стране доставка не доступна");
}
