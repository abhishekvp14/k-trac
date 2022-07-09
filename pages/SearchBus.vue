<template>
  <div class="flex flex-col justify-center w-100% items-center h-screen w-screen place-items-center bg-red-500">
    <div class="form bg-white h-3/5 w-3/4 p-6 text-center search-box xm:overflow-y-scroll scrollbar-thin">
      <KtracLogo class="mt-3 logo" />
      <SearchForm class="mt-3 form animate__animated animate__fadeIn" />
      <div class="admin-page mt-4 animate__animated animate__fadeIn">
        <nuxt-link to="./auth/SignIn" class="font-bold text-gray-500">
          Admin Login
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import 'tailwind-scrollbar'
import 'animate.css'
import KtracLogo from '../components/KtracLogo.vue'
import SearchForm from '../components/SearchForm.vue'
export default {
  name: 'SearchBus',
  components: { KtracLogo, SearchForm }
}
</script>

<style lang="css" scoped>
  .search-box{
    animation: sizeDown 0.5s ease-in-out;
    border-radius: 15px;
    /* animation-delay: ; */
  }
  .logo{
    animation: moveUp 1s ease-in-out;
  }

  .admin-page{
    animation-delay: 0.7s;
  }

  @keyframes sizeDown{
    from{
      height: 100%;
      width: 100%;
      border-radius: 0;
    }
    to{
      height: 70%;
      width: 75%;
      border-radius: 15px;
    }
  }
  @keyframes moveUp{
    from{
      opacity: 0;
      transform: translateY(300px)
    }
    to{
      opacity: 100%;
      transform: translateY(0)
    }
  }
  @media (max-width: 640px) {
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
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
  border-radius: 10px;
}
</style>
