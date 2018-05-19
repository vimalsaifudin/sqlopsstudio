/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';

import * as vscode from 'vscode';
import * as sqlops from 'sqlops';
import { ApiWrapper } from '../apiWrapper';

/**
 * The main controller class that initializes the extension
 */
export class AlertController  {
    protected _apiWrapper: ApiWrapper;
    protected _context: vscode.ExtensionContext;

    // PUBLIC METHODS //////////////////////////////////////////////////////
    public constructor(context: vscode.ExtensionContext, apiWrapper?: ApiWrapper) {
        this._apiWrapper = apiWrapper || new ApiWrapper();
        this._context = context;
    }

    public activate(): void {

		sqlops.ui.registerModelViewProvider('dialogContent1', async view => {
			let inputBox = view.modelBuilder.inputBox()
				.withValidation(component => component.value !== 'valid')
				.component();
			let formModel = view.modelBuilder.formContainer()
				.withFormItems([{
					component: inputBox,
					title: 'Enter anything but "valid"'
				}]).component();
			await view.initializeModel(formModel);
		});

		sqlops.ui.registerModelViewProvider('dialogContent2', async view => {
			let inputBox = view.modelBuilder.inputBox()
				.withValidation(component => component.value === 'valid')
				.component();
			let formModel = view.modelBuilder.formContainer()
				.withFormItems([{
					component: inputBox,
					title: 'Enter "valid"'
				}]).component();
			await view.initializeModel(formModel);
		});

		vscode.commands.registerCommand('agent.configAlert', () => {
			let dialog = sqlops.window.modelviewdialog.createDialog('Create Alert');
			let generalTab = sqlops.window.modelviewdialog.createTab('General');
			generalTab.content = 'dialogContent1';
			let responseTab = sqlops.window.modelviewdialog.createTab('Response');
			responseTab.content = 'dialogContent2';
			dialog.content = [generalTab, responseTab];


			// dialog.onValidityChanged(valid => {
			// 	console.log('dialog is ' + dialog.valid + ', validity is ' + valid);
			// 	dialog.okButton.enabled = valid;
			// });


			sqlops.window.modelviewdialog.openDialog(dialog);
		});


        vscode.commands.executeCommand('agent.configAlert', undefined);
    }
}
