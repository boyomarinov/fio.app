<template lang="pug">
    canvas(id='myChart') 
</template>

<script>
import Chart from 'chart.js';

export default {
    props: [
        'datasets', 
        'options',
        'labels'
    ],

    mounted() {
        const ctx = document.getElementById("myChart").getContext("2d");
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: this.labels,
                datasets: this.datasets,
            },
            options: this.options
        });
    }
}
</script>
