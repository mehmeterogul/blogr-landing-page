const hamburger = document.querySelector('.hamburger');
const navigationWrapper = document.querySelector('.navigation-wrapper');
const dropdownArr = document.querySelectorAll('.dropdown-handler');

// Add/remove "open" class to "navigation-wrapper"
const toggleNavigation = function () {
  navigationWrapper.classList.toggle('open');
};

// Add/remove "active" class to dropdowns
const toggleDropdown = function (target) {
  let isActiveClicked = target.parentElement.classList.contains('active');

  for (let i = 0; i < dropdownArr.length; i++) {
    const dropdown = dropdownArr[i].parentElement;
    if (dropdown.classList.contains('active'))
      dropdown.classList.remove('active');
  }

  if (!isActiveClicked) target.parentElement.classList.add('active');
};

// Event listeners
hamburger.addEventListener('click', () => {
  toggleNavigation();
});

dropdownArr.forEach((dropdown) => {
  dropdown.addEventListener('click', () => {
    toggleDropdown(dropdown);
  });
});
