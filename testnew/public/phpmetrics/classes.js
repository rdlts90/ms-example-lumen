var classes = [
    {
        "name": "App\\Util\\Enum\\EnumConfiguration",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [],
        "parents": [],
        "lcom": 0,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 5,
        "loc": 9,
        "lloc": 4,
        "mi": 216.73,
        "mIwoC": 171,
        "commentWeight": 45.73,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "App\\Util\\Enum\\",
        "pageRank": 0.03,
        "afferentCoupling": 0,
        "efferentCoupling": 0,
        "instability": 0,
        "violations": {}
    },
    {
        "name": "App\\Services\\ClientService",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "repository",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "add",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "update",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 4,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 1,
        "nbMethodsSetters": 1,
        "wmc": 4,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Raiadrogasil\\Common\\Service\\BaseService",
            "App\\Services\\ClientServiceInterface",
            "App\\Repositories\\ClientRepositoryInterface",
            "Raiadrogasil\\Common\\DTO\\ReturnDTO",
            "App\\Domain\\DTO\\ClientDTO",
            "Illuminate\\Http\\Request",
            "Raiadrogasil\\Common\\DTO\\ReturnDTO",
            "App\\Domain\\DTO\\ClientDTO",
            "Illuminate\\Http\\Request"
        ],
        "parents": [
            "Raiadrogasil\\Common\\Service\\BaseService"
        ],
        "lcom": 3,
        "length": 20,
        "vocabulary": 7,
        "volume": 56.15,
        "difficulty": 3.2,
        "effort": 179.67,
        "level": 0.31,
        "bugs": 0.02,
        "time": 10,
        "intelligentContent": 17.55,
        "number_operators": 4,
        "number_operands": 16,
        "number_operators_unique": 2,
        "number_operands_unique": 5,
        "cloc": 23,
        "loc": 44,
        "lloc": 21,
        "mi": 103.78,
        "mIwoC": 58.77,
        "commentWeight": 45.01,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 4,
        "relativeDataComplexity": 1.5,
        "relativeSystemComplexity": 5.5,
        "totalStructuralComplexity": 16,
        "totalDataComplexity": 6,
        "totalSystemComplexity": 22,
        "package": "App\\Services\\",
        "pageRank": 0.03,
        "afferentCoupling": 0,
        "efferentCoupling": 6,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Http\\API\\v0\\Controllers\\ClientController",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "collection",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "resource",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "all",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "add",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "update",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "remove",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 8,
        "nbMethods": 7,
        "nbMethodsPrivate": 2,
        "nbMethodsPublic": 5,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 1,
        "wmc": 16,
        "ccn": 9,
        "ccnMethodMax": 4,
        "externals": [
            "App\\Http\\Controllers\\Controller",
            "App\\Services\\ClientServiceInterface",
            "App\\Http\\API\\v0\\Resources\\ClientCollection",
            "App\\Http\\API\\v0\\Resources\\ClientResource",
            "App\\Http\\API\\v0\\Requests\\ClientRequest",
            "App\\Http\\API\\v0\\Requests\\ClientRequest",
            "App\\Http\\API\\v0\\Requests\\ClientRequest",
            "App\\Http\\API\\v0\\Requests\\ClientRequest",
            "App\\Http\\API\\v0\\Requests\\ClientRequest"
        ],
        "parents": [
            "App\\Http\\Controllers\\Controller"
        ],
        "lcom": 1,
        "length": 102,
        "vocabulary": 17,
        "volume": 416.92,
        "difficulty": 15.63,
        "effort": 6514.39,
        "level": 0.06,
        "bugs": 0.14,
        "time": 362,
        "intelligentContent": 26.68,
        "number_operators": 27,
        "number_operands": 75,
        "number_operators_unique": 5,
        "number_operands_unique": 12,
        "cloc": 198,
        "loc": 274,
        "lloc": 76,
        "mi": 87.81,
        "mIwoC": 39.42,
        "commentWeight": 48.4,
        "kanDefect": 0.29,
        "relativeStructuralComplexity": 169,
        "relativeDataComplexity": 0.6,
        "relativeSystemComplexity": 169.6,
        "totalStructuralComplexity": 1352,
        "totalDataComplexity": 4.79,
        "totalSystemComplexity": 1356.79,
        "package": "App\\Http\\API\\v0\\Controllers\\",
        "pageRank": 0.03,
        "afferentCoupling": 0,
        "efferentCoupling": 5,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Http\\API\\v0\\Requests\\ClientRequest",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "validateAdd",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "validateUpdate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "buildValidationRulesCustom",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 3,
        "nbMethods": 3,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 3,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Raiadrogasil\\Common\\Request\\BaseRequest",
            "App\\Domain\\DTO\\ClientDTO",
            "App\\Domain\\DTO\\ClientDTO"
        ],
        "parents": [
            "Raiadrogasil\\Common\\Request\\BaseRequest"
        ],
        "lcom": 2,
        "length": 38,
        "vocabulary": 15,
        "volume": 148.46,
        "difficulty": 2.31,
        "effort": 342.6,
        "level": 0.43,
        "bugs": 0.05,
        "time": 19,
        "intelligentContent": 64.33,
        "number_operators": 8,
        "number_operands": 30,
        "number_operators_unique": 2,
        "number_operands_unique": 13,
        "cloc": 19,
        "loc": 40,
        "lloc": 21,
        "mi": 99.62,
        "mIwoC": 55.82,
        "commentWeight": 43.8,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 1,
        "relativeSystemComplexity": 2,
        "totalStructuralComplexity": 3,
        "totalDataComplexity": 3,
        "totalSystemComplexity": 6,
        "package": "App\\Http\\API\\v0\\Requests\\",
        "pageRank": 0.08,
        "afferentCoupling": 1,
        "efferentCoupling": 2,
        "instability": 0.67,
        "violations": {}
    },
    {
        "name": "App\\Http\\API\\v0\\Resources\\ClientResource",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "configureNodeParser",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "configureMainParser",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 2,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Raiadrogasil\\Common\\Resource\\BaseResource"
        ],
        "parents": [
            "Raiadrogasil\\Common\\Resource\\BaseResource"
        ],
        "lcom": 1,
        "length": 10,
        "vocabulary": 3,
        "volume": 15.85,
        "difficulty": 6,
        "effort": 95.1,
        "level": 0.17,
        "bugs": 0.01,
        "time": 5,
        "intelligentContent": 2.64,
        "number_operators": 4,
        "number_operands": 6,
        "number_operators_unique": 2,
        "number_operands_unique": 1,
        "cloc": 0,
        "loc": 14,
        "lloc": 14,
        "mi": 66.46,
        "mIwoC": 66.46,
        "commentWeight": 0,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 2,
        "relativeSystemComplexity": 2,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 4,
        "totalSystemComplexity": 4,
        "package": "App\\Http\\API\\v0\\Resources\\",
        "pageRank": 0.1,
        "afferentCoupling": 2,
        "efferentCoupling": 1,
        "instability": 0.33,
        "violations": {}
    },
    {
        "name": "App\\Http\\API\\v0\\Resources\\ClientCollection",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "resource",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "configureMainParser",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 2,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Raiadrogasil\\Common\\Resource\\BaseCollection",
            "App\\Http\\API\\v0\\Resources\\ClientResource"
        ],
        "parents": [
            "Raiadrogasil\\Common\\Resource\\BaseCollection"
        ],
        "lcom": 1,
        "length": 15,
        "vocabulary": 6,
        "volume": 38.77,
        "difficulty": 2.5,
        "effort": 96.94,
        "level": 0.4,
        "bugs": 0.01,
        "time": 5,
        "intelligentContent": 15.51,
        "number_operators": 5,
        "number_operands": 10,
        "number_operators_unique": 2,
        "number_operands_unique": 4,
        "cloc": 5,
        "loc": 21,
        "lloc": 16,
        "mi": 96.77,
        "mIwoC": 62.48,
        "commentWeight": 34.3,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 9,
        "relativeDataComplexity": 0.88,
        "relativeSystemComplexity": 9.88,
        "totalStructuralComplexity": 18,
        "totalDataComplexity": 1.75,
        "totalSystemComplexity": 19.75,
        "package": "App\\Http\\API\\v0\\Resources\\",
        "pageRank": 0.04,
        "afferentCoupling": 1,
        "efferentCoupling": 2,
        "instability": 0.67,
        "violations": {}
    },
    {
        "name": "App\\Http\\Middleware\\Authenticate",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "handle",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 1,
        "wmc": 3,
        "ccn": 2,
        "ccnMethodMax": 2,
        "externals": [
            "Illuminate\\Contracts\\Auth\\Factory",
            "Closure"
        ],
        "parents": [],
        "lcom": 1,
        "length": 16,
        "vocabulary": 10,
        "volume": 53.15,
        "difficulty": 2.57,
        "effort": 136.67,
        "level": 0.39,
        "bugs": 0.02,
        "time": 8,
        "intelligentContent": 20.67,
        "number_operators": 4,
        "number_operands": 12,
        "number_operators_unique": 3,
        "number_operands_unique": 7,
        "cloc": 19,
        "loc": 35,
        "lloc": 16,
        "mi": 106.84,
        "mIwoC": 61.38,
        "commentWeight": 45.46,
        "kanDefect": 0.22,
        "relativeStructuralComplexity": 4,
        "relativeDataComplexity": 1.33,
        "relativeSystemComplexity": 5.33,
        "totalStructuralComplexity": 8,
        "totalDataComplexity": 2.67,
        "totalSystemComplexity": 10.67,
        "package": "App\\Http\\Middleware\\",
        "pageRank": 0.03,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Http\\Controllers\\Controller",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [
            "Laravel\\Lumen\\Routing\\Controller"
        ],
        "parents": [
            "Laravel\\Lumen\\Routing\\Controller"
        ],
        "lcom": 0,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 1,
        "loc": 5,
        "lloc": 4,
        "mi": 202.94,
        "mIwoC": 171,
        "commentWeight": 31.94,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "App\\Http\\Controllers\\",
        "pageRank": 0.04,
        "afferentCoupling": 1,
        "efferentCoupling": 1,
        "instability": 0.5,
        "violations": {}
    },
    {
        "name": "App\\Providers\\EventServiceProvider",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [
            "Laravel\\Lumen\\Providers\\EventServiceProvider"
        ],
        "parents": [
            "Laravel\\Lumen\\Providers\\EventServiceProvider"
        ],
        "lcom": 0,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 5,
        "loc": 10,
        "lloc": 5,
        "mi": 215.46,
        "mIwoC": 171,
        "commentWeight": 44.46,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "App\\Providers\\",
        "pageRank": 0.03,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Providers\\AppServiceProvider",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "register",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 2,
        "ccn": 2,
        "ccnMethodMax": 2,
        "externals": [
            "Illuminate\\Support\\ServiceProvider"
        ],
        "parents": [
            "Illuminate\\Support\\ServiceProvider"
        ],
        "lcom": 1,
        "length": 14,
        "vocabulary": 7,
        "volume": 39.3,
        "difficulty": 1.08,
        "effort": 42.58,
        "level": 0.92,
        "bugs": 0.01,
        "time": 2,
        "intelligentContent": 36.28,
        "number_operators": 1,
        "number_operands": 13,
        "number_operators_unique": 1,
        "number_operands_unique": 6,
        "cloc": 5,
        "loc": 21,
        "lloc": 16,
        "mi": 96.6,
        "mIwoC": 62.3,
        "commentWeight": 34.3,
        "kanDefect": 0.22,
        "relativeStructuralComplexity": 9,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 9,
        "totalStructuralComplexity": 9,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 9,
        "package": "App\\Providers\\",
        "pageRank": 0.03,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Providers\\AuthServiceProvider",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "register",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "boot",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 3,
        "ccn": 2,
        "ccnMethodMax": 2,
        "externals": [
            "Illuminate\\Support\\ServiceProvider",
            "App\\User"
        ],
        "parents": [
            "Illuminate\\Support\\ServiceProvider"
        ],
        "lcom": 2,
        "length": 11,
        "vocabulary": 7,
        "volume": 30.88,
        "difficulty": 1.8,
        "effort": 55.59,
        "level": 0.56,
        "bugs": 0.01,
        "time": 3,
        "intelligentContent": 17.16,
        "number_operators": 2,
        "number_operands": 9,
        "number_operators_unique": 2,
        "number_operands_unique": 5,
        "cloc": 15,
        "loc": 30,
        "lloc": 15,
        "mi": 108.1,
        "mIwoC": 63.65,
        "commentWeight": 44.46,
        "kanDefect": 0.22,
        "relativeStructuralComplexity": 16,
        "relativeDataComplexity": 0.2,
        "relativeSystemComplexity": 16.2,
        "totalStructuralComplexity": 32,
        "totalDataComplexity": 0.4,
        "totalSystemComplexity": 32.4,
        "package": "App\\Providers\\",
        "pageRank": 0.03,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Events\\Event",
        "interface": false,
        "abstract": true,
        "final": false,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [],
        "parents": [],
        "lcom": 0,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 0,
        "loc": 5,
        "lloc": 5,
        "mi": 171,
        "mIwoC": 171,
        "commentWeight": 0,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "App\\Events\\",
        "pageRank": 0.03,
        "afferentCoupling": 0,
        "efferentCoupling": 0,
        "instability": 0,
        "violations": {}
    },
    {
        "name": "App\\Exceptions\\Handler",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "report",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "render",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 2,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Laravel\\Lumen\\Exceptions\\Handler",
            "Exception",
            "Exception"
        ],
        "parents": [
            "Laravel\\Lumen\\Exceptions\\Handler"
        ],
        "lcom": 2,
        "length": 7,
        "vocabulary": 3,
        "volume": 11.09,
        "difficulty": 1.5,
        "effort": 16.64,
        "level": 0.67,
        "bugs": 0,
        "time": 1,
        "intelligentContent": 7.4,
        "number_operators": 1,
        "number_operands": 6,
        "number_operators_unique": 1,
        "number_operands_unique": 2,
        "cloc": 20,
        "loc": 33,
        "lloc": 13,
        "mi": 114.96,
        "mIwoC": 68.25,
        "commentWeight": 46.71,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 1.25,
        "relativeSystemComplexity": 2.25,
        "totalStructuralComplexity": 2,
        "totalDataComplexity": 2.5,
        "totalSystemComplexity": 4.5,
        "package": "App\\Exceptions\\",
        "pageRank": 0.03,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Console\\Kernel",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "schedule",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Laravel\\Lumen\\Console\\Kernel",
            "Illuminate\\Console\\Scheduling\\Schedule"
        ],
        "parents": [
            "Laravel\\Lumen\\Console\\Kernel"
        ],
        "lcom": 1,
        "length": 1,
        "vocabulary": 1,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 2,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 1,
        "number_operators_unique": 0,
        "number_operands_unique": 1,
        "cloc": 15,
        "loc": 23,
        "lloc": 8,
        "mi": 218.47,
        "mIwoC": 171,
        "commentWeight": 47.47,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 1,
        "relativeSystemComplexity": 1,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 1,
        "totalSystemComplexity": 1,
        "package": "App\\Console\\",
        "pageRank": 0.03,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Repositories\\ClientRepository",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "model",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Raiadrogasil\\Common\\Repository\\BaseRepository",
            "App\\Repositories\\ClientRepositoryInterface"
        ],
        "parents": [
            "Raiadrogasil\\Common\\Repository\\BaseRepository"
        ],
        "lcom": 1,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 6,
        "loc": 14,
        "lloc": 8,
        "mi": 213.45,
        "mIwoC": 171,
        "commentWeight": 42.45,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 1,
        "relativeSystemComplexity": 1,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 1,
        "totalSystemComplexity": 1,
        "package": "App\\Repositories\\",
        "pageRank": 0.03,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Domain\\DTO\\ClientDTO",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "getId",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setId",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getName",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setName",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getEmail",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setEmail",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getCep",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setCep",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getCpf",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setCpf",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "toArray",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 11,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 5,
        "nbMethodsSetters": 5,
        "wmc": 11,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Raiadrogasil\\Common\\DTO\\BaseDTO",
            "Raiadrogasil\\Common\\DTO\\BaseDTOInterface"
        ],
        "parents": [
            "Raiadrogasil\\Common\\DTO\\BaseDTO"
        ],
        "lcom": 1,
        "length": 41,
        "vocabulary": 8,
        "volume": 123,
        "difficulty": 5,
        "effort": 615,
        "level": 0.2,
        "bugs": 0.04,
        "time": 34,
        "intelligentContent": 24.6,
        "number_operators": 11,
        "number_operands": 30,
        "number_operators_unique": 2,
        "number_operands_unique": 6,
        "cloc": 36,
        "loc": 89,
        "lloc": 53,
        "mi": 89.29,
        "mIwoC": 47.62,
        "commentWeight": 41.67,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 6.45,
        "relativeSystemComplexity": 6.45,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 71,
        "totalSystemComplexity": 71,
        "package": "App\\Domain\\DTO\\",
        "pageRank": 0.25,
        "afferentCoupling": 3,
        "efferentCoupling": 2,
        "instability": 0.4,
        "violations": {}
    },
    {
        "name": "App\\Domain\\Entities\\Client",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [
            "Raiadrogasil\\Common\\Entity\\BaseEntity"
        ],
        "parents": [
            "Raiadrogasil\\Common\\Entity\\BaseEntity"
        ],
        "lcom": 0,
        "length": 10,
        "vocabulary": 9,
        "volume": 31.7,
        "difficulty": 0,
        "effort": 0,
        "level": 1.8,
        "bugs": 0.01,
        "time": 0,
        "intelligentContent": 57.06,
        "number_operators": 0,
        "number_operands": 10,
        "number_operators_unique": 0,
        "number_operands_unique": 9,
        "cloc": 10,
        "loc": 17,
        "lloc": 7,
        "mi": 117.3,
        "mIwoC": 70.92,
        "commentWeight": 46.38,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "App\\Domain\\Entities\\",
        "pageRank": 0.03,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    }
]