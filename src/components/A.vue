<template>
 <div style="height: 100%;">
  <h1>I am A</h1>
  <router-link to="/B">加载B</router-link>
  <router-link to="/C">加载C</router-link>
  <router-link to="/D">加载D</router-link>
  <router-view></router-view>
 
 </div>
</template>

<script>
export default {
  name: 'A',
  data () {
    return {
      
    }
  },
  mounted(){
    
  },
  methods:{
     btn(){
       this.$router.push('/C')
     }
  }
}
</script>