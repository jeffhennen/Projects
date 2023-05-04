/*

object-Oriented Programming

DVD Player
-------------------------

Height
Weight
Width
Color

Play
Fast Forward
Rewind
Pause

DVD
---------
Movie Length
Image
Size

*/

/*
    lesson: Classes and objects
*/

class Student {

    constructor(firstName, lastName, phoneNumber, grade){
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.grade = grade;
    }

    introduce(){

        console.log(`Welcome, this object's name is ${this.firstName} ${this.lastName}, and their phone number is: ${this.phoneNumber}`);
    }

}

let student1 = new Student('Tom', 'Sawyer', '952-442-2537', 'C');
let student2 = new Student('Jeffrey', 'Hennen', '952-555-4444', 'A');

student1.introduce();
student2.introduce();


/*
    Lesson: Inheritance
*/

class NotificationSender{

    constructor(status){
        
        this.status = status;
    }

    sendNotification(notification){
        
        console.log(`Sending: ${notification}`);
    }

    findUsersWithStatus(status){
        
        let users = getUsers(status);
        return users;
    }
}


class PromotionSender extends NotificationSender {

    constructor(status){

        super(status);
    }

    calulateDiscount(status){

        if(status === 'GOLD'){

            return .3;
        } else if (status === 'Silver'){
            
            return .15;
        }else{

            return 0;
        }
    }
}

class CollectionsSender extends NotificationSender{
    
    constructor(status){

        super(status);
    }

    calculateFee(status){

        if(status === "OVERDUE"){
            
            return .1;
        }else if (status === "DELIQUeNT"){

            return .05;
        }
    }

    sendNotification = function(notification){

        console.log(`Override test of send notification`);
    };
    

    
}

let collectionsSender = new CollectionsSender("OVERDUE");
collectionsSender.sendNotification('this is a test of the send notification for the collection sender');

/*

    Lesson: Handling Exceptions.

*/
try{
    
    test.push('hello');
}catch(err){
    console.log(err);
}

console.log('goodbye');


/*
    Menu App
*/

class Player{

    constructor(name, position){

        this.name = name;
        this.position = position;
    }

    describe(){

        return `${this.name} - ${this.position}`;
    }
}

class Team{

    constructor(name){

        this.name = name;
        this.players = [];
        
    }

    addPlayer(player){

        if(player instanceof Player){

            this.players.push(player);
        }else{
            
            throw new Error(`You can only add an instance of Player. Argument is not a player: ${player}`)
        }
    }

    describe(){

        return `${this.name} has ${this.players.length} players.`;
    }
}

class Menu {

    constructor(){

        this.teams = [];
        this.selectedTeam = null;
    }

    start(){

        let selection = this.showMainMenuOptions();
        while (selection != 0){

            switch (selection){

                case '1':
                    this.createTeam();
                    break;
                case '2':
                    this.viewTeam();
                    break;
                case '3':
                    this.deleteTeam();
                    break;
                case '4':
                    this.displayTeams();
                    break;
                default:
                    selection = 0;
            }
        
            selection = this.showMainMenuOptions();
        }

        alert('Goodbye!');
    }

    showMainMenuOptions(){
        return prompt(`
        0) exit
        1) create new team
        2) view team
        3) delete team
        4) display all teams
        `);
    }
    
    showTeamMenuOptions(teamInfo){

        return prompt(`
        -1) Return to Main
        0) Back
        1) Create player
        2) Delete player
        --------------------
        ${teamInfo}`);
    }

    displayTeams(){

        let listedTeams = '';
        for(let x = 0; x < this.teams.length; x++){

            listedTeams += `${x}) ${this.teams[x].name}\n`;
        }
        alert(listedTeams);
    }

    createTeam(){

        let name = prompt('Enter Team Name: ');
        this.teams.push(new Team(name));
    }

    viewTeam(){

        let selection;
        while(selection != -1){
            let index = prompt('Enter the index of the team you wish to view: ');

            if(index > -1 && index < this.teams.length){

                this.selectedTeam = this.teams[index];
                let description = `Team Name: ${this.selectedTeam.name}\n\n`;
                
                for(let x = 0; x < this.selectedTeam.players.length; x++){

                    description += `${x}) ${this.selectedTeam.players[x].name} - Position: ${this.selectedTeam.players[x].position}\n`;
                }


                selection = this.showTeamMenuOptions(description);
                switch (selection){

                    case '-1':
                        selection = -1;
                        this.selectedTeam = null;
                        break;
                    case '0':
                        selection = 0;
                        break;
                    case '1':
                        this.createPlayer();
                        break;
                    case '2':
                        this.deletePlayer();
                }
                

            }else{

                alert("Please select a proper index of a team that is in the teams array");
            }
        }
    }

    deleteTeam(){
        
        let index;
        while(index != -1){

            index = prompt('Enter the index of the team you wish to remove or press -1 to return to menu');
            if(index > -1 && index < this.teams.length){

                this.teams.splice(index, 1);
            }else if(index == -1){

                this.selectedTeam == null;
            }else{
                alert("Enter a proper index for selected team or press -1 to return to menu");
            }
        }
    }

    createPlayer(){

        let name = prompt(`Enter the name for the new player`);
        let position = prompt(`Enter the position for the player`);

        this.selectedTeam.players.push(new Player(name, position));
    }

    deletePlayer(){

        let index = prompt('Enter the index of the player you would like to remove from the team');
        if(index > -1 && index < this.selectedTeam.players.length){

            this.selectedTeam.players.splice(index, 1);
        }
    }
    
}

let menu = new Menu();
menu.start();