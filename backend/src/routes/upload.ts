import { Router } from 'express';
import multer from 'multer';
import * as path from 'path';

import { upload } from '@handlers/upload';

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve(process.env.uploadPath || 'uploads'));
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split('/')[1];
    cb(null, `${file.fieldname}-${Date.now()}.${ext}`);
  },
});

const uploads = multer({
  storage: multerStorage,
});

const uploadRoutes = Router();

uploadRoutes.put('/upload', uploads.single('resume'), upload);

export { uploadRoutes };
