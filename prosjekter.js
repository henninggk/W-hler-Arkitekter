document.addEventListener('DOMContentLoaded', function() {
  
  function endreBakgrunnsfarge(prosjekt, farge) {
    prosjekt.addEventListener('mouseover', function() {
      document.body.style.backgroundColor = farge;
    });
  
    prosjekt.addEventListener('mouseout', function() {
      document.body.style.backgroundColor = ''; // Tilbakestill til standard
    });
  }

  //endre bakgrunnsfarge på pro-1
  const pro1 = document.querySelector('.pro-1 img');
  endreBakgrunnsfarge(pro1, 'rgb(200, 218, 218)');

  //endre bakgrunnsfarge på pro-2
  const pro2 = document.querySelector('.pro-2 img');
  endreBakgrunnsfarge(pro2, 'rgb(232, 232, 240)');

   //endre bakgrunnsfarge på pro-3
   const pro3 = document.querySelector('.pro-3 img');
   endreBakgrunnsfarge(pro3, 'rgb(30, 30, 30)');

    //endre bakgrunnsfarge på pro-4
  const pro4 = document.querySelector('.pro-4 img');
  endreBakgrunnsfarge(pro4, 'rgb(215, 209, 202)');

   //endre bakgrunnsfarge på pro-5
   const pro5 = document.querySelector('.pro-5 img');
   endreBakgrunnsfarge(pro5, 'rgb(210, 160, 110)');

    //endre bakgrunnsfarge på pro-6
  const pro6 = document.querySelector('.pro-6 img');
  endreBakgrunnsfarge(pro6, 'rgb(230, 195, 150)');

   //endre bakgrunnsfarge på pro-7
   const pro7 = document.querySelector('.pro-7 img');
   endreBakgrunnsfarge(pro7, 'rgb(225, 227, 247)');
});



document.addEventListener("DOMContentLoaded", function() {
    var img2 = document.querySelector(".prosjekt.pro-3 img");
    var originalTextColors = [];

    // Lagrer den opprinnelige tekstfargen
    var allText = document.querySelectorAll("body *");
    allText.forEach(function(element) {
        originalTextColors.push(window.getComputedStyle(element).color);
    });

    function changeTextColorToWhite() {
        var allText = document.querySelectorAll("body *");
        allText.forEach(function(element) {
            element.style.color = "rgb(235, 235, 235)";
        });
    }

    function restoreOriginalTextColor() {
        var allText = document.querySelectorAll("body *");
        allText.forEach(function(element, index) {
            element.style.color = originalTextColors[index];
        });
    }

    img2.addEventListener("mouseover", changeTextColorToWhite);
    img2.addEventListener("mouseout", restoreOriginalTextColor);
});
