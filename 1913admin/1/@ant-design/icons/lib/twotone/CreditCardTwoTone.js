"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CreditCardTwoTone = {
    name: 'credit-card',
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
                        d: 'M136 792h752V440H136v352zm507-144c0-4.4 3.6-8 8-8h165c4.4 0 8 3.6 8 8v72c0 4.4-3.6 8-8 8H651c-4.4 0-8-3.6-8-8v-72zM136 232h752v120H136z'
                    }
                },
                {
                    tag: 'path',
                    attrs: {
                        d: 'M651 728h165c4.4 0 8-3.6 8-8v-72c0-4.4-3.6-8-8-8H651c-4.4 0-8 3.6-8 8v72c0 4.4 3.6 8 8 8z',
                        fill: primaryColor
                    }
                },
                {
                    tag: 'path',
                    attrs: {
                        d: 'M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136V440h752v352zm0-440H136V232h752v120z',
                        fill: primaryColor
                    }
                }
            ]
        };
    }
};
exports.default = CreditCardTwoTone;
