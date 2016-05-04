module.exports = {
    "env": {
        "browser": true,
        "node": true
    },

    "globals": {
    },

    "rules": {
        ////////// Possible Errors //////////

        "comma-dangle": 2,              // disallow trailing commas in object literals
        "no-cond-assign": 2,            // disallow assignment in conditional expressions
        "no-console": 1,                // disallow use of console (off by default in the node environment)
        "no-constant-condition": 2,     // disallow use of constant expressions in conditions
        "no-control-regex": 0,          // disallow control characters in regular expressions
        "no-debugger": 1,               // disallow use of debugger
        "no-dupe-args": 2,              // disallow duplicated argument names
        "no-dupe-keys": 2,              // disallow duplicate keys when creating object literals
        "no-duplicate-case": 2,         // disallow duplicated case labels in a switch statement
        "no-empty": 1,                  // disallow empty statements
        "no-empty-character-class": 1,  // disallow the use of empty character classes in regular expressions
        "no-ex-assign": 2,              // disallow assigning to the exception in a catch block
        "no-extra-boolean-cast": 1,     // disallow double-negation boolean casts in a boolean context
        "no-extra-parens": 0,           // disallow unnecessary parentheses
        "no-extra-semi": 2,             // disallow unnecessary semicolons
        "no-func-assign": 1,            // disallow overwriting functions written as function declarations
        "no-inner-declarations": 0,     // disallow function or variable declarations in nested blocks
        "no-invalid-regexp": 2,         // disallow invalid regular expression strings in the RegExp constructor
        "no-irregular-whitespace": 1,   // disallow irregular whitespace outside of strings and comments
        "no-negated-in-lhs": 1,         // disallow negation of the left operand of an in expression
        "no-obj-calls": 0,              // disallow the use of object properties of the global object (Math and JSON) as functions
        "no-regex-spaces": 1,           // disallow multiple spaces in a regular expression literal
        "no-reserved-keys": 0,          // disallow reserved words being used as object literal keys
        "no-sparse-arrays": 1,          // disallow sparse arrays
        "no-unexpected-multiline": 2,   // disallow bugs caused by depending on ASI
        "no-unreachable": 2,            // disallow unreachable statements after a return, throw, continue, or break statement
        "use-isnan": 2,                 // disallow comparisons with the value NaN
        "valid-jsdoc": 0,               // Ensure JSDoc comments are valid
        "valid-typeof": 2,              // Ensure that the results of typeof are compared against a valid string


        ////////// Best Practices //////////

        "accessor-pairs": 0,            // Enforces getter/setter pairs in objects
        "block-scoped-var": 1,          // treat var statements as if they were block scoped
        "complexity": [2, 10],          // specify the maximum cyclomatic complexity allowed in a program
        "consistent-return": 2,         // require return statements to either always or never specify values
        "curly": 2,                     // specify curly brace conventions for all control statements
        "default-case": 1,              // require default case in switch statements
        "dot-location": [2, "property"],// enforces consistent newlines before or after dots
        "dot-notation": 2,              // encourages use of dot notation whenever possible
        "eqeqeq": 2,                    // require the use of === and !==
        "guard-for-in": 0,              // make sure for-in loops have an if statement
        "no-alert": 1,                  // disallow the use of alert, confirm, and prompt
        "no-caller": 2,                 // disallow use of arguments.caller or arguments.callee
        "no-div-regex": 1,              // disallow division operators explicitly at beginning of regular expression
        "no-else-return": 2,            // disallow else after a return in an if
        "no-empty-pattern": 2,          // disallow use of empty destructuring patterns
        "no-eq-null": 0,                // disallow comparisons to null without a type-checking operator
        "no-eval": 2,                   // disallow use of eval()
        "no-extend-native": 2,          // disallow adding to native types
        "no-extra-bind": 2,             // disallow unnecessary function binding
        "no-fallthrough": 1,            // disallow fallthrough of case statements
        "no-floating-decimal": 2,       // disallow the use of leading or trailing decimal points in numeric literals
        "no-implicit-coercion": 2,      // disallow the type conversions with shorter notations
        "no-implied-eval": 2,           // disallow use of eval()-like methods
        "no-invalid-this": 0,           // disallow this keywords outside of classes or class-like objects
        "no-iterator": 2,               // disallow usage of __iterator__ property
        "no-labels": 2,                 // disallow use of labeled statements
        "no-lone-blocks": 2,            // disallow unnecessary nested blocks
        "no-loop-func": 1,              // disallow creation of functions within loops
        "no-magic-numbers": 0,          // disallow the use of magic numbers
        "no-multi-spaces": [1, {        // disallow use of multiple spaces
            "exceptions" : {
                "AssignmentExpression" : true,
                "Property" : true,
                "VariableDeclarator" : true,
                "LogicalExpression" : true
            }
        }],
        "no-multi-str": 2,              // disallow use of multiline strings
        "no-native-reassign": 2,        // disallow reassignments of native objects
        "no-new": 0,                    // disallow use of new operator when not part of the assignment or comparison
        "no-new-func": 0,               // disallow use of new operator for Function object
        "no-new-wrappers": 2,           // disallows creating new instances of String, Number, and Boolean
        "no-octal": 2,                  // disallow use of octal literals
        "no-octal-escape": 2,           // disallow use of octal escape sequences in string literals, such as var foo = "Copyright \251";
        "no-param-reassign": 0,         // disallow reassignment of function parameters
        "no-process-env": 0,            // disallow use of process.env
        "no-proto": 2,                  // disallow usage of __proto__ property
        "no-redeclare": 2,              // disallow declaring the same variable more then once
        "no-return-assign": 2,          // disallow use of assignment in return statement
        "no-script-url": 2,             // disallow use of javascript: urls.
        "no-self-compare": 2,           // disallow comparisons where both sides are exactly the same
        "no-sequences": 2,              // disallow use of comma operator
        "no-throw-literal": 2,          // restrict what can be thrown as an exception
        "no-unused-expressions": 2,     // disallow usage of expressions in statement position
        "no-useless-call": 2,           // disallow unnecessary .call() and .apply()
        "no-useless-concat": 2,         // disallow unnecessary concatenation of literals or template literals
        "no-void": 2,                   // disallow use of void operator
        "no-warning-comments": 0,       // disallow usage of configurable warning terms in comments, e.g. TODO or FIXME
        "no-with": 2,                   // disallow use of the with statement
        "radix": 2,                     // require use of the second argument for parseInt()
        "vars-on-top": 2,               // requires to declare all vars on top of their containing scope
        "wrap-iife": 2,                 // require immediate function invocation to be wrapped in parentheses
        "yoda": 2,                      // require or disallow Yoda conditions


        ////////// Strict Mode //////////

        "strict": 0, // controls location of Use Strict Directives


        ////////// Legacy //////////

        "no-bitwise": 2, // disallow the usage of bitwise operators (|, &, <<, >>) as they're often an error


        ////////// Variables //////////

        "init-declarations": 0,           // enforce or disallow variable initializations at definition
        "no-catch-shadow": 2,             // disallow the catch clause parameter name being the same as a variable in the outer scope (off by default in the node environment)
        "no-delete-var": 2,               // disallow deletion of variables
        "no-label-var": 2,                // disallow labels that share a name with a variable
        "no-shadow": 2,                   // disallow declaration of variables already declared in the outer scope
        "no-shadow-restricted-names": 2,  // disallow shadowing of names such as arguments
        "no-undef": 2,                    // disallow use of undeclared variables unless mentioned in a /*global */ block
        "no-undef-init": 2,               // disallow use of undefined when initializing variables
        "no-undefined": 0,                // disallow use of undefined variable
        "no-unused-vars": 1,              // disallow declaration of variables that are not used in the code
        "no-use-before-define": 2,        // disallow use of variables before they are defined


        ////////// Node.js //////////

        "callback-return": [2, [    // enforce return after a callback
            "callback",
            "cb",
            "next",
            "done"
        ]],
        "global-require": 0,        // enforce require() on top-level module scope
        "handle-callback-err": 0,   // enforces error handling in callbacks (on by default in the node environment)
        "no-mixed-requires": 0,     // disallow mixing regular variable and require declarations (on by default in the node environment)
        "no-new-require": 0,        // disallow use of new operator with the require function (on by default in the node environment)
        "no-path-concat": 0,        // disallow string concatenation with __dirname and __filename (on by default in the node environment)
        "no-process-exit": 0,       // disallow process.exit() (on by default in the node environment)
        "no-restricted-modules": 0, // restrict usage of specified node modules
        "no-sync": 0,               // disallow use of synchronous methods


        ////////// Stylistic Issues //////////

        "array-bracket-spacing": [2, "always"], // enforce spacing inside array brackets (fixable)
        "block-spacing": [2, "always"],         // disallow or enforce spaces inside of single line blocks (fixable)"
        "brace-style": 2,                       // enforce one true brace style
        "camelcase": [2, {                      // Require camel case names (except in properties)
            "properties": "never"
        }],
        "comma-spacing": 2,                     // enforce spacing before and after comma
        "comma-style": [2, "last"],             // enforce one true comma style
        "computed-property-spacing": 0,         // require or disallow padding inside computed properties (fixable)
        "consistent-this": [2, "self", "ctrl"], // enforces consistent naming when capturing the current execution context
        "eol-last": 1,                          // enforce newline at the end of file, with no multiple empty lines
        "func-names": 0,                        // require function expressions to have a name
        "func-style": [1, "declaration"],       // enforces use of function declarations or expressions
        "indent": [0, 4],                       // specify tab or space width for your code (fixable)
        "jsx-quotes": 0,                        // specify whether double or single quotes should be used in JSX attributes
        "key-spacing": [2, {                    // enforces spacing between keys and values in object literal properties
            "beforeColon": true,
            "afterColon": true,
            "align": "colon"
        }],
        "linebreak-style": 0,                       // disallow mixed 'LF' and 'CRLF' as linebreaks
        "lines-around-comment": [0, {               // enforce empty lines around comments
            "beforeBlockComment" : true,
            "beforeLineComment" : true,
            "allowBlockStart" : true,
            "allowObjectStart" : true,
            "allowArrayStart" : true
        } ],
        "max-nested-callbacks": 0,                  // specify the maximum depth callbacks can be nested
        "new-cap": 2,                               // require a capital letter for constructors
        "new-parens": 2,                            // disallow the omission of parentheses when invoking a constructor with no arguments
        "newline-after-var": 2,                     // require or disallow an empty newline after variable declarations
        "no-array-constructor": 2,                  // disallow use of the Array constructor
        "no-continue": 0,                           // disallow use of the continue statement
        "no-inline-comments": 0,                    // disallow comments inline after code
        "no-lonely-if": 2,                          // disallow if as the only statement in an else block
        "no-mixed-spaces-and-tabs": 2,              // disallow mixed spaces and tabs for indentation
        "no-multiple-empty-lines": 1,               // disallow multiple empty lines
        "no-negated-condition": 0,                  // disallow negated conditions
        "no-nested-ternary": 2,                     // disallow nested ternary expressions
        "no-new-object": 2,                         // disallow use of the Object constructor
        "no-restricted-syntax": 0,                  // disallow use of certain syntax in code
        "no-spaced-func": 2,                        // disallow space between function identifier and application
        "no-ternary": 0,                            // disallow the use of ternary operators
        "no-trailing-spaces": 0,                    // disallow trailing whitespace at the end of lines
        "no-underscore-dangle": 0,                  // disallow dangling underscores in identifiers
        "no-unneeded-ternary": 2,                   // disallow the use of ternary operators when a simpler alternative exists
        "object-curly-spacing": [2, "always"],      // require or disallow spaces inside object brackets
        "one-var": 0,                               // allow just one var statement per function
        "operator-assignment": 0,                   // require assignment operator shorthand where possible or prohibit it entirely
        "operator-linebreak": [2, "after"],         // enforce operators to be placed before or after line breaks
        "padded-blocks": [1, "never"],              // enforce padding within blocks
        "quote-props": [2, "as-needed"],            // require quotes around object literal property names
        "quotes": [2, "double", "avoid-escape"],    // specify whether double or single quotes should be used
        "require-jsdoc": 0,                         // Require JSDoc comment
        "semi-spacing": [1, {                       // disallow space before/after semicolon
            "before" : false,
            "after" : true
        }],
        "semi": 2,                                      // require or disallow use of semicolons instead of ASI
        "sort-vars": 0,                                 // sort variables within the same declaration block
        "space-after-keywords": 0,                      // require a space after certain keywords
        "space-before-blocks": [2, "always"],           // require or disallow space before blocks
        "space-before-function-paren": [2, "never"],    // require a space after function names
        "keyword-spacing": [2, {                        // require spacing before most keywords (fixable)
            "before" : true,
            "after" : false,
            "overrides" : {
                "return" : {
                    "after" : true
                },
                "else" : {
                    "after" : true
                },
                "try" : {
                    "after" : true
                }
            }
        }],
        "space-in-parens": 0,                           // require or disallow spaces inside parentheses
        "space-infix-ops": 2,                           // require spaces around operators
        "space-unary-ops": 0,                           // Require or disallow spaces before/after unary operators (words on by default, nonwords off by default)
        "spaced-comment": [1, "always"],                // require or disallow a space immediately following the // in a line comment
        "wrap-regex": 0                                 // require regex literals to be wrapped in parentheses
    }
};
