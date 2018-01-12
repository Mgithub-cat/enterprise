window.onload = function () {
    let pic = document.querySelectorAll('.pic');
    let ban = document.querySelector('.banner');
    let turn = document.getElementsByClassName('turn');
    let now = 0;
    let t = setInterval(move, 3000);

    function move(type) {
        type = type || 'next';
        if (type == 'next') {
            now++;
            if (now == pic.length) {
                now = 0;
            }
            pic.forEach(function (e, index) {
                turn[index].style.backgroundColor = 'rgba(200,200,210,0.3)';
                e.style.opacity = 0;
            })
            pic[now].style.opacity = 1;
            turn[now].style.backgroundColor = '#fff';
        } else if (type == 'pre') {
            now--;
            if (now == -1) {
                now = pic.length - 1;
            }
            pic.forEach(function (e, index) {
                turn[index].style.backgroundColor = 'rgba(200,200,210,0.3)';
                e.style.opacity = 0;
            })
            pic[now].style.opacity = 1;
            turn[now].style.backgroundColor = '#fff';
        }
    }

    ban.onmouseover = function () {
        clearInterval(t);
    }
    ban.onmouseout = function () {
        t = setInterval(move, 3000);
    }
    for (let i = 0; i < turn.length; i++) {
        turn[i].onmouseover = function () {
            pic[i].style.opacity = 1;
            pic[now].style.opacity = 0;
            turn[i].style.backgroundColor = '#fff';
            turn[now].style.backgroundColor = 'rgba(200,200,210,0.3)';
            now = i;
        }
    }
}