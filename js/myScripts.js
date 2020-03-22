let app = new Vue({
    el: '#app',
    data: {
        message: 'hello world!'
    }
})

let app2 = new Vue({
    el: '#app2',
    data: {
        message: 'hello world2!'
    }
})

let app3 = new Vue({
    el: '#app3',
    data: {
        message: 'hello world2!'
    }
})

let app4 = new Vue({
    el: '#app4',
    data: {
        url: 'https://wings.msn.to/'
    }
})

let app5 = new Vue({
    el: '#app5',
    data: {
        flag: true,
        flag2: false
    }
})

let app6 = new Vue({
    el: '#app6',
    data: {
        email: 'Y-Suzuki@example.com'
    },
    computed: {
        localEmail: function () {
            return this.email.split('@')[0].toLowerCase();
        }
    }
})

let app7 = new Vue({
    el: '#app7',
    data: {
        email: 'Y-SUzuki@example.com'
    },
    methods: {
        localEmail: function () {
            return this.email.split('@')[0].toLowerCase();
        }
    }
})


let app8 = new Vue({
    el: '#app8',
    data: {
        current: new Date().toLocaleString()
    },
    computed: {
        randomc: function () {
            return Math.random();
        }
    },
    methods: {
        onclick: function () {
            this.current = new Date().toLocaleString();
        },
        randomm: function () {
            return Math.random();
        }
    }
})