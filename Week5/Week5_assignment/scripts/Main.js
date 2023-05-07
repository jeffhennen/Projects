//Takes the menulist array and then populates into a concat string to then ask for input with prompt
//Then Verifies that the input is within the range of the list that was provided.
//This has a expected header which has no selected so the values would be 0 - (array length -2)
function inputOptions(menuList){

    let menu = '';
    for (let x = 0; x < menuList.length; x++){
        menu += menuList[x] + '\n';
    }

    let selection = -1;
    while(true){

        selection = prompt(menu);
        if(selection >= 0 && selection < menuList.length -1){

            return selection;
        }else{

            alert('Please enter a valid selection');
        }
    }
}



class Menu{

    constructor(){

        this.portfolios = []
        this.menuOptions = [];
        this.generateMenuOptions();

    }

    start(){

        let selection;
        while(true){

            selection = inputOptions(this.menuOptions);
            
            if(selection == 0){
                alert("Thank you for using the investment manager"); 
                break;
            }else{
                this.primaryMenuSelect(selection);
            }
        }
    }

    primaryMenuSelect(selection){

        switch(selection){

            case '1':
                this.addPortfolio();
                break;
            case '2':
                this.removePortfolio();
                break;
            case '3':
                this.updatePortfolio();
                break;
            case '4':
                this.displayPortfolio();
                break;          
        }
    }

    generateMenuOptions(){

        this.menuOptions.push(`Press the number for which menu you want to move to: `);
        this.menuOptions.push(`0) Exit`);
        this.menuOptions.push(`1) Generate Portfolio`);
        //Will only remove portfolio if there are no assets within it.
        this.menuOptions.push(`2) Remove Portfolio`);
        this.menuOptions.push(`3) Update Portfolio`);
        this.menuOptions.push(`4) Display Portfolio`);
    }

    addPortfolio(){

        let name = prompt(`Enter the name of the new portfolio`);
        this.portfolios.push(new Portfolio(name))
    }


    removePortfolio(){

        let removePortfolioOptions = this.generateRemovePortfolioOptions();

        while(true){
            
            let selection = inputOptions(removePortfolioOptions);
            
            if(selection == 0){

                break;
            }else{

                if(this.portfolios[selection-1].assets.length == 0){

                    this.portfolios.splice(selection-1, 1);
                    break;
                }else{

                    alert(`The portfolio: ${this.portfolios[selection-1].name} needs to be empty before removal`);
                }
            }
        } 
    }

    generateRemovePortfolioOptions(){
        
        let removePortfolioOptions = [];
        removePortfolioOptions.push("Enter the portfolio you want to remove");
        removePortfolioOptions.push("Enter 0 to go to previous menu");

        removePortfolioOptions = this.portfolioNamesToArray(removePortfolioOptions);

        return removePortfolioOptions;
    }

    portfolioNamesToArray(removePortfolioOptions){

        for(let x = 0; x < this.portfolios.length; x++){

            removePortfolioOptions.push(`${x+1}) ${this.portfolios[x].name}`);
        }

        return removePortfolioOptions;
    }

    updatePortfolio(){

        let updatePortfolioOptions = [];
        updatePortfolioOptions.push("Enter the portfolio you want to remove");
        updatePortfolioOptions.push("Enter 0 to go to previous menu");

        updatePortfolioOptions = this.portfolioNamesToArray(updatePortfolioOptions);

        while(true){
            
            let selection = inputOptions(updatePortfolioOptions);
            if(selection == 0){
             
                break;
            }else{

                this.portfolios[selection-1].portfolioMenu();
            }
        }
    }

    displayPortfolio(){

        let output = '';
        output += `This is the list of Portfolios \n`
        for(let x = 0; x < this.portfolios.length; x++){

            output += `${x}) Portfolio name: ${this.portfolios[x].getName()}, the asset class: ${this.portfolios[x].getAssetClass().getAssetClass().getName()} \n`
        }

        alert(output);
    }

}


class Portfolio{

    constructor(name){

        this.name = '';
        this.setName(name);
        this.assetClass = new AssetClass();
        this.assets = [];
        this.totalSizeOfPortfolio;
        this.menuOptions = [];
        this.generateMenuOptions();
    }

    addAsset(){

        this.assets.push(this.assetClass.getAssetClass().addAsset());
    }

    //Need to add the selection menu
    removeAsset(){

        let removeAssetOptions = [];
        removeAssetOptions.push("Enter the asset you want to remove");
        removeAssetOptions.push("Enter 0 to go to previous menu");

        removeAssetOptions = this.assetClass.getAssetClass().assetToArray(this.assets, removeAssetOptions);

        while(true){
            
            let selection = Number(inputOptions(removeAssetOptions));
            if(selection == 0){
             
                break;
            }else{

                selection--;
                this.assets.splice(selection, 1);
                break;
            }
        }  
    }

