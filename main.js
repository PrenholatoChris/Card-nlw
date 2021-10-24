var urlObject = new URL(document.location.href)
var params = urlObject.searchParams


var github = params.get("github")
if (github){
    var facebook = params.get("facebook")
    var youtube = params.get("youtube")
    var instagram = params.get("instagram")
    createUser(facebook,youtube,instagram,github)
}

function createUser(facebook,youtube,instagram,github){
    const user = {
        facebook:facebook,
        youtube:youtube,
        github:github,
        instagram:instagram
    }
    getGithubProfileInfos(user);
}

function getGithubProfileInfos(user) {
    let url = `https://api.github.com/users/${user.github}`
    
    fetch(url).then(response => response.json())
    .then(data => {
        user = {
            yourName: data.name,           
            twitter: data.twitter_username,
            yourDescription: data.bio,
            photo: data.avatar_url,
            facebook:facebook,
            youtube:youtube,
            github:github,
            instagram:instagram
        }
        createCard(user)
    })

}

function createCard(user) {
    console.log(user)
    photo = document.getElementsByClassName("avatar")[0].children[1]
    photo.src = user.photo

    //Name
    userName.textContent = user.yourName  
    
    //href and @ of github
    userGithub.href = `https://www.github.com/${user.github}`
    userGithub.children[1].textContent = user.github

    //Description
    userDescription.textContent = user.yourDescription
    
    //Socials
    for (let li of socialLinks.children){
        social = li.getAttribute('class')
        li.children[0].href = `https://www.${social}.com/${user[social]}` 
    }        
} 


console.log("Hello. If you want to create your cart it's very simple Just Click 'Create Card' in the header of the site")
