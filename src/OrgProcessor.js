"use strict";
export default class OrgProcessor {
    constructor(config) {
        this.config = configs;
    }

    static availableExtensions() {
        return [
            ".org"
        ];
    }

    // TODO: complete this function
    static orgToPlainText(text) {
        const { parse } = require(`orga`)
        const ast = parse(text)
        /* TODO: extract text content from the org-mode ast */

        /* dummy output for now: return `text` */
        return text;
    }
    
    processor(ext) {
        return {
            preProcess(text, filePath) {
                return parse(text);
            },
            postProcess(messages, filePath) {
                return {
                    messages,
                    filePath: filePath ? filePath : "<org>"
                };
            }
        };
    }
}
