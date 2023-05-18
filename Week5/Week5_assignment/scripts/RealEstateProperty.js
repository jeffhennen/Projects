class RealEstateProperty{

    constructor(){

        this.address = this.setAddress();
        this.expenses = [];
        this.incomes = [];
        this.totalIncome = 0;
        this.totalExpense = 0;
        this.cashFlow = 0;
        this.menuOptions = [];
        this.generateMenuOptions();
        
    }

    

    setAddress(){

        return prompt("Enter an address for the property");
    }

    getAddress(){

        return this.address;
    }
    
    getCashflow(){

        return this.cashFlow;
    }

    addExpense(){

        let description = prompt("What is the description of the expense");
        let cost = Number(prompt("What is the cost of this expense"));

        this.expenses.push(new Expense(description, cost));
        this.cashFlow -= cost;
    }

    removeExpense(){

        let removeExpenseOptions = [];
        removeExpenseOptions.push("Enter the income you want to remove");
        removeExpenseOptions.push("Enter 0 to go to previous menu");

        for(let x = 0; x < this.expenses.length; x++){

            removeExpenseOptions.push(`${x + 1}) Description: ${this.expenses[x].getName()}, Amount: ${this.expenses[x].getMonthlyExpense()}`);
        }

        while(true){
            
            let selection = Number(inputOptions(removeExpenseOptions));
            if(selection == 0){
             
                break;
            }else{

                selection--;
                this.cashFlow += this.expenses[selection].monthlyExpense;
                this.expenses.splice(selection, 1);
                break;
            }
        } 

    }

    addIncome(){

        let description = prompt("What is the description of the income");
        let income = Number(prompt("How much does this income provide in money"));

        this.incomes.push(new Income(description, income));
        this.cashFlow += income;
    }

    removeIncome(){
        
        let removeIncomeOptions = [];
        removeIncomeOptions.push("Enter the income you want to remove");
        removeIncomeOptions.push("Enter 0 to go to previous menu");

        for(let x = 0; x < this.incomes.length; x++){

            removeIncomeOptions.push(`${x + 1}) Description: ${this.incomes[x].getName()}, Amount: ${this.incomes[x].getMonthlyIncome()}`);
        }

        while(true){
            
            let selection = Number(inputOptions(removeIncomeOptions));
            if(selection == 0){
             
                break;
            }else{

                selection--;
                this.cashFlow -= this.incomes[selection].monthlyIncome;
                this.incomes.splice(selection, 1);
                break;
            }
        }  

    }

    displayAsset(){

        return `address: ${this.getAddress()}, the cashflow of this asset is: ${this.getCashflow()}`
    }

    assetMenu(){

        let selection;
        while(true){

            selection = inputOptions(this.menuOptions);

            if(selection == 0){

                break;
            }else{

                this.assetMenuSelection(selection);
            }
        }
    }
    
    generateMenuOptions(){
        
        this.menuOptions.push("Press the number for which menu you want to move to: ");
        this.menuOptions.push(`0) To go back to previous menu`);
        this.menuOptions.push(`1) Add Income`);
        this.menuOptions.push(`2) Remove Income`);
        this.menuOptions.push(`3) Add Expense`);
        this.menuOptions.push(`4) remove Expense`);
    }

    assetMenuSelection(selection){

        switch(selection){

            case '1':
                this.addIncome();
                break;
            case '2':
                this.removeIncome();
                break;
            case '3':
                this.addExpense();
                break;
            case '4':
                this.removeExpense();
                break;
        }
    }
}

export 