const form = document.getElementById('somar')

form.addEventListener('submit', function(event)
{
    event.preventDefault();

    const number1 =parseFloat(document.getElementById('number1').value)
    const number2 =parseFloat(document.getElementById('number2').value)
    alert(number1 + number2);
})

console.log(form)