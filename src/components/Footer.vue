<template>
  <div>
    <p class="footer">Footer</p>
    <button @click="echo">echo</button>
  </div>
</template>

<script>
export default {
  name: "Footer",

  methods: {
    echo() {
      console.debug("echo~~");
    },
  },
};
</script>

<style>
.footer {
  color: red;
}
</style>
