var cpx = require('cpx');
let source1 = '../ReactNative-UIKit/!(node_modules)/**/*.*';
let source2 = '../ReactNative-UIKit/*.*';
let dest = './agora-rn-uikit/';
cpx.watch(source1, dest);
cpx.watch(source2, dest);

console.log('Watching for file changes in the UIKit and syncing');
