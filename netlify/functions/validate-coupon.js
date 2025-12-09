exports.handler = async function (event, context) {
  const coupons = {
    "DISCOUNT10": 0.10,
    "DISCOUNT20": 0.20
  };

  const { coupon } = JSON.parse(event.body);

  const discount = coupons[coupon.toUpperCase()] || 0;

  return {
    statusCode: 200,
    body: JSON.stringify({ discount })
  };
};
