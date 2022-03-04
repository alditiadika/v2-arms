'use-strict'
const express = require('express')
const path = require('path')
const shrinkRay = require('shrink-ray-current')
const expressStaticGZIP = require('express-static-gzip')
const fs = require('fs')
/*eslint-disable no-console */

const port = process.env.PORT || 8000
const app = express()
const isExistBRFile = (urlPath) => fs.existsSync(path.join(__dirname, 'dist', urlPath, '.br'))
app.use(shrinkRay())
app.get('*.js', (req, res, next) => {
  const isExist = isExistBRFile(req.url)
  if(isExist) {
    req.url = req.url + '.br'
    res.set('Content-Encoding', 'br')
  } 
  next()
})

app.get('*.css', (req, res, next) => {
  const isExist = isExistBRFile(req.url)
  if(isExist) {
    req.url = req.url + '.br'
    res.set('Content-Encoding', 'br')
    res.set('Content-Type', 'text/css; charset=UTF-8')
  } 
  next()
})

app.get('*.woff', (req, res, next) => {
  const isExist = isExistBRFile(req.url)
  if(isExist) {
    req.url = req.url + '.br'
    res.set('Content-Encoding', 'br')
    res.set('Content-Type', 'font/woff')
  } 
  next()
})

app.get('*.woff2', (req, res, next) => {
  const isExist = isExistBRFile(req.url)
  if(isExist) {
    req.url = req.url + '.br'
    res.set('Content-Encoding', 'br')
    res.set('Content-Type', 'font/woff2')
  } 
  next()
})

app.get('*.ttf', (req, res, next) => {
  const isExist = isExistBRFile(req.url)
  if(isExist) {
    req.url = req.url + '.br'
    res.set('Content-Encoding', 'br')
    res.set('Content-Type', 'font/ttf')
  } 
  next()
})
app.use('/', expressStaticGZIP(path.join(__dirname, 'dist'), { enableBrotli:true, orderPreference:['br'] }))
app.listen(port, () => {
  console.log('Web started on port ', port)
})