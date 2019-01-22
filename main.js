window.addEventListener('keydown', function(e) {
  console.log(e);
  const audio = document.querySelector('audio[data-key="${e.keyCode}"]');
  if (!audio) return; // stop the function to running all together
  console.log(audio);
});