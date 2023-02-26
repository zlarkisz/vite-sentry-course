<script setup>
const checkout = () => {
  alert("Checkout");
};
</script>

<template>
  <div>
    <h1 class="text-4xl">Home</h1>
    <button @click="checkout">Checkout</button>
  </div>
</template>
