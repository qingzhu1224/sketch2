<template>
  <div class="IconPopUp" :class="{iconActive: visible}">
    <div class="left">
    </div>
    <div class="center">
      <p>{{`name：${iconItem.id}`}}</p>
      <p>{{`楼宇第一个库：${iconItem.id}`}}</p>
      <p>{{`上传人：${iconItem.id}`}}</p>
      <p>{{`时间：${iconItem.id}`}}</p>
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
export default {
  props: {
    visible: Boolean,
    iconItem: Object
  },
  data () {
    return {
    }
  }
}
</script>
<style lang="less" scoped>
  .IconPopUp{
    position:absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background-color: #f0f0f0;
    display: none;
  }
  .iconActive{
    display: block;
    display: flex;
  }
  .left{
    width: 30%;
    height: 100%;
    border: 1px solid red;
    flex: 0 0 auto;
  }
  .center{
    width: 40%;
    height: 100%;
    border: 1px solid red;
    flex: 0 0 auto;
    p{
      margin: 0 0;
    }
  }
  .right{
    width: 20%;
    height: 100%;
    border: 1px solid red;
    flex: 1 1 auto;
  }
</style>