    updateAsset(){

        let updateAssetOptions = [];
        updateAssetOptions.push("Enter the asset you want to update");
        updateAssetOptions.push("Enter 0 to go to previous menu");
        
        updateAssetOptions = this.assetClass.getAssetClass().assetToArray(this.assets, updateAssetOptions);

        while(true){
            
            let selection = inputOptions(updateAssetOptions);
            if(selection == 0){
             
                break;
            }else{

                this.assets[selection-1].assetMenu();
            }
        }
    }

    displayAssets(){

        let output = [];
        output.push(`This is the list of assets \n`);
        for(let x = 0; x < this.assets.length; x++){

            output += `${x + 1}) Asset ${this.assets[x].displayAsset()} \n`
        }

        alert(output);
    }

    portfolioMenu(){

        let selection;
        while(true){

            selection = inputOptions(this.menuOptions);

            if(selection == 0){

                break;
            }else{

                this.portfolioMenuSelect(selection);
            }
        }
    }

    portfolioMenuSelect(selection){

        switch(selection){

            case '1':
                this.addAsset();
                break;
            case '2':
                this.removeAsset();
                break;
            case '3':
                this.updateAsset();
                break;
            case '4':
                this.displayAssets();
                break;
        }
    }

    generateMenuOptions(){

        this.menuOptions.push("Press the number for which menu you want to move to: ");
        this.menuOptions.push(`0) To go back to previous menu`);
        this.menuOptions.push(`1) Add Asset`);
        this.menuOptions.push(`2) Remove Asset`);
        this.menuOptions.push(`3) Update Asset`);
        this.menuOptions.push(`4) Display Assets`);
    }

    setName(name){

        this.name = name;
    }

    getName(){

        return this.name;
    }

    getAssetClass(){

        return this.assetClass;
    }

    getAssets(){

        return this.assets;
    }

    getTotalSizeOfPortfolio(){

        return this.totalSizeOfPortfolio;
    }


    
}

class AssetClass{

    constructor(){

        //This will be holding the corresponding assetClass Object that will house its specified functionality.
        this.assetClass = this.assetClassCheck();
    }

    assetClassCheck(){

        let options = `Enter the asset class you would like to use
        0) real Estate`;
        let selection = -1;
        while(true){

            selection = prompt(options);
            
            if(selection !== '0'){

                alert("Enter a valid selection");
                continue;
            }
    
            switch(selection){
    
                case '0':
                    return new RealEstate();
            }
        }
    }

    getAssetClass(){

        return this.assetClass;
    }

    

}

class RealEstate{

    constructor(){

        this.name = "Real Estate";
    }

    getName(){

        return this.name;
    }

    addAsset(){

        return new RealEstateProperty();
    }

    assetToArray(listOfPortfolioAssets, updateAssetOptions){

        for(let x = 0; x < listOfPortfolioAssets.length; x++){

            updateAssetOptions.push(`${x + 1}) Address: ${listOfPortfolioAssets[x].getAddress()}`);
        }

        return updateAssetOptions;
    }


    displayIncomeExpenses(){


    }

}

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

class Expense{

    constructor(name, expense){

        this.name = name;
        this.monthlyExpense = expense;
    }

    setMonthlyExpense(expense){

        this.expense = expense;
    }

    getMonthlyExpense(){

        return this.monthlyExpense;
    }

    setName(name){

        this.name = name;
    }

    getName(){

        return this.name;
    }





}

class Mortgage extends Expense{

    constructor(purchasePrice, interestRate, downPayment, loanTerm, monthlyExpense){

        super();
        this.purchasePrice = purchasePrice;
        this.interestRate = interestRate;
        this.downPayment = downPayment;
        this.principle = purchasePrice - downPayment;
        this.loanTerm = loanTerm;
        super.updateTotalExpense(monthlyExpense);
    }

    setPurchasePrice(price){

        this.purchasePrice = price;
    }

    getPurchasePrice(){

        return this.purchasePrice;
    }

    setInterestRate(rate){

        this.interestRate = rate;
    }

    getInterestRate(){

        return this.interestRate;
    }

    setDownPayment(amount){

        this.downPayment = amount;
    }

    getDownPayment(){

        return this.downPayment;
    }

    setLoanTerm(term){

        this.loanTerm = term;
    }

    getLoanTerm(){

        return this.loanTerm; 
    }

    setPrinciple(amount){

        this.principle = amount;
    }

    getPrinciple(){

        return this.principle;
    }

    makePayment(){

    }

    finance(){

    }
}



class Income{

    constructor(name, income){
        
        this.name = name;
        this.monthlyIncome = income;
    }

    setMonthlyIncome(income){

        this.monthlyIncome = income;
    }

    getMonthlyIncome(){

        return this.monthlyIncome;
    }

    setName(name){

        this.name = name;
    }

    getName(){

        return this.name;
    }
}

let menu = new Menu();
menu.start();