import { defineStore } from 'pinia'
import { computed } from 'vue'
import { ref } from 'vue'
import { getNowUserInfo } from '@/api/auth'

export const useUserStore = defineStore('user', () => {
  const token = ref(localStorage.getItem('token') || '')
  const username = ref('')
  const avatar = ref('')
  const userInfo = ref({})

  const getToken = computed(() => token.value)
  const getUsername = computed(() => username.value)
  const getAvatar = computed(() => avatar.value)
  const getUserInfo = computed(() => userInfo.value)

  function setToken(tokenVal: string): void {
    localStorage.setItem('token', tokenVal)
    token.value = tokenVal
  }
  function setUsername(usernameVal: string): void {
    username.value = usernameVal
  }
  function setAavatar(avatarVal: string): void {
    avatar.value = avatarVal
  }
  function setUserInfo(userinfoVal: object): void {
    userInfo.value = userinfoVal
  }

  async function fetchUserInfo() {
    if (!userInfo.value) return
    const res = await getNowUserInfo()
    if (res.data) {
      setUsername(res.data.name)
      setAavatar(res.data.avatar_url)
      setUserInfo(res.data)
    }
  }

  return {
    token,
    username,
    avatar,
    userInfo,
    getToken,
    getUsername,
    getAvatar,
    getUserInfo,
    setToken,
    setUsername,
    setAavatar,
    setUserInfo,
    fetchUserInfo
  }
})
