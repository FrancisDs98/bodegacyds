const { createApp } = Vue

createApp({
    data() {
        return {
            url: 'https://api.sampleapis.com/wines/reds',
            vinostintos: [],
                    }
    },
    methods: {
        fetchData(url) {

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.vinostintos= data
                    console.log(this.vinostintos)
                })
                
        }
    },
    created(){
        this.fetchData(this.url) 
    }
}) .mount('#app')