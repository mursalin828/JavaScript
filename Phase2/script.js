async function getRandomUser() {
    console.log("fetching data... plrase wait.");

    let response = await fetch("https://randomuser.me/api/");

    let data = await response.json();

    let user = data.results[0];

    let fname = user.name.first + " " + user.name.last;

    let email = user.email;

    console.log("user name: " + fname);

    console.log('user email: ' + email);
}

getRandomUser();