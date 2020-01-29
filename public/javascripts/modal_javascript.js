$( ".boton_modal" ).click(function() {
    var value_title= $(this).attr('value-title');
    var value_img= $(this).attr('value-img');
    var value_description= $(this).attr('value-description');

    document.getElementById('title_modal').innerHTML=value_title;
    document.getElementById('description_modal').innerHTML=value_description;
    $('#img_modal').attr('src',value_img);
 
    $('#window_modal').modal('show');
});


Swal.fire({
    title: 'Error!',
    text: 'Do you want to continue',
    icon: 'error',
    confirmButtonText: 'Cool'
  })