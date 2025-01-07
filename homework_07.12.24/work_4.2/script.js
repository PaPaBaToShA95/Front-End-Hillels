let number = prompt ('Ведіть число для перевірки на наявність однакових  цифер',);
let num=number.split(''); 
if 
  (num[0] == num[1] && num[0] == num[2])
    alert('Всі цифри однакові');
    else if
      (num[0] === num[1] || num[0] === num[2] || num[1] === num[2])
    alert('Так, є однакові цифри');
    else 
    alert('Немає однакових цифр');