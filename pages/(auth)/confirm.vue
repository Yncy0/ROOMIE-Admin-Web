<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
});

const user = useSupabaseUser();

watch(
  user,
  () => {
    if (!user.value) {
      return navigateTo("/login");
    } else {
      return navigateTo("/");
    }
  },
  { immediate: true }
);
</script>

<template>
  <div class="w-screen h-screen flex items-center justify-center">
    <span>Waiting for login...</span>
  </div>
</template>
