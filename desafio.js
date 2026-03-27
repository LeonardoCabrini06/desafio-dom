        const array = []

        function enviar() {
            const input = document.querySelector("#idinput")
            const texto = document.querySelector("#idparag")
            const valor = input.value

            if (valor !== '') {
                array.push(valor)

                texto.innerHTML = valor + "<br>" + texto.innerHTML

                console.log(array)
            }

            input.value = ''
        }

        function volta() {
            const input = document.querySelector("#idinput")
            const texto = document.querySelector("#idparag")

            if (array.length > 0) {
                const ultimo = array.pop()
                input.value = ultimo

                texto.innerHTML = ""

                for (let i = array.length - 1; i >= 0; i--) {
                    texto.innerHTML += array[i] + "<br>"
                }
                console.log(array)
            }
        }