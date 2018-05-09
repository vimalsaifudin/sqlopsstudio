
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { ColDef, GridOptions, IDatasource } from 'ag-grid';

export interface ISlickRange {
	fromCell: number;
	fromRow: number;
	toCell: number;
	toRow: number;
}

export interface IGridIcon {
	showCondition: () => boolean;
	icon: () => string;
	hoverText: () => string;
	functionality: (batchId: number, resultId: number, index: number) => void;
}

export interface IMessageLink {
	uri: string;
	text: string;
}

export interface IMessage {
	batchId?: number;
	time: string;
	message: string;
	isError: boolean;
	link?: IMessageLink;
}

export interface IGridIcon {
	showCondition: () => boolean;
	icon: () => string;
	hoverText: () => string;
	functionality: (batchId: number, resultId: number, index: number) => void;
}

export interface IGridDataSet {
	gridOptions: GridOptions;
	columnDefinitions: ColDef[];
}

export enum SaveFormat {
	CSV = 'csv',
	JSON = 'json',
	EXCEL = 'excel',
	XML = 'xml'
}

export interface IGridInfo {
	batchIndex: number;
	resultSetNumber: number;
	selection: ISlickRange[];
	gridIndex: number;
	rowIndex?: number;
}
export interface ISaveRequest {
	format: SaveFormat;
	batchIndex: number;
	resultSetNumber: number;
	selection: ISlickRange[];
}