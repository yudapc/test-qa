QA TEST - HOW TO
===================

This test will be using MochaJS `http://mochajs.org` , so please make sure that you have installed NodeJS `http://nodejs.org` on your system.

API Access
-------------------

The API can be accessed at `http://103.23.20.123:9999/`

API 
-------------------

`GET /`

Get all records data.

`GET /:id`

Get data by `:id`

`POST /`

Post a new data 
**Notes: data submitted will be not store, otherwise only for response purpose**

Test Cases
-------------------

Please find test cases below.

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

----------------------------------------


GO QA TEST
===================

Hey! Hope you are doing well. This is a repo for an API service for QA test.

----------

Pre-requisite
-------------

Before you start, make sure that you have install `Go v1.7.5` 
And then, please run the compiled version:

`./go-qa-test` 

or 

Please install below go packages:

> - go get -u -v gopkg.in/kataras/iris.v6
> - go get -u -v gopkg.in/kataras/iris.v6/adaptors/httprouter
> - go get -u -v gopkg.in/kataras/iris.v6/middleware/logger

then run:

`go run main.go`

----------

Author
---------

[Faris](faris@amartha.com)