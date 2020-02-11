/**
 * https://www.codewars.com/kata/57b06f90e298a7b53d000a86/train/javascript
 * V1
 * @param {number[]} customers
 * @param {*} n checkout tills
 */
function queueTime(customers, n) {
  let customersInCT = [],
    time = 0;

  //Fill CTs. Extra check, in case there are more CTs than customers in queue
  for (let i = 0; i < n && customers.length; i++)
    customersInCT.push(customers.shift());

  while (customersInCT.length) {
    //timeRuns, customer leaves when done
    customersInCT = customersInCT.map(c => c - 1).filter(c => c !== 0);
    time++;

    //while checkout tills are available, next customers in queue will proceed
    while (customersInCT.length < n && customers.length)
      customersInCT.push(customers.shift());
  }

  return time;
}

/**
 * V2: much more concise
 * @param {number[]} customers
 * @param {*} n checkout tills
 */
function queueTime(customers, n) {
  let customersInCT = [],
    time = 0;

  //Fill CTs. Extra check, in case there are more CTs than customers in queue
  for (let i = 0; i < n && customers.length; i++)
    customersInCT.push(customers.shift());

  while (customersInCT.length) {
    customersInCT = customersInCT
      .map(c => (c - 1 ? c - 1 : customers.length ? customers.shift() : 0)) //when a customer finishes, next one will proceed
      .filter(c => c); //cashier was pretty and fast, last customer leaves with a picaresque smile
    time++;
  }

  return time;
}

/**
 * V3: optimal
 * @param {number[]} customers
 * @param {*} n checkout tills
 */
function queueTime(customers, n) {
  let tills = Array(n).fill(0); //create empty tills

  for (const time of customers)
    tills[tills.indexOf(Math.min(...tills))] += time; //Next customer will move to the next free till, the one that will take less time to be available

  return tills[tills.indexOf(Math.max(...tills))]; //Total time will be given by the till which has been used longer
}
