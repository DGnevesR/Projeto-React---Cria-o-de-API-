import { useEffect } from "react";


function App() {
  const valores = fetch('./data004.json')
  .then(res => res.json())
  .then(dados => {
    mostraDados(dados);
  })
  .catch(erro => {
    console.log(erro + " erro na requisição");
  });

function mostraDados(dados) {
  const shoes = document.querySelector('#shoes tbody');
  
  
  shoes.innerHTML = '';

  
  Object.keys(dados).forEach(key => {
    const item = dados[key];
    if (item.brand === "ADIDAS") {
      shoes.innerHTML += `
        <tr>
          <td>${item.brand}</td>
          <td>${item.name}</td>
          <td><img src=${item.imageURL} alt="${item.name}" style="width:100px;"></td>
          <td>${item.id}</td>
        </tr>
      `;
    }
  });
}
 
  return (
    <>
      <nav>
        <h1>Page Adidas</h1>
      </nav>

      <section>
        <table id="shoes">
          <thead>
            <tr>
              <th>Marca do Tênis</th>
              <th>Nome do Tênis</th>
              <th className='img'>Foto do Tênis</th>
              <th>ID</th>
            </tr>
          </thead>
          <tbody>
            {/* Os dados serão inseridos aqui pela função mostraDados */}
          </tbody>
        </table>
      </section>
    </>
  );
}

export default App;
