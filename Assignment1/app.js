const app = Vue.createApp({
    data: function () {
        return {
            name: 'Hal Jordan',
            age: 45,
            imageLink: 'https://qph.cf2.quoracdn.net/main-qimg-17df232b8d6501780e06139cfd5a595a-lq',
        }
    },
    methods: {
        outputFavoriteNumber: function () {
            return Math.random();
        },
        calculateAge: function () {
            return this.age + 5;
        }
    }
});

app.mount('#assignment');