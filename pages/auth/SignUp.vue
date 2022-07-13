<template>
  <div  class='flex flex-col justify-center w-100% items-center h-screen w-screen place-items-center bg-red-500'>
    <div class='form bg-white h-3/5 w-3/4 p-6 text-center search-box rounded-2xl'>
      <KtracLogo />
      <h1 class="text-2xl text-gray-600 font-bold mt-8 mb-1">Sign Up</h1>
      <form @submit.prevent='SignUp(email, password)'>
        <input v-model='email'
          type='text'
          class="text bg-gray-100 h-50 w-4/5 p-4 mt-6 mb-1"
          placeholder='Enter email address'
          required
          :style='{border: eBorderStyle}'><br>
        <span v-if='emailError'>{{ emailError }}</span><br>
        <input v-model='password'
        type='password'
        class="text bg-gray-100 h-50 w-4/5 p-4 mt-1 mb-1"
        placeholder='Enter password'
        id='password'
        required
        :style='{border: pBorderStyle}'><br>
        <span v-if='passwordError'>{{ passwordError }}</span><br>
        <button type='submit' :disabled='!buttonDisable' class="text-xm text-white font-bold bg-green-500 px-2 py-1 rounded-xl h-10 w-32">Sign Up</button>
      </form>
      <div class="sign-up mt-5 text-gray-600 font-bold">
        <nuxt-link to="./SignIn">Already registerd? Sign In</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import KtracLogo from '~/components/KtracLogo.vue'
export default {
  data () {
    return {
      email: '',
      password: '',
      emailError: '',
      passwordError: '',
      disabled: [true, true],
      eBorderStyle: '',
      pBorderStyle: '',
      buttonDisable: false,
      eDisabled: false,
      pDisabled: false
    }
  },
  watch: {
    email (value) {
      this.email = value
      this.validateEmail(value)
    },
    password (value) {
      this.password = value
      this.validatePassword(value)
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
    async SignUp (email, password) {
      email = this.email
      password = this.password
      const auth = getAuth()
      await createUserWithEmailAndPassword(auth, email, password).then((currentUser) => {
        const user = currentUser.user
        console.log(user)
        alert('Signed In')
      }).catch((err) => {
        console.log(err)
      })
    },
    validateEmail (value) {
      // eslint-disable-next-line
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        // eslint-disable-next-line
        this.emailError = ''
        this.eBorderStyle = ''
        this.eDisabled = true
        this.buttonDisable = this.eDisabled && this.pDisabled
      } else {
        // eslint-disable-next-line
        this.emailError = 'Invalid Email Address'
        this.eBorderStyle = '2px solid red'
        this.eDisabled = false
        this.buttonDisable = this.eDisabled && this.pDisabled
      }
    },
    validatePassword (value) {
      if (value.length >= 6) {
        this.passwordError = ''
        this.pBorderStyle = ''
        this.pDisabled = true
        this.buttonDisable = this.eDisabled && this.pDisabled
      } else {
        this.passwordError = 'Password needs to be at least 6 letters'
        this.pDisabled = false
        this.buttonDisable = this.eDisabled && this.pDisabled
        this.pBorderStyle = '2px solid red'
      }
    }
  },
  components: { KtracLogo }
}
</script>
<style lang='css' scoped>
  span {
    color: red;
    font-weight: bold;
    font-size: small;
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
