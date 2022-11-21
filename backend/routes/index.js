const express = require('express');
const router = express.Router();
const bodyParser = require ("body-parser");

const exec = require('child_process').execSync;
const fs = require('fs');
const path = require('path');
const { ESRCH } = require('constants');

const FOLDER = "code";

// generate c file from user input
function generateCode(body, project) {
    fs.writeFileSync((path.join(FOLDER, project + '.c')), body, function(err) {
      if(err) {
        return console.log(err);
      }
    })
}

// compile and run code
function testCode(project) {
  var options = {
      timeout: 100,
      stdio: 'inherit',
      shell: true,
  }
  exec("gcc " + path.join(FOLDER, project + ".c ") + path.join
  (FOLDER, project + "_test.c ") + "-o" + path.join(FOLDER, project));
  const proc = exec("./" + path.join(FOLDER, project));
  const result = proc.toString();
  return result;
}

// compare results of user function to preferred result
function compareResult(project, output) {
    if (project == 'putchar')
      var desired = 'x';
    else if (project == 'putstr')
      var desired = 'Hello World!';
    if (desired == output)
      return ('Success');
    else
      return ('Failure');
}

/* GET home page. */
router.post('/', function(req, res, next) {

//   var project = 'putstr';
//   var body =
//   `#include <unistd.h>
//   void	putstr(char *str)
//   {
//     int i = 0;
//     while (str[i])
//     {
//       write(1, &str[i], 1);
//       i++;
//     }
//   }`;
  var code = req.body.code;
  var project = req.body.project;
  console.log(project);
  generateCode(code, project);
  var output = testCode(project);
  result = compareResult(project, output);
  res.json(result);
	// console.log('test');
	// return res.data = "hello this aposdifhjaölksj";
});

module.exports = router;
