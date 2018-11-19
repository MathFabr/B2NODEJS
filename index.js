#!/usr/bin/env node

const program = require('commander')
const inquirer = require('inquirer')
const axios = require('axios')
const key = ''
nomPerso = {}


program
    .version('1.0.0')
    .option('-d, --description', "affiche la description du personnage par le nom saisie")
    .option('-s, --serie', "affiche les séries ou est apparues le personnage")


program.parse(process.argv);



if(program.description){

  inquirer.prompt([
      {
          type:'input',
          message:'Entrez le nom du personnage que vous cherchez: ',
          name:'Personnage'
      }
  ]).then(function(answers){
    nomPerso = answers.Personnage
  


  axios.get('https://gateway.marvel.com:443/v1/public/characters?name=' + nomPerso + '&ts=1&apikey=a7aa74c91a3259f8485842a78e45aff6&hash=28525af783ebf52aab9abd1ca42c12e6')
  .then(function (characters){
      let descr = {}
      descr = characters.data.data.results
      descr.forEach(elements => {
        console.log('Voici une courte description de ' + nomPerso + ':\n'+ elements.description)
      })
      
    })

    

    })

  
} else if (program.serie){

        inquier.prompt([
            {
                type: 'input',
                message: 'Entrez le nom du personnage dont vous cherchez les series: ',
                name:'personnage'
            }
        ]).then(function(answers){
            nomPers = answers.personnage
            console.log(nomPers)
        })

    } else {
        program.help()
}