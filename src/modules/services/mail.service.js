const nodeMailer=require('nodemailer')

const transporter=nodeMailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.EMAIL_USER,
        pass:process.env.EMAIL_PASSWORD
    }
})
async function sendWelcomeMail(to,name,collegeId,tempPassword){
    await transporter.sendMail({
        from:`"campusdesk <${process.env.EMAIL_USER}>`,
        to,
        subject:"Welcome to campusdesk",
        html:`
      <div style="font-family: sans-serif; max-width: 480px; margin: auto;">
        <h2>Welcome, ${name}!</h2>
        <p>Your account has been created on CampusDesk.</p>
        <p>Use the credentials below to log in:</p>
        <div style="background: #f4f4f4; padding: 16px; border-radius: 8px;">
          <p><strong>College ID:</strong> ${collegeId}</p>
          <p><strong>Temporary Password:</strong> ${tempPassword}</p>
        </div>
        <p style="color: #e53e3e; margin-top: 16px;">
          You will be asked to change your password on first login.
        </p>
        <p>— CampusDesk Team</p>
      </div>
    `
    })
}

module.exports={sendWelcomeMail}