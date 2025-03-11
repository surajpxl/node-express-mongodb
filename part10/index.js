const express = require('express')
const app = express()

const path = require('path')
const fs = require('fs');
const { log } = require('console');

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")))
