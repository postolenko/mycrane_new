var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

function navParams() {
  if(bodyWidth > 900) {
    $(".main_nav > li > a").removeClass("active");
  }
}

$(window).resize(function() {
  navParams();
});

$(document).ready(function() {

    $(document).on("click", ".checkout_list [data-option-val]",  function(e) {
      e.preventDefault();
      parent = $(this).closest(".custom_select");
      val = $(this).attr("data-option-val");
      templ = $(this).html();
      parent.find(".p_val").html(templ);
      parent.find("input[type='hidden']").val(val);
      parent.removeClass("active");
      parent.find("[data-option-val]").removeClass("active");
      $(this).addClass("active");
    });

    $(document).on("click", ".custom_select .p_val", function(e) {
      e.preventDefault();
      parent = $(this).closest(".custom_select");
      parent.toggleClass("active");
    });

    $(document).mouseup(function(e) {
      hide_element = $(".custom_select");
      if (!hide_element.is(e.target)
          && hide_element.has(e.target).length === 0) {
          hide_element.removeClass("active");
        }
    });

    $(this).keydown(function(eventObject){
      if (eventObject.which == 27) {
        $(".custom_select").removeClass("active");
      }
    });

    // ----------------

    $(".respmenubtn").click(function(e) {
      e.preventDefault();
      if( $("#resp_nav").is(":hidden") ) {
          $("#resp_nav").fadeIn(300);
          $(this).addClass("active");
      } else {
          $("#resp_nav").fadeOut(300);
          $(this).removeClass("active");
      }
    });
    
    $(this).keydown(function(eventObject){
        if (eventObject.which == 27 &&
            $("#resp_nav").is(":visible") &&
            bodyWidth <= 767) {
                $("#resp_nav").fadeOut(300);
                $(".respmenubtn").removeClass("active");
        }
    });

    // ----------------

    $(".dr_btn").on("click", function(e) {
      e.preventDefault();
      parent = $(this).closest("li");
      dr = parent.children(".sub_menu");
      a = parent.children("a");
      if( dr.is(":hidden") ) {
          dr.slideDown(300);
          a.addClass("active");
      } else {
          dr.slideUp(300);
          a.removeClass("active");
      }
    });

    $(".main_nav > li > a").on("click", function(e) {
      if(bodyWidth <= 900) {
        e.preventDefault();
        parent = $(this).closest("li");
        drBtn = parent.children(".dr_btn");
        drBtn.trigger("click");
      }
    });

});