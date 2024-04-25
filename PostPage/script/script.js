document.addEventListener("DOMContentLoaded", function () {
    const searchIcon = document.getElementById("searchIcon");
    const searchInput = document.getElementById("search-input");
    const searchBox = document.getElementById("searchBox");

    searchIcon.addEventListener("click", function () {
        searchInput.style.display = (searchInput.style.display === "block") ? "none" : "block";

        if (searchInput.style.display === "none") {
            searchBox.style.cssText = `
                display: flex;
                align-items: center;
                justify-content: space-between;
            `;
            searchIcon.style.cssText = `
                position: relative;
                top: 0px;
            `;
        } else {
            searchBox.style.cssText = `
                display: flex;
                align-items: center;
                justify-content: space-between;
            `;
            searchIcon.style.cssText = "";
        }
    });
});

// var popupLink = document.getElementById('popupLink');
// var popup = document.getElementById('popup');
// var closePopup = document.getElementById('closePopup');

// function displayPopup() {
//     popup.style.display = 'block';
// }

// function closePopupFunction() {
//     popup.style.display = 'none';
// }

// popupLink.addEventListener('click', function(event) {
//     event.preventDefault(); 
//     displayPopup();
// });

// closePopup.addEventListener('click', closePopupFunction);

// window.addEventListener('click', function(event) {
//     if (event.target == popup) {
//         closePopupFunction();
//     }
// });

var popupLink = document.getElementById('popupLink');
    var popup = document.getElementById('popup');
    var closePopup = document.getElementById('closePopup');

    function displayPopup() {
        popup.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Disable background scrolling
    }

    function closePopupFunction() {
        popup.style.display = 'none';
        document.body.style.overflow = 'auto'; // Enable background scrolling
    }

    popupLink.addEventListener('click', function(event) {
        event.preventDefault(); 
        displayPopup();
    });

    closePopup.addEventListener('click', closePopupFunction);

    window.addEventListener('click', function(event) {
        if (event.target == popup) {
            closePopupFunction();
        }
    });

    
function toggleMenu() {
    var navMenu = document.querySelector('.navMenu');
    var menuIcon = document.getElementById("menuIcon");
  
    if (menuIcon.style.transform === "rotate(90deg)") {
      menuIcon.style = `transform:rotate(0deg);transition: 0.5s ease`;
    } else {
      menuIcon.style = `transform:rotate(90deg);transition: 0.5s ease`;
    }
  
  
    if (navMenu.style.display === "block") {
      navMenu.style.display = "none";
    }
    else {
      navMenu.style.display = "block";
    }
  
  }
  