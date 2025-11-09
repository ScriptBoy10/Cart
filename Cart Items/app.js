function shop(){
wrapper.innerHTML = `
<div id='container'>
    <div class="card">
      <img src="img/pasta.webp" alt="Pasta">
      <span class="card-content">
        <h3>PASTA</h3>
        <p>Real Italian pasta great cooked</p>
      </span>
      <span class="price">
        <p>£1.08</p>
        <button class="btn">Add To Cart</button>
      </span>


    </div>

    <div class="card">
      <img src="img/samosa.webp" alt="Samosa">
      <span class="card-content">
        <h3>SAMOSA</h3>
        <p>Freshly oven baked small chops</p>
      </span>
      <span class="price">
        <p>£6.92</p>
        <button class="btn">Add To Cart</button>
      </span>
    </div>

    <div class="card">
      <img src="img/bread.webp" alt="Bread">
      <span class="card-content">
        <h3>BREAD</h3>
        <p>Freshly oven baked brown bread</p>
      </span>
      <span class="price">
          <p>£3.02</p>
        <button class="btn">Add To Cart</button>
      </span>
    </div>

    
    <div class="card">
      <img src="img/whine.webp" alt="Non-alcoholic">
      <span class="card-content">
        <h3>N0N-ALCOHOLIC</h3>
        <p>Finest frsh wines made specially</p>
      </span>
      <span class="price">
        <p>£2.04</p>
        <button class="btn">Add To Cart</button>
      </span>
    </div>

    
    <div class="card">
      <img src="img/milk.webp" alt="Milk">
      <span class="card-content">
        <h3>MILK</h3>
        <p>Milked,refined and processed</p>
      </span>
      <span class="price">
        <p>£1.03</p>
        <button class="btn">Add To Cart</button>
      </span>
    </div>

    
    <div class="card">
      <img src="img/chocolates.webp" alt="Chocolate">
      <span class="card-content">
        <h3>CHOCOLATE</h3>
        <p>Made from the very best cocoa</p>
      </span>
      <span class="price">
        <p>£5.79</p>
        <button class="btn">Add To Cart</button>
      </span>
    </div>

    
    <div class="card">
      <img src="img/candies.webp" alt="Candies">
      <span class="card-content">
        <h3>CANDIES</h3>
        <p>Great for kids refreshing they love</p>
      </span>
      <span class="price">
        <p>£2.65</p>
        <button class="btn">Add To Cart</button>
      </span>
    </div>

    
    <div class="card">
      <img src="img/veg.webp" alt="Veg">
      <span class="card-content">
        <h3>VEG</h3>
        <p>Carrots,apples,lemons and vegetables</p>
      </span>
      <span class="price">
        <p>£3.09</p>
        <button class="btn">Add To Cart</button>
      </span>
    </div>

    
    <div class="card">
      <img src="img/biscuit.webp" alt="Buscuit">
      <span class="card-content">
        <h3>BUSCUIT</h3>
        <p>Speedy,fish-buscuit cookies,fish</p>
      </span>
      <span class="price">
        <p>£1.53</p>
        <button class="btn">Add To Cart</button>
      </span>
    </div>

    
    <div class="card">
      <img src="img/donuts.webp" alt="Donuts">
      <span class="card-content">
        <h3>DONUTS</h3>
        <p>Sweet different flavour and design</p>
      </span>
      <span class="price">
        <p>£2.01</p>
        <button  class="btn">Add To Cart</button>
      </span>
    </div>

    
    <div class="card">
       <img src="img/egg.webp" alt="Eggs">
      <span class="card-content">
        <h3>EGGS</h3>
        <p>Fried,tomates,onions and eggs</p>
      </span>
      <span class="price">
        <p>£2.09</p>
        <button class="btn">Add To Cart</button>
      </span>  
    </div>

    <div id="product-list" class="product-list"></div>
    </div>
    `;};

