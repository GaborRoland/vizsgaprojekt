function ellenorzes()
{
    let felhasznalonev = document.getElementById("felhasznalonev").value;
    let pw =  document.getElementById("jelszo").value;

    fetch('http://localhost:3000/users', { 
            method: 'GET', 
            headers: { 
                'Content-Type': 'application/json', 
            }, 
            body: JSON.stringify({username, password}), 
        }) 
        .then(response => response.json()) 
        .then(data => { 
            alert(data.message); 
        }) 
        .catch((error) => { 
            console.error('Error:', error); 
        }); 
    
        if(felhasznalonev == data["name"] && pw == data["password"])
        {
            console.log("siker.")
        }
        else{
            console.log("?")
        }
    }; 

//Jelszó láthatósága




// Előre a regisztrációs fülhöz, sikerült utólag realizálni, hogy nem most kell ez nekem. 
// function kuldes(){
//     const felhasznalo = {
//         name : document.getElementById('felhasznalonev').value,
//         pw : document.getElementById("jelszo").value
//     }
//     add(felhasznalo);
// }

// function add(felhasznalo) {
//     fetch('http://localhost:3000/users', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(felhasznalo)
//       })
//         .then(response => response.json())
//         .then(data => {
//           console.log('Válasz:', data);
//         })
//         .catch(error => {
//           console.error('Hiba:', error);
//         });
      
// }