document.querySelector('[type="tel"]').addEventListener('keydown', (e) => {
    e.target.value = e.target.value.replace(/(\d{2})(\d+)/g, '$1 $2')
})

$('[type="tel"]').keyup(function() {
  $(this).val($(this).val().replace(/(\d{2})(\d+)/g, '$1 $2'))
});