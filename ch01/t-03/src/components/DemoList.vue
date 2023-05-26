
<template>
  <h3>列表渲染</h3>
  <p v-for="item in names" :key="item">{{item}}</p>

  <div v-for="(item,index) in result" :key="index">
    <p>{{index}}. {{item.name}}</p>
    <img :src="item.avator" alt="">
  </div>

  <div>
    <p v-for="(value,key,index) of cardInfo" :key="index">{{key}}:{{value}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      names: [ '同调士', '共鸣者' ],
      result: [
        {
          "code": 96150936,
          "name": "魔偶甜点新人·水果挞修女",
          "avator": "https://ocg-p.yimieji.com/8718.jpg" 
        },
        {
          "code": 11868731,
          "name": "魔偶甜点·玛德莲魔女",
          "avator": "https://ocg-p.yimieji.com/5411.jpg"
        },
        {
          "code": 34680482,
          "name": "魔偶甜点·果冻天使",
          "avator": "https://ocg-p.yimieji.com/6310.jpg"
        }
      ],
      cardInfo: {
        name: "魔偶甜点后·后冠提拉米苏",
        atk: 2200,
        def: 2100
      }
    }
  }
}
</script>
