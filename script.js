const height_input = document.getElementById("inputaltm");
const weight_input = document.getElementById("inputkg");

var output = document.getElementById("res");

const button = document.getElementById("btn");

function IMC()
{
    if (height_input.value == "" || weight_input.value == "")
    {
        window.alert("Você precisa preencher todos os campos!");
    }
    else
    {
        var formula = parseFloat(weight_input.value) / (parseFloat(height_input.value) * parseFloat(height_input.value));

        output.innerText = `SEU IMC: ${formula.toFixed(2)}`;
    };
};

if (button.addEventListener)
{
    button.addEventListener("click", IMC);
}
else
{
    button.attachEvent("onclick", IMC); //Compatibilidade com IE8 e anteriores
};