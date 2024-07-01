exports.homeController = (req, res, next) => {
  res.json({
    success: true,
    data: "home",
  });
};
