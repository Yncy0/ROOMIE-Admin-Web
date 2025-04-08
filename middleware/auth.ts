export default defineNuxtRouteMiddleware((_to, _from) => {
  const user = useSupabaseUser();

  if (!user) {
    return navigateTo("/login");
  }
});
