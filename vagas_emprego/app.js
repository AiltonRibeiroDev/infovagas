function pesquisar() {
  const section = document.getElementById("resultados-pesquisa");
  const campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

  if (!campoPesquisa) {
    section.innerHTML = `<h2 class="nao_encontrado">Nada foi encontrado. Você não digitou nada no campo de pesquisa!</h2>`;
    return;
  }

  const resultados = dados.filter(dado => {
    const { empresa, cargo, day, escala, local } = dado;
    return [empresa, cargo, day, escala, local].some(campo => campo.toLowerCase().includes(campoPesquisa));
  }).map(dado => `
    <section class="card_vagas">
      <div class="card_box_info">
        <div class="name_joob">
          <p class="name_vaga">${dado.empresa}</p>
        </div>
        <h4 class="joob_descripition">${dado.cargo}</h4>
        <table>
          <tr>
            <td>${dado.day}</td>
            <td class="ponto"><img src="img/Oval.svg" alt="" /></td>
            <td>${dado.escala}</td>
            <td class="ponto"><img src="img/Oval.svg" alt="" /></td>
            <td>${dado.local}</td>
          </tr>
        </table>
        <div class="joob_extras"></div>
      </div>
    </section>
  `).join('');

  section.innerHTML = resultados || '<h2>Nada foi encontrado.</h2>';
}