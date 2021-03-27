package main

import (
	"embed"
	"flag"
	"log"
	"net/http"
	"net/url"

	"github.com/labstack/echo/v4"
)

const (
	KeyPort = "port"
)

//go:embed dist/*
var local embed.FS

type hdr struct {
	h http.Handler
}

func (h hdr) ServeHTTP(r http.ResponseWriter, req *http.Request) {
	var a http.Request = *req
	var url url.URL = *req.URL
	url.Path = "dist/" + req.URL.Path
	a.URL = &url
	h.h.ServeHTTP(r, &a)
}

func main() {
	p := flag.String("p", ":8000", "port to listen")
	flag.Parse()
	e := echo.New()
	e.GET("/*", echo.WrapHandler(http.StripPrefix("/", hdr{h: http.FileServer(http.FS(local))})))
	log.Printf("start listening at %s", *p)
	log.Fatal(e.Start(*p))
}
