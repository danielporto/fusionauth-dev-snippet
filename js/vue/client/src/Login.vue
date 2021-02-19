<template>
  <h1 v-if="email"><a href='http://js_server.localdev.vcap.me:9000/logout'>Sign Out</a></h1>
  <h1 v-else><a href='http://js_server.localdev.vcap.me:9000/login'>Sign In</a></h1>
</template>

<script>
export default {
  name: "Login",
  props: ["email"],
};
</script>

