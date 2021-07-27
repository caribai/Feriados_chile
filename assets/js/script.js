$(document).ready(function(){
    $.ajax({
        type:"GET",
        url:"https://www.feriadosapp.com/api/holidays.json",
        dataType:"json",
        success: function(data) {
            let texto
            data.data.forEach(function(s){

                texto += `<tr>
                            <td>${s.date}</td>
                            <td>${s.title}</td>
                            <td>${s.extra}</td>
                            <td>${s.law}</td>
                        </tr>`;
                $('tbody').html(`${texto}`)
            })
        }
    });    
});
