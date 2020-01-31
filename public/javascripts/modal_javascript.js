$( ".boton_modal" ).click(function() {
    var value_title= $(this).attr('value-title');
    var value_img= $(this).attr('value-img');
    var value_description= $(this).attr('value-description');

    document.getElementById('title_modal').innerHTML=value_title;
    document.getElementById('description_modal').innerHTML=value_description;
    $('#img_modal').attr('src',value_img);
 
    $('#window_modal').modal('show');
});

$( "#btn_send_contact" ).click(function() {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;

    if (name.length== 0) {
        
        Swal.fire({
            icon: 'error',
            title: 'You need to register the name',
            text: 'Register the name and try again'
          });

    }else if(email.length== 0){
        Swal.fire({
            icon: 'error',
            title: 'You need to register the email',
            text: 'Register the email and try again'
          });

    }else if(phone.length== 0){
        Swal.fire({
            icon: 'error',
            title: 'You need to register the phone',
            text: 'Register the phone and try again'
          });

    }else if(message.length== 0){
        Swal.fire({
            icon: 'error',
            title: 'You need to register the message',
            text: 'Register the message and try again'
          });
    }else{

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })
          
          swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, send it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
          }).then((result) => {
            if (result.value) {
              swalWithBootstrapButtons.fire(
                'Send!',
                'Your data has been sent.',
                'success'
              );
              
              document.getElementById('name').value='';
              document.getElementById('email').value='';
              document.getElementById('message').value='';
              document.getElementById('phone').value='';

              
            }else if(result.dismiss === Swal.DismissReason.cancel){

              swalWithBootstrapButtons.fire(
                'Cancelled',
                'Your message has been canceled.',
                'error'
              );

              document.getElementById('name').value='';
              document.getElementById('email').value='';
              document.getElementById('message').value='';
              document.getElementById('phone').value='';

            }
          })


    }
    


});


