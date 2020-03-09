const User = require('./models/User');

exports.resolvers = {
  //GET
  Query: {
    sayHello: (parent, args, context, info) => {
      console.log(args);
      const result = {
        success: true,
        error: null,
        data: ['안녕하세요', '그래프큐엘입ㄴ다.'],
        pagination: 1,
        view: 20,
      };
      return result;
    },
  },
  //POST PUT
  Mutation: {
    signUp: (parent, args, context, info) => {
      return 'yesyes';
    },
  },
};
