/**
 * Created by Evans R. on 4/7/2017.
 */
const nodemailer = require('nodemailer');
const configs = require("../../configSecret.json")

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: configs.email,
    pass: configs.pass
  }
});

// setup email data with unicode symbols
let mailOptions = {
  from: '"Fred Foo 👻" <foo@blurdybloop.com>', // sender address
  to: 'rutohevans@gmail.com, erutoh@kabarak.ac.ke', // list of receivers
  subject: 'Hello ✔', // Subject line
  text: 'Hello world ?', // plain text body
  html: '<b>Hello world ?</b>' // html body
};

export default  function SendMail(data) {
  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
    console.log(data);
  });
}
