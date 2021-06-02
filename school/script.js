$(document).ready(function(){
    $('.menu').on('click', function(){
        $('.burger').toggleClass('burger-active');
        $('.burger-top').toggleClass('burger-top-active');
        $('.burger-bottom').toggleClass('burger-bottom-active');
        $('.mobile').toggleClass('mobile-active');
        $('body').toggleClass('lock');
    });

    $('.mobile__title').on('click',function(){
        $(this).toggleClass('.mobile__content').next().slideToggle(300);

    });
    $('.main').on("click",function(){
        $('.burger').removeClass('burger-active');
        $('.burger-body').removeClass('burger-body-active');
        $('.mobile').removeClass('mobile-active');
        $('body').removeClass('lock');
        $('.burger-top').removeClass('burger-top-active');
        $('.burger-bottom').removeClass('burger-bottom-active');
    });
});


let list = document.querySelectorAll('.list');
    let itemBox = document.querySelectorAll('.itemBox');

    for(let i = 0; i<list.length; i++){
        list[i].addEventListener('click',function(){
            for(let j = 0; j<list.length; j++){
                list[j].classList.remove('active');
            };
            this.classList.add('active');

            let dataFilter = this.getAttribute('data-filter');

            for(let k = 0; k<itemBox.length; k++){
                itemBox[k].classList.remove('active');
                itemBox[k].classList.add('hide');

                if(itemBox[k].getAttribute('data-item') == dataFilter || dataFilter == "All"){
                    itemBox[k].classList.remove('hide');
                    itemBox[k].classList.add('active');
                };
            };
        });
    }; 



