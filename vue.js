new Vue({
    el: '#app',
    data: {
        numbers: []
    },
    created() {
        for (let i = 1; i <= 50; i++) {
            this.numbers.push(i);
        }
    }
});