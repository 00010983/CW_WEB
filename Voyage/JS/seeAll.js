//Javascript filter 
//with animating images on loading
var items = document.querySelectorAll('.filter-sections div');
animate(items);

// filter on click addatptive chage the class and a innerText
//while clicking the ALl it shows all the blocks 
each('.filter-links li a', function(el) {
  el.addEventListener('click', function(e) {
    e.preventDefault();
    filterLinks(el);
  });
});

// filter links functions
function filterLinks(element) {
  // get text 
  var el = element.textContent,
    linksTolowerCase = el.toLowerCase();
  // if all remove all elements
  if (el === 'All') {
    // first show all view class
    each('.view', function(e) {
      e.classList.remove('view');
    });
    // no show initial animation to the items
    animate(items);
  } else {
    // not click all remove all elements
    each('.view', function(e) {
      e.classList.remove('view');
    });
  }
  // show animation for current elements
  animate(document.querySelectorAll('.' + linksTolowerCase));
};
// foreach arrays 
function each(el, callback) {
  var allDivs = document.querySelectorAll(el),
    alltoArr = Array.prototype.slice.call(allDivs);
  Array.prototype.forEach.call(alltoArr, function(selector, index) {
    if (callback) return callback(selector);
  });
};
// animating function which gives the class to counter elemnt of item "view"
function animate(item) {
  (function show(counter) {
    setTimeout(function() {
      item[counter].classList.add('view');
      counter++;
      if (counter < item.length) show(counter);
    },50);
  })(0);
};