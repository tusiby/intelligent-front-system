const isAuthenticated = () => true;

export default defineNuxtRouteMiddleware(() => {
  // isAuthenticated() is an example method verifying if a user is authenticated
  if (isAuthenticated() === false) {
    return navigateTo('/login');
  }
});
