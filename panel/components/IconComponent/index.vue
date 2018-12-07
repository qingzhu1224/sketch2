<template>
  <div class="hello">
    <IconCheckbox />
    <IconQueryBar />
    <IconContainer />
  </div>
</template>

<script>
import IconCheckbox from './IconCheckbox'
import IconQueryBar from './IconQueryBar'
import IconContainer from './IconContainer'
export default {
  name: 'IconComponent',
  components: {
    IconCheckbox,
    IconQueryBar,
    IconContainer
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
.hello{
  position: relative;
}
</style>
