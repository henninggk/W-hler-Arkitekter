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
  const pro1 = document.querySelector('.project-container:nth-child(1) img');
  endreBakgrunnsfarge(pro1, 'rgb(200, 218, 218)');

  //endre bakgrunnsfarge på pro-2
  const pro2 = document.querySelector('.project-container:nth-child(2) img');
  endreBakgrunnsfarge(pro2, 'rgb(210, 160, 110)');

  //endre bakgrunnsfarge på pro-3
  const pro3 = document.querySelector('.project-container-2:nth-child(1) img');
  endreBakgrunnsfarge(pro3, 'rgb(230, 195, 150)');

  //endre bakgrunnsfarge på pro-4
  const pro4 = document.querySelector('.project-container-2:nth-child(2) img');
  endreBakgrunnsfarge(pro4, 'rgb(30, 30, 30)');

});

