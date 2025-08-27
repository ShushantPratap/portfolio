// Auto-refresh-page
// function AutoRefresh(t){
//   setTimeout('location.reload(true);', t);
// }
$(document).ready(function(){
// 1-Load-Table-Records
  function loadTable(){
    $.ajax({
      url : "php/database.php",
      type : "POST",
      success : function(data){
        $("#table-data").html(data);
      }
    });
  }
  loadTable(); // Load Table Records on Page Load

// 2-Disable-past-date
  $(document).on("click","#date", function(){
    let inpDate = document.getElementById('date');
    let year = new Date().getFullYear();
    let month = new Date().getMonth()+1;
    let todayDate = new Date().getDate();
    month < 10 ? month = '0' + month : month = month;
    todayDate < 10 ? todayDate = '0' + todayDate : todayDate = todayDate;
    let today = year+'-'+month+'-'+todayDate;
    inpDate.setAttribute("min", today);
  });

// 3-Insert-Records
   $("#save-button").on("click",function(e){
    e.preventDefault();
    let name = $("#Ename").val();
    let phone = $("#Enumber").val();
    let email = $("#Email").val();
    let date = $("#date").val();
    let comment = $("#Ecomment").val();

    let inpName = document.getElementById('Ename');
    let inpPhone = document.getElementById('Enumber');
    let inpEmail = document.getElementById('Email');
    let inpDate = document.getElementById('date');
    let inpComment = document.getElementById('Ecomment');

    if(name == ""){
      $("#error-message").html("Please enter your name.").slideDown();
      $("#success-message").slideUp();
      inpName.focus();
      inpName.style.border='2px solid red';
      inpComment.style.border='1px solid gray'
    }
    else if(phone == ""){
      $("#error-message").html("Please enter your mobile number.").slideDown();
      $("#success-message").slideUp();
      inpPhone.focus();
      inpPhone.style.border='2px solid red';
      inpComment.style.border='1px solid gray';
    }
   else if(phone.length < 10){
      $("#error-message").html("Please enter 10 digits mobile number.").slideDown();
      $("#success-message").slideUp();
      inpPhone.focus();
      inpPhone.style.border='2px solid red';
    }
    else if(phone.length > 10){
      $("#error-message").html("Please enter valid number.").slideDown();
      $("#success-message").slideUp();
      inpPhone.focus();
      inpPhone.style.border='2px solid red';
    }
    else if(email == ""){
      $("#error-message").html("Please enter Email address.").slideDown();
      $("#success-message").slideUp();
      inpEmail.focus();
      inpEmail.style.border='2px solid red';
      inpPhone.style.border='1px solid gray';
      inpName.style.border='1px solid gray';
    }
    else if(date == ""){
      $("#error-message").html("Please enter appointment date.").slideDown();
      $("#success-message").slideUp();
      inpDate.focus();
      inpDate.style.border='2px solid red';
      inpEmail.style.border='1px solid gray';
      inpPhone.style.border='1px solid gray';
      inpName.style.border='1px solid gray';
    }
    else if(comment == ""){
      $("#error-message").html("Please write your problem.").slideDown();
      $("#success-message").slideUp();
      inpComment.focus();
      inpComment.style.border='2px solid red';
      inpName.style.border='1px solid gray';
      inpPhone.style.border='1px solid gray';
      inpEmail.style.border='1px solid gray';
      inpDate.style.border='1px solid gray';
    }
    else{
      inpName.style.border='1px solid gray';
      inpPhone.style.border='1px solid gray';
      inpEmail.style.border='1px solid gray';
      inpDate.style.border='1px solid gray';
      inpComment.style.border='1px solid gray';
      $.ajax({
        url: "php/insert.php",
        type : "POST",
        data : {Name: name, Phone: phone, Email: email, date: date, Appointment: comment},
        success : function(data){
          if(data == 1){
            loadTable();
            $("#addForm").trigger("reset");
            $("#success-message").html("Your appointment book Successfully.").slideDown();
            $("#error-message").slideUp();
          }else{
            $("#error-message").html("Can't book your appointment.").slideDown();
            $("#success-message").slideUp();
          }
        }
      });
    }
  });

// 4-Delete-Records
  $(document).on("click",".delete-btn", function(){
      let patientId = $(this).data("id");
      let element = this;
      $.ajax({
        url: "php/delete.php",
        type : "POST",
        data : {Id : patientId},
        success : function(data){
          if(data == 1){
            $(element).closest("tr").fadeOut();
            $("#success-message").html("Delete Record Successfully.").slideDown();
            $("#error-message").slideUp();
          }else{
            $("#error-message").html("Can't Delete Record.").slideDown();
            $("#success-message").slideUp();
          }
        }
      });
  });

// 5-Live search
  $("#search").on("keyup",function(){
       let search_term = $(this).val();
       $.ajax({
         url: "php/liveSearch.php",
         type: "POST",
         data : {search : search_term},
         success: function(data) {
           $("#table-data").html(data);
         }
       });
     });


});

