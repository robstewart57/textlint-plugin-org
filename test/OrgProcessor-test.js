"use strict";
import assert from "power-assert";
import OrgPlugin from "../src/index";
import { TextLintCore } from "textlint";

import path from "path";

const { orgToPlainText } = OrgPlugin.Processor;
describe("OrgProcessor", () => {
    context("orgToPlainText", () => {
        it("should replace command", () => {
            const text = `
* Heading 1

file contents.
`;
            const res = orgToPlainText(text);
            assert(
                res ===
                    `
Heading 1

file contents.
`
            );
        });
    });
});
