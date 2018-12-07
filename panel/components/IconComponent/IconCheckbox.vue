<template>
  <div>
    <el-checkbox-group v-model="checkboxGroup1">
      <el-checkbox-button v-for="city in cities" :label="city.label" :key="city.value">{{city.label}}</el-checkbox-button>
    </el-checkbox-group>
  </div>
</template>

<script>
import { IconSelectOption } from './Config.js'
export default {
  data () {
    return {
      checkboxGroup1: ['上海'],
      checkboxGroup2: ['上海'],
      checkboxGroup3: ['上海'],
      checkboxGroup4: ['上海'],
      cities: IconSelectOption
    }
  }
}
</script>
