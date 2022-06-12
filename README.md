# Autism Detection Backend Service
!(readme-img/autismdetection-logo.png)
<!-- MarkdownTOC levels="1,2,3" autolink="true"  -->
- [Introduction](#introduction)
- [Overview of API Features](#overview)
- [List of Methods](#list-of-methods)
    - [GET Service](#get-service)
    - [POST Service](#post-service)
- [Implementation and Workflow Example for Backend](#implementation-and-workflow-example-for-backend)
- [API Call Scenario](#api-call-scenario)
- [Contributor](#contributor)
<!-- /MarkdownTOC -->

## Introduction
Autism Detection Backend Service is a backend service based on Node.JS and Express library to provide an API support for autism detection application android and MySQL as database.

This Backend Service enables us to use instant prediction by uploading image using multipart/form-data type and responding with prediction accuracy rate.

The Backend Service uses Tensorflow.js-node as the base for processing images and doing prediction using pre-trained models from the Autism Detection Machine Learning Engineers.

## Overview
This Backend Service has three main service installed on it:
- **Upload Services**: Services for uploading images to server and storing it into the server.
- **Prediction Services**: Services that consuming pre-trained models to  predict autism from image recognition using tensorflow.js.
- **GET Services**: Services to list all predicted images and their prediction results.

## List of Methods
Our list of the endpoints and the usages of Autism Detection Backend Services:
### GET Services
The get services enable autism detection Backend service to get all result from image submit by user.
### Post Services
The POST Services enables autism detection Backend service to receives client image requests and storing the results on the server.

## Implementation Example for The Backend Service
In the autism detection Capstone Project, the Backend is used to provide API support for Android Application and Machine Learning Model. To view the documentations about these services, please visit this link:

- [Android Application Repository](https://github.com/zzidankirana/Autism_Detection)
- [Machine Learning Repository](https://github.com/auliaamine/Capstone-project)

## Contributor
This Autism Detection Backend Repository was a part of the Autis Detection Capstone Project from Bangkit Academy 2022 Program. Please welcome the contributors of this project:

- [M7008F0838 - Zahra Aulia Yasmine](https://github.com/auliaamine/Capstone-project)
- [M2004G0414 - Fadl Sadiq Darwis](https://github.com/FadlSD)
- [M7002G0079 - Febriana Dwi Ambarwati](https://github.com/febrianadwiambar)
- [A2007G0663 - Ahmad Ramazaidan Kirnaa](https://github.com/zzidankirana/Autism_Detection)
- [C2445f3050 - Audi Nathanael G ](https://github.com/reyfuu/capstone-backend)
- [C2003f0138 - Solvatar Winfild R. D.](https://github.com/solvatardh/bangkit_project)


Autism Detection Project 2022. All rights reserved.
