       var buttonSearch = document.querySelector(".search-hotels");
       var formWindow = document.querySelector(".blank");
       var formField = document.querySelector(".dates");
       var arriveDate = formWindow.querySelector("[name=arrival-date]");
       var leaveDate = formWindow.querySelector("[name=departure-date]");
       var show = document.querySelector(".modal-show");
       var notShow = document.querySelector(".modal");
       var adults = formWindow.querySelector("[name=amount-of-adults]");
       var children = formWindow.querySelector("[name=amount-of-children]");
       var storage = localStorage.getItem("adults");
       var storageChildren = localStorage.getItem("adults");
      


       buttonSearch.addEventListener("click", function (evt){
         evt.preventDefault();
         formWindow.classList.toggle("modal");
         
       });

       show.ontransitionend = function(){
        formField.focus();
       };

      
       buttonSearch.addEventListener("click", function (evt){
         evt.preventDefault();
         formWindow.classList.toggle("modal-show");
         show.style.transition= "all 2s";
          if (storage) {
            adults.value = storage;
           children.value = storageChildren;
          }
       });

     var formI = formWindow.querySelector("form");

       formI.addEventListener("submit", function (evt){
         evt.preventDefault();
         if (!arriveDate.value || !leaveDate.value || !adults.value) {
         evt.preventDefault();
         console.log("Необходимо ввести дату заезда, отъезда и количество взрослых");
         }
         else {
           localStorage.setItem("adults", adults.value);
           localStorage.setItem("children", children.value);
         }
       });
      
     