<script setup></script>

<template>
  <div class="container">
    <div class="input">
      <div class="input-body">
        <div class="input-body__main">
          <input type="text" class="input-field" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

.input-body {
  width: 100%;
  max-width: 376px;
  padding: 0 12px;
  border-radius: 5px;
  overflow: hidden;
}

.input-body__main .input-field {
  border: 2px solid #9f9f9f;
  padding: 8px 0 8px;
  outline: none;
}
/*.input__body {*/
/*  position: relative;*/
/*  width: 376px;*/
/*}*/

/*.input__body input {*/
/*  width: 100%;*/
/*  padding: 12px;*/
/*  border: 1px solid #dcdade;*/
/*  border-radius: 5px;*/
/*  outline: none;*/
/*  color: #333;*/
/*  font-size: 1rem;*/
/*}*/

/*.input__body span {*/
/*  position: absolute;*/
/*  left: 0;*/
/*  padding: 12px;*/
/*  font-size: 1rem;*/
/*  color: #666;*/
/*  pointer-events: none;*/
/*  transition: 0.3s;*/
/*}*/

/*.input__body input:valid ~ span,*/
/*.input__body input:focus ~ span {*/
/*  color: #000;*/
/*  transform: translate(10px, -7px);*/
/*  font-size: 0.65rem;*/
/*  padding: 0 10px;*/
/*  background-color: #fff;*/
/*}*/
</style>
