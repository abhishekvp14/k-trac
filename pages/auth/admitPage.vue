<template>
  <div  class='flex flex-col justify-center w-100% items-center h-screen w-screen place-items-center bg-red-500'>
    <div class="form bg-gray-100 h-3/5 w-4/5 p-6 text-center search-box rounded-2xl">
      <KtracLogo />
      <h1 class="text-2xl text-gray-600 font-bold mt-4 mb-1">Admin Page</h1>
      <div class="sign-up mt-5 text-gray-600 font-bold">
      </div>
      <div class="actions flex flex-wrap justify-around items-center h-auto">
        <div @click="busPage" class="button flex flex-col h-20 w-20 m-6 rounded-md items-center p-2 bg-white shadow-lg cursor-pointer">
          <img src="../../components/images/addBus.png" alt="Add new bus">
          <span class="text-xs font-bold">
            Add new bus
          </span>
        </div>
        <div @click="routePage" class="button flex flex-col h-20 w-20 m-6 rounded-md items-center p-2 bg-white shadow-lg cursor-pointer">
          <img src="../../components/images/addRoute.png" alt="Add new route">
          <span class="text-xs font-bold">
            Add new route
          </span>
        </div>
        <div @click="routePage" class="button flex flex-col h-20 w-20 m-6 rounded-md items-center p-2 bg-white shadow-lg cursor-pointer">
          <img src="../../components/images/routeUpdate.png" alt="Update bus route">
          <span class="text-xs font-bold">
            Update bus route
          </span>
        </div>
        <div @click="signInPage" class="button flex flex-col h-20 w-20 m-6 rounded-md items-center p-2 bg-white shadow-lg cursor-pointer">
          <img src="../../components/images/addAdmin.png" alt="Add new admin">
          <span class="text-xs font-bold">
            Add new admin
          </span>
        </div>
      </div>
        <button @click="signOut" class="bg-red-400 text-white py-1 px-2 mt-3 rounded-md">sign out</button>
    </div>
  </div>
</template>

<script>
import KtracLogo from '~/components/KtracLogo.vue'
export default {
  data () {
    return {
      user: ''
    }
  },
  mounted () {
    this.$fire.auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user)
        this.user = user
      } else {
        this.$router.push('/auth/SignIn')
      }
    })
  },
  methods: {
    signOut () {
      this.user = ''
      this.$fire.auth.signOut()
      this.$router.push('/auth/SignIn')
    },
    busPage () {
      this.$router.push('/busEntry')
    },
    routePage () {
      this.$router.push('/routeEntry')
    },
    signInPage () {
      this.$router.push('/auth/SignIn')
    }
  },
  components: { KtracLogo }
}
</script>
<style lang='css' scoped>
  .actions {
    widows: 100%;
  }

  img {
    width: 50%;
  }
  @media (max-width: 766px) {
    .search-box{
      overflow-y: scroll;
    }
  }
  /* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  /* background: #f1f1f1; */
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #666;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
  border-radius: 10px;
}
</style>
