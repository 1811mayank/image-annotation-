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

// $(document).on('turbolinks:load', function() {
  
  
        
//   // $("#append-item").css("display","none");
//   $("#append-item1").css("display", "none"); 
 
//  });


$(document).on('turbolinks:load', function() {
  // $(".close-btn1").on("click", function(){  
  //   // $(this).closest('.content1').toggle();
  //   $(".content1").toggle();

  // });

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
        // $("#abc").css("background-color", "yellow");
        // jQuery methods go here...
        // $("onclick").on(function(){
        //     $("#dynamic-inputs").append($("#original-inputs").html())
        //   });
        $(".onclick").on("click", function(){
            if( parseInt($('#n').val()) < 10 ){
              var qty = parseInt($('#n').val());
                $("#key").attr('name', 'key' + ($('#n').val()) );
                $("#value").attr('name', 'value' + ($('#n').val()) );
                $(".dynamic-inputs").append($("#original-inputs").html())
                
                    //get the value of input field id-'qty'
                    
                    
                    var new_qty = qty + 1;
            
                    //i don't want to go below 0
                    if (new_qty < 0) {
                            new_qty = 0;
                    }
                    //put new value into input box id-'qty'
                    $('#n').val(new_qty)
            }
          
        });
        
        
        
        
    });
    



  $(document).on('turbolinks:load', function() {
    $("#original-inputs").css("display", "none");
    $("#n").css("display", "none");
    
    // jQuery methods go here...
    // $("onclick").on(function(){
    //     $("#dynamic-inputs").append($("#original-inputs").html())
    //   });
    //   $("#onclick").on("click", function(){
    //     $("#dynamic-inputs").append($("#original-inputs").html())
    //   });
    
  });
  $(document).on('turbolinks:load', function() {
    // $("#abc").css("background-color", "yellow");
    // jQuery methods go here...
    // $("onclick").on(function(){
    //     $("#dynamic-inputs").append($("#original-inputs").html())
    //   });
    
      $(".onclick1").on("click", function(){
        
      });
    
  });
  $(document).on('turbolinks:load', function() {
    // $("#abc").css("background-color", "yellow");
    // jQuery methods go here...
    // $("onclick").on(function(){
    //     $("#dynamic-inputs").append($("#original-inputs").html())
    //   });
    
    $(document).on('click', '#removeRow', function () {
            $(this).closest('#inputFormRow').remove();
            //get the value of input field id-'qty'
            var qty = parseInt($('#n').val());
            
            var new_qty = qty - 1;
    
            //i don't want to go below 0
            if (new_qty < 0) {
                    new_qty = 0;
            }
            //put new value into input box id-'qty'
            $('#n').val(new_qty)
        });
    
  });

// function addMore(){
//     $("#dynamic-inputs").append($("#original-inputs").html())
//   }

//   function submiForm() {
//     let data = []
//     $("[name='label']").each((i, item)=>
//     {
//       data.push({'label': item.value, 'amount':  $("[name='amount']")[i].value})
//     })
//     console.log({'quote_amounts': data})
//     $.ajax({
//         url: 'urlOfYourActionController',
//         data: {'quote_amounts': data},
//         type: 'POST',
//         success: function(data){
//             // handle your success here
//             console.log(data);
//         }
//     });
//   }












// $(document).on('click', '#addRow', function () {
//     var html = '';
//     html += '<div id="inputFormRow">';
//     html += '<div class="input-group mb-3">';
//     html += '<input type="text" name="title[]" class="form-control m-input" placeholder="Enter title" autocomplete="off">';
//     html += '<div class="input-group-append">';
//     html += '<button id="removeRow" type="button" class="btn btn-danger">Remove</button>';
//     html += '</div>';
//     html += '</div>';

//     $('#newRow').append(html);
// });

// // remove row
// $(document).on('click', '#removeRow', function () {
//     $(this).closest('#inputFormRow').remove();
// });