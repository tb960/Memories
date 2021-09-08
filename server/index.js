import express from 'express';  //usual syntax is const express = require('express'), but in the latest version of node we can use the import keyword
import mongoose from 'mongoose';  //how does the destructuring work here?
import cors from 'cors';

const app = express();

app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: "true" }));
app.use(cors());