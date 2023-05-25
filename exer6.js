///// Tree constructor /////

// function Tree (childrenGenerations,parentName) {
//     if (!parentName) {
//         parentName = "";
//     };
//     let letters = ["a","b","c","d","e"];
//     let branches = randomBetween(1,letters.length);

//     for (let i=0; i<branches; i++)
//     {
//         let thisNodeName = parentName + letters[i]
//         if (childrenGenerations > 0) {
//             this[thisNodeName] = new Tree(randomBetween(0,childrenGenerations-1),thisNodeName);
//         }
//     }
// }


///// Auxiliar functions /////

// function randomBetween (min,max) {
//     return min + Math.floor((max-min+1)*Math.random())
// };


///// Function Display Tree //////

function displayTree (tree) {
    let space = "";
    let blank = "  "
    function displayProperty (node) {
        for (let prop in node) {
            if (node.hasOwnProperty(prop)) {
                let value = node[prop];
                console.log(space + prop + ((Object.keys(value) != 0)?":":""));
                space = space + "  ";
                displayProperty(value)
                space = space.slice(0,space.length-blank.length);
            };
        };
    };
    displayProperty(tree);
}


///// My Tree /////

// const myTree = new Tree(4);
// displayTree(myTree);

let myNewTree = {
    a: {
        aa: {
            aaa: {
                aaaa: {},
                aaab: {}
            },
            aab: {
                aaba: {},
                aabb: {},
                aabc: {}
            },
            aac: {
                aaca: {}
            },
            aad: {
                aada: {},
                aadb: {},
                aadc: {},
                aadd: {}
            }
        },

        ab: {
            aba: {
                abaa: {},
                abab: {}
            },
            abb: {
                abba: {},
                abbb: {},
                abbc: {}
            }
        },

        ac: {
            aca: {
                aaaa: {},
                aaab: {},
                aaac: {},
                aaad: {}
            },
            acb: {
                aaba: {},
                aabb: {},
                aabc: {},
                aabd: {}
            },
            acc: {
                aaca: {},
                aacb: {},
                aacc: {},
                aacd: {}
            }
        }
    }
};

displayTree(myNewTree);
