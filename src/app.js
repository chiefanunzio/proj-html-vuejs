function initVue() {

    new Vue({


            el: '#app',
            'data': {
                navOption:[
                    'HOME',
                    'ABOUT',
                    'PRICES',
                    'COURSES',
                    'LOCATIONS',
                    'BLOG'
                ]

            }
    })
}

function init() {

    initVue();


}

document.addEventListener('DOMContentLoaded', init);