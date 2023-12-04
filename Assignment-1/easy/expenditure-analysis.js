/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let result = []
  
  if(transactions.length != 0){
    transactions.forEach(element => {
      let flag = false;
      let index = -1;

      // checking for the same food category
      for(let i=0;i<result.length;++i){
        if(result[i]["category"] === element["category"]){
          flag = true;
          index = i;
          break;
        }
      }

      // Inserting element in the result array
      if(flag){
        result[index]["totalSpent"] += element["price"];
      }else{
        result.push({category:element["category"],totalSpent:element["price"]})
      }

    });
  }

  return result;
}

module.exports = calculateTotalSpentByCategory;
