"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HourglassTwoTone = {
    name: 'hourglass',
    theme: 'twotone',
    icon: function (primaryColor, secondaryColor) {
        return {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: false },
            children: [
                {
                    tag: 'path',
                    attrs: {
                        fill: secondaryColor,
                        d: 'M512 548c-42.2 0-81.9 16.4-111.7 46.3A156.63 156.63 0 0 0 354 706v134h316V706c0-42.2-16.4-81.9-46.3-111.7A156.63 156.63 0 0 0 512 548zM354 318c0 42.2 16.4 81.9 46.3 111.7C430.1 459.6 469.8 476 512 476s81.9-16.4 111.7-46.3C653.6 399.9 670 360.2 670 318V184H354v134z'
                    }
                },
                {
                    tag: 'path',
                    attrs: {
                        d: 'M742 318V184h86c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H196c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h86v134c0 81.5 42.4 153.2 106.4 194-64 40.8-106.4 112.5-106.4 194v134h-86c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h632c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-86V706c0-81.5-42.4-153.2-106.4-194 64-40.8 106.4-112.5 106.4-194zm-72 388v134H354V706c0-42.2 16.4-81.9 46.3-111.7C430.1 564.4 469.8 548 512 548s81.9 16.4 111.7 46.3C653.6 624.1 670 663.8 670 706zm0-388c0 42.2-16.4 81.9-46.3 111.7C593.9 459.6 554.2 476 512 476s-81.9-16.4-111.7-46.3A156.63 156.63 0 0 1 354 318V184h316v134z',
                        fill: primaryColor
                    }
                }
            ]
        };
    }
};
exports.default = HourglassTwoTone;
