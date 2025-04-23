
// const CustomOrdersService = require('../services/customOrders.service')
// const formatResponse = require('../utils/formatResponse');


// class CustomOrdersController {
//   static async CustomOrder(req, res) {
//     const { phone } = req.body;
//     const file = req.file;
      
//     if (!phone || !file) {
//       return res.status(400).json({ message: "Image and phone are required" })
//     }

//     try {
//       const newCustomOrder = await CustomOrdersService.create({
//         user_id: user.id,
//         img_url: `../uploads/${file.filename}`,
//         phone: 
//         });
  
    
//       res.status(200).json(formatResponse(
//         200,
//         'Custom order uccessfully created',
//         null,
//         'Custom order uccessfully created'))
//     } catch (err) {
//       console.error(err);
//       res.status(500).json(
//         formatResponse(
//           500,
//           'Failed to create custom order',
//           null,
//           'Failed to create custom order'
//         )
//       )
//     }

//   }
// }

// module.exports = CustomOrdersController;


const CustomOrdersService = require('../services/customOrders.service');
// const UserService = require('../services/user.service');
const formatResponse = require('../utils/formatResponse');

class CustomOrdersController {
  static async CustomOrder(req, res) {
    const { phone } = req.body;
    const file = req.file;
    // const {user}=res.locals

    if (!phone || !file) {
      return res.status(400).json({ message: "Image and phone are required" });
    }

    try {

      const newCustomOrder = await CustomOrdersService.create({
        // user_id:user.id
        user_id:1, //НАДО ПОМЕНЯТЬ!!! ВОВААААА!УДАЛИТЬ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        img_url: `/uploads/${file.filename}`, 
        phone
      });

      res.status(200).json(
        formatResponse(
          200,
          "Custom order successfully created",
          newCustomOrder,
          null
        )
      );
    } catch (err) {
      console.error(err);
      res.status(500).json(
        formatResponse(500, "Failed to create custom order", null, err.message)
      );
    }
  }
}

module.exports = CustomOrdersController;
