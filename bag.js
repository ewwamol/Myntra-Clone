
const CONVENIENCE_FEES=99;
let bagItemObject;
onload();

function onload(){
    loadBagItemObjects();
    displayBagItems();
    displayBagSummary();
}

function displayBagSummary(){
    let bagsummaryElement = document.querySelector('.bag-summary');
    let totalItem=bagItemObject.length;
    let totalMRP=0;
    let totalDiscount=0;
    let finalPayment=0;
    bagItemObject.forEach(bagItem => {
        totalMRP +=bagItem.original_price;
        totalDiscount+= bagItem.original_price-bagItem.current_price;
    }) ;
    finalPayment = totalMRP-totalDiscount+CONVENIENCE_FEES;



    bagsummaryElement.innerHTML=`<div class="bag-details-container">
            <div class="price-header">PRICE DETAILS (${totalItem} Items)</div>
            <div class="price-item">
              <span class="price-item-tag">Total MRP</span>
              <span class="price-item-value">₹${totalMRP}</span>
            </div>
            <div class="price-item">
              <span class="price-item-tag">Discount on MRP</span>
              <span class="price-item-value priceDetail-base-discount"
                >-₹${totalDiscount}</span
              >
            </div>
            <div class="price-item">
              <span class="price-item-tag">Convenience Fee</span>
              <span class="price-item-value">₹99</span>
            </div>
            <hr />
            <div class="price-footer">
              <span class="price-item-tag">Total Amount</span>
                <span class="price-item-value">₹${finalPayment}</span>
            </div>
          </div>
          <button class="btn-place-order">
            <div class="css-xjhrni">PLACE ORDER</div>
          </button>`;
}



function loadBagItemObjects(){
    console.log(bagitems)
    
    bagItemObject = bagitems.map(itemId => {
        for(let i=0; i< items.length;i++){
            if(itemId== items[i].id){
                return items[i];
            }
        }
    });
    console.log(bagItemObject)
    
}

function displayBagItems(){

    let containerElement = document.querySelector('.bag-items-container');
    
    let innerHTM='';
    bagItemObject.forEach(bagItem => {
        innerHTM+= generateItemHTML(bagItem);
        
    });
    containerElement.innerHTML=innerHTM;
}
function removeFromBag(itemId){
    bagitems=bagitems.filter(bagItemId=> bagItemId != itemId);
    localStorage.setItem('bagitems',JSON.stringify(bagitems));
    loadBagItemObjects();
    displayBagIcon();
    displayBagItems();
    displayBagSummary();
}

function generateItemHTML(items){
    return `<div class="bag-item-container">
            <div class="item-left-part">
              <img class="bag-item-img" src="${items.image}" />

            </div>
            <div class="item-right-part">
              <div class="company">${items.company}</div>
              <div class="item-name">${items.item_name}
              </div>
              <div class="price-container">
                <span class="current-price">₹ ${items.current_price}</span>
                <span class="original-price">₹ ${items.original_price}</span>
                <span class="discount-percentage">${items.discount_percentage}% OFF)</span>
              </div>
              <div class="return-period">
                <span class="return-period-days">${items.return_period}</span> return available
              </div>
              <div class="delivery-details">
                Delivery By
                <span class="delivery-details-days">${items.delivery_date}</span>
              </div>
            </div>

            <div class="remove-from-cart" onclick="removeFromBag(${items.id})">X</div>
          </div>`

}