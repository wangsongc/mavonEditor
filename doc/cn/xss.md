```
<template>
  <div id="editor">
    <mavon-editor v-model="value" style="height: 100%" :xssOptions='xssOptions' :toolbars='toolbars'></mavon-editor>
  </div>
</template>
<script>
module.exports = {
  name: "editor",
  data() {
    return {
      value:"",
      xssOptions: {
        whiteList: {
          img: ["src", "alt", "width", "height"],
        },
        stripIgnoreTagBody: true
      },
      toolbars:{
        bold: true
      }
    };
  },
  computed: {},
  methods: {}
};
```vue