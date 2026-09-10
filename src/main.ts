import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
//import { App } from './app/app';
import { Folder } from './folder/folder';

bootstrapApplication(Folder, appConfig)
  .catch((err) => console.error(err));
