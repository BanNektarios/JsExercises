module.exports = {


  friendlyName: 'View signup',


  description: 'Display "Signup" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/signup'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
