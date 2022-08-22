<script setup>
import { reactive, ref } from 'vue'

const isPassword = ref(true)
const isInputActive = ref(false)
const password = ref('')
const notice = ref('Password is weak')
const noticeStyle = reactive({
  color: '#FF6333'
})
const showHideStyle = reactive({
  color: '#a6a6a6'
})

const checkRule = (rule) => (i) => i.value.match(rule)
const checkLengthRule = (length) => (i) => i.value.length >= length

let alphabet = /[a-zA-Z]/
let numbers = /[0-9]/
let specialCharacters = /[!@#$%^&*?_()-+=~]/
let passwordLength = 6

const checkAlphabet = checkRule(alphabet)
const checkNumbers = checkRule(numbers)
const checkSpecialCharacters = checkRule(specialCharacters)
const checkLength6 = checkLengthRule(passwordLength)

const inputHandler = (e) => {
  if (!isInputActive.value) isInputActive.value = true

  if (password.value === '') {
    isInputActive.value = false
    showHideStyle.color = '#a6a6a6'
    e.target.style.borderColor = '#a6a6a6'
  }

  if (
    checkAlphabet(password) ||
    checkNumbers(password) ||
    checkSpecialCharacters(password)
  ) {
    notice.value = 'Password is weak'
    noticeStyle.color = '#FF6333'
    showHideStyle.color = '#FF6333'
    e.target.style.borderColor = '#FF6333'
  }

  if (
    checkAlphabet(password) &&
    checkNumbers(password) &&
    checkLength6(password)
  ) {
    notice.value = 'Password is medium'
    noticeStyle.color = '#cc8500'
    showHideStyle.color = '#cc8500'
    e.target.style.borderColor = '#cc8500'
  }

  if (
    checkAlphabet(password) &&
    checkNumbers(password) &&
    checkSpecialCharacters(password) &&
    checkLength6(password)
  ) {
    notice.value = 'Password is strong'
    noticeStyle.color = '#22c32a'
    showHideStyle.color = '#22c32a'
    e.target.style.borderColor = '#22c32a'
  }
}
</script>

<template>
  <div class="pwd-strength-check">
    <div class="container">
      <div class="input-box">
        <i
          class="bx show-hide"
          :class="[isPassword ? 'bxs-show' : 'bxs-hide']"
          @click="isPassword = !isPassword"
          :style="showHideStyle"
        ></i>
        <input
          :type="isPassword ? 'password' : 'text'"
          spellcheck="false"
          placeholder="Enter Password"
          v-model="password"
          @keyup="inputHandler"
        />
      </div>

      <div class="indicator" :class="{ active: isInputActive }">
        <div class="icon-text" :style="noticeStyle">
          <i class="bx bxs-error-circle error-icon"></i>
          <h2 class="text">{{ notice }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pwd-strength-check {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #7d2ae8;
}
.container {
  max-width: 460px;
  width: 100%;
  background-color: #fff;
  border-radius: 4px;
  padding: 30px;
  margin: 0 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
}

.container .input-box {
  position: relative;
}

.input-box .show-hide {
  position: absolute;
  right: 16px;
  top: 50%;
  padding: 5px;
  font-size: 24px;
  transform: translateY(-50%);
  cursor: pointer;
  transition: 0.3s;
}

.show-hide:hover {
  color: #d3d3d3;
}

.input-box input {
  width: 100%;
  height: 60px;
  border: 2px solid #d3d3d3;
  border-radius: 4px;
  font-size: 18px;
  font-weight: 500;
  color: #333;
  outline: none;
  padding: 0 50px 0 16px;
}

.container .indicator {
  display: none;
  transition: 0.3s;
}

.container .indicator.active {
  display: block;
  margin-top: 14px;
}

.indicator .icon-text {
  display: flex;
  align-items: center;
}

.icon-text .error-icon {
  margin-right: 6px;
}

.icon-text .text {
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  margin: 0;
}
</style>
