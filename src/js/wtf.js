export default function Wtf() {
    Resize()
    window.addEventListener('resize', () => {
        Resize()
    })
}

const Resize = () => {
    const block = document.querySelector('.right-block')
    const corner = document.querySelector('.corner')
    const list = block.querySelector('ul')

    const tg = corner.offsetHeight / corner.offsetWidth


    for (let i = 0; i < list.children.length; i++){

        const offset = corner.offsetWidth - ((corner.offsetHeight - (list.children[i].offsetTop + (list.children[0].clientHeight / 2))) / tg) + (list.children[0].clientHeight / 2 )
        console.log(offset)

        list.children[i].style.marginLeft = `-${offset}px`
    }
}