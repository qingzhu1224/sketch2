<template>
  <div class="IconContainer">
    <ul class="box">
      <li
        v-for="item in items"
        :key="item.id"
        @click="add(item)"
      >
        <i :class="item.class"></i>
      </li>
    </ul>
    <IconPopUp
      :visible="visible"
      :iconItem="iconItem"
    />
  </div>
</template>

<script>
import IconPopUp from './IconPopUp'
import pluginCall from 'sketch-module-web-view/client'
const data = new Array(38).fill(0).map((item, idx) => ({id: `${idx}_key`, class: 'el-icon-edit'}))
export default {
  components: {
    IconPopUp
  },
  data () {
    return {
      items: data,
      visible: false,
      iconItem: {id: '', class: ''}
    }
  },
  methods: {
    add: function (item) {
      this.$data.visible = true
      this.$data.iconItem = item
      console.log(pluginCall)
      pluginCall('onClick', item)
    }
  }
}
</script>
<style lang="less" scoped>
  .IconContainer{
    margin-top: 20px;
    height: 300px;
    // border: 1px solid red;
    overflow: auto;
  }
  .box{
    display: flex;
    flex-wrap: wrap;
    li{
      width: 15%;
      height: 60px;
      border: 1px solid #dcdfe6;
    }
  }
</style>
