<script setup>
definePageMeta({
  middleware: ["auth"],
});

const user = useSupabaseUser();

watch(
  user,
  () => {
    if (!user.value) return navigateTo("/login");
  },
  { immediate: true }
);
</script>

<template>
  <div>
    <h1>Index</h1>
  </div>
</template>
