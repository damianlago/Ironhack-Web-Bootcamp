// const charactersAPI = new APIHandler('https://minions-api.herokuapp.com');
const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI
      .getFullList()
      .then(result => {
        let text = ''
        result.data.forEach(elm => {


          text += `
           <div  class="character-info">
           <div class="name">Character Name: ${elm.name} </div>
           <div class="occupation">Character Occupation: ${elm.occupation}</div>
           <div class="cartoon">Is a Cartoon: ${elm.cartoon}</div>
           <div class="weapon">Character Weapon ${elm.weapon}</div>
           </div>
           `

        })
        document.querySelector('#all').innerHTML = text
      })
      .catch(err => console.log(err))
  });
});

document.getElementById('fetch-one').addEventListener('click', function (event) {
  charactersAPI
    .getOneRegister(characterId)
    .then((result) => {

      const inputs = document.querySelectorAll('#edit-character-form input')
      if (result.data === null)
        inputs[0].value = 'Character not found'
      else {
        inputs[0].value = result.data.id
        inputs[1].value = result.data.name
        inputs[2].value = result.data.occupation
        inputs[3].value = result.data.weapon

      }
      let text = ''
      if (!result.data)
        text = `User not found`
      else {
        text += `
         <div  class="character-info">
         <div class="name">Character Name: ${result.data.name} </div>
         <div class="occupation">Character Occupation: ${result.data.occupation}</div>
         <div class="cartoon">Is a Cartoon: ${result.data.cartoon}</div>
         <div class="weapon">Character Weapon ${result.data.weapon}</div>
         </div>
         `
      }
      document.querySelector('#all').innerHTML = text
    })
    .catch(err => console.log(err))
});

document.getElementById('delete-one').addEventListener('click', function (event) {
  const characterId = document.getElementsByName("character-id-delete")[0].value
  charactersAPI
    .deleteOneRegister(characterId)
    .then((result) => {
      if (result)
        document.getElementById('delete-one').style.backgroundColor = 'green'
    })
    .catch(() => document.getElementById('delete-one').style.backgroundColor = 'red')
});

document.getElementById('edit-character-form').addEventListener('submit', function (event) {

});

document.getElementById('new-character-form').addEventListener('submit', function (event) {

});