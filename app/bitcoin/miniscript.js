const { compilePolicy } = require('@bitcoinerlab/miniscript');

const policy = 'or(and(pk(A),older(8640)),pk(B))';

const { miniscript, asm, issane } = compilePolicy(policy);

// Initial miniscript
async miniscript 
