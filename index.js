// Your code here
const speed = 5;
const dodger = document.getElementById('dodger');
dodger.style.backgroundColor = '#32FA01';
dodger.style.bottom = '20px';
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft')
        moveDodgerLeft();
    else if (e.key === 'ArrowRight')
        moveDodgerRight();
})
function moveDodgerLeft()
{
    let m = parseInt(dodger.style.left.replace("px", ""))
    console.log(m);
    m -= speed;
    dodger.style.left = m+"px";
}

function moveDodgerRight()
{
    let m = parseInt(dodger.style.left.replace("px", ""));
    console.log(m)
    m += speed;
    console.log(m+"px");
    dodger.style.left = m+"px";
}