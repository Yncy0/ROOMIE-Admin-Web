<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
});

const user = useSupabaseUser();
const redirectInfo = useSupabaseCookieRedirect();

watch(
  user,
  () => {
    if (!user.value) {
      return navigateTo("/login");
    } else {
      const path = redirectInfo.pluck();

      return navigateTo(path || "/");
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
