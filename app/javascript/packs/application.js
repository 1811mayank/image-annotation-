// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
//= require jquery
//= require popper
//= require turbolinks
//= require bootstrap
//= require_tree.
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

import "bootstrap"

$(document).on('turbolinks:load', function() {
  $(".add").on("click", function(){     
    if(($("#amount").val()) < 10 ){
      var qty = parseInt($('#amount').val());
        
      $("#dynamic").append($("#append-item1").html());
            var new_qty = qty + 1;
            if (new_qty < 0) {
                    new_qty = 0;
            }
            $('#amount').val(new_qty);
    }  
  });
  
  $(document).on('click', '#remove1', function () {
    $(this).closest('#removerow1').remove();
    var qty = parseInt($('#amount').val());        
            var new_qty = qty - 1;
            if (new_qty < 0) {
                    new_qty = 0;
            }
            $('#amount').val(new_qty);
  });
  
  $(document).on('click', '#remove2', function () {
    $(this).closest('#removerow2').remove();
    var qty = parseInt($('#amount').val());        
            var new_qty = qty - 1;
            if (new_qty < 0) {
                    new_qty = 0;
            }
            $('#amount').val(new_qty)
  });
});

$(document).on('turbolinks:load', function() {
    $(".onclick").on("click", function(){
        if( parseInt($('#n').val()) < 10 ){
          var qty = parseInt($('#n').val());
            $("#key").attr('name', 'key' + ($('#n').val()) );
            $("#value").attr('name', 'value' + ($('#n').val()) );
            $(".dynamic-inputs").append($("#original-inputs").html())
                var new_qty = qty + 1;
                if (new_qty < 0) {
                        new_qty = 0;
                }
                $('#n').val(new_qty)
        }
      
    });
});

$(document).on('turbolinks:load', function() {
  $("#original-inputs").css("display", "none");
  $("#n").css("display", "none");
});

  // $(document).on('turbolinks:load', function() {
  //     $(".onclick1").on("click", function(){
   
  //     });
    
  // });
$(document).on('turbolinks:load', function() {  
  $(document).on('click', '#removeRow', function () {
          $(this).closest('#inputFormRow').remove();
          var qty = parseInt($('#n').val()); 
          var new_qty = qty - 1;
          if (new_qty < 0) {
                  new_qty = 0;
          }
          $('#n').val(new_qty)
      });
});
