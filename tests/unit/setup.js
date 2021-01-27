import Vue from 'vue';

Vue.config.productionTip = false;

export function getCodeStyle() {
    let check = document.querySelectorAll("link#" + "md-code-style")
    if (check[0].href) {
      return check[0].href
    }
    return ''
  }

  const links = {
    markdown_css: function () {
      return 'https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.9.0/github-markdown.min.css';
    },
    hljs_js: function () {
      return 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js';
    },
    hljs_lang: function (lang) {
      return 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/languages/' + lang + '.min.js';
    },
    // hljs_css: function (css) {
    //   if (hljsCss[css]) {
    //     return 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/' + css + '.min.css';
    //   }
    //   return '';
    // },
    katex_js: function () {
      return 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.3/katex.min.js';
    },
    katex_css: function () {
      return 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.3/katex.min.css';
    }
  }
