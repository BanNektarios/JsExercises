module.exports = {


  friendlyName: 'Products',


  description: 'Products something.',


  inputs: {

  },


  exits: {
    success: {
      viewTemplatePath: 'pages/products/list'
    }
  },


  fn: async function () {
    let products = await Product.find()
    // All done.
    return {products: products};

  }


};
