function calcular() {
    const homens = document.getElementById('homens').value;
    const mulheres = document.getElementById('mulheres').value;
    const criancas = document.getElementById('criancas').value;

    const carne = (homens * 500) + (mulheres * 300) + (criancas *200);
    const frango = (homens * 200) + (mulheres * 200) + (criancas * 100);
    const linguica = (homens * 200) + (mulheres * 200) + (criancas * 200);
    const refrigerante = (homens * 300) + (mulheres * 400) + (criancas * 200);
    const cerveja = (homens * 800) + (mulheres * 500);

    const resultado = `
        <h2>Resultado:</h2>
        <ul>
        <li>Carne: ${carne / 1000} Kg </li>
        <li>Frango: ${frango / 1000} Kg </li>
        <li>Linguica: ${linguica / 1000} Kg </li>
        <li>Refrigerante: ${refrigerante / 1000} Litros </li>
        <li>Cerveja: ${cerveja / 1000} Litros </li>
        </ul>
    `

    document.getElementById('resultado').innerHTML = resultado;

}