$(document).ready(function () {
    set_temp()
    show_comment()
});

function sign_up() {
    location.href = "signup.html";
}

function set_temp() {
    $.ajax({
        type: "GET",
        url: "http://spartacodingclub.shop/sparta_api/weather/seoul",
        data: {},
        success: function (response) {
            $('#temp').text(response['temp'])
        }
    })
}

function save_comment() {
    let name = $('#name').val()
    let cheer = $('#comment').val()
    $.ajax({
        type: 'POST',
        url: '/homework',
        data: {name_give:name, cheer_give:cheer},
        success: function (response) {
            alert(response['msg'])
            window.location.reload()
        }
    })
}

function show_comment() {
    $.ajax({
        type: "GET",
        url: "/homework",
        data: {},
        success: function (response) {
            let rows = response['fanlist']

            for (let i = 0; i < rows.length; i++) {
                let name = rows[i]['name']
                let cheer = rows[i]['cheer']

                let temp_html = `<div class="card">
                                    <div class="card-body">
                                        <blockquote class="blockquote mb-0">
                                            <p>${cheer}</p>
                                            <footer class="blockquote-footer">${name}</footer>
                                        </blockquote>
                                    </div>
                                </div>`
                $('#comment-list').append(temp_html)
            }
        }
    });
}

// let hw = document.getElementById('test_button');
// hw.addEventListener('click', function(){
//     alert('Hello world');
// })