Money in the Bank.

## Project Description

Money in the bank is a monthly expense and savings tracker built in React using Airtable for database connections. The app consists of three fields of data: monthly expenses (bills, miscellanous spending, and stocks). A starting budget of $10,000 will be presented for each month. The web page will allow users to add to monthly expenses and see if how much they saved from the previous months.


## Wireframes
https://wireframe.cc/uFrOh1 (Desktop)

https://wireframe.cc/lc7hyc (Mobile)

https://wireframe.cc/CaoRt1 (Tablet)


## React Component Hiearchy
```
|- App
| --- Title
| --- Links
| --- Current balance
| --- Monthly 
	| --- Balance/expenses	
	| --- Categories
		| --- Bills
		| --- Miscellanious
| --- Comparison

```





## API
Airtable is returning the data for the base as follows:

    "records": [
        {
            "id": "rec5wjCGjveXFnQFI",
            "fields": {
                "dueDate": "13th of every month",
                "bills": "Phone",
                "amount": "$95"
            },
            "createdTime": "2020-09-03T13:33:30.000Z"
	    
        },
	

### MVP/PostMVP


#### MVP 
- Display changes in budget/expenses
- Allow users to add more transactions
- Allow users to view comparisons in monthly spending/balances.
- Implement media queries for mobile, tablet, and desktops


#### PostMVP  

- Add graphs
- Memes for saving money.
- Add links to display useful budgeting methods.




#### SWOT Analysis

So far I am actually understanding React but I will defintley need to review more. Class components are tricky and most of the time confuse me. However, this project will allow more practice with class components and will strengthen my skillset.




 
