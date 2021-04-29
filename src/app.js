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
            pagescroll: false

        },
        mounted: function scrollFun() {

            window.addEventListener('scroll', this.scrollDown);

        },
        methods: {


            scrollDown: function () {

                

                if (window.scrollY > 40) {

                    this.pagescroll = true;
                }else{
                    this.pagescroll = false;
                }
            }
        }


    })
}

function init() {

    initVue();


}

document.addEventListener('DOMContentLoaded', init);