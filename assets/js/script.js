const texts = ["Mirana", "a freelancer", "a web developer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.getElementById("dynamic-text").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 2000);
  } else {
    setTimeout(type, 200);
  }
})();

setInterval(() => {
  const dynamicTextElement = document.getElementById("dynamic-text");
  if (dynamicTextElement.textContent === texts[count % texts.length]) {
    dynamicTextElement.textContent = "";
  }
}, 1500);
//reqemin artisi
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");
  const duration = 1000; 

  const animateCounters = () => {
    counters.forEach((counter) => {
      const target = +counter.getAttribute("data-target");
      let count = 0;
      const increment = target / (duration / 20);

            const updateCount = () => {
        count += increment;
        if (count < target) {
          counter.innerText = Math.ceil(count);
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounters();
          observer.disconnect();
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  observer.observe(document.querySelector(".fun-facts"));

});


var swiper = new Swiper(".mySwiper", {
  spaceBetween: 100,
  freeMode: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    
    450: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    
    451: {
      slidesPerView: 2,
      spaceBetween: 100,
    },
  },
});



 function sendMessage() {
event.preventDefault(); 

let firstName = document.getElementById("first-name").value;
let lastName = document.getElementById("last-name").value;
let email = document.getElementById("email").value;
let phone = document.getElementById("phone").value;
let message = document.getElementById("message").value;
let contactMethod = document.getElementById("contact-method").value;

let theMessage = `Hello! Let's work!\nI'm ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\n ${message}`;
const encodedMessage = encodeURIComponent(theMessage);

if (contactMethod === "whatsapp") {
  const whatsappLink = `https://api.whatsapp.com/send?phone=994558152223&text=${encodedMessage}`;
  window.open(whatsappLink, "_blank");
  alert("If the information did not appear in the message box, please try again. This is due to WhatsApp limitations.")
} else if (contactMethod === "email") {
    const emailLink = `mailto:miriyeva.mira05@gmail.com?subject=Contact%20Form%20Submission&body=${encodedMessage}`;
    window.location.href = emailLink;
}
};
// SCROLL BUTTON
let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", ()=> {
    document.documentElement.scrollTop = 0;
  })
  scrollProgress.style.background = `conic-gradient(#8750f7 ${scrollValue}%, #2a1454 ${scrollValue}% )`
};
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
//FADE IN
document.addEventListener("DOMContentLoaded", function() {
  const faders = document.querySelectorAll('.fade-in');
  
  const appearOptions = {
    threshold: 0.05, 
    rootMargin: "0px 0px -100px 0px"
  };
  
  const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add('visible');
        appearOnScroll.unobserve(entry.target);
      }
    });
  }, appearOptions);
  
  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});
//lang
$(document).ready(function() {
  $(window).scroll(function() {
    var languageContainer = $('.language-container');
    var scrollTop = $(window).scrollTop();
    var offsetTop = languageContainer.offset().top;
    
    if (scrollTop > offsetTop - 300) {
      $('#turkish').addClass('animate');
      $('#english').addClass('animate');
      $('#korean').addClass('animate');
    }
  });
});
function toggleModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = (modal.style.display === "block") ? "none" : "block";

}

function linkClick() {
  var modal = document.getElementById("myModal");
  modal.style.display = (modal.style.display === "block") ? "none" : "block";
    var plate = document.querySelector(".active");
  plate.className = "plate plate2"
}
window.onclick = function(event) {
  var modal = document.getElementById("myModal");
  if (event.target === modal) {
      modal.style.display = "none";
  }
}