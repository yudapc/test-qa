package main

import (
	"gopkg.in/kataras/iris.v6"
	"gopkg.in/kataras/iris.v6/adaptors/httprouter"
	"gopkg.in/kataras/iris.v6/middleware/logger"
)

// Data struct
type Data struct {
	ID       int    `json:"id"`
	Fullname string `json:"fullname"`
	Age      int    `json:"age"`
	Email    string `json:"email"`
}

func setData() []Data {
	data := make([]Data, 2)

	data[0] = Data{
		ID:       0,
		Fullname: "John Doe",
		Age:      30,
		Email:    "john@doe.com",
	}

	data[1] = Data{
		ID:       1,
		Fullname: "Jane Doe",
		Age:      20,
		Email:    "jane@doe.com",
	}

	return data
}

// FindAllData - get all data
func FindAllData(ctx *iris.Context) {
	ctx.JSON(iris.StatusOK, iris.Map{
		"data": setData(),
	})
}

// FindOne - find one data
func FindOne(ctx *iris.Context) {
	data := setData()
	id, _ := ctx.ParamInt("id")

	if id > 1 {
		ctx.JSON(iris.StatusOK, iris.Map{
			"data": iris.Map{},
		})
		return
	}

	ctx.JSON(iris.StatusOK, iris.Map{
		"data": data[id],
	})
}

// PostData - posting a new data
func PostData(ctx *iris.Context) {
	data := Data{}

	if err := ctx.ReadJSON(&data); err != nil {
		ctx.JSON(iris.StatusInternalServerError, iris.Map{
			"message": err.Error(),
		})
		return
	}

	ctx.JSON(iris.StatusOK, iris.Map{
		"data": data,
	})
}

func main() {
	app := iris.New()
	app.Adapt(iris.DevLogger())
	app.Adapt(httprouter.New())

	app.Use(logger.New(logger.Config{
		Status: true,
		IP:     true,
		Method: true,
		Path:   true,
	}))

	app.Get("/", FindAllData)
	app.Get("/:id", FindOne)
	app.Post("/", PostData)

	app.Listen(":9999")
}
