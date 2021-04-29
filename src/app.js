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
                    'des': 'Grant description',
                    'name': 'Grant Harvey'
                },
                {
                    'img': 'img/test-2.png',
                    'des': 'description Harold Green',
                    'name': 'Harold Green'
                },
                {
                    'img': 'img/test-3.png',
                    'des': 'description Kate Lewis',
                    'name': 'Kate Lewis'
                },
                {
                    'img': 'img/test-4.png',
                    'des': 'Description Kelly Jonson',
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
                
            }
        },
        
    })
}





function init() {


    initVue();


}

document.addEventListener('DOMContentLoaded', init);