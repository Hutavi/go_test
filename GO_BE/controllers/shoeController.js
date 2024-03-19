const catchAsync = require("../utils/catchAsync");
const { PrismaClient } = require("@prisma/client");

module.exports.getAll = catchAsync(async (req, res, next) => {
  const prisma = new PrismaClient();
  const allActors = await prisma.productShoe.findMany();

  res.status(200).json({
    status: "success",
    data: {
      data: allActors,
    },
  });
});

module.exports.getProductById = catchAsync(async (req, res, next) => {
  const prisma = new PrismaClient();
  const product = await prisma.productShoe.findUnique({
    where: {
      id: parseInt(req.params.id),
    },
  });

  res.status(200).json({
    status: "success",
    data: {
      data: product,
    },
  });
});

module.exports.createProduct = catchAsync(async (req, res, next) => {
  const prisma = new PrismaClient();
  console.log(req.body);
  const product = await prisma.productShoe.create({
    data: {
      name: req.body.name,
      price: req.body.price,
      image: req.body.image,
      description: req.body.description,
      color: req.body.color,
    },
  });

  res.status(201).json({
    status: "success",
    data: {
      data: product,
    },
  });
});

module.exports.updateProduct = catchAsync(async (req, res, next) => {
  const prisma = new PrismaClient();
  const product = await prisma.productShoe.update({
    where: {
      id: parseInt(req.params.id),
    },
    data: {
      name: req.body.name,
      price: req.body.price,
      image: req.body.image,
      description: req.body.description,
    },
  });

  res.status(200).json({
    status: "success",
    data: {
      data: product,
    },
  });
});

module.exports.deleteProduct = catchAsync(async (req, res, next) => {
  const prisma = new PrismaClient();
  const product = await prisma.productShoe.delete({
    where: {
      id: parseInt(req.params.id),
    },
  });

  res.status(204).json({
    status: "success",
    data: null,
  });
});
