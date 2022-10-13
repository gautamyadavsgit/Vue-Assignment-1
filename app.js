const app = Vue.createApp({
    data() {
        return {
            name: "Gautam Yadav",
            Age: 22,
            image: "https://avatars.githubusercontent.com/u/82496188?s=400&u=1128bf622fe0c4a356defc75c6e3f0ab5cb4b018&v=4",
        }
    }, methods: {
        plusFiveAge() {
            return this.Age + 5;
        },
        randomNumber() {
            return Math.random();
        }
    }

})

app.mount('#assignment');
