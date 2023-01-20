let tp = document.getElementById('rvg')
tp.addEventListener('mousedown', mdCor)
tp.addEventListener('mouseup', mdCor1)

function mdCor(){
    tp.style.background = '#f17144'
    tp.innerHTML ='Mata a alma e a envenena'
    }

function mdCor1(){
    tp.style.background = '#f4b036'
    tp.innerHTML = 'A vingança nuca é plena'
}