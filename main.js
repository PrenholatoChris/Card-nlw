const user = {
    yourName: 'Julia Fardin',
    github: 'icarochiabai',
    instagram: 'juliafsz',
    youtube: 'juliagamer',
    facebook: 'julia.fardin.33',
    twitter: 'judinnsz',
    yourDescription: 'Uma moça linda e plena que está aprendendo    a viver e enchergando as dificuldades da vida',
    photo: 'https://pbs.twimg.com/profile_images/1433997222157377539/zvgjS9-Q_400x400.jpg'
}

function createCard(user) {
    //photo
    photo = document.getElementsByClassName("avatar")[0].children[1]
    photo.src = user.photo

    //Name
    userName.textContent = user.yourName  
    
    //href and @ of github
    userGithub.href = `https://www.github.com/${user.github}`
    git = userGithub.children[1]
    git.textContent = user.github
    //Description
    desc = document.getElementsByClassName("container")[0].children[3].textContent = user.yourDescription

    //Socials
    for (let li of socialLinks.children){
        social = li.getAttribute('class')
        li.children[0].href = `https://www.${social}.com/${user[social]}` 
    }        
} 

function getGithubProfileInfos(nickGithub) {
    let url = `https://api.github.com/users/${nickGithub}`
    fetch(url).then(response => response.json())
    .then(data => {
        const newUser = {
            yourName: data.name,
            github: data.login,
            instagram: null,
            youtube: null,
            facebook: null,
            twitter: data.twitter_username,
            yourDescription: data.bio,
            photo: data.avatar_url
        }
        createCard(newUser)
    })

}

console.log("Hello. If you want to create your cart it's very simple")
console.log('Just use the function "getGithubProfilesInfos("YourGithubUser")')