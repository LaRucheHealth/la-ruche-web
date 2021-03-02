 var check = true;
 var check1 = true;
 var check2 = true;
 var check3 = true;
 $(document).ready(function(){
     let html = `
     <div class="row add_rem">
     <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 my-5">
   <div >
                  <h5 class="text-center">Name</h4>
                  <h5 class="text-center">jobtitle</h4>
                  <br>
                  <h5 class="text-center">About</h4>
                  <p class="text-center">descritpion</p>
                  <h5 class="text-center">social links</h4>
              </div>
              </div>
              </div>
`;
     $('.button_1').click(function(){
          check1 = true;
          check2 = true;
          check3 = true;
         $(".add_rem").remove();
         if(check==true)
         {
                $(html).hide().appendTo("#desc").fadeIn(1000);
                check=false
         }
         else
         {
             $(".add_rem").remove();
             check=true
         }

    });
     });
     $(document).ready(function(){
     let html = `
     <div class="row add_rem">
     <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 my-5">
     </div>
     <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 my-5">
   <div >
                  <h5 class="text-center">Name</h4>
                  <h5 class="text-center">jobtitle</h4>
                  <br>
                  <h5 class="text-center">About</h4>
                  <p class="text-center">descritpion</p>
                  <h5 class="text-center">social links</h4>
              </div>
              </div>
              </div>
`;
     $('.button_2').click(function(){
          check = true;
          check2 = true;
          check3 = true;
         $(".add_rem").remove();
         if(check1==true)
         {
            $(html).hide().appendTo("#desc").fadeIn(1000); 
            check1 = false;
         }
         else
         {
             $(".add_rem").remove();
             check1 = true
         }
         
    });
     });
 $(document).ready(function(){
     let html = `
     <div class="row add_rem">
     <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 my-5">
     </div>
     <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 my-5">
     </div>
     <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 my-5">
   <div >
                  <h5 class="text-center">Name</h4>
                  <h5 class="text-center">jobtitle</h4>
                  <br>
                  <h5 class="text-center">About</h4>
                  <p class="text-center">descritpion</p>
                  <h5 class="text-center">social links</h4>
              </div>
              </div>
              </div>
`;
     $('.button_3').click(function(){
          check = true;
          check1 = true;
          check3 = true;
         $(".add_rem").remove();
         if(check2==true)
         {
            $(html).hide().appendTo("#desc").fadeIn(1000); 
            check2 = false;
         }
         else
         {
             $(".add_rem").remove();
             check2 = true
         }
         
    });
     });
$(document).ready(function(){
     let html = `
     <div class="row add_rem">
     <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 my-5">
     </div>
     <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 my-5">
     </div>
     <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 my-5">
     </div>
     <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 my-5">
   <div >
                  <h5 class="text-center">Name</h4>
                  <h5 class="text-center">jobtitle</h4>
                  <br>
                  <h5 class="text-center">About</h4>
                  <p class="text-center">descritpion</p>
                  <h5 class="text-center">social links</h4>
              </div>
              </div>
              </div>
`;
     $('.button_4').click(function(){
          check = true;
          check1 = true;
          check2 = true;
         $(".add_rem").remove();
         if(check3==true)
         {
            $(html).hide().appendTo("#desc").fadeIn(1000); 
            check3 = false;
         }
         else
         {
             $(".add_rem").remove();
             check3 = true
         }
         
    });
     });



   