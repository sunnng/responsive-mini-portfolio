<script setup>
import { ref } from 'vue'

const isActive = ref(false)
const iconType = ref('bx-cloud-download')
const buttonText = ref('Download')

const handleIsActive = () => {
  isActive.value = true
  setTimeout(() => {
    isActive.value = false
    iconType.value = 'bx-check-circle'
    buttonText.value = 'Completed'
  }, 6000)
}
</script>

<template>
  <div class="button" :class="{ active: isActive }" @click="handleIsActive">
    <div class="content">
      <i class="bx" :class="iconType"></i>
      <span class="button-text">{{ buttonText }}</span>
    </div>
  </div>
</template>

<style scoped>
.button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 95px;
  width: 360px;
  background-color: #7d2ae8;
  border-radius: 55px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  overflow: hidden;
}

.button.active {
  width: 500px;
  height: 20px;
}

.button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background-color: #5b13b9;
  border-radius: 55px;
}

.button.active::before {
  animation: layer 6s ease-in-out forwards;
}

@keyframes layer {
  100% {
    left: 0;
  }
}

.button .content {
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 0.5rem;
  width: 100%;
  height: 100%;
  transition: all 0.2s ease;
  transition-delay: 0.2s;
}

.button.active .content {
  transform: translateY(60px);
}

.content i,
.content .button-text {
  color: #fff;
  font-size: 40px;
  font-weight: 500;
}

.content .button-text {
  font-size: 28px;
}
</style>
