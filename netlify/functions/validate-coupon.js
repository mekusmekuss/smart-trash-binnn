const fs = require("fs");
const path = require("path");

exports.handler = async (event) => {
  try {
    const filePath = path.join(__dirname, "coupons.json");
    const raw = fs.readFileSync(filePath);
    const data = JSON.parse(raw);

    const couponCode = event.queryStringParameters.code;

    const found = data.coupons.find(c => c.code === couponCode);

    if (!found) {
      return {
        statusCode: 404,
        body: JSON.stringify({ valid: false, message: "Coupon not found" })
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ valid: true, reward: found.reward })
    };

  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};
