fetch('assets/burgers.xlsx')
  .then(res => res.arrayBuffer())
  .then(data => {
    const workbook = XLSX.read(data, { type: 'array' });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 });


    let isnavi=7
    for(let i=0;i<rows.length;i++){
      const row = rows[i];
      const name = row[0];
      const price = row[1];
      const image = row[2];
      
      const newCard = document.createElement('a');
      newCard.classList.add('product-card');
      newCard.id=image
      const parentMenu = document.querySelector('.menu')
      parentMenu.appendChild(newCard)

      isnavi++
      if(isnavi%8===0){
        const newNavi = document.createElement('a');
        newNavi.classList.add('navi')
        newNavi.innerText=name
        newNavi.href=`#${newCard.id}`
        const parentNavi = document.querySelector('.navi-container')
        parentNavi.appendChild(newNavi)
      }

      const newImage = document.createElement('img')
      newImage.classList.add('product-image')
      newImage.src=`images/${image}.webp`
      newImage.onerror = () => {
        newImage.src = 'images/default.png';
      };
      newCard.appendChild(newImage)

      const newText = document.createElement('div')
      newText.classList.add('product-text')
      newCard.appendChild(newText)

      const newName = document.createElement('p')
      newName.classList.add('product-name')
      newName.innerText=name
      newText.appendChild(newName)

      const newPrice = document.createElement('p')
      newPrice.classList.add('product-price')
      newPrice.innerText=price+' ₽'
      newText.appendChild(newPrice)
    } 
  })
  .catch(error => {
    console.error('Ошибка загрузки файла:', error);
  });



let progress = document.querySelector('.progress');

document.addEventListener('scroll', function() {
  const scrollTop = window.scrollY; // сколько прокручено сверху
  const docHeight = document.documentElement.scrollHeight; // вся высота документа
  const windowHeight = window.innerHeight; // высота видимой части
  const scrolled = scrollTop / (docHeight - windowHeight) * 100; // в процентах

  progress.style.top = scrolled + '%';
});


