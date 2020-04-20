/*----NEWS SLIDER----*/
$(document).ready(function () {
  let $slider = $(".news__slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
  });
  $("#prev").click(function (e) {
    e.preventDefault();
    $slider.slick("slickPrev");
  });
  $("#next").click(function (e) {
    e.preventDefault();
    $slider.slick("slickNext");
  });
});
/*----HEADER SLIDER----*/
$(document).ready(function () {
  let $slider = $(".header__slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 1000,
  });
});
/*----CONTACTS FORM----*/
$(document).ready(function () {
  $("#close").click(function (e) {
    e.preventDefault();
    $("#form").removeClass("show");
  });
  $("#close2").click(function (e) {
    e.preventDefault();
    $("#form").removeClass("show");
  });
});
/*----SCROLL----*/
$(document).ready(function () {
  $(`a[href^="#"]`).click(function () {
    let elementClick = $(this).attr("href");
    let destination = $(elementClick).offset().top;
    $("html").animate({ scrollTop: destination }, 1000);
  });
});
/*----MAP----*/
function initMap() {
  var ternopil = { lat: 49.5495028, lng: 25.5915303 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: ternopil,
    styles: [
      {
        elementType: "geometry",
        stylers: [
          {
            color: "#f5f5f5",
          },
        ],
      },
      {
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#616161",
          },
        ],
      },
      {
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#f5f5f5",
          },
        ],
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#bdbdbd",
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
          {
            color: "#eeeeee",
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#757575",
          },
        ],
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [
          {
            color: "#e5e5e5",
          },
        ],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#9e9e9e",
          },
        ],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [
          {
            color: "#ffffff",
          },
        ],
      },
      {
        featureType: "road.arterial",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#757575",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [
          {
            color: "#dadada",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#616161",
          },
        ],
      },
      {
        featureType: "road.local",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#9e9e9e",
          },
        ],
      },
      {
        featureType: "transit.line",
        elementType: "geometry",
        stylers: [
          {
            color: "#e5e5e5",
          },
        ],
      },
      {
        featureType: "transit.station",
        elementType: "geometry",
        stylers: [
          {
            color: "#eeeeee",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          {
            color: "#c9c9c9",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#9e9e9e",
          },
        ],
      },
    ],
  });

  var marker = new google.maps.Marker({
    position: { lat: 49.5495028, lng: 25.5915303 },
    icon: "img/map-marker.png",
    map: map,
  });
  marker.addListener("click", function () {
    $("#form").addClass("show");
  });
}
/*----NAV styles-----*/
$(document).ready(function () {
  $(window).scroll(function () {
    console.log(pageYOffset);
    if (pageYOffset >= 0 && pageYOffset < 800) {
      for (let i = 0; i < $(".nav__dot").length; i++) {
        $($(".nav__dot")[i]).removeClass("active-dot--blue");
        $($(".nav__dot")[i]).removeClass("active-dot--white");
        $($(".nav__dot+ a")[i]).css("color", "white");
        $($(".nav__dot")[i]).css("border-color", "white");
      }
      $("#about-dot").addClass("active-dot--white");
    } else if (pageYOffset >= 800 && pageYOffset < 2460) {
      for (let i = 0; i < $(".nav__dot").length; i++) {
        $($(".nav__dot")[i]).removeClass("active-dot--blue");
        $($(".nav__dot")[i]).removeClass("active-dot--white");
        $($(".nav__dot + a")[i]).css("color", "#60acff");
        $($(".nav__dot")[i]).css("border-color", "#60acff");
      }

      $("#projects-dot").addClass("active-dot--blue");
    } else if (pageYOffset >= 2460 && pageYOffset < 3500) {
      for (let i = 0; i < $(".nav__dot").length; i++) {
        $($(".nav__dot")[i]).removeClass("active-dot--blue");
        $($(".nav__dot")[i]).removeClass("active-dot--white");
        $($(".nav__dot+ a")[i]).css("color", "white");
        $($(".nav__dot")[i]).css("border-color", "white");
      }
      $("#news-dot").addClass("active-dot--white");
    } else if (pageYOffset >= 3500 && pageYOffset < 4400) {
      for (let i = 0; i < $(".nav__dot").length; i++) {
        $($(".nav__dot")[i]).removeClass("active-dot--blue");
        $($(".nav__dot")[i]).removeClass("active-dot--white");
        $($(".nav__dot + a")[i]).css("color", "#60acff");
        $($(".nav__dot")[i]).css("border-color", "#60acff");
      }
    } else if (pageYOffset >= 4400) {
      for (let i = 0; i < $(".nav__dot").length; i++) {
        $($(".nav__dot")[i]).removeClass("active-dot--blue");
        $($(".nav__dot")[i]).removeClass("active-dot--white");
      }
      $("#contact-dot").addClass("active-dot--blue");
    }
  });
});
