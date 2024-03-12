document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        var data = document.querySelector('#data');
        var qtd = document.querySelector('#qtd');

        var dataHoje = new Date();
        var dataSelecionada = new Date(data.value);

        if (dataSelecionada.setHours(0,0,0,0) < dataHoje.setHours(0,0,0,0)) {
            alert('Por favor, selecione uma data válida.');
            return false;
        }

        if (qtd.value < 1 || qtd.value == '') {
            alert('Por favor, insira uma quantidade válida.');
            return false;
        }

        alert('Disponibilidade verificada com sucesso!');
        return true;
    });
});
