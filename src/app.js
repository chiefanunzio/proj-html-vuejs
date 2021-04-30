function initVue() {

    new Vue({


        el: '#app',
        'data': {
            navOption: [
                'HOME',
                'ABOUT',
                'PRICES',
                'COURSES',
                'LOCATIONS',
                'BLOG'
            ],
            slides: [{
                    'img': 'img/test-1.png',
                    'des': 'Grant description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, quos.',
                    'name': 'Grant Harvey'
                },
                {
                    'img': 'img/test-2.png',
                    'des': 'description Harold Green Lorem ipsum  sed fugit nulla facere ducimus quos ea minus nihil architecto vitae!' ,
                    'name': 'Harold Green'
                },
                {
                    'img': 'img/test-3.png',
                    'des': 'description Kate Lewis Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam tenetur magnam hic sed, culpa perferendis.',
                    'name': 'Kate Lewis'
                },
                {
                    'img': 'img/test-4.png',
                    'des': 'Description Kelly Jonson Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, quos.',
                    'name': ' Kelly Jonson'
                }
            ],
            pagescroll: false,
            current: 0,
        },
        mounted: function scrollFun() {

            window.addEventListener('scroll', this.scrollDown);

                setInterval(() =>{
       
                   this.nextImg();               
                }, 3000);
             
            
        },
        
       
        methods: {


            scrollDown: function () {
                if (window.scrollY > 40) {

                    this.pagescroll = true;
                } else {
                    this.pagescroll = false;
                }
            },
            
            nextImg: function () {
                this.current ++
                if(this.current >= this.slides.length){
                    this.current = 0
                }
                
            },

            // selectedSlide: function(){

                

            // }
        },
        
    })
}





function init() {


    initVue();


}

document.addEventListener('DOMContentLoaded', init);