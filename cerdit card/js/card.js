

       let _show2 = document.getElementById('show2')
       let _show4 = document.getElementById('show4')
       let _show3 = document.getElementById('show3')
       let _show = document.getElementById('show')


    document.getElementById('cardNumber').addEventListener('input', function (event) {
        let status = event.data
        console.log(event.data);
        let cardNumberVal = this.value


        if (status == null) {
            console.log('back');
            let temp = _show.innerHTML
            if(
                temp.length ==7 ||
                temp.length ==14 ||
                temp.length ==21 
            ){
                _show.innerHTML = temp.substring(0, (temp.length) - 4)

            }else{
                _show.innerHTML = temp.substring(0, (temp.length) - 1)
            }

        } else {
            console.log('another');
            if (
                cardNumberVal.length < 16
            ) {
                _write(cardNumberVal)
            } else if (
                cardNumberVal.length == 16
            ) {
                _write(cardNumberVal)
                document.getElementById('name').focus()
            } else {
                this.value = (this.value).substring(0, 16)
            }
        }



    })


    function _write(cardNumberVal) {
        let cardLastChar = cardNumberVal.substr(-1)
        if (
            cardNumberVal.length == 4 ||
            cardNumberVal.length == 8 ||
            cardNumberVal.length == 12
        ) {
            _show.innerHTML += cardLastChar + " - "
        } else {
            _show.innerHTML += cardLastChar
        }
    }


// *********input1*****************


document.getElementById('name').addEventListener('input', function (event) {
        let status = event.data
        console.log(event.data);
        let cardNumberVal = this.value


        if (status == null) {
            console.log('back');
            let temp = _show3.innerHTML
            {
                _show3.innerHTML = temp.substring(0, (temp.length) - 1)
            }

        } else {
            console.log('another');
            if (
                cardNumberVal.length < 18
            ) {
                _write1(cardNumberVal)
            } else if (
                cardNumberVal.length == 18
            ) {
                _write1(cardNumberVal)
                document.getElementById('tarikh').focus()
            } else {
                this.value = (this.value).substring(0, 16)
            }
        }



    })



    function _write1(cardNumberVal) {
        let cardLastChar = cardNumberVal.substr(-1)
        if (
            cardNumberVal.length < 18
        ) {
        _show3.innerHTML += cardLastChar
        }
    }

// ********************input3*************

    document.getElementById('tarikh').addEventListener('input', function (event) {
        let status = event.data
        console.log(event.data);
        let vali = this.value


        if (status == null) {
            console.log('back');
            let temp = _show4.innerHTML
            
                _show4.innerHTML = temp.substring(0, (temp.length) - 1)


        } else {
            console.log('another');
            if (
                vali.length < 4
            ) {
                _write2(vali)
            } else if (
                vali.length == 4
            ) {
                _write2(vali)
                document.getElementById('cvv2').focus()
            } else {
                this.value = (this.value).substring(0, 4)
            }
        }

    })
    function _write2(vali) {
        let cardLastChar = vali.substr(-1)
        if (
            vali.length == 2

        ){
            _show4.innerHTML += cardLastChar + " / "
        } else {
            _show4.innerHTML += cardLastChar
        }
    }

    // *************input4*****************

    document.getElementById('cvv2').addEventListener('input', function (event) {
        let status = event.data
        console.log(event.data);
        let val89 = this.value


        if (status == null) {
            console.log('back');
            let temp = _show2.innerHTML
          
                _show2.innerHTML = temp.substring(0, (temp.length) - 1)
            }

         else {
            console.log('another');
            if (
                val89.length < 4
            ) {
                _write4(val89)
            } else if (
                val89.length == 4
            ) {
                _write4(val89)
                // document.getElementById('name').focus()
            } else {
                this.value = (this.value).substring(0, 4)
            }
        }



    })




    function _write4(val89) {
        let cardLastChar = val89.substr(-1)
        if (
            val89.length <=4 
      
        ) {
          
            _show2.innerHTML += cardLastChar
        }
    }

