<script setup>
definePageMeta({
  middleware: ["auth"],
});

const supabase = useSupabaseClient();
const user = useSupabaseUser();

watch(
  user,
  () => {
    if (!user.value) return navigateTo("/login");
  },
  { immediate: true }
);

async function handleSignOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;

  navigateTo("/login", { replace: true });
}
</script>

<template>
  <div>
    <h1>Index</h1>
    <UButton @click="handleSignOut">Sign Out</UButton>
  </div>
</template>
