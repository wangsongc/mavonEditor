<template>
  <div>
    <mavon-editor style="height: 100%" :value="textvalue" :externalLink = 'externalLink' :defaultOpen="defaultOpen" :subfield="subfield" ></mavon-editor>
  </div>
</template>
<script>
module.exports = {
  name: "editor",
  data() {
    return {
      textvalue:"preview",
      defaultOpen: "edit",
      subfield: false,
      externalLink: {
                hljs_css: function(css) {
                    // 这是你的代码高亮配色文件路径
                    return '/highlightjs/styles/' + css + '.min.css';
                }
      }
      // xssOptions: {
      //   whiteList: {
      //     img: ["src", "alt", "width", "height"]
      //   },
      //   stripIgnoreTagBody: true
      // }
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
