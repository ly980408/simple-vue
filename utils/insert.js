// insert codes into page
console.info('%c=== ' + document.title + ' ===', 'color:#42b883;')

window.onload = () => {
  document.body.innerHTML = `
  <div class="welcome" style="text-align:center">
    <h1>${document.title}</h1>
    <p>Open the 'console' to see running results.</p>
  </div>`
}
