const { createApp } = Vue

createApp({
    data() {
        return {
            url: 'https://api.sampleapis.com/wines/rose',
            vinosrosados: [],
                    }
    },
    methods: {
        fetchData(url) {

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.vinosrosados= data
                    console.log(this.vinosrosados)
                })
                
        }
    },
    created(){
        this.fetchData(this.url) 
    }
}) .mount('#app')