<template>
  <div>
    <Header></Header>
    <Nuxt />
    <Footer></Footer>
    <vue-snotify></vue-snotify>
  </div>
</template>
<script>
import Footer from './../components/Footer'
import Header from './../components/Header'
export default {
  components:{Footer,Header},
    created(){
    if(process.client){
    this.$store.dispatch('auth/initAuth')
     console.log('mounted')
    }
   
  },
  mounted(){
  }
}
</script>
