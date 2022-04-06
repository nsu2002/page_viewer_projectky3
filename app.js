var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 3500); //thay đổi hình 3.5s / lần.
}

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/*show menu option*/

function changeClass()
{
 document.getElementById("open-hide").classList.toggle('show');
}

window.onload = function() 
{
  document.getElementById("open-hide").addEventListener( 'click' , changeClass ); 
}
/* submit*/

function validation(){
    var name = document.getElementById("name").value;
    var  phonenumber = document.getElementById("phonenumber").value;
    var address = document.getElementById("address").value;             
    var inputState = document.getElementById("inputState").value;
    var code = document.getElementById("code").value;             
    var exampleFormControlTextarea1 = document.getElementById("exampleFormControlTextarea1").value;
 
    alert(" Xin cảm ơn, form đã được gửi thành công.");
    return true;
 
}