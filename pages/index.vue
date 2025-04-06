<script setup>
const supabase = useSupabaseClient();
const user = useSupabaseUser();

const loading = ref(true);

async function handleSignOut() {
  try {
    loading.value = true;

    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  } catch (e) {
    alert(e.error_description || e.message);
  } finally {
    loading.value = false;
  }
}

watchEffect(() => {
  if (!user.value) {
    return navigateTo("/login");
  }
});
</script>

<template>
  <div>
    <h1>Index</h1>
    <UButton @click="handleSignOut">Sign Out</UButton>
  </div>
</template>
