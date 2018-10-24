/********************************************************************************
 * Copyright (C) 2018 Ericsson and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 ********************************************************************************/

import { XYModel, Axis } from '../xy';
import { GenericResponse } from './responses';
import { BasicEntry, EntryHeader } from '../entry';
import { GenericEntryResponse } from './entry-response';


/**
 * XY specific entry response extends the GenericEntryResponse.
 * Type T is a BasicEntry and Type U is an EntryHeader
 */
export interface XYEntryResponse<T extends BasicEntry, U extends EntryHeader> extends GenericEntryResponse<T> {
    headers: U[];
}

/**
 * XY specific model response.
 * Type T is a XYModel
 */
export interface XYModelResponse<T extends XYModel> extends GenericResponse<T> {
    xAxis: Axis;
    yAxis: Axis;
}