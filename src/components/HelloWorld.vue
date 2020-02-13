<template>
  <div class="hello">
    <h1>Corona Still Alive Count</h1>
    <h2 class="count">{{count}}</h2>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data: () => {
    return {
      count: 0,
      coronaDeaths: 0,
      pplAlive: 0,
      coronaCases: 0,
      coronaRecovered: 0
    };
  },
  created: () => {
    fetch("https://coronastillalive.herokuapp.com/data")
      .then(res => res.json())
      .then(res => {
        this.coronaDeaths = res.coronaDeaths[res.coronaDeaths.length - 1].count;
        this.coronaRecovered =
          res.coronaRecovered[res.coronaRecovered.length - 1].count;
        this.coronaCases = res.coronaCases[res.coronaCases.length - 1].count;
        this.pplAlive = res.pplAlive[res.pplAlive.length - 1].count;
        this.reverseMessage();
      });
  },
  methods: {
    reverseMessage: () => {
      this.count = this.coronaDeaths;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
