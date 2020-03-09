const moongoose = require('mongoose');
const Schema = moongoose.Schema;
const UserSchema = new UserSchema({
  name: {
    type: String,
    required: [true, '이름을입력하세요'],
  },
  email: {
    type: String,
    required: [true, '이메일을입력하세요'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, '비밀번호을입력하세요'],
  },
  joinDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = moongoose.model('User', UserSchema);
