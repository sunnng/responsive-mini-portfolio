<script setup>
import { ref, watch } from 'vue'

const isActive = ref(false)
const qrInput = ref('')
const qrImg = ref('')
const qrButton = ref('Generator QR Code')
const isChanged = ref(false)

watch(qrInput, async (newQrInput, oldQrInput) => {
  if (newQrInput !== oldQrInput) {
    isChanged.value = true
  }
})

const generatorQRCode = () => {
  if (!qrInput.value) return
  if (isChanged.value) {
    qrImg.value = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrInput.value}`
    qrButton.value = 'Generator QR Code...'
  }

}

const imgLoaded = () => {
  isActive.value = true
  qrButton.value = 'Generator QR Code'
  isChanged.value = false
}

const inputKeyup = () => {
  if (!qrInput.value) {
    isActive.value = false
  }
}
</script>

<template>
  <div class="qr-code__container">
    <div class="wrapper" :class="{ active: isActive }">
      <header>
        <h1>QR Code Generator</h1>
        <p>Paste a url or enter text to create QR code</p>
      </header>

      <div class="form">
        <input
          type="text"
          placeholder="Enter text or url"
          v-model="qrInput"
          @keyup="inputKeyup"
        />
        <button @click="generatorQRCode">{{ qrButton }}</button>
      </div>

      <div class="qr-code">
        <img :src="qrImg" alt="qr-code" @load="imgLoaded" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.qr-code__container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #3498db;
}

.wrapper {
  background-color: #fff;
  max-width: 410px;
  height: 260px;
  border-radius: 7px;
  padding: 16px 25px;
  transition: height 0.3s ease;
}

.wrapper.active {
  height: 530px;
}

header h1 {
  margin: 0;
  font-size: 21px;
  font-weight: 500;
}

header p {
  margin: 5px 0 0;
  color: #474747;
  font-size: 16px;
}

.wrapper .form {
  margin: 20px 0 25px;
}

.form :where(input, button) {
  width: 100%;
  height: 55px;
  border: none;
  outline: none;
  border-radius: 5px;
}

.form input {
  font-size: 18px;
  padding: 0 17px;
  border: 1px solid #999;
}

.form button {
  margin-top: 20px;
  color: #fff;
  background-color: #3498db;
  font-size: 17px;
  cursor: pointer;
  transition: 0.3s;
}

.form button:hover {
  background-color: #5caade;
}

.wrapper .qr-code {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 33px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  opacity: 0;
  pointer-events: none;
}

.qr-code img {
  width: 180px;
}

.wrapper.active .qr-code {
  opacity: 1;
  pointer-events: auto;
  transition: opacity 0.5s 0.05s ease;
}
</style>
