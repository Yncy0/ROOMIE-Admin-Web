<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
});

const user = useSupabaseUser();

// const time = ref(60);

// onMounted(() => {
//   function countDown() {
//     const timeOut = setInterval(() => {
//       time.value--;

//       if (time.value <= 0) {
//         clearInterval(timeOut);
//         navigateTo("/login");
//       }
//     }, 1000);
//   }

//   countDown();
// });

watch(
  user,
  () => {
    if (user.value) return navigateTo("/");
  },
  { immediate: true }
);
</script>

<template>
  <div class="w-screen h-screen flex items-center justify-center">
    <span>Waiting for login...</span>
  </div>
</template>
