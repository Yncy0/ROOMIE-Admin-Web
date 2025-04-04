<script setup lang="ts">
const user = useSupabaseUser();

watch(
  user,
  () => {
    if (user.value) return navigateTo("/");
  },
  { immediate: true }
);
</script>

<template>
  <span>Waiting for login...</span>
</template>
