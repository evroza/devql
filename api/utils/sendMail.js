/**
 * Created by Evans R. on 4/7/2017.
 */
const nodemailer = require('nodemailer');
const configs = require("../../configSecret.json");

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  service: "Hotmail",
  auth: {
    user: configs.email,
    pass: configs.password
  }
});



export default  function SendMail(data) {
  // setup email data with unicode symbols
  let mailOptions = {
    from: `"${data.email} 👻" <${data.email}>`, // sender address
    to: 'rutohevans@gmail.com', // list of receivers
    subject: 'Hello ✔ - Query received via DevQL', // Subject line
    text: `You can also login to www.devql.com to read the message. Welcome home Dev!
    
======================================================================================

${data.message}

======================================================================================`, // plain text body
    html: `
<h3>Hello ✔ - Query received via DevQL</h3>
<p>You can also login at www.devql.com to read the message. <br /><code>Welcome home Dev</code></p>
<br/>
<p>======================================================================================</p>
<h4>Sent by: <small>${data.email} | ${new Date()}</small></h4> 
<p>${data.message}</p>
<br />
<p>======================================================================================</p>
<a href="www.devql.com" target="_blank">Go home</a>` // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
    console.log(data);
  });
}
