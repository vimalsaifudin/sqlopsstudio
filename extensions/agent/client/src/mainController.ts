/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';

import * as vscode from 'vscode';
import * as sqlops from 'sqlops';
import { ApiWrapper } from './apiWrapper';
import { AlertController } from './configuration/alerts/alertController';

/**
 * The main controller class that initializes the extension
 */
export class MainController  {
    // UI Controllers
    private _alertController: AlertController;

    public constructor(
        private _context: vscode.ExtensionContext,
        private _apiWrapper: ApiWrapper) {
        this._alertController = new AlertController(this._context, this._apiWrapper);
    }

    public activate(): void {
        this._alertController.activate();
    }

    public deactivate(): void {
    }
}
