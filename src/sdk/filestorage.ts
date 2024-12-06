/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClientSDK } from "../lib/sdks.js";
import { DriveGroups } from "./drivegroups.js";
import { Drives } from "./drives.js";
import { Files } from "./files.js";
import { Folders } from "./folders.js";
import { SharedLinks } from "./sharedlinks.js";
import { UploadSessions } from "./uploadsessions.js";

export class FileStorage extends ClientSDK {
  private _files?: Files;
  get files(): Files {
    return (this._files ??= new Files(this._options));
  }

  private _folders?: Folders;
  get folders(): Folders {
    return (this._folders ??= new Folders(this._options));
  }

  private _sharedLinks?: SharedLinks;
  get sharedLinks(): SharedLinks {
    return (this._sharedLinks ??= new SharedLinks(this._options));
  }

  private _uploadSessions?: UploadSessions;
  get uploadSessions(): UploadSessions {
    return (this._uploadSessions ??= new UploadSessions(this._options));
  }

  private _drives?: Drives;
  get drives(): Drives {
    return (this._drives ??= new Drives(this._options));
  }

  private _driveGroups?: DriveGroups;
  get driveGroups(): DriveGroups {
    return (this._driveGroups ??= new DriveGroups(this._options));
  }
}
