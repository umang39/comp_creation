function fun() {

    let height = document.querySelector('#h').value
    let width = document.querySelector('#w').value
    let bgColor = document.querySelector('#bg').value
    let textColor = document.querySelector('#text').value
    let radius = document.querySelector('#radius').value
    let title = document.querySelector('#title').value
    let bod = document.querySelector('#bod').value
    let card = document.querySelector('#card')
    console.log(title)
    console.log(card)
    card.innerHTML = `<center>
                            <h1>${title}</h1>
                            <p>${bod}</p>
                        </center>`
    document.documentElement.style.setProperty('--card-height', height + "em")
    document.documentElement.style.setProperty('--card-width', width + 'em')
    document.documentElement.style.setProperty(`--card-radius`, radius + 'px')
    document.documentElement.style.setProperty('--card-bg-color', bgColor)
    document.documentElement.style.setProperty('--card-text-color', textColor)

}