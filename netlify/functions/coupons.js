exports.handler = async () => {
  const sample = {
    coupons: [
      { code: "ABC123", reward: 10 },
      { code: "XYZ999", reward: 25 }
    ]
  };

  return {
    statusCode: 200,
    body: JSON.stringify(sample)
  };
};
