(function( $ ){

	$.fn.dmakerProductList = function() {

	    //Default values
	    var defaults = {
	    	// Container settings
	    	'container': ''
	    };

	    //Extend the default parameters and mask with given values if any
	    var params = $.extend({}, defaults, options);

	};


})( jQuery );

// <div class="product-list-container">
// 	<div class="product-list-content">
// 		<div class="box">
// 			<div class="box-wrapper clearfix">
// 				<div class="product-alert"><span class="sale">sale</span><span class="new">new</span></div>
// 				<div class="product-image"><img src="images/products/example/nb_gfast.jpg" alt="" class="base-img"><span class="hidden-sm hidden-xs"><img src="images/products/example/nb_gfast2.jpg" alt="" class="feature-img"></span></div>
// 				<div class="product-nav">
// 					<a href="" class="select-product"><i class="fa fa-shopping-cart"></i></a>
// 					<a href="" class="quick-view"><i class="fa fa-expand"></i></a>
// 					<a href="" class="add-wishlist"><i class="fa fa-heart"></i></a>
// 				</div>
// 				<div class="product-title"><h5><a href="">Example Product Bla bla bla bla bla bla</a></h5></div>
// 				<div class="product-price"><span class="old-price">$12.56</span><span class="price">$10.35</span></div>
// 			</div>
// 		</div>