

const news = document.querySelector('.newsletter');

news.style.display='none';


const forbiddenDomains = [
    '@yopmail.com',
    '@yopmail.fr',
    '@yopmail.net',
    '@cool.fr.nf',
    '@jetable.fr.nf',
    '@courriel.fr.nf',
    '@moncourrier.fr.nf',
    '@monemail.fr.nf',
    '@monmail.fr.nf',
    '@hide.biz.st',
    '@mymail.infos.st',
  ];




document.addEventListener('click',revealnews);

function revealnews(event){

    event.preventDefault();

    const newsbtn = document.querySelector('.icon-mail');
    newsbtn.setAttribute('id','newsbtn');   
    console.log(newsbtn);

    if (event.srcElement.children[0].id=='newsbtn'){news.style.display=''};

    // console.log(event);

    console.log(event.srcElement.children[0].id);


}



document.addEventListener('click',hidenews);

function hidenews(event){

    event.preventDefault();
        

     if (event.target.id=='closenewsbtn'){news.style.display='none'};


     console.log(event);
}


window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop >= 300) {
        news.style.display='';
    }
  });



  document.addEventListener('click', submitbtn);

  function submitbtn(event){

        event.preventDefault();


        const mailtocheck = document.querySelector('.newsletter__field');

        console.log(mailtocheck.value);

        if (event.target.id == 'submitbtn') {


             for (const mail of forbiddenDomains) { if(mailtocheck.value==mail){alert("Adresse mail interdite");mailtocheck.value=""}}

        }

  }

  
  const cards = document.querySelectorAll('.card');

  cards[5].style.display="none";
  cards[4].style.display="none";
  cards[3].style.display="none";

  console.log(cards[5].style.display="none");


  document.addEventListener('click', rollcard);

  function rollcard(event){

    event.preventDefault();

    const previouscard = document.querySelector('#previouscard');
    const nextcard = document.querySelector('#nextcard');

    if (event.target.id == 'previouscard' || event.target.id == 'nextcard') {


        for (const card of cards) {if (card.style.display=="none"){card.style.display=''}else{card.style.display='none'}}


    }

  }

  const comments = document.querySelectorAll('.review');

  console.log(comments[2].dataset.rating=="1");

  document.addEventListener('click',filtercomment);

  function filtercomment(event){

    event.preventDefault();

    console.log(document.querySelector('#onestar'));

    const onestar = document.querySelector('#onestar');
    const twostar = document.querySelector('#twostar');
    const threestar = document.querySelector('#threestar');

    console.log(event.target);
    console.log(event.target.value);
    console.log(onestar);

    switch (event.target.id) {
        case "rating-1": for (const comment of comments) {if (comment.dataset.rating=="1"){comment.style.display='';console.log("main1")}else{comment.style.display="none"};console.log("else1")}
            
            break;

            case "rating-2": for (const comment of comments) {if (comment.dataset.rating=="2"){comment.style.display=''}else{comment.style.display="none"}}
            
            break;

            case "rating-3": for (const comment of comments) {if (comment.dataset.rating=="3"){comment.style.display=''}else{comment.style.display="none"}}
            
            break;
     
    }

    switch (event.target) {

            case "onestar": for (const comment of comments) {if (comment.dataset.rating=="1"){comment.style.display='';console.log("main1")}else{comment.style.display="none"};console.log("else1")}
            
            break;

            case "twostar": for (const comment of comments) {if (comment.dataset.rating=="2"){comment.style.display=''}else{comment.style.display="none"}}
            
            break;

            case "threestar": for (const comment of comments) {if (comment.dataset.rating=="3"){comment.style.display=''}else{comment.style.display="none"}}
            
            break;

     
    }

  }


  document.addEventListener('click', changecolor);

//   const conteners = document.querySelectorAll('.container');

  const body = document.body;

//   console.log(conteners[1].style);

  function changecolor(event){

    event.preventDefault();


    switch (event.target.id) {
        case "theme-green": if(body.style.backgroundColor != "green") {body.style.backgroundColor = "green"} else {body.style.backgroundColor = "white"};
            
            break;
    
            case "theme-red": if(body.style.backgroundColor != "red") {body.style.backgroundColor = "red"} else {body.style.backgroundColor = "white"};
            
            break;

            case "theme-blue": if(body.style.backgroundColor != "blue") {body.style.backgroundColor = "blue"} else {body.style.backgroundColor = "white"};
            
            break;
    }



  }



