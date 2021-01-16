<template>
  <div id="editor">
    <mavon-editor v-model="aaa" style="height: 100%" ></mavon-editor>
  </div>
</template>
<script>
module.exports = {
  name: "editor",
  data() {
    return {
      aaa:"",
      xssOptions: {
        whiteList: {
          img: ["src", "alt", "width", "height"],
        },
        stripIgnoreTagBody: true
      }
    };
  },
  computed: {},
  methods: {}
};
</script>
<style>
#editor {
  margin: auto;
  width: 80%;
  height: 580px;
}
</style>
