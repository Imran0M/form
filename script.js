var form_data = document.querySelector('#form')
form_data.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('clicked')
    // var user_data=document.querySelector('.table')
    // var conatiner=document.createElement('div')
    // var para=document.createElement('p')
    // var user_name=document.querySelector('[placeholder="Name"]')
    // var user_name=user_name.value
    // para.append(user_name)
    // conatiner.append(para)

    // var para=document.createElement('p')
    // var user_email=document.querySelector('[placeholder="Email"]')
    // var user_email=user_email.value
    // para.append(user_email)
    // conatiner.append(para)
    // var para=document.createElement('p')
    // var user_password=document.querySelector('[placeholder="Password"]')
    // var user_password=user_password.value
    // para.append(user_password)
    // conatiner.append(para)
    // var para=document.createElement('p')
    // var user_number=document.querySelector('[placeholder="Number"]')
    // var user_number=user_number.value
    // para.append(user_number)
    // conatiner.append(para)
    // user_data.append(conatiner)

    var parent=document.querySelector('.tab table')
    var row = document.createElement('tr')

   var arr_data=["Name","Email","Password","Number"]
   for (let i of arr_data){
    var fn_data= document.createElement('td')
    var name=document.querySelector(`[placeholder=${i}]`)
    fn_data.innerText = name.value
    row.append(fn_data)
   }
  
    parent.append(row)

    
    


    
    
})
