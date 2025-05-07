
const items = [
  {
    id: '1',
    image: './images/1.jpg',
    company: 'Carlton London',
    item_name: 'Rhodium-Plated CZ Floral Studs',
    original_price: 1045,
    current_price: 606,
    discount_percentage: 42,
    return_period: 14,
    delivery_date: '10 jun 2025',
    rating: {
      stars: 4.5,
      count: 1400,
    },
  },
  {
    id: '2',
    image: './images/2.jpg',
    company: 'CUKOO',
    item_name: 'Women Padded Halter Neck Swimming Dress',
    original_price: 2599,
    current_price: 1507,
    discount_percentage: 42,
    return_period: 14,
    delivery_date: '10 jun 2025',
    rating: {
      stars: 4.3,
      count: 24,
    },
  },
  {
    id: '003',
    image: './images/3.jpg',
    company: 'NUEVOSDAMAS',
    item_name: 'Women Red & White Printed A-Line Knee-Length Skirts',
    original_price: 1599,
    current_price: 495,
    discount_percentage: 69,
    return_period: 14,
    delivery_date: '15 jun 2025',
    rating: {
      stars: 4.1,
      count: 249,
    },
  },
  {
    id: '4',
    image: './images/4.jpg',
    company: 'ADIDAS',
    item_name: 'Indian Cricket ODI Jersey',
    original_price: 999,
    current_price: 999,
    discount_percentage: 0,
    return_period:14,
    delivery_date: '22 jun 2025',
    rating: {
      stars: 5.0,
      count: 10,
    },
  },
  {
    id: '5',
    image: './images/5.jpg',
    company: 'Roadster',
    item_name: 'Pure Cotton T-shirt',
    original_price: 1399,
    current_price: 489,
    discount_percentage: 65,
    return_period: 14,
    delivery_date: '2 jun 2025',
    rating: {
      stars: 4.2,
      count: 3500,
    },
  },
  {
    id: '6',
    image: './images/6.jpg',
    company: 'Nike',
    item_name: 'Men ReactX Running Shoes',
    original_price: 14995,
    current_price: 14995,
    discount_percentage: 0,
    return_period: 14,
    delivery_date: '10 jul 2025',
    rating: {
      stars: 0.0,
      count: 0,
    },
  },
  {
    id: '7',
    image: './images/7.jpg',
    company: 'The Indian Garage Co',
    item_name: 'Men Slim Fit Regular Shorts',
    original_price: 1599,
    current_price: 639,
    discount_percentage: 60,
    return_period: 14,
    delivery_date: '05 jun 2025',
    rating: {
      stars: 4.2,
      count: 388,
    },
  },
  {
    id: '8',
    image: './images/8.jpg',
    company: 'Nivea',
    item_name: 'Men Fresh Deodrant 150ml',
    original_price: 285,
    current_price: 142,
    discount_percentage: 50,
    return_period: 14,
    delivery_date: '10 jun 2025',
    rating: {
      stars: 4.2,
      count: 5200,
    },
  },
  {
    id: '9',
    image: './images/9.jpg',
    company: 'HERE&NOW',
    item_name: 'Slim Fit Tartan Checked Spread Collar Long Sleeves Casual Shirt',
    original_price: 2799,
    current_price: 783,
    discount_percentage: 72,
    return_period: 14,
    delivery_date: '9 jun 2025',
    rating: {
      stars: 4.3,
      count: 307,
    },
  },
  {
    id: '10',
    image: './images/10.jpg',
    company: 'Cetaphil',
    item_name: 'Set of Sun SPF30 Sunscreen Gel 100ml & Oily Skin Cleanser 125ml',
    original_price: 2012,
    current_price: 1770,
    discount_percentage: 12,
    return_period: 14,
    delivery_date: '11 jun 2025',
    rating: {
      stars: 4.5,
      count: 80200,
    },
  },
  {
    id: '11',
    image: './images/11.jpg',
    company: 'GM',
    item_name: 'Blue Set of 2 Room Darkening Door Curtain',
    original_price: 3999,
    current_price: 2599,
    discount_percentage: 35,
    return_period: 14,
    delivery_date: '12 jun 2025',
    rating: {
      stars: 4.0,
      count: 80,
    },
  },
];
let bagitems;
onload();


function onload(){
  let bagItemStr = localStorage.getItem('bagitems');
  bagitems=bagItemStr? JSON.parse(bagItemStr):[];
displayItemsOnHomePage();
displayBagIcon();
}

function addToBag(itemsId){
  bagitems.push(itemsId)
  localStorage.setItem('bagitems',JSON.stringify(bagitems))
  displayBagIcon();
}

function displayBagIcon(){
  let bagItemCountElement = document.querySelector('.bag-item-count');
  if(bagitems.length>0){
    bagItemCountElement.style.visibility='visible'
    bagItemCountElement.innerText= bagitems.length;
  }else{
    bagItemCountElement.style.visibility='hidden'
  }
}


function displayItemsOnHomePage(){
  
  let itemsContainerElement = document.querySelector (".items-container");
  if(!itemsContainerElement){
    return;
  }

let innerHTML='';
items.forEach(items => {
  innerHTML +=`
  <div class="item-container">
  <img class="item-image" src="${items.image}" 
  alt="item-image" />
  <div 
  class="rating">${items.rating.stars}⭐ | ${items.rating.count} </div>
  <div 
  class="company-name">${items.company}</div>
  
  <div 
  class="item-name">${items.item_name}</div>
  
  <div
  class="price">
  <span class="current-price">Rs ${items.current_price}</span>
  <span class="original-price">Rs ${items.original_price}</span>
  <span class="discount">(${items.discount_percentage}% OFF)</span>
  </div>
  <button class="btn-add-bag" onclick="addToBag(${items.id})" >Add to Bag</button>
  </div>`
  
});

itemsContainerElement.innerHTML= innerHTML;
}
displayItemsOnHomePage();
