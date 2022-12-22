const USER = 'https://jsonplaceholder.typicode.com/users'

const createUserElement = (text)=>{
    const userElement = document.createElement('li')
    const userElementAnchor = document.createElement('a')
    userElementAnchor.href = '#'
    userElementAnchor.textContent = text
    userElement.append(userElementAnchor)
    return userElement
}
const hidden = ()=>{
  const hiddenHTML = document.querySelector('#loader')
  const isHidden = hiddenHTML.hasAttribute('hidden')
  if(isHidden){
    hiddenHTML.removeAttribute('hidden')
  } else {hiddenHTML.setAttribute('hidden', '')}
}

const dataContainer = document.querySelector('#data-container')

const getAllUser = ()=>{
  hidden ()
  const result = fetch(USER,{
    method:'GET'
  })
  console.log(result)
  result.then((response)=>{
    if(!response.ok){
      throw new Error('Ошибка запроса')
      }return response.json()
  })
  .then((user)=>{
    console.log('user', user);
    user.forEach(user => {
      const userHTML = createUserElement(user.name)
      dataContainer.append(userHTML)
    });
  })
  .catch((error)=>{
    console.log(error);
  })
  .finally(()=>{
    hidden ()
    console.log('Завершение кода');
  }) 
}

getAllUser()

