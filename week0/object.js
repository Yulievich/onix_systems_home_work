const invoice = {
    firstName: 'Node',
    lastName: 'Developer',
    createdAt: '2022-10-31T22:50:59.305Z',
    amount: 150,
    currency: 'USD',
};

/*
1) Log firstName and lastName in dot notation and bracket notation
*/
invoice.firstName = 'Vladislav'
invoice.lastName = 'Lisyuk'
console.log(`First name: ` + invoice.firstName);
console.log(`Last name: ` + invoice.lastName);

invoice['firstName'] = 'VLADISLAV'
invoice['lastName'] = 'LISYUK'
console.log(`First name: ` + invoice.firstName);
console.log(`Last name: ` + invoice.lastName);

/*
2) Log Object Keys
*/
console.log(Object.keys(invoice));
/*
3) Log Object values
*/
console.log(Object.values(invoice));
/*
4) Log Object entries
*/
console.log(Object.entries(invoice))
/*
5) Create second variable invoce from original
Please, use more than one solution
*/
const copiedInvoice = Object.assign({}, invoice)
const copiedInvoice2 = JSON.parse(JSON.stringify(invoice));
console.log(copiedInvoice)
console.log(copiedInvoice2)
/*
6) Modify copiedInvoice amount value
Important: original invoice amount shouldnt be modified
*/

copiedInvoice.amount = 5000
console.log(copiedInvoice.amount)
console.log(invoice.amount)

/*
7) Loop through object and log key-values
*/
for (const [key, value] of Object.entries(invoice)) {
    console.log(`${key}: ${value}`)}
