
module.exports = {


  friendlyName: 'New',


  description: 'New something.',


  inputs: {
    name:{type: 'string', required: true},
    category: {type: 'string'},
  },


  exits: {
    success: {
      viewTemplatePath: 'pages/products/new'
    }
  },


  fn: async function (inputs) {
    let message = inputs
    await Product.create({name: inputs.name, category: inputs.category})
    // All done.
    return{message};

  }


};
