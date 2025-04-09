export default defineNuxtRouteMiddleware((_to, _from) => {
  const user = useSupabaseUser();

  if (!user.value) {
    console.log(user.value);
    return navigateTo("/login");
  }
});
