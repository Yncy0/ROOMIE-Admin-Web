<script setup>
definePageMeta({
  layout: "login",
});

const supabase = useSupabaseClient();

const loading = ref(false);
const email = ref("");

const handleLogin = async () => {
  try {
    loading.value = true;

    const { error } = await supabase.auth.signInWithOtp({
      email: email.value,
      options: {
        shouldCreateUser: false,
        emailRedirectTo: "http://localhost:3000/confirm",
      },
    });

    if (error) throw error;

    alert("Check your email for the login link!");
  } catch (error) {
    alert(error.error_description || error.message);
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <form
    class="flex flex-col justify-center items-center min-h-screen gap-8"
    @submit.prevent="handleLogin"
  >
    <NuxtImg src="/roomie-icon.png" class="w-44 h-44" />

    <UFormField label="Email">
      <UInput
        v-model="email"
        type="email"
        placeholder="Enter your email"
        class="w-2xs"
      />
    </UFormField>

    <UButton type="submit" class="text-white">Login</UButton>
  </form>
</template>
