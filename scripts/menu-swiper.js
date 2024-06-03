let galleryContainer = document.querySelector('.gallery');
let slides = document.querySelectorAll('.gallery-slide');
let paginationContainer = document.querySelector('.pagination');

// create pagination
slides.forEach(function(slide, index) {
  let slidePagination = document.createElement('span');
  slidePagination.classList.add('pagination-item');
  
  // add click event
  slidePagination.addEventListener('click', function() {
    slide.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    setActivePaginationItem(index);
  });
  
  paginationContainer.appendChild(slidePagination);
});

// set active pagination item
function setActivePaginationItem(index) {
  let paginationItems = document.querySelectorAll('.pagination-item');
  paginationItems.forEach(function(item, i) {
    if (i === index) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

// add events for our gallery
galleryContainer.addEventListener('scroll', function(event) {
  // check visible slides
  slides.forEach(function(slide, index) {
    let slideRect = slide.getBoundingClientRect();
    if (slideRect.left >= 0 && slideRect.right <= window.innerWidth) {
      setActivePaginationItem(index);
    }
  });
});

// set active pagination with index[0] be default
window.onload = function() {
  setActivePaginationItem(1);
}

// swipe by finger
let initialX = null;
galleryContainer.addEventListener('touchstart', function(event) {
  initialX = event.touches[0].clientX;
});

galleryContainer.addEventListener('touchmove', function(event) {
  if (initialX === null) {
    return;
  }
  let currentX = event.touches[0].clientX;
  let diffX = initialX - currentX;
  galleryContainer.scrollLeft += diffX;
  initialX = currentX;
  event.preventDefault();
});
galleryContainer.addEventListener('touchend', function(event) {
  initialX = null;
});

// swipe by left/right button
document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowLeft') {
    galleryContainer.scrollLeft -= 100;
  } else if (event.key === 'ArrowRight') {
    galleryContainer.scrollLeft += 100;
  }
});