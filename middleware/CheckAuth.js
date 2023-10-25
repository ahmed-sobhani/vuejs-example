export default ({ store, req }) => {
    if(process.client){
        store.dispatch('auth/initAuth')
    }
  }