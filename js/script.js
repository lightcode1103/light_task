document.addEventListener('DOMContentLoaded', function () {
   const toggleButton= document.querySelector('.navbar .mobile-menu-toggle');
   const mobilemenu= document.querySelector('.navbar .mobile-menu-items');

   toggleButton.addEventListener('click', function () {
    mobileMenu.classList.toggle('active');
   });
})