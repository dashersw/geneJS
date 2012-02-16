// Copyright 2011 Armagan Amcalar. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview
 */

goog.provide('geneJS.Registry');

geneJS.Registry = function () {
//    this.classes = {};

// dummy registry with full capabilities

    this.classes = {
        'foo.Vehicle':{
            stereotype: 'class',
            className:'foo.Vehicle',
            properties:[
                { propName:'id', type:'string' },
                { propName:'createdAt', type:'Date', cmp:true },
                { propName:'make', type:'string' }
            ],
            methods:[
                { methodName:'getId', parameters:[], returns:'string'},
                { methodName:'setId', parameters:[
                    { paramName:'id', type:'string' },
                    { paramName:'valid', type:'boolean' }
                ]}
            ]
        },
        'foo.Car':{
            stereotype: 'entity',
            className:'foo.Car',
            requires:['foo.Vehicle', 'foo.Bus'],
            extends:'foo.Vehicle',
            properties:[
                {propName:'model', type:'string'},
                {propName:'vehicle', type:'foo.Bus', cmp:true}
            ],
            methods:[
                { methodName:'getModel', parameters:[
                    {paramName:'year', type:'number'},
                    {paramName:'mark', type:'string'}
                ], returns:'string'},
                { methodName:'setId', parameters:[
                    { paramName:'id', type:'string' }
                ]}
            ]
        }
    };

};
