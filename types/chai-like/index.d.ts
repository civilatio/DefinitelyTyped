// Type definitions for chai-things
// Project: https://github.com/zation/chai-like
// Definitions by: David Broder-Rodgers <https://github.com/civilatio>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference types="chai" />

declare namespace Chai {
        interface Something extends Assertion {
        (): any;
        that: Assertion;
        with: Assertion;
        like: Like
    }

    interface Like {
        (value: any): Assertion;
    }
}

interface Array<T> {
    should: Chai.ArrayAssertion;
}

declare module "chai-like" {
    function chaiThings(chai: any, utils: any): void;
    namespace chaiThings { }
    export = chaiThings;
}
