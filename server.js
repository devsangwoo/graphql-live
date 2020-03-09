require('dotenv').config({ path: 'config.env' });
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const { ApolloServer } = require('apollo-server-express');

//그래프큐엘

//언더 패칭, 오버패칭 클라이언트단에서 과부하가 걸리기때문에
//오버패칭이 엄청많이 나오기때문에 restful 하나의 api콜에 엄청나게되어있음
const { typeDefs } = require('./schema');
const { resolvers } = require('./resolvers');

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

//DB호출

const app = express();

app.use(cors());
app.use(bodyParser.json());

//아폴로부분
const Apollo = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
  playground: {
    endpoint: '/graphql',
    settings: {
      'editor.theme': 'light',
    },
  },
});

//아폴로 미들웨어
Apollo.applyMiddleware({ app });

//미들웨어부분
// app.use((req, res, next) => {
//   console.log('나는 미들웨어입니다.');
//   next();
// });
//겟 포스트 딜리트 풋 패치
app.get('/', (req, res, next) => {
  res.json({ success: true, msg: '성공' });
});

//몽고디비

//ORM 몽구스
mongoose
  .connect(MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log('디비접속완료'))
  .catch(error => console.log(error));

app.listen(PORT, () => console.log(`server listening port on 4000`));
