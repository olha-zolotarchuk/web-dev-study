
let user = {};
user.name = "Іван";
user.surname = "Сміт";
user.name = "Петро";
delete user.name;


function isEmpty(obj) {
    for (let key in obj) {
      // якщо цикл розпочався, властивість є
      return false;
    }
    return true;
  }


  let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };
  
  let sum = 0;
  for (let key in salaries) {
    sum += salaries[key];
  }
  
  alert(sum); // 390




  function multiplyNumeric(obj) {
    for (let key in obj) {
      if (typeof obj[key] == 'number') {
        obj[key] *= 2;
      }
    }
  }