<template>
  <div id="app">
    <header class="navbar">
      <span>BLU Skill Guide</span>
      <a-radio-group @change="changeSort" buttonStyle="solid" defaultValue="全部">
        <a-radio-button value="全部">全部</a-radio-button>
        <a-radio-button value="野外">野外</a-radio-button>
        <a-radio-button value="副本">副本</a-radio-button>
        <a-radio-button value="讨伐歼灭战">讨伐歼灭战</a-radio-button>
      </a-radio-group>
    </header>
    <main class="cards">
      <!-- eslint-disable-next-line -->
      <div class="card incomplete" v-for="(magic, index) in magicList" v-if="magic['完成情况'] === 'false' && checkSort(magic['类型'], sortBy)" :key="magic['编号']">
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
      <!-- eslint-disable-next-line -->
      <div class="card" v-for="(magic, index) in magicList" v-if="magic['完成情况'] === 'true' && checkSort(magic['类型'], sortBy)" :key="magic['编号']">
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
    </main>
    <footer>
      Copyright © 2019 <a href="https://github.com/Mcskiller">Mcskiller</a>. All rights reserved.
    </footer>
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
      magicList: null,
      sortBy: '全部'
    }
  },
  methods: {
    changeStatus: function(index) {
      if(this.magicList[index]['完成情况'] === 'false') return this.magicList[index]['完成情况'] = 'true';
      if(this.magicList[index]['完成情况'] === 'true') return this.magicList[index]['完成情况'] = 'false';
    },
    changeSort: function(e) {
      this.sortBy = e.target.value;
    },
    checkSort: function(item, sortBy) {
      if(sortBy === '全部') return true;
      if(sortBy === item) return true;
      return false;
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
  flex-direction: column;
  align-items: center;
}
.navbar {
  width: 100%;
  height: 50px;
  background-color: #FFF;
  margin-bottom: 30px;
  border-radius: 2px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
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
  .navbar {
    justify-content: center;
    padding: 0;
  }
  .navbar > span {
    display: none;
  }
  .cards {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
