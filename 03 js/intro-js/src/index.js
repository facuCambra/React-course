const apiKey = 'yz7akbFZp7yCBzA7EasDe3iOcMqm0sE5';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
//es una promesa
/* 
peticion.then( resp => {
  resp.json().then( data => {   //es para poder ver el body de lo que viene en el api
      console.log(data);
  });
})
.catch(console.warn);
*/
//es lo mismo  (concateno promesas)
peticion
.then( resp => resp.json() )   //devuelve una promesa
.then ( ({data}) => {    //es el then de la promesa que s devuelve arriba
   // console.log(data.images.original.url);  //este es el url del gif

  const {url} = data.images.original;

  const img = document.createElement('img');
  img.src=url;

  document.body.append(img);

  })
.catch(console.warn); //atrapa todos