const sidebarHTML = `
  <div id="bams" style="top:0;right:0;width:25%;height:45%;background:#fff;box-shadow:-2px 0 8px rgba(0,0,0,0.2);z-index:1000;display:none;flex-direction:column;">
    <div class=""  style="padding:20px;">
      <button id="checkoutBtn" style="display:none;width:100%;background:#4caf50;color:#fff;padding:10px;border:none;border-radius:4px;margin-bottom:10px;cursor:pointer;">Go to Checkout</button>
      <h5 class="emmy">Your Cart</h5>
      <span class="mim">ITEMS:</span>
      <span class="item-count"></span>
      <br><br>
      <span class="mim">TOTAL:</span>
      <span class="money"></span>
    </div>
    <div class="owendu" style="padding:20px;border-top:1px solid #eee;cursor:pointer;">
      <span id="viewCartBtn">VIEW/MODIFY CART</span>
    </div>
  </div>
`; 
document.body.insertAdjacentHTML('beforeend', sidebarHTML);//key nnote;

const bams = document.getElementById('bams');
const  money = bams.querySelector('.money');
const itemCount = bams.querySelector('.item-count');
const viewCartBtn = document.getElementById('viewCartBtn');
const checkoutBtn = document.getElementById('checkoutBtn');
const container = document.getElementById('container');
const wrapper = document.querySelector('#wrapper');

let cart = [];

// Utility to get product info from card
function getProductInfo(card) {
  const img = card.querySelector('img').getAttribute('src');
  const alt = card.querySelector('img').getAttribute('alt');
  const name = card.querySelector('h3').innerText;
  const desc = card.querySelector('p').innerText;
  const price = parseFloat(card.querySelector('.price p').innerText.replace('£',''));
  return { img, alt, name, desc, price };
}  

function showBar(){
  // Add event listeners to all Add To Cart buttons
 document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const card = btn.closest('.card');
    const product = getProductInfo(card);
    cart.push(product);
    updateSidebar();
    bams.style.display = 'flex';
  });
});
};

// Update sidebar items and total
function updateSidebar() {
  itemCount.innerText = cart.length;
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  money.innerText = `£${total.toFixed(2)}`;
}

let inCartView = false;

function cartss(){ 
   if (!inCartView) {
    // Switch to cart view
    bams.style.display = 'block';
    renderCartCards();
  checkoutBtn.style.display = cart.length > 0 ? 'block' : 'none';
    viewCartBtn.innerText = 'BACK TO SHOP';
    inCartView = true;
  } else {
    // location.reload();
    recoverInitial();
  }
};

// Show cart items as cards when VIEW/MODIFY CART/BACK TO SHOP is clicked
viewCartBtn.addEventListener('click', function(e) {
  cartss();
});



// Render cart items as cards
function renderCartCards() {
  container.innerHTML = ` ${cart.length === 0 ? '<div style="padding:20px;">Your cart is empty.</div>' : cart.map((item, idx) => `
      <div class="card">
        <img src="${item.img}" alt="${item.alt}">
        <span class="card-content">
        <h3>Cart Item:</h3>
          <h3>${item.name}</h3>
          <p>${item.desc}</p>
        </span>
        <span class="price">
          <p>£${item.price.toFixed(2)}</p>
          <button class="remove-cart-btn" data-idx="${idx}" style="background: red; border: none; color: #fff;">Remove from Cart</button>
        </span>
      </div>
    `).join('')}
  `;
  

  // Remove from cart buttons
  document.querySelectorAll('.remove-cart-btn').forEach(btn => {
    btn.onclick = function() {
      const idx = parseInt(btn.getAttribute('data-idx'));
      cart.splice(idx, 1);
      updateSidebar();
      renderCartCards();
    };
  });
}
function recoverInitial(){
    // restore initial page without reload
    if (viewCartBtn.innerText == 'BACK TO SHOP') {
      checkoutBtn.style.display = 'none';
      viewCartBtn.innerText = 'VIEW/MODIFY CART';
      renderShop();
      inCartView = false;
    }else{
      cartss();
    }
}
// Restore shop viewct.
function renderShop() {
  shop();
  showBar();
};



/*/ Show cart items as cards when VIEW/MODIFY CART is clicked
viewCartBtn.addEventListener('click', function() {
  bams.style.display = 'block';
  renderCartCards();
  checkoutBtn.style.display = cart.length > 0 ? 'block' : 'none';
  viewCartBtn.innerText = backToShopBtn ? 'BACK TO SHOP' : 'VIEW/MODIFY CART';
});*/

// Go to checkout button
checkoutBtn.addEventListener('click', function() {
  cart = [];
  updateSidebar();
  location.reload();
});

// Initial sidebar update
updateSidebar();
showBar();

