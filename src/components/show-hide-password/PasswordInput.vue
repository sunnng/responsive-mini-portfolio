<script setup>
import { ref, computed } from 'vue'

let inputType = ref('password')

const iconEye = computed(() => {
  return inputType.value === 'password' ? 'bx-hide' : 'bx-show'
})

const overlayContent = computed(() => {
  return inputType.value === 'password' ? '' : 'overlay-content'
})


const showHiddenInput = () => {
  inputType.value === 'password'
    ? (inputType.value = 'text')
    : (inputType.value = 'password')
}
</script>

<template>
  <div class="input-container">
    <div class="input">
      <div class="input__overlay" :class='overlayContent' id="input-overlay"></div>

      <i class="bx bx-lock-alt input__lock"></i>

      <input
        :type="inputType"
        placeholder="Password..."
        class="input__password"
        id="input-pass"
      />
      <i
        class="bx input__icon"
        :class="iconEye"
        id="input-icon"
        @click="showHiddenInput"
      ></i>
    </div>
  </div>
</template>

<style scoped>
.input-container {
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: var(--body-color);
}

.input {
  display: flex;
  align-items: center;
  column-gap: 0.75rem;
  position: relative;
  background-color: var(--container-color);
  padding: 1.35rem 1.25rem;
  border-radius: 0.5rem;
}

.input__lock,
.input__icon {
  font-size: 1.25rem;
  z-index: 1;
  transition: 0.3s;
}

.input__lock,
.input__password {
  color: var(--white-color);
}

.input__icon {
  color: var(--first-color);
  cursor: pointer;
}

.input__password {
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 14px;
  z-index: 1;
}

.input__password::placeholder {
  color: white;
}

.input__overlay {
  width: 32px;
  height: 32px;
  background-color: var(--white-color);
  position: absolute;
  right: 0.9rem;
  border-radius: 50%;
  z-index: 0;
  transition: 0.4s ease-in-out;
}

/* Transition effect */
.overlay-content {
  width: 100%;
  height: 100%;
  right: 0;
  border-radius: 0.5rem;
}

.overlay-content ~ .input__lock {
  color: var(--container-color);
}

.overlay-content ~ .input__password,
.overlay-content ~ .input__password::placeholder {
  color: var(--text-color);
}
</style>
