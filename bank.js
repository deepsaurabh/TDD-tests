// adding funtion bankaccount to global so that it can be accesed any where
exports.bankaccount = function(name){

this.account_holder_name= name;
this.balance=0;
this.setBalance = function(value){ if(value<0){return("balance cannot be negative")} else {this.balance=value;}}
this.getBalance = function(){ return(this.balance);}
this.withDraw = function(value){ if(this.balance< value) {return("insufficient fund")} else {this.balance -= value;  return (this.balance)}  }
this.deposit = function(value){if(value<0){return("irrelevant value")} else {this.balance += value; return this.balance;}}

};












