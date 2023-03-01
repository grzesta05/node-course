const fs = require("fs");

const requestHandler = (req, res) => {
  //console.log(req.headers);
  res.setHeader("Content-Type", "text/html");

  if (req.url == "/") {
    res.write("<html>");
    res.write(
      "<form action='/mess' method='POST'><input type='text' name='name' /><button type='submit'>a</button></form>"
    );
    res.write("</html>");
    return res.end();
  }

  if (req.method == "POST" && req.url == "/mess") {
    const body = [];
    req.on("data", (chunk) => {
      //LISTENING TO DATA EVENT THAT GETS CALLED EVERY TIME CHUNK OF DATA - BUFFER, COMES
      console.log(chunk);
      body.push(chunk);
    });

    req.on("end", () => {
      //LISTENING TO END EVENT THAT GETS CALLED WHEN ALL BUFFERS GET PAST
      const parsedBody = Buffer.concat(body).toString(); //CONCAT ARRAY OF BUFFERS AND SET IT TO STRING
      console.log(parsedBody);
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        console.log(err);
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
};

//Two ways of exporting
module.exports = requestHandler;
//or
/*
module.exports = {
    handler: requestHandler
}
or just
module.exports.handler = requestHandler 
or with shortcut
exports.handler = requestHandler
*/
