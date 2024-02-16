
  document.addEventListener('DOMContentLoaded', function() {
    var menuIcon = document.querySelector('.menu-icon');
    var closeToggle = document.querySelector('.close-toggle');
    var navList = document.querySelector('.cd-nav-container');
  
    menuIcon.addEventListener('click', function() {
      navList.classList.add('show');
      closeToggle.style.display = 'block';
    });
  
    closeToggle.addEventListener('click', function() {
      navList.classList.remove('show');
      closeToggle.style.display = 'none';
    });
  
    
  });




/*carousel*/

  document.addEventListener("DOMContentLoaded", () => {
    const team_wrapper = document.querySelector(".team-wrapper");
    const carousel = document.querySelector(".carousel");
    const arrowBtns = document.querySelectorAll(".team-wrapper i");
    const firstCardWidth = carousel.querySelector(".card").offsetWidth;
    const carouselChildrens = [...carousel.children];


    let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

    carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
      carousel.insertAdjacentHTML("afterBegin", card.outerHTML);
    });

    carouselChildrens.slice(0, cardPerView).forEach(card => {
      carousel.insertAdjacentHTML("beforeend", card.outerHTML);
    });

    let isDragging = false,
      startX,
      startScrollLeft,
      timeoutId;

    arrowBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
      })
    });

    const dragStart = (e) => {
      isDragging = true;
      carousel.classList.add("dragging");
      startX = e.pageX;
      startScrollLeft = carousel.scrollLeft;
    };

    const dragging = (e) => {
      if (!isDragging) return;
      carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    };

    const dragStop = () => {
      isDragging = false;
      carousel.classList.remove("dragging");
    };
    
    const autoPlay = () => {
      if(window.innerWidth < 800) return ;
      timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
    }
    autoPlay();

    const infiniteScroll = () => {
      if(carousel.scrollLeft === 0){
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
      } else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth){
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
      }
      clearTimeout(timeoutId);
      if(!team_wrapper.matches(":hover")) autoPlay();
    }
    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
    carousel.addEventListener("scroll", infiniteScroll);
    carousel.addEventListener("mouseenter", () => clearTimeout(timeoutId));
    carousel.addEventListener("mouseleave", autoPlay);
  });




  //accordion


var items = document.querySelectorAll('.accordion-icon');

function toggleAccordion() {
var itemToggle = this.getAttribute('aria-expanded');

for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
}

if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
}
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));


document.addEventListener("DOMContentLoaded", function() {
    const accordionItems = document.querySelectorAll(".accordion-item");
    
    accordionItems.forEach(item => {
        const tabTitle = item.querySelector(".tab-title");
        const tabContent = item.querySelector(".tab-content");
        const accordionIconClosed = item.querySelector(".accordion-icon-closed");
        const accordionIconOpened = item.querySelector(".accordion-icon-opened");

        tabTitle.addEventListener("click", () => {
            if (tabContent.style.display === "block") {
                tabContent.style.display = "none";
                accordionIconOpened.style.display = "none";
                accordionIconClosed.style.display = "block";
            } else {
                tabContent.style.display = "block";
                accordionIconOpened.style.display = "block";
                accordionIconClosed.style.display = "none";
            }
        });
    });
});



//popup form
const hireTeamBtn = document.querySelector("#hireteam");

hireTeamBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
});

const hideLoginPopupBtn = document.querySelector(".form-popup .close-btn-login");

hideLoginPopupBtn.addEventListener("click", () => {
  const formPopup = document.querySelector(".form-popup");
  formPopup.classList.remove("show-popup");
});

