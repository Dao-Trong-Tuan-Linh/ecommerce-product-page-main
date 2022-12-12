"use strict";
//
const header=document.getElementById("myHeader");
const main=document.getElementById("myMain");
const cartIcon=document.querySelector('.cart');
const cartUser=document.querySelector('.cart-user--content');
cartIcon.addEventListener("click", function (e) {
    cartUser.classList.toggle("active");
  });

//
const decrease=document.querySelector("#decrease");//-
const number=document.querySelector('.amount');
const increase=document.querySelector("#increase");//+
let quantity;
quantity=Number(number.textContent);
increase.addEventListener("click",add);

function add()
{
  quantity++;
  number.textContent=quantity;
}

decrease.addEventListener("click",minus);

function minus()
{
  if(quantity>0)
  {
    quantity--;
    number.textContent=quantity;
  }
}

main.addEventListener("click",function() {
  cartUser.classList.remove("active");
});

//

const btn=document.querySelector('.btn');
const cartNumber=document.querySelector('.cart-user--number');
const cartGoods=document.querySelector('.user-cart--btn');
const goodsNumber=document.querySelector('.cart-goods--number');
const goodsTotal=document.querySelector('.cart-goods--result');
const cartEmpty=document.querySelector('.cart-user--empty');
const remove=document.querySelector('.cart-goods--remove');
let total;
btn.addEventListener("click",cart);
function cart()
{
  if(quantity>0)
  {
    cartNumber.classList.add("active");
    cartGoods.classList.add("active");
    cartEmpty.classList.add("hidden");
    cartNumber.textContent=quantity;
    goodsNumber.textContent=quantity;
    total=quantity*125;
    goodsTotal.textContent=total.toString()+".00";

  }
  else{
    alert('Please enter additional quantity');
  }
}

remove.addEventListener("click",del);
function del()
{
  cartNumber.classList.remove("active");
  cartGoods.classList.remove("active");
  cartEmpty.classList.remove("hidden");
  number.textContent=0;
}



//
const tabBox = document.querySelector(".box-product");
const tabImage = document.querySelectorAll(".product-item");
const contentImage = document.querySelectorAll(".img-product");

tabBox.addEventListener("click", function (e) {
  const clicked = e.target.closest(".product-item");
  if (!clicked) return;

  //   remove active class
  tabImage.forEach((el) => el.classList.remove("border-item"));
  contentImage.forEach((el) => el.classList.remove("active"));

  //add active class
  clicked.classList.add("border-item");
  document.querySelector(`.option-${clicked.dataset.tab}`) .classList.add("active");
 
    
});

//
const modal=document.getElementById("myModal");
const sliders=document.querySelectorAll(".slider");
const slide=document.querySelector(".slide");
const dot=document.querySelector(".product-item--second");
const btnLeft=document.querySelector(".pre");
const btnRight=document.querySelector(".next");
const chooseSlide=document.querySelector(".box-product--second");
 const close=document.querySelector(".close-modal");
 const boxImg=document.querySelector(".box-img");

let turn=0;
const maxSlide=sliders.length;

const activeImg=function (slide) {
  document.querySelectorAll(".product-item--second")
  .forEach((el) =>el.classList.remove("item-active"));

  document.querySelector(`.product-item--second[data-tab="${slide}"]`).classList.add("item-active");
};
activeImg(0);

const goSlide=function(slide) {
  sliders.forEach((s,i) => {
    s.style.transform=`translateX(${100*(i-slide)}%)`;
    
  });
};
goSlide(0);

const next=function(slide) {
  if(turn === maxSlide-1) {
    turn = 0;
  } else{
    turn++;
  }
  goSlide(turn);
  activeImg(turn);
};

const pre=function(slide) {
  if(turn === 0) {
    turn=maxSlide-1;
  } else turn--;

  goSlide(turn);
  activeImg(turn);
};

btnLeft.addEventListener("click",pre);
btnRight.addEventListener("click",next);

chooseSlide.addEventListener("click", function (e) {
  if (e.target.classList.contains("product-item--second")) {
    const s = e.target.dataset.tab;
    goSlide(s);
    turn = parseInt(s, 10);
    activeImg(s);
  }
});

boxImg.addEventListener("click",function() {
  modal.style.display="block";
});

close.addEventListener("click",function() {
  modal.style.display="none";
  
});

window.onclick=function(e) {
  if(e.target == modal) {
    modal.style.display = "none";
  }
};

//
const menu=document.querySelector(".menu");
const listItem=document.querySelector(".list-link");
const closeList=document.getElementById("close");
const bg=document.querySelector(".bg-color");

menu.addEventListener("click",function(){
  listItem.style.width="16rem";
  listItem.style.transform="translateX(0)";
  bg.style.display="block";
});

closeList.addEventListener("click",function() {
  listItem.style.width="0";
  listItem.style.transform="translateX(-10rem)";
  bg.style.display="none";
});

window.onclick=function(e) {
  if(e.target == bg) {
    listItem.style.width="0";
    listItem.style.transform="translateX(-10rem)";
    bg.style.display="none";
  }
};


