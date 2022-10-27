const { createApp } = Vue

createApp({
    data() {
        return {
            url: 'https://api.sampleapis.com/wines/whites',
            vinosblancos: [],
                    }
    },
    methods: {
        fetchData(url) {

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.vinosblancos= data
                    console.log(this.vinosblancos)
                })
                
        }
    },
    created(){
        this.fetchData(this.url) 
    }
}) .mount('#app')