const data = {
    generos: ["Ação", "Comédia", "Suspense"],
    plataformas: {
    "Ação": ["Netflix", "Amazon Prime"],
    "Comédia": ["Disney+", "Star+"],
    "Suspense": ["HBO Max", "Google Play Filmes e TV"]
    },
    filmes: {
    "Netflix": ["Alice in Borderland", "All of Us"],
    "Amazon Prime": ["The Boys", "Gen V"],
    "Disney+": ["O Diário da Princesa", "High School Music", "American Pie"],
    "Google Play Filmes e TV": ["Corra!", "Slender Man"],
    "HBO Max": ["Parasita", "A origem"],
    "Crunchyroll": ["Attack On Titan", "My Hero Academia"]
    }
    };
    // toda vez que o conteudo da tela for atualizada
    document.addEventListener("DOMContentLoaded", () => {

    // associando o elemento html com a variavel
        const generoSelect = document.getElementById("genero");
    const plataformaSelect = document.getElementById("plataforma");
    const filmeSelect = document.getElementById("filme");
    
    // Preencher o seletor de gêneros
    data.generos.forEach(genero => {
    let option = document.createElement("option");
    option.value = genero;
    option.textContent = genero;
    generoSelect.appendChild(option);
    });
    });
    
    function atualizarPlataformas() {
    const generoSelect = document.getElementById("genero");
    const plataformaSelect = document.getElementById("plataforma");
    const filmeSelect = document.getElementById("filme");
    
    // Limpar plataformas e filmes
    plataformaSelect.innerHTML = '<option value="">Selecione...</option>';
    filmeSelect.innerHTML = '<option value="">Selecione...</option>';
    filmeSelect.disabled = true;
    
    if (generoSelect.value === "") {
    plataformaSelect.disabled = true;
    return;
    }
    
    plataformaSelect.disabled = false;
    
    // Preencher plataformas
    const plataformas = data.plataformas[generoSelect.value];
    plataformas.forEach(plataforma => {
    let option = document.createElement("option");
    option.value = plataforma;
    option.textContent = plataforma;
    plataformaSelect.appendChild(option);
    });
    }
    
    function atualizarFilmes() {
    const plataformaSelect = document.getElementById("plataforma");
    const filmeSelect = document.getElementById("filme");
    
    // Limpar filmes
    filmeSelect.innerHTML = '<option value="">Selecione...</option>';
    
    if (plataformaSelect.value === "") {
    filmeSelect.disabled = true;
    return;
    }
    
    filmeSelect.disabled = false;
    
    // Preencher filmes
    const filmes = data.filmes[plataformaSelect.value];
    filmes.forEach(filme => {
    let option = document.createElement("option");
    option.value = filme;
    option.textContent = filme;
    filmeSelect.appendChild(option);
    });
    }