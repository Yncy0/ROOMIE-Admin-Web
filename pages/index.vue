<script setup>
const supabase = useSupabaseClient();
const session = useSupabaseSession();

const loading = ref(true);

if (!session.value) {
  console.log("No session!");
  navigateTo("/login");
}

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
</script>

<template>
  <div>
    <h1>Index</h1>
    <UButton @click="handleSignOut">Sign Out</UButton>
  </div>
</template>
