/* eslint-disable no-unused-vars */
/* eslint-disable new-cap */
/* eslint-disable no-debugger, no-console */
const express = require('express');
const router = express.Router();
const multer = require('multer');
const {nanoid} = require ('nanoid');
const path = require('path');
const {getUploadHandler, addFileUploadhandler} = require('./handler/upload');


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (!req.query.model) {
      return cb(null, false, (req.rval = 'model name is required'));
    }
    console.log(path.join(__dirname, '..', '..', 'client-img'));
    cb(null, path.join(__dirname, '..', '..', 'client-img', req.query.model));
  },
  filename: (req, file, cb) => {
    let id = nanoid(16);
    console.log(id);
    cb(null, id + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const fileext = path.extname(file.originalname);
    if (fileext !== '.jpg') {
      return cb(null, (req.rval = 'invalid extensions'));
    } else {
      cb(null, true);
    }
  },
});

router.get('/', getUploadHandler);
router.post('/', upload.single('predict-img'), addFileUploadhandler);


module.exports = router;