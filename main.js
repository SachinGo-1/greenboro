$(document).ready(function () {

  var btn = $("#scrollButton");
  $(window).scroll(function () {
    if ($(window).scrollTop() > 900) {
      btn.addClass("display");
    } else {
      btn.removeClass("display");
    }
  });

  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
  });

  $(".hamberger").click(function () {
    $(".mobile-menus").slideToggle();
    $(".sub-child").slideUp();
    $(".child-menus").removeClass("show");
  });

  $(".child-menus .menus-title").click(function () {
    $(this).parent().toggleClass("show");
    $(this).parent().find(".sub-child").slideToggle();
  });

  $("a.form").on("click", function () {
    $(".form-bg").addClass("show");
  });

  $(".close").on("click", function () {
    $(".form-bg").removeClass("show");
  });

  // for responsive mobile view

  let drpdown = function () {
    if ($(window).width() < 768) {
      // jquery for dropdown
      $(function () {
        var list = $(".nav");
        var link = $(".mobile-tab h6");
        link.click(function (e) {
          e.preventDefault();
          list.slideToggle(200);
        });
        list.find("li").click(function () {
          var text = $(this).html();
          var icon = '<i class="fa fa-chevron-down"></i>';
          link.html(text);
          list.slideToggle(200);
        });
      });
    }
  };
  $(window).resize(function () {
    if ($(window).width() < 768) {
      drpdown();
    }
  });
  drpdown();


  
var acc = document.getElementsByClassName("accordion-header");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {                
    for (i = 0; i < acc.length; i++) {
      if (acc[i] == this){
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      } else {
        var panel = acc[i].nextElementSibling;
        panel.style.maxHeight = null;
        acc[i].classList.remove("active");
      }  
    }
  });
}

});
