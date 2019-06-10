<template>
  <div id="app">
    <nav></nav>
    <div class="cards">
      <div class="card incomplete" v-for="(magic, index) in magicList" v-if="magic['完成情况'] === 'false'" :key="magic['编号']">
        <Card
          @click.native="changeStatus(index)" 
          :magicId="magic['编号']" 
          :magicName="magic['技能名']" 
          :type="magic['类型']"
          :rare="magic['稀有度']" 
          :wayToLearn="magic['获取途径']" 
          :isLearned="magic['完成情况']">
        </Card>
      </div>
      <div class="card" v-for="(magic, index) in magicList" v-if="magic['完成情况'] === 'true'" :key="magic['编号']">
        <Card
          @click.native="changeStatus(index)" 
          :magicId="magic['编号']" 
          :magicName="magic['技能名']" 
          :type="magic['类型']"
          :rare="magic['稀有度']" 
          :wayToLearn="magic['获取途径']" 
          :isLearned="magic['完成情况']">
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
import Card from './components/cards/Card'
import Content from './assets/data.json'

export default {
  name: 'app',
  components: {
    Card
  },
  data() {
    return {
      magicList: null
    }
  },
  beforeCreate() {
    if(localStorage.getItem('BLUData') === null) localStorage.setItem('BLUData', JSON.stringify(Content));
  },
  created() {
    this.magicList = JSON.parse(localStorage.getItem('BLUData'));
  },
  updated() {
    localStorage.setItem('BLUData', JSON.stringify(this.magicList));
  },
  methods: {
    changeStatus: function(index) {
      if(this.magicList[index]['完成情况'] === 'false') return this.magicList[index]['完成情况'] = 'true';
      if(this.magicList[index]['完成情况'] === 'true') return this.magicList[index]['完成情况'] = 'false';
      }
    }
  }
</script>

<style>
body {
  background-color: rgb(236, 236, 236);
  user-select: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  justify-content: center;
}
.cards {
  min-width: 320px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
.card {
  float: left;
  padding: 10px;
}
.incomplete a {
  color: #FF0000;
}
@media screen and (max-width: 1300px) {
  .cards {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media screen and (max-width: 1000px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (max-width: 680px) {
  .cards {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
