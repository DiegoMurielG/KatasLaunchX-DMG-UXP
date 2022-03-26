const fetchPokemon = () => {/* FunciOn Fetch Pokemon */ 
    const pokeName = document.getElementById( "pokeName" );//Nombre Pokemon
    let pokeInput = pokeName.value.trim().toLowerCase(); /* Loque tiene adentro el input */
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        //console.log(res);
        if(res.status != "200"){
            console.log(res);
            pokeNameAndIDisplay( "# ", " - Not Found -" );
            pokeTypeDisplay( " - ! -" );
            pokeImage("./imagenes/pokemonPregunta.png");
            pokeStatsDisplay( "-!-", "-!-", "-!-", "-!-", "-!-", "-!-" );
            pokeSkillsDisplay( "-!-", "-!-" );
            pokeHeightDisplay( " - ! -" );
            pokeWeightDisplay( " - ! -" );
        }else{
            return res.json();/* La respuesta que recibimos*/
        }
    }).then((data) => {
        console.log(data);

        let pokeId = data.id;
        let pokeName = data.name;
        //console.log("Nombre Pokemon: " + pokeName);
        let pokeType = data.types[0].type.name;

        let pokeImg = data.sprites.front_default;/* Objeto pokeImg que toma el sprites del objeto data */

        let pokeSalud = data.stats[0].base_stat;//Salud del Pokemon
        let pokeAttack = data.stats[1].base_stat;//Daño de ataque del Pokemon
        let pokeDefense = data.stats[2].base_stat;//Defensa del Pokemon
        let pokeSkillAttk = data.stats[3].base_stat;//Habilidad de ataque especial del Pokemon
        let pokeSkillDef = data.stats[4].base_stat;//Habilidad de defensa especial del Pokemon
        let pokeSpeed = data.stats[5].base_stat;//Velocidad del Pokemon

        /*let pokeSkill1 = data.abilities[0].ability.name;
        let pokeSkill2 = data.abilities[1].ability.name;*/
        let pokeSillLength = data.abilities.length;
        console.log( "Cantidad de Abilidades: " + pokeSillLength );
        let i = 0;
        let pokeSkills = "";
        
        for( i=0; i< pokeSillLength; i++){// Construimos la cadena de nombre de habilidades del Pokemon
            if( i == 0){
                pokeSkills = pokeSkills + data.abilities[i].ability.name;
            }else{
                pokeSkills = pokeSkills + ", " + data.abilities[i].ability.name;
            }
            
        }

        let pokeHeight = data.height;
        let pokeWeight = data.weight;

        console.log(pokeImg);
        console.log( "HP: " + pokeSalud );
        console.log( "AP: " + pokeAttack );
        console.log( "DP: " + pokeDefense );
        console.log( "Attack Skill Points: " + pokeSkillAttk );
        console.log( "Defence Skill Points: " + pokeSkillDef );
        console.log( "Speed: " + pokeSpeed );

        pokeNameAndIDisplay( pokeId, pokeName );
        pokeTypeDisplay( pokeType );
        pokeImage( pokeImg );
        pokeStatsDisplay( pokeSalud, pokeAttack, pokeDefense, pokeSkillAttk, pokeSkillDef, pokeSpeed );
        pokeSkillsDisplay( pokeSkills );
        //pokeSkillsDisplay( pokeSkill1, pokeSkill2 );
        pokeHeightDisplay( pokeHeight );
        pokeWeightDisplay( pokeWeight );
    })/* Toma la informacion del servidor en este link */
}

//fetchPokemon();

//pokeImage( "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" );

function pokeNameAndIDisplay( id, namePokemon ){
    let pokeName = document.getElementById( "pokeNameTitle" );
    pokeName.innerHTML = "#" + id + " "+ namePokemon.trim().replace(/^\w/, (c) => c.toUpperCase()); 
}

function pokeTypeDisplay( type ){
    let pokeType = document.getElementById( "pokeType" );
    pokeType.innerHTML = type.trim().replace(/^\w/, (c) => c.toUpperCase());
}

function pokeImage( url ){
    let pokeImg = document.getElementById( "pokeImg" );
    pokeImg.src = url;/* Cambiamos el valor de nuestro src del img en el HTML */
}

function pokeStatsDisplay( hp, ap, dp, asp, dsp, speed ){
    let pokeSalud = document.getElementById( "hp" );
    pokeSalud.innerHTML = hp + " HP" ;//Cambiamos el valor del p par que muestre la salud del pokemon

    let pokeAttack = document.getElementById( "ap" );
    pokeAttack.innerHTML = ap + " AP";

    let pokeDefense = document.getElementById( "dp" );
    pokeDefense.innerHTML = dp + " DP";

    let pokeSkillAttk = document.getElementById( "asp" );
    pokeSkillAttk.innerHTML = asp + "  ASP";

    let pokeSkillDef = document.getElementById( "dsp" );
    pokeSkillDef.innerHTML = dsp + "  DSP";

    let pokeSpeed = document.getElementById( "speed" );
    pokeSpeed.innerHTML = speed + "  Speed";
}

/*function pokeSkillsDisplay( skill1, skill2 ){
    let pokeSkill1 = document.getElementById( "skill1" );
    pokeSkill1.innerHTML = skill1;

    let pokeSkill2 = document.getElementById( "skill2" );
    pokeSkill2.innerHTML = skill2;
}*/

function pokeSkillsDisplay( skillsNames ){
    let pokeSkill = document.getElementById( "pokeSkill" );
    pokeSkill.innerHTML = skillsNames;
    /*console.log( skillName + ", " );*/
}

function pokeHeightDisplay( height ){
    let pokeHeight = document.getElementById( "height" );
    pokeHeight.innerHTML = height + " Units";
    /*console.log( "Altura: " + height );*/
}

function pokeWeightDisplay( weight ){
    let pokeHeight = document.getElementById( "weight" );
    pokeHeight.innerHTML = weight + " Units";
    /*console.log( "Peso: " + weight );*/
}

/*function imprimir(  ){
    const pokeName = document.getElementById( "pokeName" );
    let pokeInput = pokeName.value; // Loque tiene adentro el input 
    //console.log("Hola " + pokeInput);
}*/