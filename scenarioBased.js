//You are developing a social media application where users can follow other users.Show how you will use your knowledge in data
// structures to store followers for each user.

    class Following {
        constructor(user) {
            this.user = user;
            this.follower = [];
        }
    
        addUser(follower) {
            if (this.follower.includes(follower)) {
                console.log(`${follower} already exists.`);
            } else {
                this.follower.push(follower);
                console.log(`${follower} was added as a follower.`);
            }
        }
    }


    const Mercy = new Following("Mercy")
    Mercy.addUser("Mercy")
    Mercy.addUser("Valary")
    console.log(Mercy)