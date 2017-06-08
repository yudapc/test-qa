QA TEST - INSTRUCTION
===================

Please create app that will be test this app using MochaJS. Please make sure that you have installed NodeJS `http://nodejs.org` on your system.

HOW TO
-------------------

Run `npm install` to install needed package to this app

You can add package as you like (include mochajs)

Create your test that hit this API's app

Add your script to `package json` so you can run it with ` npm test `

API 
-------------------

`GET /`

Get all records data.

`GET /:id`

Get data by `:id`

`POST /`

Post a new data 

Test Cases
-------------------

Please fulfill test cases below.

> **Test Case A**

> - Use the `GET /`
> - Make sure that the length of data is `2`
> - Make sure that list of data contains `id`, `fullname`, `age` and `email`

> **Test Case B**

> - Use the `GET /0`
> - Make sure that the data is `exist`
> - Make sure that the data contains `id`, `fullname`, `age` and `email`
> - Make sure that the data `age` is more than `28`

> **Test Case C**

> - Use the `GET /1`
> - Make sure that the data is `exist`
> - Make sure that the data contains `id`, `fullname`, `age` and `email`
> - Make sure that the data `age` is `20`
> - Make sure that the data has `@xxxx.com` in the `email` field.

> **Test Case D**

> - Use the `POST /`
> - Make sure that the data that you posted is return in JSON format
> - Make sure that the data contains `id`, `fullname`, `age` and `email`
> - Make sure that the data `fullname` is have a same value with what you've posted.
> - Make sure that the data `age` is have a same value with what you've posted.
> - Make sure that the data `email` is have a same value with what you've posted.

**Please make sure npm test can be run twice and success**

----------

Author
---------

[Faris](faris@amartha.com)

[Egon Firman](egon.firman@amartha.com)
