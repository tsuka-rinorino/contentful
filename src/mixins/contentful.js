export default {
  methods: {
    unescapeHTML(str) {
      const div = document.createElement('div');
      div.innerHTML = str.replace(/</g, '&lt')
        .replace(/>/g, '&gt;');
      return div.textContent || div.innerText;
    },
  },
};
