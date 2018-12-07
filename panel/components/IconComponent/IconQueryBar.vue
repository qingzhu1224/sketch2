<template>
  <div class="iconQueryBar">
    <el-select
      class="iconQueryBarSelect"
      v-model="value"
      placeholder="请选择"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-input
      class="iconQueryBarInput"
      placeholder="请输入图标名称搜索"
      suffix-icon="el-icon-search"
      v-model="input21">
    </el-input>
  </div>
</template>

<script>
import { IconQueryBarOption } from './Config.js'
export default {
  data () {
    return {
      options: IconQueryBarOption,
      value: 'all',
      input21: '123'
    }
  }
}
</script>
<style lang="less" scoped>
.iconQueryBar{
  margin-top: 20px;
}
.iconQueryBarSelect{
  width: 20%;
}
.iconQueryBarInput{
  display: inline-block;
  width: 78%;
}
</style>
