function openModal() {
   // let modal = document.querySelector('.productsModelContainer_Modal');
   // modal.style.display = 'flex';  
   document.querySelector('.productsModelContainer_Modal').style.opacity = 0;
   document.querySelector('.productsModelContainer_Modal').style.display = 'flex';
   setTimeout(() => {
      document.querySelector('.productsModelContainer_Modal').style.opacity = 1;
   }, 150);
}

function closeModal() {
   // let modal = document.querySelector('.productsModelContainer_Modal');
   // modal.style.display = 'none';
   document.querySelector('.productsModelContainer_Modal').style.opacity = 0;
   setTimeout(() => {
      document.querySelector('.productsModelContainer_Modal').style.display = 'none'
   }, 500);
}

function btnClose() {
   document.querySelector('.closeModal').addEventListener('click', () => {
      document.querySelector('.productsModelContainer_Modal').style.display = 'none';
   })
}


function preencherDadosProdutos(shopItem, item) {
   shopItem.querySelector('.productsModel img').src = item.img.front;
   shopItem.querySelector('.productsModel .itemName').innerHTML = item.name;
   shopItem.querySelector('.productsModel .itemPrice').innerHTML = `R$ ${item.regular_price.toFixed(2).toString().replace('.', ',')}`;
}

function preencherDadosProdutos_Modal(item) {
   document.querySelector('.productsModel_Modal img').src = item.img.front;
   document.querySelector('.itemImgFront_Modal').setAttribute('src', item.img.front);
   document.querySelector('.itemImgBack_Modal').setAttribute('src', item.img.back);
   document.querySelector('.productsModel_Modal .itemName_Modal').innerHTML = item.name;
   document.querySelector('.descriptionProduct_Modal .itemPrice_Modal').innerHTML = `R$ ${item.regular_price.toFixed(2).toString().replace('.', ',')}`;
   document.querySelector('.descriptionProduct_Modal .itemParcelaModal').innerHTML = `em até 3x R$ ${(item.regular_price / 3).toFixed(2).toString().replace('.', ',')}`;
   document.querySelector('.itemSize .extraSmall').innerText = item.size.size_pp;
   document.querySelector('.itemSize .small').innerText = item.size.size_p;
   document.querySelector('.itemSize .medium').innerText = item.size.size_m;
   document.querySelector('.itemSize .large').innerText = item.size.size_g;
   document.querySelector('.itemSize .extraLarge').innerText = item.size.size_gg;
}

//produtos masculino
manProducts.map((item, id) => {
   let shopItem = document.querySelector(".productsModel").cloneNode(true);
   document.querySelector('#manProducts').append(shopItem);

   preencherDadosProdutos(shopItem, item)

   shopItem.querySelector('.productImg').addEventListener('click', function (e) {
      e.preventDefault();
      openModal()

      preencherDadosProdutos_Modal(item)
   })

   btnClose()
})

//produtos femininos
womanProducts.map((item, id) => {
   let shopItem = document.querySelector(".productsModel").cloneNode(true);
   document.querySelector('#womanProducts').append(shopItem);

   preencherDadosProdutos(shopItem, item)

   shopItem.querySelector('.productImg').addEventListener('click', function (e) {
      e.preventDefault();
      openModal()

      preencherDadosProdutos_Modal(item)
   })

   btnClose()
})
