 document.getElementById("formCadastro").addEventListener("submit", function(e) {
      e.preventDefault();

      const nome = document.getElementById("nome").value.trim();
      const email = document.getElementById("email").value.trim();
      const senha = document.getElementById("senha").value.trim();
      const termos = document.getElementById("termos").checked;

      if (!nome || !email || !senha) {
        alert("Por favor, preencha todos os campos.");
        return;
      }

      const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Digite um e-mail válido.");
        return;
      }

      if (senha.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres.");
        return;
      }

      if (!termos) {
        alert("Você precisa aceitar os termos e condições.");
        return;
      }

      alert(`Conta criada com sucesso! Bem-vindo(a), ${nome}!`);
      window.location.href = "dashboard.html";
    });

    // --- Sidebar: adicionar classe "active" no item selecionado ---
    document.querySelectorAll('.sidebar nav ul li').forEach(item => {
      item.addEventListener('click', () => {
        document.querySelectorAll('.sidebar nav ul li').forEach(li => li.classList.remove('active'));
        item.classList.add('active');
      });
    });
