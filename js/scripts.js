//what we do toggling...
$("#one").click(function(){
    $("#one").toggle(function(){
     $("#design").show()
    })

});
$("#design").click(function(){
 $("#design").toggle(function(){
  $("#one").show()
 })

});
$("#two").click(function(){
 $("#two").toggle(function(){
  $("#dev").show()
 })

});
$("#dev").click(function(){
 $("#dev").toggle(function(){
  $("#two").show()
 })
});
$("#three").click(function(){
 $("#three").toggle(function(){
  $("#prod").show()
 
 })

});
$("#prod").click(function(){
 $("#prod").slideToggle(function(){
  $("#three").show()
 });
});