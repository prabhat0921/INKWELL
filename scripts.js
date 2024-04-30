// scripts.js

$(document).ready(function() {
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });

  // Dynamically load product cards
  // You can fetch product data from a server and generate cards dynamically
  // For demonstration purposes, I'll just create a sample card
  var productCard = '<div class="col-md-4 mb-4">' +
                      '<div class="card">' +
                        '<img src="notebook.jpg" class="card-img-top" alt="Notebook">' +
                        '<div class="card-body">' +
                          '<h5 class="card-title">Premium Notebook</h5>' +
                          '<p class="card-text">High-quality notebook for professionals.</p>' +
                          '<a href="product-details.html" class="btn btn-primary">View Details</a>' +
                        '</div>' +
                      '</div>' +
                    '</div>';

  // Append product cards to the products section


  // Form submission handling
