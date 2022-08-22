<script setup></script>

<template>
  <div class="container">
    <div class="input">
      <div class="input-body">
        <div class="input-body__main">
          <input type="text" class="input-field" />
          <div class="input-label">Username</div>
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
  padding: 0 12px;
  border-radius: 4px;
  border: 1px solid #9f9f9f;
}

.input-body {
  display: flex;
  align-items: center;
  justify-content: start;
  width: 376px;
  min-height: 56px;
}

.input-body__main {
  position: relative;
}

.input-body__main .input-label {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0.5rem;
  pointer-events: none;
  transition: 0.3s;
}

.input-body__main .input-field {
  padding: 8px 0 8px;
  border: none;
  outline: none;
}

.input-field:focus ~ .input-label {
  background-color: #fff;
  transform: translateY(-180%);
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
