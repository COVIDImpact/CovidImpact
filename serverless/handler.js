"use strict";

const axios = require("axios");

module.exports.addToMemberList = function (event, context, callback) {
  // const body = JSON.parse(event.body);

  // callback(null, {
  //   statusCode: 200,
  //   body: `Hello from Lambda ${body.emailAddress}`
  // });

  const body = JSON.parse(event.body);
  const auth = {
    username: "albertofostrum",
    password: "dbb66bf919858019548e62b9216588e8-us19",
  };
  const user = {
    email_address: body.emailAddress,
    status: "subscribed",
    merge_fields: {
      FNAME: "",
      LNAME: "",
    },
  };
  axios
    .post(
      `https://us19.api.mailchimp.com/3.0/lists/42e2e51d8f/members/`,
      user,
      { auth, headers: { "content-type": "application/json" } }
    )
    .then(function () {
      const response = {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*", // Required for CORS support to work
          "Access-Control-Allow-Credentials": true, // Required for cookies, authorization headers with HTTPS
        },
        body: JSON.stringify({
          message: "Successfully added to member list!",
        }),
      };
      callback(null, response);
    })
    .catch((e) => {
      const error = e.response.data;
      const errorResponse = {
        statusCode: error.status,
        headers: {
          "Access-Control-Allow-Origin": "*", // Required for CORS support to work
          "Access-Control-Allow-Credentials": true, // Required for cookies, authorization headers with HTTPS
        },
        body: JSON.stringify({
          message: error.title,
        }),
      };
      callback(null, errorResponse);
    });
};
