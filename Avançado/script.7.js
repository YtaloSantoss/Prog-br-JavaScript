let url = "https://api.exchangeratesapi.io/latest?base=USD&symbols=BRL";


function converter() {
    let input = document.getElementById("valor");
    let valor = input.value;
    console.log(valor);

    fetch(url)
        .then((resolver) => {

            return resolver.json()
        
        })

        .then((data) => {
        
            let rate = data.rates.BRL;

            document.getElementById("resultado").innerHTML = rate * valor;
        
        })

}