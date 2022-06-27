function getTabelaBrasileirao() {
    var url = 'https://api.api-futebol.com.br/v1/campeonatos/10/tabela'
    var dataSet = []
    $.ajax({
        url: url,
        type: "GET",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Bearer test_ccf7b9b6700ed63a9150a61f78cacd"
        },
        success: function(response) {
            $.each(response, function(key, value) {
                dataSet.push([
                    value.posicao,
                    value.time.nome_popular,
                    value.pontos,
                    value.jogos,
                    value.vitorias,
                    value.empates,
                    value.derrotas,
                    value.gols_pro,
                    value.gols_contra,
                    value.saldo_gols,
                    value.aproveitamento + "%"
                ])
            })
            $("#display").DataTable({
                data: dataSet,
                responsive: true,
                "pageLength": 20,
                "bInfo": false,
                searching: false,
                paging: false,
                searchPanes: {
                    controls: false
                },
                columnDefs: [
                    { orderable: false, }
                ],
                columns: [
                    { title: '' },
                    { title: 'Time' },
                    { title: 'P' },
                    { title: 'J' },
                    { title: 'V' },
                    { title: 'E' },
                    { title: 'D' },
                    { title: 'GP' },
                    { title: 'GC' },
                    { title: 'SG' },
                    { title: '%' },
                ]
            });
        }
    })
}

$(document).ready(function() {
    getTabelaBrasileirao()
});